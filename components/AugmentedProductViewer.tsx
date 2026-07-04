"use client";

import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

type Placement = 'floor' | 'table';
type ModelType = 'vase' | 'statue';

interface Props {
  productName: string;
  modelType: ModelType;
  modelHeightCm: number;
}

export default function AugmentedProductViewer({
  productName,
  modelType,
  modelHeightCm,
}: Props) {
  const [open, setOpen] = useState(false);
  const [placement, setPlacement] = useState<Placement>('floor');
  const [scale, setScale] = useState(1);
  const [cameraEnabled, setCameraEnabled] = useState(false);
  const [cameraError, setCameraError] = useState('');
  const mountRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const streamRef = useRef<MediaStream | null>(null);
  const placementRef = useRef<Placement>(placement);
  const scaleRef = useRef(scale);

  useEffect(() => {
    placementRef.current = placement;
  }, [placement]);

  useEffect(() => {
    scaleRef.current = scale;
  }, [scale]);

  useEffect(() => {
    if (!open || !mountRef.current) {
      return;
    }

    const mount = mountRef.current;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(42, 1, 0.1, 100);
    camera.position.set(0, 1.5, 6);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(mount.clientWidth, mount.clientHeight);
    renderer.setClearColor(0x000000, 0);
    renderer.shadowMap.enabled = true;
    mount.appendChild(renderer.domElement);

    const ambient = new THREE.HemisphereLight(0xffffff, 0x202020, 1.2);
    scene.add(ambient);

    const keyLight = new THREE.DirectionalLight(0xffffff, 2);
    keyLight.position.set(3, 5, 4);
    keyLight.castShadow = true;
    scene.add(keyLight);

    const fillLight = new THREE.DirectionalLight(0xf4d47c, 0.8);
    fillLight.position.set(-4, 2, 2);
    scene.add(fillLight);

    const model = modelType === 'vase' ? createVaseModel() : createStatueModel();
    model.traverse((child) => {
      if (child instanceof THREE.Mesh) {
        child.castShadow = true;
        child.receiveShadow = true;
      }
    });
    scene.add(model);

    const platform = createPlacementSurface();
    scene.add(platform);

    let rotationTarget = 0;
    let isDragging = false;
    let lastX = 0;

    const onPointerDown = (event: PointerEvent) => {
      isDragging = true;
      lastX = event.clientX;
      renderer.domElement.setPointerCapture(event.pointerId);
    };

    const onPointerMove = (event: PointerEvent) => {
      if (!isDragging) {
        return;
      }
      rotationTarget += (event.clientX - lastX) * 0.012;
      lastX = event.clientX;
    };

    const onPointerUp = (event: PointerEvent) => {
      isDragging = false;
      renderer.domElement.releasePointerCapture(event.pointerId);
    };

    renderer.domElement.addEventListener('pointerdown', onPointerDown);
    renderer.domElement.addEventListener('pointermove', onPointerMove);
    renderer.domElement.addEventListener('pointerup', onPointerUp);

    const resize = () => {
      if (!mount.clientWidth || !mount.clientHeight) {
        return;
      }
      camera.aspect = mount.clientWidth / mount.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(mount.clientWidth, mount.clientHeight);
    };

    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(mount);
    resize();

    let frame = 0;
    const animate = () => {
      frame = requestAnimationFrame(animate);
      const currentPlacement = placementRef.current;
      const normalizedHeight = THREE.MathUtils.clamp(modelHeightCm / 100, 0.6, 1.4);
      model.scale.setScalar(scaleRef.current * normalizedHeight);
      model.position.y = currentPlacement === 'table' ? 0.6 : 0;
      platform.position.y = currentPlacement === 'table' ? 0.42 : -0.02;
      platform.scale.set(currentPlacement === 'table' ? 0.75 : 1.35, 1, currentPlacement === 'table' ? 0.75 : 1.35);
      const platformMaterial = platform.material as THREE.MeshStandardMaterial;
      platformMaterial.color.set(currentPlacement === 'table' ? 0x56412f : 0x2d2d2d);
      model.rotation.y += (rotationTarget - model.rotation.y) * 0.08;
      renderer.render(scene, camera);
    };
    animate();

    return () => {
      cancelAnimationFrame(frame);
      resizeObserver.disconnect();
      renderer.domElement.removeEventListener('pointerdown', onPointerDown);
      renderer.domElement.removeEventListener('pointermove', onPointerMove);
      renderer.domElement.removeEventListener('pointerup', onPointerUp);
      renderer.dispose();
      mount.removeChild(renderer.domElement);
      disposeScene(scene);
    };
  }, [modelHeightCm, modelType, open]);

  useEffect(() => {
    if (!open || !cameraEnabled) {
      stopCamera(streamRef.current);
      streamRef.current = null;
      return;
    }

    let cancelled = false;

    navigator.mediaDevices
      ?.getUserMedia({
        video: { facingMode: { ideal: 'environment' } },
        audio: false,
      })
      .then((stream) => {
        if (cancelled) {
          stopCamera(stream);
          return;
        }
        streamRef.current = stream;
        setCameraError('');
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
          void videoRef.current.play();
        }
      })
      .catch(() => {
        setCameraEnabled(false);
        setCameraError("La caméra n'est pas disponible sur ce navigateur.");
      });

    return () => {
      cancelled = true;
      stopCamera(streamRef.current);
      streamRef.current = null;
    };
  }, [cameraEnabled, open]);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="bg-white text-black px-6 py-3 rounded hover:bg-gray-200 transition-colors text-sm font-medium"
      >
        Voir dans mon salon
      </button>

      {open && (
        <div className="fixed inset-0 z-[80] bg-black/85 px-3 py-4 md:px-8 md:py-8">
          <div className="mx-auto flex h-full max-w-6xl flex-col overflow-hidden rounded bg-gray-950 shadow-2xl">
            <div className="flex items-center justify-between gap-3 border-b border-white/10 px-4 py-3">
              <div>
                <p className="text-sm text-yellow-500">Visualisation 3D</p>
                <h2 className="text-lg font-semibold text-white">{productName}</h2>
              </div>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="rounded bg-gray-800 px-3 py-2 text-sm text-white hover:bg-gray-700"
              >
                Fermer
              </button>
            </div>

            <div className="grid min-h-0 flex-1 grid-cols-1 lg:grid-cols-[1fr_320px]">
              <div className="relative min-h-[420px] overflow-hidden bg-[#111] md:min-h-[560px]">
                {cameraEnabled ? (
                  <video
                    ref={videoRef}
                    muted
                    playsInline
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                ) : (
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#343434,#0b0b0b_62%)]" />
                )}
                <div ref={mountRef} className="absolute inset-0" />
                <div className="pointer-events-none absolute bottom-4 left-4 rounded bg-black/60 px-3 py-2 text-xs text-gray-200">
                  Faites glisser pour tourner l’objet.
                </div>
              </div>

              <aside className="space-y-5 overflow-y-auto border-t border-white/10 p-4 lg:border-l lg:border-t-0">
                <div>
                  <h3 className="font-semibold text-white">Placement</h3>
                  <div className="mt-3 grid grid-cols-2 gap-2">
                    <button
                      type="button"
                      onClick={() => setPlacement('floor')}
                      className={placement === 'floor' ? activeButton : idleButton}
                    >
                      Au sol
                    </button>
                    <button
                      type="button"
                      onClick={() => setPlacement('table')}
                      className={placement === 'table' ? activeButton : idleButton}
                    >
                      Sur table
                    </button>
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between gap-3">
                    <h3 className="font-semibold text-white">Taille approximative</h3>
                    <span className="text-sm text-yellow-500">{Math.round(scale * 100)}%</span>
                  </div>
                  <input
                    type="range"
                    min="0.65"
                    max="1.35"
                    step="0.05"
                    value={scale}
                    onChange={(event) => setScale(Number(event.target.value))}
                    className="mt-3 w-full accent-yellow-500"
                  />
                  <p className="mt-2 text-sm text-gray-400">
                    Hauteur produit indiquée : environ {modelHeightCm} cm.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-white">Mode pièce réelle</h3>
                  <button
                    type="button"
                    onClick={() => setCameraEnabled((value) => !value)}
                    className={cameraEnabled ? activeButtonWide : idleButtonWide}
                  >
                    {cameraEnabled ? 'Désactiver la caméra' : 'Activer la caméra'}
                  </button>
                  {cameraError && <p className="mt-2 text-sm text-red-300">{cameraError}</p>}
                  <p className="mt-2 text-sm text-gray-400">
                    Sur mobile, autorisez la caméra pour voir l’objet superposé à votre salon,
                    terrasse ou entrée.
                  </p>
                </div>

                <div className="rounded border border-yellow-500/30 bg-yellow-500/10 p-4 text-sm text-yellow-100">
                  Cette visualisation donne une idée du volume. La taille exacte reste celle de la
                  fiche produit.
                </div>
              </aside>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

const activeButton =
  'rounded bg-yellow-500 px-4 py-3 text-sm font-medium text-black hover:bg-yellow-400';
const idleButton =
  'rounded bg-gray-800 px-4 py-3 text-sm font-medium text-white hover:bg-gray-700';
const activeButtonWide = `${activeButton} mt-3 w-full`;
const idleButtonWide = `${idleButton} mt-3 w-full`;

function createVaseModel() {
  const group = new THREE.Group();
  const porcelain = new THREE.MeshStandardMaterial({
    color: 0xf2eadf,
    roughness: 0.52,
    metalness: 0.03,
  });
  const ornament = new THREE.MeshStandardMaterial({
    color: 0xfff7ec,
    roughness: 0.62,
  });

  const points = [
    new THREE.Vector2(0.18, 0),
    new THREE.Vector2(0.28, 0.08),
    new THREE.Vector2(0.34, 0.32),
    new THREE.Vector2(0.5, 0.65),
    new THREE.Vector2(0.46, 1.02),
    new THREE.Vector2(0.58, 1.2),
    new THREE.Vector2(0.5, 1.32),
    new THREE.Vector2(0.34, 1.38),
  ];
  const body = new THREE.Mesh(new THREE.LatheGeometry(points, 64), porcelain);
  body.position.y = -0.65;
  group.add(body);

  const rim = new THREE.Mesh(new THREE.TorusGeometry(0.48, 0.045, 16, 80), ornament);
  rim.position.y = 0.72;
  rim.rotation.x = Math.PI / 2;
  group.add(rim);

  const base = new THREE.Mesh(new THREE.CylinderGeometry(0.28, 0.36, 0.18, 48), ornament);
  base.position.y = -0.68;
  group.add(base);

  addVaseHandle(group, -1, ornament);
  addVaseHandle(group, 1, ornament);

  for (let i = 0; i < 14; i += 1) {
    const angle = (i / 14) * Math.PI * 2;
    const flower = new THREE.Mesh(new THREE.SphereGeometry(0.045, 16, 12), ornament);
    flower.position.set(Math.cos(angle) * 0.43, -0.1 + Math.sin(i) * 0.08, Math.sin(angle) * 0.43);
    group.add(flower);
  }

  return group;
}

function addVaseHandle(group: THREE.Group, side: -1 | 1, material: THREE.Material) {
  const curve = new THREE.CatmullRomCurve3([
    new THREE.Vector3(side * 0.44, 0.58, 0),
    new THREE.Vector3(side * 0.86, 0.48, 0),
    new THREE.Vector3(side * 0.86, -0.15, 0),
    new THREE.Vector3(side * 0.42, -0.18, 0),
  ]);
  const handle = new THREE.Mesh(new THREE.TubeGeometry(curve, 36, 0.045, 12, false), material);
  group.add(handle);
}

function createStatueModel() {
  const group = new THREE.Group();
  const stone = new THREE.MeshStandardMaterial({
    color: 0x9fd6c6,
    roughness: 0.78,
    metalness: 0.02,
  });

  const dress = new THREE.Mesh(new THREE.ConeGeometry(0.45, 1.05, 40), stone);
  dress.position.y = -0.2;
  group.add(dress);

  const torso = new THREE.Mesh(new THREE.CylinderGeometry(0.22, 0.34, 0.58, 32), stone);
  torso.position.y = 0.42;
  group.add(torso);

  const head = new THREE.Mesh(new THREE.SphereGeometry(0.18, 32, 24), stone);
  head.position.y = 0.86;
  group.add(head);

  const hair = new THREE.Mesh(new THREE.SphereGeometry(0.2, 24, 16), stone);
  hair.position.set(0, 0.94, -0.05);
  hair.scale.set(1, 0.8, 0.75);
  group.add(hair);

  const leftArm = new THREE.Mesh(new THREE.CylinderGeometry(0.055, 0.065, 0.72, 16), stone);
  leftArm.position.set(-0.33, 0.35, 0);
  leftArm.rotation.z = -0.34;
  group.add(leftArm);

  const rightArm = new THREE.Mesh(new THREE.CylinderGeometry(0.055, 0.065, 0.72, 16), stone);
  rightArm.position.set(0.4, 0.28, 0);
  rightArm.rotation.z = 0.92;
  group.add(rightArm);

  const amphora = new THREE.Mesh(new THREE.LatheGeometry([
    new THREE.Vector2(0.06, 0),
    new THREE.Vector2(0.16, 0.08),
    new THREE.Vector2(0.2, 0.26),
    new THREE.Vector2(0.12, 0.42),
    new THREE.Vector2(0.1, 0.56),
  ], 36), stone);
  amphora.position.set(0.62, 0.1, 0);
  amphora.rotation.z = -0.85;
  group.add(amphora);

  const base = new THREE.Mesh(new THREE.CylinderGeometry(0.48, 0.5, 0.1, 48), stone);
  base.position.y = -0.78;
  group.add(base);

  return group;
}

function createPlacementSurface() {
  const material = new THREE.MeshStandardMaterial({
    color: 0x2d2d2d,
    roughness: 0.7,
    transparent: true,
    opacity: 0.72,
  });
  const surface = new THREE.Mesh(new THREE.CircleGeometry(1.55, 64), material);
  surface.rotation.x = -Math.PI / 2;
  surface.receiveShadow = true;
  return surface;
}

function disposeScene(scene: THREE.Scene) {
  scene.traverse((object) => {
    if (object instanceof THREE.Mesh) {
      object.geometry.dispose();
      const materials = Array.isArray(object.material) ? object.material : [object.material];
      materials.forEach((material) => material.dispose());
    }
  });
}

function stopCamera(stream: MediaStream | null) {
  stream?.getTracks().forEach((track) => track.stop());
}

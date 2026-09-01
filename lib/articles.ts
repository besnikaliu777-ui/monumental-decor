import type { Locale } from './translations';

/**
 * Blog articles. Each one exists as its own page so it can rank on the
 * question it answers, rather than sitting as a teaser card on a single
 * index page with no content behind it.
 */

export interface Article {
  slug: string;
  image: string;
  title: Record<Locale, string>;
  excerpt: Record<Locale, string>;
  /** Rendered in order; a string is a paragraph, an array is a bulleted list. */
  body: Record<Locale, (string | string[])[]>;
}

export const articles: Article[] = [
  {
    slug: 'choisir-statue-entree-villa',
    image: '/images/lion-imperial-6200-01.jpg',
    title: {
      fr: 'Comment choisir une statue pour une entrée de villa',
      de: 'Wie Sie eine Statue für den Eingang einer Villa auswählen',
      it: 'Come scegliere una statua per l’ingresso di una villa',
      en: 'How to choose a statue for a villa entrance',
    },
    excerpt: {
      fr: 'Hauteur, recul, matière et éclairage : les quatre critères qui donnent une vraie présence à une pièce sans écraser l’espace.',
      de: 'Höhe, Abstand, Material und Beleuchtung: die vier Kriterien, die einem Stück Präsenz geben, ohne den Raum zu erdrücken.',
      it: 'Altezza, distanza, materiale e illuminazione: i quattro criteri che danno presenza a un pezzo senza schiacciare lo spazio.',
      en: 'Height, viewing distance, material and lighting: the four things that give a piece presence without overwhelming the space.',
    },
    body: {
      fr: [
        'Une statue d’entrée se juge de loin avant de se juger de près. C’est la première erreur que nous voyons : une pièce choisie sur écran, à hauteur d’yeux, qui se révèle minuscule une fois posée au bout d’une allée de quinze mètres.',
        'La règle du recul',
        'Comptez environ un dixième de la distance d’observation. Une allée de dix mètres appelle une pièce d’environ un mètre ; une entrée vue depuis la route, à trente mètres, demande deux mètres ou davantage. En dessous, la pièce se lit comme un détail et non comme un point focal.',
        'La hauteur du socle compte autant',
        'Un lion de 110 cm posé au sol et le même lion sur un socle de 40 cm ne racontent pas la même chose. Le socle éloigne la pièce du végétal, la protège des projections de tonte et lui donne le statut d’objet présenté plutôt que d’objet posé. Si votre entrée est plate et sans relief, c’est le moyen le plus simple de créer une hiérarchie.',
        'Choisir la matière selon l’exposition',
        [
          'Plein soleil toute la journée : privilégiez les finitions pierre claire, qui ne chauffent pas et ne se décolorent pas.',
          'Zone ombragée et humide : les finitions sombres ou patinées masquent mieux les traces d’humidité et les dépôts verts.',
          'Bord de piscine ou proximité d’un chemin salé en hiver : évitez de poser la pièce à même le sol, un socle limite le contact avec les sels de déneigement.',
        ],
        'L’éclairage transforme la pièce la nuit',
        'Un projecteur encastré au sol, placé à cinquante centimètres devant la pièce et dirigé vers le haut, crée le relief que la lumière du jour aplatit. C’est l’investissement le plus rentable après la statue elle-même : il double la durée pendant laquelle elle est visible.',
        'Une paire ou une pièce seule ?',
        'Deux lions de part et d’autre d’un portail créent une symétrie classique et rassurante. Une pièce unique, décentrée, produit un effet plus contemporain et se remarque davantage. La symétrie demande de l’espace : si vos deux côtés font moins de deux mètres, une seule pièce sera plus juste.',
        'En cas de doute, mesurez l’emplacement, prenez une photo depuis l’endroit d’où la pièce sera le plus souvent vue, et envoyez-la-nous. Nous vous dirons franchement quel volume fonctionne.',
      ],
      de: [
        'Eine Eingangsstatue wird zuerst aus der Ferne beurteilt, erst danach aus der Nähe. Das ist der häufigste Fehler: ein Stück, am Bildschirm auf Augenhöhe ausgewählt, wirkt am Ende einer fünfzehn Meter langen Zufahrt winzig.',
        'Die Regel des Abstands',
        'Rechnen Sie mit etwa einem Zehntel der Betrachtungsdistanz. Eine Zufahrt von zehn Metern verlangt ein Stück von rund einem Meter; ein Eingang, der von der Strasse aus dreissig Meter entfernt gesehen wird, braucht zwei Meter oder mehr. Darunter liest sich das Stück als Detail und nicht als Blickfang.',
        'Die Sockelhöhe zählt ebenso',
        'Ein Löwe von 110 cm auf dem Boden und derselbe Löwe auf einem Sockel von 40 cm erzählen nicht dasselbe. Der Sockel hebt das Stück aus dem Grün, schützt es vor Rasenschnitt und macht es vom abgestellten zum präsentierten Objekt. Bei einem flachen Eingang ohne Höhenunterschiede ist das der einfachste Weg, Hierarchie zu schaffen.',
        'Das Material nach der Lage wählen',
        [
          'Ganztags volle Sonne: helle Steinoptiken bevorzugen, sie heizen sich nicht auf und bleichen nicht aus.',
          'Schattig und feucht: dunkle oder patinierte Ausführungen kaschieren Feuchtigkeitsspuren und grüne Beläge besser.',
          'Poolrand oder im Winter gesalzener Weg: das Stück nicht direkt auf den Boden stellen, ein Sockel begrenzt den Kontakt mit Streusalz.',
        ],
        'Licht verwandelt das Stück bei Nacht',
        'Ein Bodeneinbaustrahler, fünfzig Zentimeter vor dem Stück und nach oben gerichtet, erzeugt die Plastizität, die das Tageslicht flach macht. Nach der Statue selbst ist das die lohnendste Investition: Sie verdoppelt die Zeit, in der das Stück sichtbar ist.',
        'Paar oder Einzelstück?',
        'Zwei Löwen beidseits eines Tors schaffen klassische Symmetrie. Ein einzelnes, aus der Achse gesetztes Stück wirkt zeitgenössischer und fällt stärker auf. Symmetrie braucht Platz: Messen Ihre beiden Seiten weniger als zwei Meter, ist ein einzelnes Stück die bessere Wahl.',
        'Im Zweifel: Messen Sie den Standort, fotografieren Sie ihn von dort, wo das Stück am häufigsten gesehen wird, und schicken Sie uns das Bild. Wir sagen Ihnen offen, welches Volumen funktioniert.',
      ],
      it: [
        'Una statua d’ingresso si giudica da lontano prima che da vicino. È l’errore più comune: un pezzo scelto sullo schermo, ad altezza d’occhi, che si rivela minuscolo in fondo a un viale di quindici metri.',
        'La regola della distanza',
        'Considerate circa un decimo della distanza di osservazione. Un viale di dieci metri richiede un pezzo di circa un metro; un ingresso visto dalla strada, a trenta metri, ne richiede due o più. Al di sotto, il pezzo si legge come un dettaglio e non come un punto focale.',
        'Anche l’altezza della base conta',
        'Un leone di 110 cm posato a terra e lo stesso leone su una base di 40 cm non raccontano la stessa cosa. La base solleva il pezzo dal verde, lo protegge dai residui di taglio e lo trasforma da oggetto posato a oggetto presentato.',
        'Scegliere il materiale secondo l’esposizione',
        [
          'Pieno sole tutto il giorno: preferite le finiture pietra chiara, non si scaldano e non sbiadiscono.',
          'Zona ombreggiata e umida: le finiture scure o patinate mascherano meglio le tracce di umidità e i depositi verdi.',
          'Bordo piscina o vialetto salato d’inverno: non posate il pezzo direttamente a terra, una base limita il contatto con il sale.',
        ],
        'L’illuminazione trasforma il pezzo di notte',
        'Un faretto da incasso a pavimento, cinquanta centimetri davanti al pezzo e orientato verso l’alto, crea il rilievo che la luce diurna appiattisce. Dopo la statua stessa è l’investimento più redditizio: raddoppia il tempo in cui il pezzo è visibile.',
        'Coppia o pezzo singolo?',
        'Due leoni ai lati di un cancello creano una simmetria classica. Un pezzo unico, fuori asse, produce un effetto più contemporaneo e si nota di più. La simmetria richiede spazio: se i due lati misurano meno di due metri, un solo pezzo sarà più giusto.',
        'Nel dubbio, misurate lo spazio, fotografatelo dal punto da cui il pezzo sarà visto più spesso e inviatecelo. Vi diremo francamente quale volume funziona.',
      ],
      en: [
        'An entrance statue is judged from a distance before it is judged up close. That is the most common mistake: a piece chosen on screen at eye level turns out tiny at the end of a fifteen-metre drive.',
        'The distance rule',
        'Allow roughly one tenth of the viewing distance. A ten-metre drive calls for a piece around one metre; an entrance seen from the road thirty metres away needs two metres or more. Below that, the piece reads as a detail rather than a focal point.',
        'Plinth height matters just as much',
        'A 110 cm lion on the ground and the same lion on a 40 cm plinth do not tell the same story. The plinth lifts the piece clear of planting, protects it from mower spray, and turns it from an object left there into an object presented. On a flat entrance with no level changes, it is the simplest way to create hierarchy.',
        'Choose the finish for the exposure',
        [
          'Full sun all day: favour light stone finishes, which neither heat up nor fade.',
          'Shaded and damp: darker or patinated finishes hide moisture marks and green deposits better.',
          'Poolside or beside a path salted in winter: do not set the piece directly on the ground, a plinth limits contact with de-icing salt.',
        ],
        'Lighting transforms the piece at night',
        'A recessed ground spot, fifty centimetres in front of the piece and aimed upward, creates the relief that daylight flattens. After the statue itself it is the most rewarding investment: it doubles the hours the piece is visible.',
        'A pair or a single piece?',
        'Two lions either side of a gate create classical symmetry. A single piece, set off-centre, feels more contemporary and draws more attention. Symmetry needs room: if your two sides measure less than two metres, one piece will sit better.',
        'When in doubt, measure the spot, photograph it from where the piece will most often be seen, and send it to us. We will tell you honestly what volume works.',
      ],
    },
  },

  {
    slug: 'resine-ou-beton',
    image: '/images/vase-medicis-6125-02.jpg',
    title: {
      fr: 'Résine ou béton : quelle matière choisir ?',
      de: 'Kunstharz oder Beton: welches Material?',
      it: 'Resina o cemento: quale materiale scegliere?',
      en: 'Resin or concrete: which material should you choose?',
    },
    excerpt: {
      fr: 'La résine permet des détails fins et un poids maîtrisé, le béton apporte une présence minérale et une stabilité au vent. Comparaison honnête.',
      de: 'Kunstharz erlaubt feine Details bei geringem Gewicht, Beton bringt mineralische Präsenz und Standfestigkeit. Ein ehrlicher Vergleich.',
      it: 'La resina permette dettagli fini e peso contenuto, il cemento porta presenza minerale e stabilità al vento. Un confronto onesto.',
      en: 'Resin allows fine detail at a manageable weight; concrete brings mineral presence and wind stability. An honest comparison.',
    },
    body: {
      fr: [
        'C’est la question qui revient le plus souvent, et la réponse dépend moins du goût que de trois éléments concrets : le poids que votre sol peut recevoir, l’exposition au vent, et la finesse de sculpture que vous recherchez.',
        'Le poids, d’abord',
        'Une pièce en résine de 110 cm pèse entre 40 et 60 kg. La même pièce en béton dépasse souvent les 200 kg. Sur une terrasse d’étage, un balcon, une dalle sur plots ou un plancher bois, la question est vite tranchée : la résine passe, le béton demande une vérification de charge.',
        'La finesse de sculpture',
        'La résine restitue des détails que le béton ne peut pas tenir : plumage d’un paon, drapé d’un vêtement, boucles d’une crinière. Le béton, coulé en moule, arrondit les arêtes. Pour une pièce très ornementée, la résine est objectivement supérieure.',
        'La tenue au vent',
        'C’est le point faible de la résine. Une pièce haute et légère, exposée plein vent, doit être lestée ou fixée : le béton n’a pas ce problème. Sur un plateau dégagé ou en bord de lac, prévoyez une fixation, quelle que soit la matière.',
        'Le vieillissement',
        [
          'Résine : ne gèle pas, ne se fissure pas, garde sa teinte plusieurs années. Elle peut ternir légèrement en plein soleil au bout de longues expositions.',
          'Béton : se patine, verdit, prend le caractère du lieu. C’est un avantage si vous cherchez l’effet ancien, un inconvénient si vous voulez que la pièce reste nette.',
        ],
        'Et le prix ?',
        'À dimensions égales, la résine revient généralement moins cher, surtout une fois la livraison comptée : deux personnes suffisent là où le béton demande un engin de levage. C’est un coût invisible sur la fiche produit mais bien réel le jour de la pose.',
        'Notre position est simple : la résine convient à la grande majorité des projets décoratifs. Le béton se justifie pour une pièce très exposée au vent, ou lorsque la patine minérale fait partie de ce que vous cherchez.',
      ],
      de: [
        'Das ist die häufigste Frage, und die Antwort hängt weniger vom Geschmack ab als von drei konkreten Punkten: der Traglast Ihres Untergrunds, der Windexposition und der gewünschten Feinheit der Skulptur.',
        'Zuerst das Gewicht',
        'Ein Stück aus Kunstharz von 110 cm wiegt zwischen 40 und 60 kg. Dasselbe Stück in Beton überschreitet oft 200 kg. Auf einer Dachterrasse, einem Balkon, einem Stelzlager-Belag oder einem Holzboden ist die Frage rasch entschieden: Kunstharz geht, Beton verlangt eine Prüfung der Traglast.',
        'Die Feinheit der Skulptur',
        'Kunstharz gibt Details wieder, die Beton nicht halten kann: das Gefieder eines Pfaus, den Faltenwurf eines Gewands, die Locken einer Mähne. Beton, in die Form gegossen, rundet Kanten ab. Für ein stark ornamentiertes Stück ist Kunstharz objektiv überlegen.',
        'Die Windstabilität',
        'Das ist die Schwäche des Kunstharzes. Ein hohes, leichtes Stück in voller Windlage muss beschwert oder befestigt werden; Beton hat dieses Problem nicht. Auf offener Hochebene oder am Seeufer sollten Sie unabhängig vom Material eine Befestigung einplanen.',
        'Die Alterung',
        [
          'Kunstharz: friert nicht, reisst nicht, behält seinen Farbton über Jahre. Bei sehr langer voller Sonne kann es leicht matter werden.',
          'Beton: patiniert, ergrünt, nimmt den Charakter des Ortes an. Ein Vorteil, wenn Sie den gealterten Effekt suchen; ein Nachteil, wenn das Stück klar bleiben soll.',
        ],
        'Und der Preis?',
        'Bei gleichen Massen ist Kunstharz meist günstiger, vor allem mit der Lieferung gerechnet: Zwei Personen genügen, wo Beton ein Hebegerät verlangt. Ein auf dem Datenblatt unsichtbarer, am Aufstelltag aber sehr realer Kostenpunkt.',
        'Unsere Haltung ist einfach: Für die grosse Mehrheit dekorativer Projekte ist Kunstharz die richtige Wahl. Beton rechtfertigt sich bei stark windexponierten Stücken oder wenn die mineralische Patina Teil des Gesuchten ist.',
      ],
      it: [
        'È la domanda più frequente, e la risposta dipende meno dal gusto che da tre elementi concreti: il peso che il vostro supporto può ricevere, l’esposizione al vento e la finezza di scultura che cercate.',
        'Prima il peso',
        'Un pezzo in resina di 110 cm pesa tra 40 e 60 kg. Lo stesso pezzo in cemento supera spesso i 200 kg. Su una terrazza ai piani, un balcone, una pavimentazione su supporti o un pavimento in legno la questione è presto risolta: la resina passa, il cemento richiede una verifica di carico.',
        'La finezza della scultura',
        'La resina restituisce dettagli che il cemento non può tenere: il piumaggio di un pavone, il drappeggio di una veste, i riccioli di una criniera. Il cemento, colato in stampo, arrotonda gli spigoli. Per un pezzo molto ornato la resina è oggettivamente superiore.',
        'La tenuta al vento',
        'È il punto debole della resina. Un pezzo alto e leggero, in piena esposizione, va zavorrato o fissato: il cemento non ha questo problema. Su un altopiano aperto o in riva al lago prevedete un fissaggio, qualunque sia il materiale.',
        'L’invecchiamento',
        [
          'Resina: non gela, non si crepa, mantiene la tinta per anni. In pieno sole molto prolungato può opacizzarsi leggermente.',
          'Cemento: si patina, inverdisce, prende il carattere del luogo. Un vantaggio se cercate l’effetto antico, uno svantaggio se volete che il pezzo resti netto.',
        ],
        'E il prezzo?',
        'A parità di dimensioni la resina costa generalmente meno, soprattutto contando la consegna: bastano due persone dove il cemento richiede un mezzo di sollevamento. Un costo invisibile sulla scheda prodotto ma molto reale il giorno della posa.',
        'La nostra posizione è semplice: la resina conviene alla grande maggioranza dei progetti decorativi. Il cemento si giustifica per un pezzo molto esposto al vento, o quando la patina minerale fa parte di ciò che cercate.',
      ],
      en: [
        'This is the question we hear most, and the answer depends less on taste than on three concrete things: the load your surface can take, the wind exposure, and the sculptural detail you want.',
        'Weight first',
        'A 110 cm resin piece weighs between 40 and 60 kg. The same piece in concrete often exceeds 200 kg. On a roof terrace, a balcony, a pedestal-paved deck or a timber floor the question settles itself: resin works, concrete needs a load check.',
        'Sculptural detail',
        'Resin holds detail that concrete cannot: a peacock’s plumage, the fall of a garment, the curls of a mane. Concrete, cast in a mould, rounds off edges. For a heavily ornamented piece, resin is objectively better.',
        'Standing up to wind',
        'This is resin’s weak point. A tall, light piece in full wind must be weighted or fixed down; concrete does not have this problem. On open ground or by a lake, plan a fixing whatever the material.',
        'How they age',
        [
          'Resin: does not freeze or crack, and holds its colour for years. It can dull slightly after very long sun exposure.',
          'Concrete: patinates, greens over, takes on the character of the place. An advantage if you want an aged look, a drawback if you want the piece to stay crisp.',
        ],
        'And the price?',
        'At equal size, resin generally costs less, especially once delivery is counted: two people suffice where concrete needs lifting gear. An invisible cost on the product page, but a very real one on installation day.',
        'Our position is simple: resin suits the great majority of decorative projects. Concrete earns its place for a piece in strong wind, or when mineral patina is part of what you are after.',
      ],
    },
  },

  {
    slug: 'entretenir-piece-exterieure',
    image: '/images/fontaine-dame-modele-a.jpg',
    title: {
      fr: 'Entretenir une pièce décorative extérieure',
      de: 'Ein dekoratives Aussenstück pflegen',
      it: 'Manutenzione di un pezzo decorativo da esterno',
      en: 'Caring for a decorative piece outdoors',
    },
    excerpt: {
      fr: 'Un entretien simple, deux fois par an, prolonge l’éclat des finitions et protège les détails sculptés. Ce qu’il faut faire, et surtout ce qu’il ne faut jamais faire.',
      de: 'Zweimal jährlich eine einfache Pflege erhält den Glanz der Oberfläche und schützt die Details. Was zu tun ist — und vor allem, was niemals.',
      it: 'Una manutenzione semplice, due volte l’anno, prolunga la brillantezza delle finiture. Cosa fare e soprattutto cosa non fare mai.',
      en: 'A simple routine twice a year keeps finishes bright and protects carved detail. What to do, and above all what never to do.',
    },
    body: {
      fr: [
        'Une pièce décorative extérieure demande peu, mais elle demande la bonne chose. La plupart des dégâts que nous voyons ne viennent pas du temps qui passe : ils viennent d’un nettoyage trop énergique.',
        'Ce qu’il ne faut jamais faire',
        [
          'Le nettoyeur haute pression. C’est la première cause de dommage. Le jet arrache les finitions dans les creux sculptés et laisse des zones mates impossibles à rattraper.',
          'Les produits abrasifs, la crème à récurer, l’éponge verte. Ils rayent la finition de façon définitive.',
          'L’eau de Javel pure sur une finition patinée ou dorée : elle décolore par plaques.',
        ],
        'La routine de base, deux fois par an',
        'À la sortie de l’hiver et à l’entrée de l’automne : rincez à l’eau claire au tuyau, sans pression, puis passez une brosse à poils souples ou une éponge non abrasive avec un peu de savon doux. Insistez sur les creux où la poussière s’accumule. Rincez et laissez sécher à l’air.',
        'Les taches vertes et les dépôts',
        'Mousses et algues apparaissent surtout à l’ombre et au nord. Un mélange d’eau tiède et de savon noir, laissé agir dix minutes puis brossé doucement, suffit dans la grande majorité des cas. Si le dépôt résiste, répétez plutôt que d’augmenter la dose.',
        'Avant l’hiver',
        'Les finitions résine supportent bien le gel. Le point de vigilance est l’eau stagnante : videz les bassins de fontaine, retournez ou couvrez les vasques et les vases pour éviter que l’eau ne gèle à l’intérieur. C’est la dilatation de la glace, pas le froid, qui fend une pièce.',
        'Redonner de l’éclat',
        'Une fois la pièce propre et parfaitement sèche, une cire incolore pour pierre reconstituée, appliquée au chiffon doux une fois par an, ravive la profondeur de la finition et limite l’accroche des salissures. Testez d’abord sur une zone discrète.',
        'Bien entretenue, une pièce en résine garde son aspect pendant des années. Mal nettoyée une seule fois, elle porte la trace du geste pour toujours.',
      ],
      de: [
        'Ein dekoratives Aussenstück verlangt wenig, aber es verlangt das Richtige. Die meisten Schäden, die wir sehen, kommen nicht von der Zeit: Sie kommen von zu energischer Reinigung.',
        'Was Sie niemals tun sollten',
        [
          'Der Hochdruckreiniger. Ursache Nummer eins für Schäden. Der Strahl reisst die Oberfläche in den skulptierten Vertiefungen ab und hinterlässt matte Stellen, die sich nicht mehr beheben lassen.',
          'Scheuermittel, Scheuermilch, grüne Topfschwämme. Sie zerkratzen die Oberfläche dauerhaft.',
          'Unverdünnte Bleiche auf patinierten oder vergoldeten Oberflächen: Sie entfärbt fleckenweise.',
        ],
        'Die Grundpflege, zweimal jährlich',
        'Nach dem Winter und vor dem Herbst: mit dem Schlauch drucklos mit klarem Wasser abspülen, dann mit weicher Bürste oder nicht scheuerndem Schwamm und etwas milder Seife reinigen. Achten Sie auf die Vertiefungen, in denen sich Staub sammelt. Abspülen und an der Luft trocknen lassen.',
        'Grüne Flecken und Beläge',
        'Moose und Algen entstehen vor allem im Schatten und auf der Nordseite. Eine Mischung aus lauwarmem Wasser und Schmierseife, zehn Minuten einwirken lassen und sanft abbürsten, genügt in den allermeisten Fällen. Hält der Belag stand, wiederholen Sie den Vorgang, statt die Dosierung zu erhöhen.',
        'Vor dem Winter',
        'Kunstharz-Oberflächen halten Frost gut aus. Der kritische Punkt ist stehendes Wasser: Brunnenbecken leeren, Schalen und Vasen umdrehen oder abdecken, damit das Wasser nicht darin gefriert. Es ist die Ausdehnung des Eises, nicht die Kälte, die ein Stück sprengt.',
        'Den Glanz zurückholen',
        'Ist das Stück sauber und vollständig trocken, frischt ein farbloses Wachs für Kunststein, einmal jährlich mit weichem Tuch aufgetragen, die Tiefe der Oberfläche auf und erschwert das Anhaften von Schmutz. Testen Sie zuerst an einer unauffälligen Stelle.',
        'Gut gepflegt behält ein Kunstharz-Stück sein Aussehen über Jahre. Ein einziges Mal falsch gereinigt, trägt es die Spur dieser Handbewegung für immer.',
      ],
      it: [
        'Un pezzo decorativo da esterno chiede poco, ma chiede la cosa giusta. La maggior parte dei danni che vediamo non viene dal tempo che passa: viene da una pulizia troppo energica.',
        'Cosa non fare mai',
        [
          'L’idropulitrice. È la prima causa di danno. Il getto strappa le finiture nelle cavità scolpite e lascia zone opache impossibili da recuperare.',
          'Prodotti abrasivi, creme abrasive, spugne verdi. Graffiano la finitura in modo definitivo.',
          'Candeggina pura su una finitura patinata o dorata: scolora a chiazze.',
        ],
        'La routine di base, due volte l’anno',
        'All’uscita dall’inverno e all’inizio dell’autunno: risciacquate con acqua pulita a bassa pressione, poi passate una spazzola a setole morbide o una spugna non abrasiva con un po’ di sapone delicato. Insistete nelle cavità dove si accumula la polvere. Risciacquate e lasciate asciugare all’aria.',
        'Macchie verdi e depositi',
        'Muschi e alghe compaiono soprattutto all’ombra e a nord. Una miscela di acqua tiepida e sapone nero, lasciata agire dieci minuti e poi spazzolata delicatamente, basta nella grande maggioranza dei casi. Se il deposito resiste, ripetete invece di aumentare la dose.',
        'Prima dell’inverno',
        'Le finiture in resina sopportano bene il gelo. Il punto critico è l’acqua stagnante: svuotate le vasche delle fontane, capovolgete o coprite coppe e vasi perché l’acqua non geli all’interno. È la dilatazione del ghiaccio, non il freddo, a spaccare un pezzo.',
        'Ridare brillantezza',
        'Una volta pulito e perfettamente asciutto, una cera incolore per pietra ricostituita, applicata con un panno morbido una volta l’anno, ravviva la profondità della finitura e limita l’aderenza dello sporco. Provate prima su una zona discreta.',
        'Ben curato, un pezzo in resina mantiene il suo aspetto per anni. Pulito male una sola volta, ne porta il segno per sempre.',
      ],
      en: [
        'A decorative piece outdoors asks for little, but it asks for the right thing. Most of the damage we see does not come from time passing: it comes from cleaning too vigorously.',
        'What never to do',
        [
          'The pressure washer. This is the number one cause of damage. The jet strips the finish out of carved hollows and leaves dull patches that cannot be put right.',
          'Abrasive products, scouring cream, green scourers. They scratch the finish permanently.',
          'Neat bleach on a patinated or gilded finish: it discolours in patches.',
        ],
        'The basic routine, twice a year',
        'Coming out of winter and going into autumn: rinse with clean water from a hose at no pressure, then work over the piece with a soft brush or non-abrasive sponge and a little mild soap. Pay attention to the hollows where dust gathers. Rinse and let it air dry.',
        'Green marks and deposits',
        'Moss and algae appear mostly in shade and on north-facing sides. Warm water with soft soap, left for ten minutes then brushed gently, is enough in the great majority of cases. If the deposit resists, repeat rather than increase the dose.',
        'Before winter',
        'Resin finishes handle frost well. The thing to watch is standing water: empty fountain basins, turn over or cover bowls and vases so water cannot freeze inside them. It is the expansion of ice, not the cold, that splits a piece.',
        'Bringing back the shine',
        'Once the piece is clean and completely dry, a colourless wax for reconstituted stone, applied with a soft cloth once a year, revives the depth of the finish and makes dirt less likely to cling. Test on a discreet area first.',
        'Well cared for, a resin piece keeps its appearance for years. Cleaned badly just once, it carries the mark of that moment for good.',
      ],
    },
  },
];

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((article) => article.slug === slug);
}

export const BLOG_INTRO: Record<Locale, { title: string; lead: string }> = {
  fr: {
    title: 'Conseils',
    lead: 'Ce qu’il faut savoir avant de choisir une pièce, et comment la garder belle une fois posée.',
  },
  de: {
    title: 'Ratgeber',
    lead: 'Was Sie vor der Wahl eines Stücks wissen sollten und wie es nach dem Aufstellen schön bleibt.',
  },
  it: {
    title: 'Consigli',
    lead: 'Cosa sapere prima di scegliere un pezzo e come mantenerlo bello una volta posato.',
  },
  en: {
    title: 'Advice',
    lead: 'What to know before choosing a piece, and how to keep it looking right once it is in place.',
  },
};

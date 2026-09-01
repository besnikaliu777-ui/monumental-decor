import type { Locale } from './translations';

/**
 * Legal pages content.
 *
 * Business facts confirmed by the owner (2026-09-01): sole proprietorship
 * (raison individuelle), not liable for VAT, 14-day return window granted
 * voluntarily, payment by bank transfer, TWINT, cash on delivery or invoice.
 * These texts are prepared in good faith and are not legal advice; they are
 * worth a lawyer's read before relying on them in a dispute.
 */

export const LEGAL_ENTITY = {
  name: 'Besnik Aliu',
  tradeName: 'Monumental Decor',
  form: 'Raison individuelle',
  street: '',
  postalCode: '1418',
  city: 'Vuarrens',
  region: 'Vaud',
  country: 'Suisse',
  email: 'info@monumental-decor.ch',
  phone: '+41 78 776 32 92',
  updated: '2026-09-01',
};

export const LEGAL_SLUGS = ['mentions-legales', 'cgv', 'confidentialite'] as const;
export type LegalSlug = (typeof LEGAL_SLUGS)[number];

export interface LegalSection {
  heading: string;
  body: string[];
}

export interface LegalDoc {
  title: string;
  intro: string;
  sections: LegalSection[];
  updatedLabel: string;
}

const addressLine = LEGAL_ENTITY.street
  ? `${LEGAL_ENTITY.street}, ${LEGAL_ENTITY.postalCode} ${LEGAL_ENTITY.city}`
  : `${LEGAL_ENTITY.postalCode} ${LEGAL_ENTITY.city}`;

/* ------------------------------------------------------------------ FR -- */

const fr: Record<LegalSlug, LegalDoc> = {
  'mentions-legales': {
    title: 'Mentions légales',
    intro: "Informations sur l'éditeur et l'hébergeur de ce site.",
    updatedLabel: 'Dernière mise à jour',
    sections: [
      {
        heading: 'Éditeur du site',
        body: [
          `${LEGAL_ENTITY.tradeName} — ${LEGAL_ENTITY.name}`,
          `Raison individuelle, ${addressLine}, ${LEGAL_ENTITY.country}`,
          `Email : ${LEGAL_ENTITY.email}`,
          `Téléphone et WhatsApp : ${LEGAL_ENTITY.phone}`,
          "Entreprise non assujettie à la taxe sur la valeur ajoutée. Les prix affichés sur ce site sont donc nets, sans TVA.",
        ],
      },
      {
        heading: 'Responsable de la publication',
        body: [`${LEGAL_ENTITY.name}, à l'adresse ci-dessus.`],
      },
      {
        heading: 'Hébergement',
        body: [
          'Le site est hébergé par Vercel Inc., 340 S Lemon Ave #4133, Walnut, CA 91789, États-Unis.',
          'Le nom de domaine est enregistré auprès d’Infomaniak Network SA, Genève, Suisse.',
        ],
      },
      {
        heading: 'Propriété intellectuelle',
        body: [
          "L'ensemble des textes, visuels et éléments graphiques de ce site est protégé par le droit d'auteur. Toute reproduction, même partielle, est soumise à autorisation écrite préalable.",
        ],
      },
      {
        heading: 'Responsabilité',
        body: [
          "Les informations publiées le sont avec soin, mais sans garantie d'exactitude ni d'exhaustivité. Les dimensions, poids et teintes annoncés sont indicatifs : chaque pièce présentant de légères variations, une différence raisonnable avec les visuels ne constitue pas un défaut.",
          "Les liens vers des sites tiers sont fournis à titre de commodité ; leur contenu n'engage que leurs éditeurs.",
        ],
      },
    ],
  },

  cgv: {
    title: 'Conditions générales de vente',
    intro: 'Les règles qui s’appliquent à toute commande passée auprès de Monumental Decor.',
    updatedLabel: 'Dernière mise à jour',
    sections: [
      {
        heading: '1. Champ d’application',
        body: [
          `Les présentes conditions régissent toute vente conclue entre ${LEGAL_ENTITY.tradeName} (${LEGAL_ENTITY.name}, ${addressLine}) et son client. Toute commande implique leur acceptation.`,
        ],
      },
      {
        heading: '2. Produits et disponibilité',
        body: [
          'Les pièces sont préparées sur commande. Le délai de préparation annoncé sur chaque fiche produit est de 3 à 14 jours selon la pièce, auquel s’ajoute le délai de livraison convenu.',
          'Les visuels ont valeur d’illustration. Les dimensions et poids indiqués sont approximatifs et peuvent varier légèrement d’une pièce à l’autre.',
        ],
      },
      {
        heading: '3. Prix',
        body: [
          'Les prix sont indiqués en francs suisses (CHF). L’entreprise n’étant pas assujettie à la TVA, aucune taxe sur la valeur ajoutée n’est facturée en sus.',
          'Les frais de livraison ne sont pas compris dans le prix affiché. Ils dépendent du poids de la pièce, de la distance et des conditions d’accès, et sont communiqués dans le devis avant toute confirmation de commande.',
        ],
      },
      {
        heading: '4. Commande',
        body: [
          'Le site ne permet pas de finaliser un achat en ligne. Toute commande passe par une demande de devis, par WhatsApp, par email ou par le formulaire de contact.',
          'La commande est ferme une fois le devis accepté par écrit par le client et confirmé par le vendeur.',
        ],
      },
      {
        heading: '5. Paiement',
        body: [
          'Les moyens de paiement acceptés sont le virement bancaire, TWINT, les espèces à la livraison et la facture après livraison.',
          'Pour les pièces préparées sur commande, un acompte peut être demandé à la confirmation, le solde étant réglé au plus tard à la livraison.',
        ],
      },
      {
        heading: '6. Livraison',
        body: [
          'La livraison est assurée dans toute la Suisse. Le lieu, la date et les conditions d’accès sont convenus avec le client avant l’expédition.',
          'Les pièces étant lourdes et volumineuses, le client s’assure que l’accès au lieu de pose est praticable. Une livraison rendue impossible du fait du client peut donner lieu à des frais de déplacement supplémentaires.',
          'Les risques sont transférés au client à la remise de la pièce.',
        ],
      },
      {
        heading: '7. Droit de retour',
        body: [
          "Le droit suisse ne prévoit pas de droit de rétractation pour les achats à distance. Monumental Decor en accorde néanmoins un volontairement : le client dispose de 14 jours à compter de la réception pour renoncer à son achat.",
          'La pièce doit être retournée complète, intacte et dans son emballage d’origine. Les frais et les risques du retour sont à la charge du client. Le montant est remboursé dans les 14 jours suivant la réception de la pièce en bon état.',
          'Ce droit ne s’applique pas aux pièces réalisées ou modifiées selon des spécifications propres au client.',
        ],
      },
      {
        heading: '8. Garantie',
        body: [
          'Les défauts sont garantis conformément aux articles 197 et suivants du Code des obligations, pendant deux ans à compter de la livraison.',
          'Le client examine la pièce à la réception et signale tout défaut apparent sans délai. L’usure normale, les dommages dus au gel extrême, à un produit abrasif ou à une installation inadaptée ne sont pas couverts.',
        ],
      },
      {
        heading: '9. Droit applicable et for',
        body: [
          'Les présentes conditions sont soumises au droit suisse.',
          'Le for est au siège du vendeur, sous réserve des dispositions impératives protégeant le consommateur, qui peut également agir à son propre domicile.',
        ],
      },
    ],
  },

  confidentialite: {
    title: 'Politique de confidentialité',
    intro: 'Quelles données ce site collecte, pourquoi, et ce que vous pouvez exiger.',
    updatedLabel: 'Dernière mise à jour',
    sections: [
      {
        heading: 'Responsable du traitement',
        body: [
          `${LEGAL_ENTITY.tradeName} — ${LEGAL_ENTITY.name}, ${addressLine}, ${LEGAL_ENTITY.country}.`,
          `Pour toute question relative à vos données : ${LEGAL_ENTITY.email}.`,
          'Le traitement est soumis à la loi fédérale suisse sur la protection des données (LPD).',
        ],
      },
      {
        heading: 'Données que nous recevons',
        body: [
          "Formulaire de contact : le formulaire n'envoie rien à un serveur. Il compose votre message et l'ouvre dans WhatsApp sur votre appareil. C'est vous qui décidez de l'envoyer, et les données transitent alors par WhatsApp selon les conditions de ce service.",
          'Contact direct : lorsque vous nous écrivez par email ou WhatsApp, nous conservons votre nom, vos coordonnées et le contenu des échanges le temps nécessaire au traitement de votre demande et à nos obligations comptables.',
          'Journaux du serveur : notre hébergeur enregistre automatiquement les données techniques de connexion, dont l’adresse IP, à des fins de sécurité et de fonctionnement.',
          'Ce site n’utilise aucun outil de mesure d’audience, aucun traceur publicitaire et aucun cookie de suivi.',
        ],
      },
      {
        heading: 'Services tiers',
        body: [
          'Hébergement : Vercel Inc. (États-Unis). Les données techniques de connexion peuvent être traitées hors de Suisse.',
          'Google Maps : la carte de la page Contact est chargée depuis les serveurs de Google, qui reçoit alors votre adresse IP et peut déposer ses propres cookies. Si vous ne souhaitez pas ce transfert, évitez d’ouvrir la page Contact ou bloquez les contenus tiers dans votre navigateur.',
          'WhatsApp : si vous nous écrivez via WhatsApp, la conversation est soumise à la politique de confidentialité de ce service.',
        ],
      },
      {
        heading: 'Vos droits',
        body: [
          'Vous pouvez à tout moment demander l’accès aux données vous concernant, leur rectification ou leur suppression, et vous opposer à leur traitement. Une simple demande à l’adresse email ci-dessus suffit ; nous y répondons dans un délai raisonnable.',
          'Vous pouvez également saisir le Préposé fédéral à la protection des données et à la transparence (PFPDT).',
        ],
      },
      {
        heading: 'Conservation et sécurité',
        body: [
          'Les données ne sont conservées que le temps nécessaire à la finalité poursuivie ou à nos obligations légales, notamment la conservation des pièces comptables pendant dix ans.',
          'Les données ne sont ni vendues ni transmises à des tiers à des fins commerciales.',
        ],
      },
    ],
  },
};

/* ------------------------------------------------------------------ DE -- */

const de: Record<LegalSlug, LegalDoc> = {
  'mentions-legales': {
    title: 'Impressum',
    intro: 'Angaben zum Betreiber und zum Hosting dieser Website.',
    updatedLabel: 'Letzte Aktualisierung',
    sections: [
      {
        heading: 'Betreiber der Website',
        body: [
          `${LEGAL_ENTITY.tradeName} — ${LEGAL_ENTITY.name}`,
          `Einzelunternehmen, ${addressLine}, Schweiz`,
          `E-Mail: ${LEGAL_ENTITY.email}`,
          `Telefon und WhatsApp: ${LEGAL_ENTITY.phone}`,
          'Das Unternehmen ist nicht mehrwertsteuerpflichtig. Die angezeigten Preise verstehen sich daher netto, ohne MWST.',
        ],
      },
      {
        heading: 'Verantwortlich für den Inhalt',
        body: [`${LEGAL_ENTITY.name}, unter der oben genannten Adresse.`],
      },
      {
        heading: 'Hosting',
        body: [
          'Die Website wird gehostet von Vercel Inc., 340 S Lemon Ave #4133, Walnut, CA 91789, USA.',
          'Die Domain ist registriert bei Infomaniak Network SA, Genf, Schweiz.',
        ],
      },
      {
        heading: 'Urheberrecht',
        body: [
          'Sämtliche Texte, Bilder und grafischen Elemente dieser Website sind urheberrechtlich geschützt. Jede auch auszugsweise Vervielfältigung bedarf der vorherigen schriftlichen Zustimmung.',
        ],
      },
      {
        heading: 'Haftung',
        body: [
          'Die Informationen werden sorgfältig erstellt, jedoch ohne Gewähr für Richtigkeit und Vollständigkeit. Angegebene Masse, Gewichte und Farbtöne sind Richtwerte: Da jedes Stück leichte Abweichungen aufweist, stellt eine angemessene Abweichung von den Abbildungen keinen Mangel dar.',
          'Für Inhalte verlinkter Websites Dritter wird keine Haftung übernommen.',
        ],
      },
    ],
  },

  cgv: {
    title: 'Allgemeine Geschäftsbedingungen',
    intro: 'Die Regeln für jede Bestellung bei Monumental Decor.',
    updatedLabel: 'Letzte Aktualisierung',
    sections: [
      {
        heading: '1. Geltungsbereich',
        body: [
          `Diese Bedingungen gelten für jeden Vertrag zwischen ${LEGAL_ENTITY.tradeName} (${LEGAL_ENTITY.name}, ${addressLine}) und der Kundin oder dem Kunden. Mit einer Bestellung werden sie anerkannt.`,
        ],
      },
      {
        heading: '2. Produkte und Verfügbarkeit',
        body: [
          'Die Stücke werden auf Bestellung vorbereitet. Die auf jeder Produktseite angegebene Vorbereitungszeit beträgt je nach Stück 3 bis 14 Tage, zuzüglich der vereinbarten Lieferzeit.',
          'Abbildungen dienen der Veranschaulichung. Masse und Gewichte sind ungefähre Angaben und können von Stück zu Stück leicht abweichen.',
        ],
      },
      {
        heading: '3. Preise',
        body: [
          'Die Preise verstehen sich in Schweizer Franken (CHF). Da das Unternehmen nicht mehrwertsteuerpflichtig ist, wird keine MWST zusätzlich verrechnet.',
          'Die Lieferkosten sind im angezeigten Preis nicht enthalten. Sie richten sich nach Gewicht, Distanz und Zugänglichkeit und werden vor der Auftragsbestätigung im Angebot ausgewiesen.',
        ],
      },
      {
        heading: '4. Bestellung',
        body: [
          'Ein Kaufabschluss direkt auf der Website ist nicht möglich. Jede Bestellung läuft über eine Offertanfrage per WhatsApp, E-Mail oder Kontaktformular.',
          'Die Bestellung ist verbindlich, sobald die Offerte schriftlich angenommen und vom Verkäufer bestätigt wurde.',
        ],
      },
      {
        heading: '5. Zahlung',
        body: [
          'Akzeptiert werden Banküberweisung, TWINT, Barzahlung bei Lieferung sowie Rechnung nach Lieferung.',
          'Bei auf Bestellung vorbereiteten Stücken kann bei der Bestätigung eine Anzahlung verlangt werden; der Restbetrag ist spätestens bei der Lieferung fällig.',
        ],
      },
      {
        heading: '6. Lieferung',
        body: [
          'Geliefert wird in der ganzen Schweiz. Ort, Termin und Zugangsbedingungen werden vor dem Versand mit der Kundschaft vereinbart.',
          'Da die Stücke schwer und sperrig sind, stellt die Kundschaft sicher, dass der Aufstellort zugänglich ist. Scheitert die Lieferung aus Gründen, die die Kundschaft zu vertreten hat, können zusätzliche Anfahrtskosten anfallen.',
          'Die Gefahr geht mit der Übergabe des Stücks auf die Kundschaft über.',
        ],
      },
      {
        heading: '7. Rückgaberecht',
        body: [
          'Das Schweizer Recht kennt für Fernabsatzkäufe kein Widerrufsrecht. Monumental Decor gewährt freiwillig dennoch eines: Ab Erhalt besteht ein Rückgaberecht von 14 Tagen.',
          'Das Stück ist vollständig, unbeschädigt und in der Originalverpackung zurückzusenden. Kosten und Risiko der Rücksendung trägt die Kundschaft. Die Rückerstattung erfolgt innert 14 Tagen nach Eingang des einwandfreien Stücks.',
          'Ausgenommen sind nach Kundenspezifikation gefertigte oder angepasste Stücke.',
        ],
      },
      {
        heading: '8. Gewährleistung',
        body: [
          'Für Mängel wird während zwei Jahren ab Lieferung nach Art. 197 ff. des Obligationenrechts gehaftet.',
          'Die Kundschaft prüft das Stück bei Erhalt und meldet offensichtliche Mängel unverzüglich. Normale Abnutzung sowie Schäden durch starken Frost, scheuernde Reinigungsmittel oder unsachgemässe Aufstellung sind ausgeschlossen.',
        ],
      },
      {
        heading: '9. Anwendbares Recht und Gerichtsstand',
        body: [
          'Es gilt Schweizer Recht.',
          'Gerichtsstand ist der Sitz des Verkäufers, vorbehältlich zwingender Konsumentenschutzbestimmungen, wonach auch am Wohnsitz der Kundschaft geklagt werden kann.',
        ],
      },
    ],
  },

  confidentialite: {
    title: 'Datenschutzerklärung',
    intro: 'Welche Daten diese Website erhebt, wozu, und welche Rechte Sie haben.',
    updatedLabel: 'Letzte Aktualisierung',
    sections: [
      {
        heading: 'Verantwortliche Stelle',
        body: [
          `${LEGAL_ENTITY.tradeName} — ${LEGAL_ENTITY.name}, ${addressLine}, Schweiz.`,
          `Bei Fragen zu Ihren Daten: ${LEGAL_ENTITY.email}.`,
          'Die Bearbeitung untersteht dem Schweizer Bundesgesetz über den Datenschutz (DSG).',
        ],
      },
      {
        heading: 'Daten, die wir erhalten',
        body: [
          'Kontaktformular: Das Formular sendet nichts an einen Server. Es stellt Ihre Nachricht zusammen und öffnet sie auf Ihrem Gerät in WhatsApp. Sie entscheiden über den Versand; die Daten laufen dann über WhatsApp gemäss dessen Bedingungen.',
          'Direkter Kontakt: Schreiben Sie uns per E-Mail oder WhatsApp, bewahren wir Name, Kontaktangaben und Inhalt des Austauschs so lange auf, wie es für die Bearbeitung und unsere Buchführungspflichten nötig ist.',
          'Server-Protokolle: Unser Hoster erfasst automatisch technische Verbindungsdaten, darunter die IP-Adresse, zu Sicherheits- und Betriebszwecken.',
          'Diese Website verwendet keine Analysewerkzeuge, keine Werbetracker und keine Tracking-Cookies.',
        ],
      },
      {
        heading: 'Dienste Dritter',
        body: [
          'Hosting: Vercel Inc. (USA). Technische Verbindungsdaten können ausserhalb der Schweiz bearbeitet werden.',
          'Google Maps: Die Karte auf der Kontaktseite wird von Google-Servern geladen. Google erhält dabei Ihre IP-Adresse und kann eigene Cookies setzen. Wenn Sie das nicht möchten, öffnen Sie die Kontaktseite nicht oder blockieren Sie Inhalte Dritter in Ihrem Browser.',
          'WhatsApp: Schreiben Sie uns über WhatsApp, gilt für die Unterhaltung die Datenschutzerklärung dieses Dienstes.',
        ],
      },
      {
        heading: 'Ihre Rechte',
        body: [
          'Sie können jederzeit Auskunft über Ihre Daten, deren Berichtigung oder Löschung verlangen und der Bearbeitung widersprechen. Eine formlose Nachricht an die oben genannte E-Mail-Adresse genügt; wir antworten innert angemessener Frist.',
          'Zudem können Sie sich an den Eidgenössischen Datenschutz- und Öffentlichkeitsbeauftragten (EDÖB) wenden.',
        ],
      },
      {
        heading: 'Aufbewahrung und Sicherheit',
        body: [
          'Daten werden nur so lange aufbewahrt, wie es der Zweck oder gesetzliche Pflichten erfordern, insbesondere die zehnjährige Aufbewahrung von Buchhaltungsbelegen.',
          'Daten werden weder verkauft noch zu Werbezwecken an Dritte weitergegeben.',
        ],
      },
    ],
  },
};

/* ------------------------------------------------------------------ IT -- */

const it: Record<LegalSlug, LegalDoc> = {
  'mentions-legales': {
    title: 'Note legali',
    intro: 'Informazioni sull’editore e sull’hosting di questo sito.',
    updatedLabel: 'Ultimo aggiornamento',
    sections: [
      {
        heading: 'Editore del sito',
        body: [
          `${LEGAL_ENTITY.tradeName} — ${LEGAL_ENTITY.name}`,
          `Ditta individuale, ${addressLine}, Svizzera`,
          `Email: ${LEGAL_ENTITY.email}`,
          `Telefono e WhatsApp: ${LEGAL_ENTITY.phone}`,
          'L’impresa non è assoggettata all’imposta sul valore aggiunto. I prezzi indicati sono quindi netti, senza IVA.',
        ],
      },
      {
        heading: 'Responsabile della pubblicazione',
        body: [`${LEGAL_ENTITY.name}, all’indirizzo sopra indicato.`],
      },
      {
        heading: 'Hosting',
        body: [
          'Il sito è ospitato da Vercel Inc., 340 S Lemon Ave #4133, Walnut, CA 91789, Stati Uniti.',
          'Il nome a dominio è registrato presso Infomaniak Network SA, Ginevra, Svizzera.',
        ],
      },
      {
        heading: 'Proprietà intellettuale',
        body: [
          'Tutti i testi, le immagini e gli elementi grafici del sito sono protetti dal diritto d’autore. Ogni riproduzione, anche parziale, richiede un’autorizzazione scritta preventiva.',
        ],
      },
      {
        heading: 'Responsabilità',
        body: [
          'Le informazioni sono redatte con cura, ma senza garanzia di esattezza o completezza. Dimensioni, pesi e tonalità indicati sono orientativi: poiché ogni pezzo presenta lievi variazioni, uno scostamento ragionevole dalle immagini non costituisce un difetto.',
          'Non si assume alcuna responsabilità per i contenuti dei siti terzi collegati.',
        ],
      },
    ],
  },

  cgv: {
    title: 'Condizioni generali di vendita',
    intro: 'Le regole applicabili a ogni ordine presso Monumental Decor.',
    updatedLabel: 'Ultimo aggiornamento',
    sections: [
      {
        heading: '1. Campo di applicazione',
        body: [
          `Le presenti condizioni disciplinano ogni vendita tra ${LEGAL_ENTITY.tradeName} (${LEGAL_ENTITY.name}, ${addressLine}) e il cliente. Ogni ordine ne comporta l’accettazione.`,
        ],
      },
      {
        heading: '2. Prodotti e disponibilità',
        body: [
          'I pezzi sono preparati su ordinazione. Il tempo di preparazione indicato su ogni scheda prodotto è di 3-14 giorni secondo il pezzo, cui si aggiunge il termine di consegna concordato.',
          'Le immagini hanno valore illustrativo. Dimensioni e pesi indicati sono approssimativi e possono variare leggermente da un pezzo all’altro.',
        ],
      },
      {
        heading: '3. Prezzi',
        body: [
          'I prezzi sono espressi in franchi svizzeri (CHF). Non essendo l’impresa assoggettata all’IVA, nessuna imposta viene addebitata in aggiunta.',
          'Le spese di consegna non sono comprese nel prezzo indicato. Dipendono dal peso, dalla distanza e dalle condizioni di accesso e sono comunicate nel preventivo prima della conferma dell’ordine.',
        ],
      },
      {
        heading: '4. Ordine',
        body: [
          'Il sito non consente di concludere un acquisto online. Ogni ordine passa da una richiesta di preventivo via WhatsApp, email o modulo di contatto.',
          'L’ordine è vincolante una volta che il preventivo è accettato per iscritto dal cliente e confermato dal venditore.',
        ],
      },
      {
        heading: '5. Pagamento',
        body: [
          'Sono accettati il bonifico bancario, TWINT, il contante alla consegna e la fattura dopo la consegna.',
          'Per i pezzi preparati su ordinazione può essere richiesto un acconto alla conferma; il saldo è dovuto al più tardi alla consegna.',
        ],
      },
      {
        heading: '6. Consegna',
        body: [
          'La consegna è assicurata in tutta la Svizzera. Luogo, data e condizioni di accesso sono concordati con il cliente prima della spedizione.',
          'Trattandosi di pezzi pesanti e ingombranti, il cliente si assicura che il luogo di posa sia accessibile. Una consegna resa impossibile per cause imputabili al cliente può comportare spese di trasferta supplementari.',
          'I rischi passano al cliente al momento della consegna del pezzo.',
        ],
      },
      {
        heading: '7. Diritto di reso',
        body: [
          'Il diritto svizzero non prevede un diritto di recesso per gli acquisti a distanza. Monumental Decor ne concede comunque uno volontariamente: il cliente dispone di 14 giorni dal ricevimento per rinunciare all’acquisto.',
          'Il pezzo deve essere restituito completo, integro e nell’imballaggio originale. Spese e rischi del reso sono a carico del cliente. Il rimborso avviene entro 14 giorni dal ricevimento del pezzo in buono stato.',
          'Sono esclusi i pezzi realizzati o modificati secondo specifiche del cliente.',
        ],
      },
      {
        heading: '8. Garanzia',
        body: [
          'I difetti sono garantiti conformemente agli articoli 197 e seguenti del Codice delle obbligazioni, per due anni dalla consegna.',
          'Il cliente esamina il pezzo alla consegna e segnala senza indugio ogni difetto apparente. Sono esclusi la normale usura e i danni dovuti a gelo intenso, prodotti abrasivi o installazione inadeguata.',
        ],
      },
      {
        heading: '9. Diritto applicabile e foro',
        body: [
          'Le presenti condizioni sono soggette al diritto svizzero.',
          'Il foro è quello della sede del venditore, fatte salve le disposizioni imperative a tutela del consumatore, che può agire anche presso il proprio domicilio.',
        ],
      },
    ],
  },

  confidentialite: {
    title: 'Informativa sulla privacy',
    intro: 'Quali dati raccoglie questo sito, perché, e quali diritti avete.',
    updatedLabel: 'Ultimo aggiornamento',
    sections: [
      {
        heading: 'Titolare del trattamento',
        body: [
          `${LEGAL_ENTITY.tradeName} — ${LEGAL_ENTITY.name}, ${addressLine}, Svizzera.`,
          `Per ogni domanda sui vostri dati: ${LEGAL_ENTITY.email}.`,
          'Il trattamento è soggetto alla legge federale svizzera sulla protezione dei dati (LPD).',
        ],
      },
      {
        heading: 'Dati che riceviamo',
        body: [
          'Modulo di contatto: il modulo non invia nulla a un server. Compone il vostro messaggio e lo apre in WhatsApp sul vostro dispositivo. Siete voi a decidere di inviarlo; i dati transitano allora tramite WhatsApp secondo le sue condizioni.',
          'Contatto diretto: quando ci scrivete via email o WhatsApp, conserviamo nome, recapiti e contenuto degli scambi per il tempo necessario alla vostra richiesta e ai nostri obblighi contabili.',
          'Registri del server: il nostro host registra automaticamente i dati tecnici di connessione, tra cui l’indirizzo IP, a fini di sicurezza e funzionamento.',
          'Questo sito non utilizza strumenti di analisi, tracker pubblicitari o cookie di tracciamento.',
        ],
      },
      {
        heading: 'Servizi di terzi',
        body: [
          'Hosting: Vercel Inc. (Stati Uniti). I dati tecnici di connessione possono essere trattati fuori dalla Svizzera.',
          'Google Maps: la mappa della pagina Contatto è caricata dai server di Google, che riceve il vostro indirizzo IP e può depositare propri cookie. Se non desiderate questo trasferimento, evitate di aprire la pagina Contatto o bloccate i contenuti di terzi nel browser.',
          'WhatsApp: se ci scrivete tramite WhatsApp, la conversazione è soggetta all’informativa di quel servizio.',
        ],
      },
      {
        heading: 'I vostri diritti',
        body: [
          'Potete in ogni momento chiedere l’accesso ai dati che vi riguardano, la loro rettifica o cancellazione, e opporvi al trattamento. È sufficiente una richiesta all’indirizzo email sopra indicato; rispondiamo entro un termine ragionevole.',
          'Potete inoltre rivolgervi all’Incaricato federale della protezione dei dati e della trasparenza (IFPDT).',
        ],
      },
      {
        heading: 'Conservazione e sicurezza',
        body: [
          'I dati sono conservati solo per il tempo necessario alla finalità perseguita o ai nostri obblighi di legge, in particolare la conservazione decennale dei documenti contabili.',
          'I dati non sono né venduti né trasmessi a terzi per scopi commerciali.',
        ],
      },
    ],
  },
};

/* ------------------------------------------------------------------ EN -- */

const en: Record<LegalSlug, LegalDoc> = {
  'mentions-legales': {
    title: 'Legal notice',
    intro: 'Details of the publisher and host of this website.',
    updatedLabel: 'Last updated',
    sections: [
      {
        heading: 'Publisher',
        body: [
          `${LEGAL_ENTITY.tradeName} — ${LEGAL_ENTITY.name}`,
          `Sole proprietorship, ${addressLine}, Switzerland`,
          `Email: ${LEGAL_ENTITY.email}`,
          `Phone and WhatsApp: ${LEGAL_ENTITY.phone}`,
          'The business is not registered for VAT. Prices shown are therefore net, with no VAT added.',
        ],
      },
      {
        heading: 'Responsible for content',
        body: [`${LEGAL_ENTITY.name}, at the address above.`],
      },
      {
        heading: 'Hosting',
        body: [
          'This site is hosted by Vercel Inc., 340 S Lemon Ave #4133, Walnut, CA 91789, United States.',
          'The domain name is registered with Infomaniak Network SA, Geneva, Switzerland.',
        ],
      },
      {
        heading: 'Intellectual property',
        body: [
          'All text, images and graphic elements on this site are protected by copyright. Any reproduction, even partial, requires prior written permission.',
        ],
      },
      {
        heading: 'Liability',
        body: [
          'Information is published with care but without warranty as to accuracy or completeness. Stated dimensions, weights and finishes are indicative: as each piece varies slightly, a reasonable difference from the images is not a defect.',
          'No liability is accepted for the content of linked third-party sites.',
        ],
      },
    ],
  },

  cgv: {
    title: 'Terms and conditions of sale',
    intro: 'The rules that apply to every order placed with Monumental Decor.',
    updatedLabel: 'Last updated',
    sections: [
      {
        heading: '1. Scope',
        body: [
          `These terms govern every sale between ${LEGAL_ENTITY.tradeName} (${LEGAL_ENTITY.name}, ${addressLine}) and the customer. Placing an order means accepting them.`,
        ],
      },
      {
        heading: '2. Products and availability',
        body: [
          'Pieces are prepared to order. The preparation time stated on each product page is 3 to 14 days depending on the piece, plus the agreed delivery time.',
          'Images are illustrative. Stated dimensions and weights are approximate and may vary slightly between pieces.',
        ],
      },
      {
        heading: '3. Prices',
        body: [
          'Prices are in Swiss francs (CHF). As the business is not registered for VAT, no value added tax is charged on top.',
          'Delivery is not included in the displayed price. It depends on the weight of the piece, the distance and access conditions, and is stated in the quote before any order is confirmed.',
        ],
      },
      {
        heading: '4. Ordering',
        body: [
          'The site does not allow a purchase to be completed online. Every order goes through a quote request by WhatsApp, email or the contact form.',
          'The order becomes binding once the quote is accepted in writing by the customer and confirmed by the seller.',
        ],
      },
      {
        heading: '5. Payment',
        body: [
          'Accepted payment methods are bank transfer, TWINT, cash on delivery and invoice after delivery.',
          'For pieces prepared to order, a deposit may be requested on confirmation, with the balance due at delivery at the latest.',
        ],
      },
      {
        heading: '6. Delivery',
        body: [
          'Delivery is available throughout Switzerland. Place, date and access conditions are agreed with the customer before dispatch.',
          'As the pieces are heavy and bulky, the customer ensures the installation site is accessible. A delivery made impossible through the customer’s own doing may incur additional travel costs.',
          'Risk passes to the customer when the piece is handed over.',
        ],
      },
      {
        heading: '7. Returns',
        body: [
          'Swiss law provides no right of withdrawal for distance purchases. Monumental Decor grants one voluntarily: the customer has 14 days from receipt to cancel the purchase.',
          'The piece must be returned complete, undamaged and in its original packaging. Return costs and risk are borne by the customer. Refund follows within 14 days of receiving the piece in good condition.',
          'This does not apply to pieces made or altered to the customer’s own specifications.',
        ],
      },
      {
        heading: '8. Warranty',
        body: [
          'Defects are covered under articles 197 ff. of the Swiss Code of Obligations for two years from delivery.',
          'The customer inspects the piece on receipt and reports any visible defect without delay. Normal wear, and damage caused by severe frost, abrasive products or unsuitable installation, are not covered.',
        ],
      },
      {
        heading: '9. Governing law and jurisdiction',
        body: [
          'These terms are governed by Swiss law.',
          'Jurisdiction lies at the seller’s place of business, subject to mandatory consumer protection rules, which also allow the customer to sue at their own domicile.',
        ],
      },
    ],
  },

  confidentialite: {
    title: 'Privacy policy',
    intro: 'What data this site collects, why, and what you can require.',
    updatedLabel: 'Last updated',
    sections: [
      {
        heading: 'Data controller',
        body: [
          `${LEGAL_ENTITY.tradeName} — ${LEGAL_ENTITY.name}, ${addressLine}, Switzerland.`,
          `For any question about your data: ${LEGAL_ENTITY.email}.`,
          'Processing is governed by the Swiss Federal Act on Data Protection (FADP).',
        ],
      },
      {
        heading: 'Data we receive',
        body: [
          'Contact form: the form sends nothing to a server. It composes your message and opens it in WhatsApp on your own device. You decide whether to send it, and the data then travels through WhatsApp under that service’s terms.',
          'Direct contact: when you write to us by email or WhatsApp, we keep your name, contact details and the content of the exchange for as long as needed to handle your request and meet our accounting obligations.',
          'Server logs: our host automatically records technical connection data, including your IP address, for security and operational purposes.',
          'This site uses no analytics tools, no advertising trackers and no tracking cookies.',
        ],
      },
      {
        heading: 'Third-party services',
        body: [
          'Hosting: Vercel Inc. (United States). Technical connection data may be processed outside Switzerland.',
          'Google Maps: the map on the Contact page is loaded from Google’s servers, which receive your IP address and may set their own cookies. If you would rather avoid this, do not open the Contact page or block third-party content in your browser.',
          'WhatsApp: if you write to us via WhatsApp, the conversation is subject to that service’s privacy policy.',
        ],
      },
      {
        heading: 'Your rights',
        body: [
          'You may at any time request access to your data, its correction or deletion, and object to its processing. A simple message to the email address above is enough; we reply within a reasonable time.',
          'You may also contact the Federal Data Protection and Information Commissioner (FDPIC).',
        ],
      },
      {
        heading: 'Retention and security',
        body: [
          'Data is kept only as long as the purpose or our legal obligations require, in particular the ten-year retention of accounting records.',
          'Data is never sold or passed to third parties for commercial purposes.',
        ],
      },
    ],
  },
};

const DOCS: Record<Locale, Record<LegalSlug, LegalDoc>> = { fr, de, it, en };

export function getLegalDoc(locale: Locale, slug: LegalSlug): LegalDoc {
  return DOCS[locale][slug];
}

/** Footer link labels, per language. */
export const LEGAL_NAV: Record<Locale, { slug: LegalSlug; label: string }[]> = {
  fr: [
    { slug: 'mentions-legales', label: 'Mentions légales' },
    { slug: 'cgv', label: 'Conditions générales' },
    { slug: 'confidentialite', label: 'Confidentialité' },
  ],
  de: [
    { slug: 'mentions-legales', label: 'Impressum' },
    { slug: 'cgv', label: 'AGB' },
    { slug: 'confidentialite', label: 'Datenschutz' },
  ],
  it: [
    { slug: 'mentions-legales', label: 'Note legali' },
    { slug: 'cgv', label: 'Condizioni generali' },
    { slug: 'confidentialite', label: 'Privacy' },
  ],
  en: [
    { slug: 'mentions-legales', label: 'Legal notice' },
    { slug: 'cgv', label: 'Terms of sale' },
    { slug: 'confidentialite', label: 'Privacy' },
  ],
};

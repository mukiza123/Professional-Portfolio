/* ==========================================================================
   Language switcher - English, French, Kinyarwanda

   Copy lives here rather than in the markup so a string is written once and
   picked up by every page that references its key. Elements opt in with
   data-i18n (text) or data-i18n-aria (accessible name). Anything without a
   key - proper nouns, project names, tag chips - is left alone on purpose.
   ========================================================================== */

(function () {
  'use strict';

  var DICT = {};

  DICT.en = {
    'skip': 'Skip to content',
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.skills': 'Skills',
    'nav.projects': 'Projects',
    'nav.contact': 'Contact',
    'footer.note': 'Built from scratch. No template.',

    'hero.badge': 'Software Engineer & Digital Systems Builder',
    'hero.tagline': 'Building systems that hold up outside the demo.',
    'hero.cta': 'View My Work',

    'journey.eyebrow': 'The route so far',
    'journey.title': 'Journey',
    'journey.intro': 'Six stops between a first internship and the systems I am building now.',

    'j1.meta': 'Feb 2025 – Present',
    'j1.title': 'BS Software Engineering',
    'j1.org': 'African Leadership College of Higher Education',
    'j1.desc': 'Data structures, databases and systems design, learned by building things that have to actually run.',
    'j2.meta': 'Aug 2024 – Dec 2024',
    'j2.title': 'Front-End Web Developer Intern',
    'j2.org': 'Web Design Rwanda Ltd, Kigali',
    'j2.desc': 'Shipped a responsive site for Infinity Hotel Rwanda, iterating directly with the client until it was signed off.',
    'j3.meta': 'Feb 2025 – Present',
    'j3.title': 'Mastercard Foundation Scholar',
    'j3.org': 'Mastercard Foundation Scholars Program',
    'j3.desc': 'Selected on academic record and leadership, into a programme built around ethical leadership and community impact.',
    'j4.meta': 'Present',
    'j4.title': 'Technology & Learning Systems Lead',
    'j4.org': 'DASA Africa',
    'j4.desc': 'Built and deployed the organisation website, and lead the systems behind its learning programmes.',
    'j5.meta': 'Nov 2025 – Present',
    'j5.title': 'Student Co-Organiser',
    'j5.org': 'TEDxALCHE',
    'j5.desc': 'Co-organising the college first TED-licensed event, across speakers, logistics and marketing.',
    'j6.meta': 'Jul 2026 – Aug 2026',
    'j6.title': 'MERL Extern',
    'j6.org': 'Teach for Kenya, Nairobi',
    'j6.desc': 'Engineering a reporting system that turns raw programme data into decision-ready evaluation output.',
    'about.intro': 'I am a software engineering student at African Leadership College of Higher Education. I learn by building real systems, from intranet setups and Linux-based services through to backend applications and accessible software products. I value discipline, structured problem-solving and long-term thinking over shortcuts.',
    'about.panelTitle': 'Impact-driven work',
    'about.p1': 'My work is guided by a simple principle: understand how software behaves in real environments, and how it can solve practical problems. That drives every project, whether I am configuring networked services, debugging system issues, or designing offline-capable tools.',
    'about.p2': 'Beyond the technical side, I want to build systems that are inclusive, reliable and human-centred. Software engineering is not only about writing code. It is about building things that last, serve, and hold up in use.',
    'about.missionLabel': 'Mission',
    'about.mission': 'To empower African youth in rural public schools with technology that unlocks their potential, turns their talents into tangible opportunities, and equips them to become changemakers who uplift their communities and shape the future of Africa.',
  };

  Object.assign(DICT.en, {
    'skills.eyebrow': 'Skills',
    'skills.title': 'Focus areas',
    'skills.intro': 'Six areas I keep sharpening, each one earned on a project rather than a certificate. The tools underneath them change; the way of thinking does not.',
    'skills.stack': 'Working with',
    's1.title': 'Systems & Networking',
    's1.text': 'Linux system configuration, intranet deployments, service networking, DNS resolution, SSH access control, ports and firewalls, and how the pieces behave once they are talking to each other.',
    's2.title': 'Backend & Logic',
    's2.text': 'Python for backend logic and scripting, structured problem solving, control flow, data handling, and code that stays readable long after it is written.',
    's3.title': 'DevOps Foundations',
    's3.text': 'Linux environments, user and permission management, shell scripting, service configuration, deployment workflows, and Git as the spine of all of it.',
    's4.title': 'Frontend Fundamentals',
    's4.text': 'Semantic HTML, responsive CSS layouts and JavaScript for interactivity, with attention to accessibility, clean structure and interfaces that read clearly.',
    's5.title': 'Tools & Workflow',
    's5.text': 'Git and GitHub for version control, VS Code as the daily environment, debugging through logs and errors, and documentation written for the next person to read it.',
    's6.title': 'Problem Solving',
    's6.text': 'Breaking problems down, tracing failures, debugging a step at a time, and making engineering decisions from constraints and evidence rather than habit.',

    'projects.eyebrow': 'Projects',
    'projects.title': 'Things I built',
    'projects.intro': 'Each of these started as a problem someone actually had. The write-ups keep the constraints in, because the constraints are where the engineering happened.',
    'work.featured': 'Featured',
    'work.inprogress': 'In progress',
    'work.code': 'View code',
    'work.live': 'Live site',

    'w1.tagline': 'Offline-first learning for low-connectivity classrooms',
    'w1.desc': 'Many underserved communities cannot rely on stable internet or consistent power, which makes conventional online learning platforms ineffective. LearnPod is designed offline-first, with accessibility as a hard constraint rather than a later pass.',
    'w1.b1': 'Local content storage on a lightweight database',
    'w1.b2': 'Linux-based environment for stability and control',
    'w1.b3': 'Offline access with periodic manual updates',
    'w1.b4': 'Hardware-aware, low-power system design',
    'w2.tagline': '1.4M+ NYC taxi records turned into a live dashboard',
    'w2.desc': 'A full-stack analytics dashboard with a pipeline that cleans, sorts and loads raw records into MySQL. Distance and sorting algorithms are written from scratch rather than pulled from a library, and Flask REST endpoints feed the charts and maps.',
    'w3.tagline': 'Mobile money SMS parsed into financial insight',
    'w3.desc': 'A backend that parses mobile money SMS and XML exports into structured transactions, categorising and grouping them by type. Built on a MySQL schema with authenticated REST endpoints, and a dashboard that visualises spending trends.',
    'w4.tagline': 'Full-stack storefront for a beauty business',
    'w4.desc': 'Built with Python and Flask, version-controlled throughout. The SQLite schema models products, users and orders; on top of it sit secure authentication, a product catalog, a shopping cart, and the order workflow end to end.',
    'w5.tagline': 'The digital presence behind an education startup',
    'w5.desc': 'Built and deployed the official DASA Africa website ahead of its pilot launch, then carried on leading the technology systems that support its learning programmes.',
    'w6.tagline': 'Linux-based internal network services',
    'w6.desc': 'Designed and configured a Linux intranet environment supporting internal services, secure access and system communication.',
    'w7.tagline': 'Command-line grading with persistent storage',
    'w7.desc': 'A CLI grading system backed by a relational database, with automated grade calculation and persistent storage in SQL.',
    'w8.tagline': 'Decision support for choosing a specialisation',
    'w8.desc': 'A web application that guides Software Engineering students toward a specialisation using structured logic and an interactive interface.',
    'w9.tagline': 'Education and technology, as a global challenge brief',
    'w9.desc': 'A multi-page site communicating a mission, vision and projected impact, with structured mission pages, an interactive contact form and a testimonials feature.',
    'w10.tagline': 'Filtering, task state and date handling in vanilla JS',
    'w10.desc': 'An interactive task manager with filtering, separation of task states and date handling, built without a framework.',

    'contact.eyebrow': 'Contact',
    'contact.title': "Let's talk",
    'contact.intro': 'Open to internships, collaborations and engineering work, particularly anything sitting at the intersection of education and technology. The fastest way to reach me is email.',
    'contact.email': 'Email',
    'contact.emailAction': 'Send a message',
    'contact.linkedinAction': 'Connect',
    'contact.githubAction': 'See the code',
    'contact.elsewhereTitle': 'Elsewhere',
    'contact.elsewhere': 'Based in Beau Plan, Pamplemousses, Mauritius. Portfolio and live builds are at mukiza.tech, and my CV is available below.',
    'contact.cv': 'Download CV'
  });

  DICT.fr = {
    'skip': 'Aller au contenu',
    'nav.home': 'Accueil',
    'nav.about': 'Profil',
    'nav.skills': 'Compétences',
    'nav.projects': 'Projets',
    'nav.contact': 'Contact',
    'footer.note': 'Conçu de zéro. Aucun modèle.',

    'hero.badge': 'Ingénieure logiciel & bâtisseuse de systèmes numériques',
    'hero.tagline': 'Je construis des systèmes qui tiennent hors de la démo.',
    'hero.cta': 'Voir mes projets',

    'journey.eyebrow': 'Le parcours jusqu’ici',
    'journey.title': 'Parcours',
    'journey.intro': 'Six étapes entre un premier stage et les systèmes que je construis aujourd’hui.',

    'j1.meta': 'Févr. 2025 – Aujourd’hui',
    'j1.title': 'Licence en génie logiciel',
    'j1.org': 'African Leadership College of Higher Education',
    'j1.desc': 'Structures de données, bases de données et conception de systèmes, appris en construisant des choses qui doivent réellement tourner.',
    'j2.meta': 'Août 2024 – Déc. 2024',
    'j2.title': 'Stagiaire développeuse web front-end',
    'j2.org': 'Web Design Rwanda Ltd, Kigali',
    'j2.desc': 'Livraison d’un site responsive pour Infinity Hotel Rwanda, en itérant directement avec le client jusqu’à validation.',
    'j3.meta': 'Févr. 2025 – Aujourd’hui',
    'j3.title': 'Boursière de la Mastercard Foundation',
    'j3.org': 'Mastercard Foundation Scholars Program',
    'j3.desc': 'Sélectionnée sur le dossier académique et le leadership, dans un programme axé sur le leadership éthique et l’impact communautaire.',
    'j4.meta': 'Aujourd’hui',
    'j4.title': 'Responsable technologie & systèmes d’apprentissage',
    'j4.org': 'DASA Africa',
    'j4.desc': 'Conception et déploiement du site de l’organisation, et pilotage des systèmes qui soutiennent ses programmes d’apprentissage.',
    'j5.meta': 'Nov. 2025 – Aujourd’hui',
    'j5.title': 'Co-organisatrice étudiante',
    'j5.org': 'TEDxALCHE',
    'j5.desc': 'Co-organisation du premier événement sous licence TED du campus : intervenants, logistique et communication.',
    'j6.meta': 'Juil. 2026 – Août 2026',
    'j6.title': 'Externe MERL',
    'j6.org': 'Teach for Kenya, Nairobi',
    'j6.desc': 'Développement d’un système de reporting qui transforme des données brutes de programme en résultats prêts à la décision.',
    'about.intro': 'Je suis étudiante en génie logiciel à l’African Leadership College of Higher Education. J’apprends en construisant de vrais systèmes, des installations intranet et services Linux jusqu’aux applications backend et aux produits logiciels accessibles. Je privilégie la rigueur, la résolution structurée de problèmes et la vision à long terme plutôt que les raccourcis.',
    'about.panelTitle': 'Un travail orienté impact',
    'about.p1': 'Mon travail suit un principe simple : comprendre comment un logiciel se comporte en conditions réelles, et comment il peut résoudre des problèmes concrets. Cela guide chaque projet, qu’il s’agisse de configurer des services réseau, de déboguer un système ou de concevoir des outils utilisables hors ligne.',
    'about.p2': 'Au-delà de la technique, je veux bâtir des systèmes inclusifs, fiables et centrés sur l’humain. Le génie logiciel ne consiste pas seulement à écrire du code, mais à construire des choses qui durent, qui servent et qui tiennent à l’usage.',
    'about.missionLabel': 'Mission',
    'about.mission': 'Donner aux jeunes Africains des écoles publiques rurales les moyens technologiques de révéler leur potentiel, de transformer leurs talents en opportunités concrètes et de devenir des acteurs du changement qui élèvent leurs communautés et façonnent l’avenir de l’Afrique.',
  };

  Object.assign(DICT.fr, {
    'skills.eyebrow': 'Compétences',
    'skills.title': 'Domaines clés',
    'skills.intro': 'Six domaines que je continue d’affûter, chacun acquis sur un projet plutôt que sur un certificat. Les outils changent ; la façon de raisonner, non.',
    'skills.stack': 'Outils utilisés',
    's1.title': 'Systèmes & réseaux',
    's1.text': 'Configuration de systèmes Linux, déploiements intranet, mise en réseau de services, résolution DNS, contrôle d’accès SSH, ports et pare-feu, et le comportement de l’ensemble une fois les pièces en dialogue.',
    's2.title': 'Backend & logique',
    's2.text': 'Python pour la logique backend et le scripting, résolution structurée de problèmes, flux de contrôle, traitement des données, et du code qui reste lisible longtemps après son écriture.',
    's3.title': 'Bases DevOps',
    's3.text': 'Environnements Linux, gestion des utilisateurs et des permissions, scripts shell, configuration de services, chaînes de déploiement, et Git comme colonne vertébrale de tout cela.',
    's4.title': 'Fondamentaux front-end',
    's4.text': 'HTML sémantique, mises en page CSS responsives et JavaScript pour l’interactivité, avec une attention portée à l’accessibilité, à une structure propre et à des interfaces lisibles.',
    's5.title': 'Outils & méthode',
    's5.text': 'Git et GitHub pour le versionnage, VS Code au quotidien, débogage par les journaux et les erreurs, et une documentation écrite pour la personne qui lira ensuite.',
    's6.title': 'Résolution de problèmes',
    's6.text': 'Décomposer les problèmes, remonter aux causes des pannes, déboguer étape par étape, et décider à partir des contraintes et des faits plutôt que par habitude.',

    'projects.eyebrow': 'Projets',
    'projects.title': 'Ce que j’ai construit',
    'projects.intro': 'Chacun de ces projets est né d’un problème réel. Les descriptions gardent les contraintes, parce que c’est là que se joue l’ingénierie.',
    'work.featured': 'À la une',
    'work.inprogress': 'En cours',
    'work.code': 'Voir le code',
    'work.live': 'Site en ligne',

    'w1.tagline': 'Apprentissage hors ligne pour les salles peu connectées',
    'w1.desc': 'Beaucoup de communautés mal desservies ne peuvent compter ni sur une connexion stable ni sur une électricité constante, ce qui rend les plateformes en ligne classiques inefficaces. LearnPod est conçu hors ligne d’abord, l’accessibilité étant une contrainte de départ et non une retouche.',
    'w1.b1': 'Stockage local des contenus sur une base légère',
    'w1.b2': 'Environnement Linux pour la stabilité et le contrôle',
    'w1.b3': 'Accès hors ligne avec mises à jour manuelles périodiques',
    'w1.b4': 'Conception basse consommation, adaptée au matériel',
    'w2.tagline': 'Plus de 1,4 M de trajets de taxis new-yorkais en tableau de bord',
    'w2.desc': 'Un tableau de bord analytique complet, avec un pipeline qui nettoie, trie et charge les données brutes dans MySQL. Les algorithmes de distance et de tri sont écrits à la main plutôt qu’empruntés à une bibliothèque, et des points d’accès REST Flask alimentent graphiques et cartes.',
    'w3.tagline': 'Des SMS de mobile money transformés en analyse financière',
    'w3.desc': 'Un backend qui transforme les SMS et exports XML de mobile money en transactions structurées, catégorisées et regroupées par type. Bâti sur un schéma MySQL avec des points d’accès REST authentifiés, et un tableau de bord des tendances de dépenses.',
    'w4.tagline': 'Boutique en ligne complète pour une marque de beauté',
    'w4.desc': 'Développée avec Python et Flask, versionnée de bout en bout. Le schéma SQLite modélise produits, utilisateurs et commandes ; au-dessus viennent l’authentification sécurisée, le catalogue, le panier et le parcours de commande complet.',
    'w5.tagline': 'La présence numérique d’une startup éducative',
    'w5.desc': 'Conception et déploiement du site officiel de DASA Africa avant son lancement pilote, puis pilotage continu des systèmes technologiques soutenant ses programmes d’apprentissage.',
    'w6.tagline': 'Services réseau internes sous Linux',
    'w6.desc': 'Conception et configuration d’un environnement intranet Linux prenant en charge les services internes, l’accès sécurisé et la communication système.',
    'w7.tagline': 'Notation en ligne de commande avec stockage persistant',
    'w7.desc': 'Un système de notation en ligne de commande adossé à une base relationnelle, avec calcul automatisé des notes et stockage persistant en SQL.',
    'w8.tagline': 'Aide à la décision pour choisir une spécialisation',
    'w8.desc': 'Une application web qui orientent les étudiants en génie logiciel vers une spécialisation à l’aide d’une logique structurée et d’une interface interactive.',
    'w9.tagline': 'Éducation et technologie, en réponse à un défi mondial',
    'w9.desc': 'Un site multi-pages exposant une mission, une vision et un impact projeté, avec des pages structurées, un formulaire de contact interactif et une section témoignages.',
    'w10.tagline': 'Filtres, états de tâches et dates en JavaScript pur',
    'w10.desc': 'Un gestionnaire de tâches interactif avec filtrage, séparation des états et gestion des dates, construit sans framework.',

    'contact.eyebrow': 'Contact',
    'contact.title': 'Écrivons-nous',
    'contact.intro': 'Ouverte aux stages, aux collaborations et aux missions d’ingénierie, en particulier à l’intersection de l’éducation et de la technologie. Le plus rapide reste l’e-mail.',
    'contact.email': 'E-mail',
    'contact.emailAction': 'Envoyer un message',
    'contact.linkedinAction': 'Se connecter',
    'contact.githubAction': 'Voir le code',
    'contact.elsewhereTitle': 'Ailleurs',
    'contact.elsewhere': 'Basée à Beau Plan, Pamplemousses, Maurice. Portfolio et projets en ligne sur mukiza.tech, et mon CV est disponible ci-dessous.',
    'contact.cv': 'Télécharger le CV'
  });

  /* Kinyarwanda. Written to read naturally rather than to mirror the English
     line for line - some entries are deliberately shorter, because the literal
     rendering was clumsy. Flagged for a native review. */
  DICT.rw = {
    'skip': 'Simbukira ku bikubiyemo',
    'nav.home': 'Ahabanza',
    'nav.about': 'Umwirondoro',
    'nav.skills': 'Ubumenyi',
    'nav.projects': 'Imishinga',
    'nav.contact': 'Twandikire',
    'footer.note': 'Byubatswe uhereye ku busa. Nta nyandiko yifashishijwe.',

    'hero.badge': 'Injeniyeri wa porogaramu n’uwubaka sisitemu z’ikoranabuhanga',
    'hero.tagline': 'Nubaka sisitemu zikomeza gukora no hanze y’igerageza.',
    'hero.cta': 'Reba imirimo yanjye',

    'journey.eyebrow': 'Urugendo kugeza ubu',
    'journey.title': 'Urugendo',
    'journey.intro': 'Intambwe esheshatu kuva ku kazi rya mbere kugeza ku sisitemu nubaka ubu.',

    'j1.meta': 'Gashyantare 2025 – Ubu',
    'j1.title': 'Impamyabumenyi mu bwubatsi bwa porogaramu',
    'j1.org': 'African Leadership College of Higher Education',
    'j1.desc': 'Imiterere y’amakuru, ububiko bw’amakuru n’igishushanyo cya sisitemu, byize mu kubaka ibintu bigomba gukora koko.',
    'j2.meta': 'Kanama 2024 – Ukuboza 2024',
    'j2.title': 'Umumenyereza mu bwubatsi bw’urubuga',
    'j2.org': 'Web Design Rwanda Ltd, Kigali',
    'j2.desc': 'Nubatse urubuga rukorera ku bikoresho byose kuri Infinity Hotel Rwanda, mvugana n’umukiriya kugeza abyemeje.',
    'j3.meta': 'Gashyantare 2025 – Ubu',
    'j3.title': 'Umunyeshuri wa Mastercard Foundation',
    'j3.org': 'Mastercard Foundation Scholars Program',
    'j3.desc': 'Natoranyijwe hashingiwe ku myigire n’ubuyobozi, mu gahunda yibanda ku buyobozi bwiza n’iterambere ry’abaturage.',
    'j4.meta': 'Ubu',
    'j4.title': 'Umuyobozi w’ikoranabuhanga na sisitemu z’uburezi',
    'j4.org': 'DASA Africa',
    'j4.desc': 'Nubatse kandi nshyira ku murongo urubuga rw’umuryango, kandi nyobora sisitemu zishyigikira gahunda zayo z’uburezi.',
    'j5.meta': 'Ugushyingo 2025 – Ubu',
    'j5.title': 'Umunyeshuri uhuza gahunda',
    'j5.org': 'TEDxALCHE',
    'j5.desc': 'Mfatanya gutegura igikorwa cya mbere cya TED kuri kaminuza: abavuga, imitunganyirize n’itangazabumenyi.',
    'j6.meta': 'Nyakanga 2026 – Kanama 2026',
    'j6.title': 'Umumenyereza muri MERL',
    'j6.org': 'Teach for Kenya, Nairobi',
    'j6.desc': 'Nubaka sisitemu ihindura amakuru mabisi ya gahunda mo raporo zifasha gufata ibyemezo.',
    'about.intro': 'Ndi umunyeshuri w’ubwubatsi bwa porogaramu muri African Leadership College of Higher Education. Nyiga mu kubaka sisitemu nyazo, kuva kuri intranet na serivisi za Linux kugeza kuri porogaramu z’inyuma n’ibicuruzwa by’ikoranabuhanga byoroshye kugerwaho. Nshyira imbere umurava, gukemura ibibazo mu buryo butunganye, n’ibitekerezo birebire aho gufata inzira ngufi.',
    'about.panelTitle': 'Akazi kaharanira ingaruka nziza',
    'about.p1': 'Akazi kanjye kagenderwa ku ihame ryoroshye: kumva uko porogaramu yitwara mu bihe nyakuri, n’uko ishobora gukemura ibibazo bifatika. Ibyo bigenga umushinga wose, waba ari gutunganya serivisi za murandasi, gukemura ikibazo cya sisitemu, cyangwa kubaka ibikoresho bikora nta murandasi.',
    'about.p2': 'Hejuru y’ikoranabuhanga, nshaka kubaka sisitemu zirimo bose, zizewe kandi zishingiye ku muntu. Ubwubatsi bwa porogaramu ntabwo ari gusa kwandika kode. Ni kubaka ibintu birambye, bifasha, kandi bikomeza gukora mu mikoreshwa.',
    'about.missionLabel': 'Intego',
    'about.mission': 'Guha urubyiruko rw’Afurika rwo mu mashuri ya Leta yo mu cyaro ikoranabuhanga rifungura ubushobozi bwabo, rihindura impano zabo amahirwe afatika, kandi ribategurira kuba abahinduzi bazamura imiryango yabo kandi bubaka ejo hazaza h’Afurika.',

    'skills.eyebrow': 'Ubumenyi',
    'skills.title': 'Ibyo nibandaho',
    'skills.intro': 'Inzego esheshatu nkomeza kunoza, buri imwe navanye ku mushinga aho kuva ku mpamyabumenyi. Ibikoresho birahinduka; uburyo bwo gutekereza ntibuhinduka.',
    'skills.stack': 'Ibikoresho nkoresha',
    's1.title': 'Sisitemu n’imiyoboro',
    's1.text': 'Gutunganya sisitemu za Linux, gushyiraho intranet, guhuza serivisi, DNS, kugenzura uburenganzira bwa SSH, ports na firewall, n’uko ibice byitwara iyo bimaze kuvugana.',
    's2.title': 'Porogaramu z’inyuma na logika',
    's2.text': 'Python mu porogaramu z’inyuma no mu scripting, gukemura ibibazo mu buryo butunganye, gucunga amakuru, na kode ikomeza kumvikana igihe kirekire nyuma y’uko yanditswe.',
    's3.title': 'Ibanze rya DevOps',
    's3.text': 'Ibidukikije bya Linux, gucunga abakoresha n’uburenganzira, scripts za shell, gutunganya serivisi, inzira zo gushyira ku murongo, na Git nk’urutirigongo rwa byose.',
    's4.title': 'Ibanze by’urubuga',
    's4.text': 'HTML ifite ubusobanuro, imiterere ya CSS ihinduka ku bikoresho byose, na JavaScript, hitaweho ku bworoherane, imiterere isukuye n’imigaragaza yumvikana.',
    's5.title': 'Ibikoresho n’uburyo bwo gukora',
    's5.text': 'Git na GitHub mu kubika impinduka, VS Code buri munsi, gukemura amakosa hifashishijwe raporo n’amakosa, n’inyandiko zanditswe ku bw’uzazikurikira.',
    's6.title': 'Gukemura ibibazo',
    's6.text': 'Kumena ibibazo mo uduce, gushakisha inkomoko y’amakosa, gukemura intambwe ku yindi, no gufata ibyemezo bishingiye ku mbogamizi n’ibimenyetso aho kugendera ku mugenzo.',

    'projects.eyebrow': 'Imishinga',
    'projects.title': 'Ibyo nubatse',
    'projects.intro': 'Buri mushinga watangiye ku kibazo nyakuri umuntu yari afite. Ibisobanuro birimo imbogamizi, kuko ari aho ubwubatsi bwabereye.',
    'work.featured': 'Wibanzweho',
    'work.inprogress': 'Uracyakorwa',
    'work.code': 'Reba kode',
    'work.live': 'Urubuga rukora',

    'w1.tagline': 'Kwiga nta murandasi mu byumba bidafite umuyoboro uhamye',
    'w1.desc': 'Imiryango myinshi idafite serivisi ihagije ntishobora kwiringira murandasi ihamye cyangwa amashanyarazi ahoraho, bituma urubuga rwo kwiga kuri murandasi rudakora. LearnPod yubatswe yibanda ku gukora nta murandasi, kandi kugerwaho ni imbogamizi y’ibanze, atari inyongera.',
    'w1.b1': 'Kubika ibikubiyemo aho ngaho mu ububiko buto',
    'w1.b2': 'Ibidukikije bya Linux ku bw’umutekano n’ubugenzuzi',
    'w1.b3': 'Kugera ku bikubiyemo nta murandasi, hamwe n’ivugururwa rya buri gihe',
    'w1.b4': 'Igishushanyo gikoresha ingufu nkeya, gihuye n’ibikoresho',
    'w2.tagline': 'Miliyoni 1.4 z’ingendo za taxi za New York mu dashboard',
    'w2.desc': 'Dashboard yuzuye isesengura, ifite pipeline isukura, itondeka kandi ishyira amakuru mabisi muri MySQL. Algorithms zibara intera no gutondeka zanditswe uhereye ku busa aho kuzikura mu isomero, kandi REST za Flask zigaburira imbonerahamwe n’ikarita.',
    'w3.tagline': 'Ubutumwa bwa mobile money buhindurwa isesengura ry’imari',
    'w3.desc': 'Sisitemu y’inyuma ihindura ubutumwa bugufi na XML ya mobile money mo ibikorwa bitunganye, ibishyira mu byiciro. Yubatswe kuri MySQL hamwe na REST zisaba kwinjira, n’ikibaho kigaragaza uko amafaranga akoreshwa.',
    'w4.tagline': 'Iduka rikora ryuzuye ry’ubucuruzi bw’ubwiza',
    'w4.desc': 'Yubatswe na Python na Flask, ibika impinduka zose. Imiterere ya SQLite igaragaza ibicuruzwa, abakoresha n’ibyatumijwe; hejuru yabyo hari kwinjira kwizewe, urutonde rw’ibicuruzwa, agasanduku k’ubuguzi, n’inzira yose y’itumiza.',
    'w5.tagline': 'Ubuvugizi bwa ikoranabuhanga bw’isosiyete y’uburezi',
    'w5.desc': 'Nubatse kandi nshyira ku murongo urubuga rwemewe rwa DASA Africa mbere y’itangira ry’igerageza, hanyuma nkomeza kuyobora sisitemu z’ikoranabuhanga zishyigikira gahunda zayo z’uburezi.',
    'w6.tagline': 'Serivisi z’imiyoboro y’imbere zubatse kuri Linux',
    'w6.desc': 'Nashushanyije kandi ntunganya intranet ya Linux ishyigikira serivisi z’imbere, kwinjira kwizewe n’itumanaho rya sisitemu.',
    'w7.tagline': 'Gutanga amanota kuri terminal hamwe n’ububiko buhoraho',
    'w7.desc': 'Sisitemu itanga amanota kuri terminal ishingiye ku ububiko bufitanye isano, ibara amanota mu buryo bwikora kandi ibika muri SQL.',
    'w8.tagline': 'Ubufasha mu kwihitiramo icyerekezo cy’imyigire',
    'w8.desc': 'Porogaramu y’urubuga iyobora abanyeshuri b’ubwubatsi bwa porogaramu mu kwihitiramo icyerekezo, hifashishijwe logika itunganye n’imigaragaza ikorana n’umukoresha.',
    'w9.tagline': 'Uburezi n’ikoranabuhanga, nk’igisubizo ku kibazo mpuzamahanga',
    'w9.desc': 'Urubuga rufite impapuro nyinshi rugaragaza intego, icyerekezo n’ingaruka biteganyijwe, hamwe n’ifishi yo kutwandikira n’igice cy’ubuhamya.',
    'w10.tagline': 'Guhitamo, imiterere y’imirimo n’amatariki muri JavaScript gusa',
    'w10.desc': 'Umucungamirimo ukorana n’umukoresha ufite guhitamo, gutandukanya imiterere y’imirimo no gucunga amatariki, wubatswe nta framework.',

    'contact.eyebrow': 'Twandikire',
    'contact.title': 'Tuvugane',
    'contact.intro': 'Nifuza amahirwe y’imyitozo, ubufatanye n’akazi k’ubwubatsi, cyane cyane ibihuza uburezi n’ikoranabuhanga. Inzira yihuse ni imeyili.',
    'contact.email': 'Imeyili',
    'contact.emailAction': 'Ohereza ubutumwa',
    'contact.linkedinAction': 'Twifatanye',
    'contact.githubAction': 'Reba kode',
    'contact.elsewhereTitle': 'Ahandi',
    'contact.elsewhere': 'Mba i Beau Plan, Pamplemousses, Mauritius. Imirimo n’imishinga ikora iri kuri mukiza.tech, kandi CV yanjye iri hasi.',
    'contact.cv': 'Kuramo CV'
  };

  /* The theme button rewrites its own accessible name when it is pressed, so
     it needs these keys available outside this file. */
  Object.assign(DICT.en, {
    'theme.toDark': 'Switch to dark theme',
    'theme.toLight': 'Switch to light theme'
  });
  Object.assign(DICT.fr, {
    'theme.toDark': 'Passer au thème sombre',
    'theme.toLight': 'Passer au thème clair'
  });
  Object.assign(DICT.rw, {
    'theme.toDark': 'Hindukira ku nsanganyamatsiko y’umwijima',
    'theme.toLight': 'Hindukira ku nsanganyamatsiko y’urumuri'
  });

  Object.assign(DICT.en, {
    'about.badge': 'About me',
    'about.leadIn': "I'm a",
    'about.chip': 'Software',
    'about.leadOut': 'Engineer building systems that serve.',
  });

  Object.assign(DICT.fr, {
    'about.badge': 'À propos',
    'about.leadIn': 'Je suis',
    'about.chip': 'ingénieure',
    'about.leadOut': 'logicielle qui bâtit des systèmes utiles.',
  });

  Object.assign(DICT.rw, {
    'about.badge': 'Ibinyerekeyeho',
    'about.leadIn': 'Ndi',
    'about.chip': 'injeniyeri',
    'about.leadOut': 'wa porogaramu ubaka sisitemu zifasha.',
  });

  /* ----------------------------------------------------------------------
     Engine
     ---------------------------------------------------------------------- */

  var SUPPORTED = ['en', 'fr', 'rw'];
  var STORAGE_KEY = 'lang';

  /* Missing keys fall through to English rather than rendering the raw key,
     so a half-finished translation degrades to readable text. */
  function text(key, lang) {
    var active = lang || document.documentElement.getAttribute('lang') || 'en';
    var table = DICT[active] || DICT.en;
    return Object.prototype.hasOwnProperty.call(table, key) ? table[key] : DICT.en[key];
  }

  function apply(lang) {
    document.documentElement.setAttribute('lang', lang);

    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var value = text(el.getAttribute('data-i18n'), lang);
      if (typeof value === 'string') el.textContent = value;
    });

    document.querySelectorAll('[data-i18n-aria]').forEach(function (el) {
      var value = text(el.getAttribute('data-i18n-aria'), lang);
      if (typeof value === 'string') el.setAttribute('aria-label', value);
    });

    document.querySelectorAll('.lang__btn').forEach(function (btn) {
      btn.setAttribute('aria-pressed', String(btn.getAttribute('data-lang') === lang));
    });

    document.dispatchEvent(new CustomEvent('languagechange', { detail: { lang: lang } }));
  }

  function stored() {
    try {
      return localStorage.getItem(STORAGE_KEY);
    } catch (error) {
      return null;
    }
  }

  var initial = stored();

  if (SUPPORTED.indexOf(initial) === -1) {
    var fromBrowser = (navigator.language || 'en').slice(0, 2).toLowerCase();
    initial = SUPPORTED.indexOf(fromBrowser) === -1 ? 'en' : fromBrowser;
  }

  apply(initial);

  document.querySelectorAll('.lang__btn').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var lang = btn.getAttribute('data-lang');
      if (SUPPORTED.indexOf(lang) === -1) return;
      apply(lang);
      try {
        localStorage.setItem(STORAGE_KEY, lang);
      } catch (error) {
        /* Private mode blocks writes; the choice still holds for this page. */
      }
    });
  });

  window.i18nText = text;
})();
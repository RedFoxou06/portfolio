const projects = [
    {
        id: 1,
        title: "HomePage",
        languages: ["HTML", "CSS", "JS"],
        type: ["Personnel"],
        software: ["IntelliJ" , "Git"],
        thumb: "img/homepage/logo_homepage.png",
        desc: "Je me suis fait une homepage pour mon pc fixe. Cette homepage me permet d'ouvrir des applications via des boutons accessibles sur la page ou me propose des idées quand je m'ennuie. J'ai également ajouté un mode sombre pour quand il se fait tard.",
        images: ["img/homepage/mode-clair.png", "img/homepage/mode-sombre.png"],
        github: "https://github.com/RedFoxou06/HomePage",
        link: "https://homepage.redfoxou.dev"
    },
    {
        id: 2,
        title: "Dashboard",
        languages: ["PHP", "HTML", "CSS", "JavaScript"],
        type: ["Personnel"],
        software: ["IntelliJ" , "Git"],
        thumb: "img/dashboard/dashboard.jpg",
        desc: "Il s'agit d'une application web qui me sert de dashboard pour suivre mes projets. Elle permet d'ajouter une tâche ainsi qu'une date limite. On peut ensuite modifier l'état de cette tâche : si elle est à faire, en cours ou terminée.",
        images: ["img/dashboard/dashboard_1.png"],
        github: "https://github.com/RedFoxou06/dashboard",
        link: "https://dashboard.redfoxou.dev"
    },
    {
        id: 3,
        title: "Lecteur MP3",
        languages: ["Python"],
        type: ["Personnel"],
        software: ["PyCharm", "Git"],
        thumb: "img/lecteur_mp3/lecteur_mp3.jpg",
        desc: "J'ai créé un lecteur mp3 fonctionnel. Il ne s'agit que d'un squelette sans design et une des fonctionnalités ne marche pas. On peut notamment charger des fichiers mp3 dedans, les écouter, régler le volume et quelques autres options basiques.",
        images: ["img/lecteur_mp3/lecteur_mp3_1.png"],
        github: "https://github.com/RedFoxou06/music-player-python"
    },
    {
        id: 4,
        title: "Attaque brute force",
        languages: ["Python"],
        type: ["Personnel"],
        software: ["PyCharm" , "Git" , "ChatGPT"],
        thumb: "img/brut_force/logo_brut_force.png",
        desc: "J'aime la cybersécurité et j'ai voulu tester une attaque brute force. J'ai donc fait un programme en Python pour tenter de deviner un mot de passe que j'initialisais. J'ai également demandé à ChatGPT un programme similaire mais plus performant. Comparer nos programmes m'a permis de comprendre certaines erreurs que j'avais commises. Ce projet est éducatif, je ne l’utilise pas pour nuire ni le partager comme outil de hacking.",
        images: ["img/brut_force/brut_force_1.png", "img/brut_force/brut_force_2.png", "img/brut_force/brut_force_3.png", "img/brut_force/brut_force_4.png"],
        github: "https://github.com/RedFoxou06/brut_force"
    },
    {
        id: 5,
        title: "Générateur de mot de passe",
        languages: ["Python"],
        type: ["Personnel"],
        software: ["VS Code", "PyInstaller", "Git"],
        thumb: "img/generateur_mdp/logo_generateur_mdp.png",
        desc: "Après avoir essayé une attaque brute force à but éducatif. J'ai également cherché à contrer ce genre d'attaque, une des solutions étant d'avoir un mot de passe solide. J'ai donc fait un générateur de mot de passe en python et j'en ai fait une vraie application qui génèrent un mot de passe selon certains critères que l'on peut sélectionnés. À voir pour le mettre sur une page HTML dans le futur.",
        images: ["img/generateur_mdp/generateur_mdp_1.png", "img/generateur_mdp/generateur_mdp_2.png", "img/generateur_mdp/generateur_mdp_3.png", "img/generateur_mdp/generateur_mdp_4.png"],
        github: "https://github.com/RedFoxou06/generateur_mdp"
    },
    {
        id: 6,
        title: "Convertisseur",
        languages: ["HTML", "CSS", "JavaScript"],
        type: ["Personnel"],
        software: ["IntelliJ", "Git"],
        thumb: "img/convertisseur/logo_convertisseur.png",
        desc: "Ayant toujours aimé les codes comme dans les films d'agents secrets. J'ai créé mon propre code. Chaque code de chaque caractère a été généré par mon propre générateur de mot de passe après avoir modifié la longueur souhaitée.",
        images: ["img/convertisseur/convertisseur_1.png", "img/convertisseur/convertisseur_2.png"],
        github: "https://github.com/RedFoxou06/convertisseur",
        link: "https://convertisseur.redfoxou.dev"
    },
    {
        id: 7,
        title: "ValoApp",
        languages: ["Java", "JavaFX", "FXML"],
        type: ["Personnel"],
        software: ["IntelliJ" , "Git" , "Scene Builder", "Gradle"],
        thumb: "img/valorant/logo_valorant.png",
        desc: "J'ai réalisé une application sur un de mes jeux préférés : Valorant. Il s'agit d'une application de gestion de compte Valorant. Cette application n'est pas finie mais je trouve important de la montrer car la créer m'a beaucoup appris.",
        images: ["/img/valorant/valorant_1.png"],
        github: "https://github.com/RedFoxou06/ValoApp"
    },
    {
        id: 8,
        title: "Site Valorant",
        languages: ["HTML", "CSS", "JS"],
        type: ["Personnel"],
        software: ["IntelliJ" , "Git"],
        thumb: "img/site_valo/logo_valorant_site.png",
        desc: "Un petit site sur Valorant où je présente mes personnages ou maps préférés. J'y présente également mes statistiques sur le jeu ainsi que celles d'un de mes doubles comptes. Je joue quand même à d'autres jeux que Valorant mais c'est certainement un des jeux où j'ai passé le plus de temps et qui compte beaucoup pour moi.",
        images: ["img/site_valo/site_valo_1.png", "img/site_valo/site_valo_2.png"],
        github: "https://github.com/RedFoxou06/site-valo",
        link: "https://valorant.redfoxou.dev"
    },
    {
        id: 9,
        title: "Gestion d'eau",
        languages: ["Java", "JavaFX", "FXML"],
        type: ["Scolaire"],
        software: ["IntelliJ" , "Git" , "Scene Builder", "Gradle"],
        thumb: "img/gestion_eau/logo_gestion_eau.png",
        desc: "Cette application a été réalisée en groupe lors de projets donnés par notre université. C'est une application simple permettant de gérer les stocks d'eau, les différents clients et les différentes commandes. Travailler en groupe nous a surtout appris à nous coordonner et à utiliser Git.",
        images: ["img/gestion_eau/gestion_eau_1.png", "img/gestion_eau/gestion_eau_2.png", "img/gestion_eau/gestion_eau_3.png", "img/gestion_eau/gestion_eau_4.png"],
        github: "https://github.com/RedFoxou06/appli-de-gestion-d-eau"
    },
    {
        id: 10,
        title: "Jeu 2048",
        languages: ["Java", "JavaFX", "FXML"],
        type: ["Scolaire"],
        software: ["IntelliJ" , "Git" , "Scene Builder", "Gradle"],
        thumb: "img/jeu_2048/logo_jeu_2048.png",
        desc: "Il s'agit du jeu classique 2048. Le but est de déplacer les cases sur la grille pour les combiner et atteindre la case 2048. On gagne lorsque cette case apparaît, mais on peut continuer à jouer pour obtenir des scores encore plus élevés. Ce jeu est utile pour entraîner sa stratégie et sa réflexion logique.",
        images: ["img/jeu_2048/jeu_2048_1.png"],
        github: "https://github.com/RedFoxou06/jeu-2048"
    },
    {
        id: 11,
        title: "Lights Off",
        languages: ["Java", "JavaFX", "FXML"],
        type: ["Scolaire"],
        software: ["IntelliJ" , "Git" , "Scene Builder", "Gradle"],
        thumb: "img/lights_off/logo_lights_off.png",
        desc: "Il s'agit du jeu classique Lights Off. Le but est de cliquer sur une lumière pour changer son état ainsi que celui de ses voisins. On gagne lorsque toutes les lumières sont éteintes. C’est un excellent jeu pour entraîner sa logique et sa manière de penser.",
        images: ["img/lights_off/lights_off_1.png"],
        github: "https://github.com/RedFoxou06/lights-off"
    },
    {
        id: 12,
        title: "Bomberman",
        languages: ["Java", "JavaFX", "FXML"],
        type: ["Scolaire"],
        software: ["IntelliJ", "Git", "Scene Builder", "Gradle"],
        thumb: "img/bomberman/logo_bomberman.png",
        desc: "Nous avons codé en cours un bomberman avec JavaFX et SceneBuilder. Il ne s'agit que de l'affichage du plateau, avec le personnage et des ennemis ainsi que de l'explosion des bombes. Il nous sera demandé cette année de l'améliorer et le finir.",
        images: ["img/bomberman/bomberman_1.png", "img/bomberman/bomberman_2.png"],
        github: "https://github.com/RedFoxou06/Bomberman"
    },
    {
        id: 13,
        title: "JamYard",
        languages: ["PHP", "Laravel", "CSS"],
        type: ["Scolaire"],
        software: ["PhpStorm", "Git"],
        thumb: "img/jamyard/jamyard_logo.png",
        desc: "Réalisation d'un projet web complet dans un temps imparti très restreint. L'objectif de ce Marathon était de concevoir, développer et déployer une application fonctionnelle de A à Z. Mon groupe et moi avons crée JamYard, une plateforme de partage musical. Ce projet a mis à l'épreuve ma réactivité technique sous Laravel et ma capacité à traduire une identité visuelle forte en un site web ergonomique et sécurisé.",
        images: ["img/jamyard/jamyard_1.png", "img/jamyard/jamyard_2.png", "img/jamyard/jamyard_3.png"],
        github: "https://github.com/RedFoxou06/marathon-web"
    }
];

let activeFilters = [];
let searchQuery = "";

const gallery = document.getElementById('gallery');
const searchInput = document.getElementById('searchInput');
const langFiltersContainer = document.getElementById('lang-filters');
const typeFiltersContainer = document.getElementById('type-filters');
const softFiltersContainer = document.getElementById('soft-filters');
const modal = document.getElementById('modal');

init();

function init() {
    renderFilters();
    renderProjects();
    searchInput.addEventListener('input', (e) => {
        searchQuery = e.target.value.toLowerCase();
        renderProjects();
    });
}

function renderFilters() {
    const allLangs = [...new Set(projects.flatMap(p => p.languages || []))];
    const allTypes = [...new Set(projects.flatMap(p => p.type || []))];
    const allSofts = [...new Set(projects.flatMap(p => p.software || []))];

    allLangs.forEach(tag => createFilterBtn(tag, 'lang', langFiltersContainer));
    allTypes.forEach(tag => createFilterBtn(tag, 'type', typeFiltersContainer));
    allSofts.forEach(tag => createFilterBtn(tag, 'soft', softFiltersContainer));
}

function createFilterBtn(tag, category, container) {
    const btn = document.createElement('div');
    btn.className = `tag ${category}`;
    btn.innerText = tag;
    btn.onclick = () => toggleFilter(tag, btn, category);
    container.appendChild(btn);
}

function toggleFilter(tag, btn, category) {

    if (category === 'type') {
        const typeButtons = typeFiltersContainer.children;

        for (let otherBtn of typeButtons) {
            if (otherBtn !== btn && otherBtn.classList.contains('active')) {
                otherBtn.classList.remove('active');
                const tagToRemove = otherBtn.innerText;
                activeFilters = activeFilters.filter(t => t !== tagToRemove);
            }
        }
    }

    if (activeFilters.includes(tag)) {
        activeFilters = activeFilters.filter(t => t !== tag);
        btn.classList.remove('active');
    } else {
        activeFilters.push(tag);
        btn.classList.add('active');
    }
    renderProjects();
}

function resetFilters() {
    activeFilters = [];
    searchQuery = "";
    searchInput.value = "";
    document.querySelectorAll('.tag').forEach(b => b.classList.remove('active'));
    renderProjects();
}

function renderProjects() {
    gallery.innerHTML = "";
    const filtered = projects.filter(p => {
        const textMatch = p.title.toLowerCase().includes(searchQuery) || p.desc.toLowerCase().includes(searchQuery);

        const pTags = [...(p.languages || []), ...(p.type || []), ...(p.software || [])];

        const tagMatch = activeFilters.length === 0 || activeFilters.every(t => pTags.includes(t));

        return textMatch && tagMatch;
    });

    if (filtered.length === 0) {
        gallery.innerHTML = `<div class="no-results">Aucun projet ne correspond exactement à ces critères.</div>`;
        return;
    }

    filtered.forEach(p => {
        const card = document.createElement('div');
        card.className = 'project-card';
        card.onclick = () => openModal(p);

        let tagsHTML = '';
        (p.languages || []).forEach(t => tagsHTML += `<span class="tag lang">${t}</span>`);
        (p.type || []).forEach(t => tagsHTML += `<span class="tag type">${t}</span>`);
        (p.software || []).forEach(t => tagsHTML += `<span class="tag soft">${t}</span>`);

        card.innerHTML = `
            <div class="card-thumb-box"><img src="${p.thumb}" alt="${p.title}"></div>
            <div class="card-content">
                <h3>${p.title}</h3>
                <p>${p.desc.substring(0, 60)}...</p>
                <div class="card-tags">${tagsHTML}</div>
            </div>
        `;
        gallery.appendChild(card);
    });
}

function openModal(p) {
    let tagsHTML = '';
    (p.languages || []).forEach(t => tagsHTML += `<span class="tag lang">${t}</span>`);
    (p.type || []).forEach(t => tagsHTML += `<span class="tag type">${t}</span>`);
    (p.software || []).forEach(t => tagsHTML += `<span class="tag soft">${t}</span>`);

    let buttonsHTML = '';
    if (p.github) {
        buttonsHTML += `
            <a href="${p.github}" target="_blank" class="btn-modal btn-github">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                GitHub
            </a>`;
    }
    if (p.link) {
        buttonsHTML += `
            <a href="${p.link}" target="_blank" class="btn-modal btn-web">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                Voir en ligne
            </a>`;
    }

    const galleryHTML = p.images && p.images.length > 0
        ? p.images.map(src => `<img src="${src}" alt="Capture d'écran">`).join('')
        : '<p style="font-style:italic; color:#aaa;">Pas de captures d\'écran disponibles.</p>';

    const modalScroll = document.querySelector('.modal-scroll');
    modalScroll.innerHTML = `
        <div class="modal-header-section">
            <img src="${p.thumb}" class="modal-logo" alt="Logo du projet">
            <div class="modal-header-info">
                <h2 id="m-title">${p.title}</h2>
                <div class="modal-tags">${tagsHTML}</div>
                <div class="modal-actions">${buttonsHTML}</div>
            </div>
        </div>
        <div class="modal-body-section">
            <p id="m-desc">${p.desc}</p>
        </div>
        <div class="modal-gallery-section">
            <span class="gallery-title">Aperçus</span>
            <div class="screenshots-grid">
                ${galleryHTML}
            </div>
        </div>
    `;

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
}
modal.onclick = (e) => { if(e.target === modal) closeModal(); }
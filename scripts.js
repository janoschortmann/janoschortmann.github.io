const translations = {
    en: {
        headerTitle: "Janosch Ortmann",
        home: "Home page",
        publications: "Publications",
        teaching: "Teaching",
        contact: "Contact",
        links: "Links",
        intro: "I am an associate professor in the Department of Analytics, Operations and IT...",
        affiliations: "I am a member of the probability lab in the Centre de recherches mathématiques...",
        researchInterestsTitle: "Research Interests",
        researchInterestsContent: "My main mathematical research interest lies in studying random particle systems...",
        recentPreprintsTitle: "Recent Preprints",
        recentPreprintsContent: "Coupling derivation of optimal-order central moment bounds in exponential last-passage percolation...",
    },
    fr: {
        headerTitle: "Janosch Ortmann",
        home: "Page d'accueil",
        publications: "Publications",
        teaching: "Enseignement",
        contact: "Contact",
        links: "Liens",
        intro: "Je suis professeur associé au Département d'analytique, opérations et TI...",
        affiliations: "Je suis membre du laboratoire de probabilités au Centre de recherches mathématiques...",
        researchInterestsTitle: "Intérêts de recherche",
        researchInterestsContent: "Mon principal intérêt en recherche mathématique porte sur l'étude des systèmes de particules...",
        recentPreprintsTitle: "Prépublications récentes",
        recentPreprintsContent: "Dérivation de couplage des bornes de moment central d'ordre optimal...",
    },
    de: {
        headerTitle: "Janosch Ortmann",
        home: "Startseite",
        publications: "Veröffentlichungen",
        teaching: "Lehre",
        contact: "Kontakt",
        links: "Links",
        intro: "Ich bin außerordentlicher Professor im Department für Analytik, Betrieb und IT...",
        affiliations: "Ich bin Mitglied des Wahrscheinlichkeitslabors am Centre de recherches mathématiques...",
        researchInterestsTitle: "Forschungsinteressen",
        researchInterestsContent: "Mein Hauptinteresse in der mathematischen Forschung liegt in der Untersuchung von Teilchensystemen...",
        recentPreprintsTitle: "Neueste Vorabdrucke",
        recentPreprintsContent: "Kopplungsableitung von Momentenbindungen der optimalen Ordnung in der exponentiellen Last-Passage-Perkolation...",
    }
};

function changeLanguage() {
    const language = document.getElementById("languageSelector").value;
    for (const key in translations[language]) {
        document.getElementById(key).textContent = translations[language][key];
    }
}

window.onload = () => changeLanguage();

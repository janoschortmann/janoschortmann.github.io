const translations = {
    en: {
        headerTitle: "Janosch Ortmann",
        home: "Home page",
        publications: "Publications",
        teaching: "Teaching",
        contact: "Contact",
        links: "Links",
        intro: "I am an associate professor in the Department of Analytics, Operations and IT at the school of management (ESG) of the University of Québec in Montréal (UQAM).",
        affiliations: "I am a member of the probability lab in the Centre de recherches mathématiques (CRM) and a full member of GERAD. I am also part of the research group on optimization and health at UQAM (opt-health).",
        researchInterestsTitle: "Research Interests",
        researchInterestsContent: "My main mathematical research interest lies in studying random particle systems and polymer models, particularly in the framework of stochastic integrable systems and the KPZ universality theory. The study of these models turns out to have interesting connections with various areas of mathematics, including algebra, queueing theory, and combinatorics (via geometric analogues of the Robinson-Schensted-Knuth correspondence). I am also interested in random matrix theory and probabilistic aspects of free probability theory. On a more applied side, I am interested in the application of probabilistic modelling and machine learning in medicine, operations research, and humanitarian logistics.",
        recentPreprintsTitle: "Recent Preprints",
        recentPreprintsContent: `
            <ul>
                <li><i>Coupling derivation of optimal-order central moment bounds in exponential last-passage percolation</i> (with Elnur Emrah and Nicos Georgiou). <a href="https://arxiv.org/abs/2204.06613">arXiv</a>.</li>
                <li><i>Problem-Driven Scenario Clustering in Stochastic Optimization</i> (with Julien Keutchayan and Walter Rei). <a href="https://arxiv.org/abs/2106.11717">arXiv</a>.</li>
                <li><i>A machine learning approach to deal with ambiguity in humanitarian decision making</i> (with Emilia Graß, Burcu Balcik, and Walter Rei). <a href="https://www.cirrelt.ca/DocumentsTravail/CIRRELT-2021-51.pdf">CIRRELT-2021-51</a></li>
                <li><i>Evaluation of statistical approaches for association testing in noisy drug screening data</i> (Smirnov P, Smith I, Safikhani Z, Ba-alawi W, Khodakarami W, Lin E, Yu Y, Martin S, Ortmann J, Aittokallio T, Hafner M, Haibe-Kains B). <a href="https://arxiv.org/abs/2104.14036">arXiv</a></li>
            </ul>`
    },
    fr: {
        headerTitle: "Janosch Ortmann",
        home: "Page d'accueil",
        publications: "Publications",
        teaching: "Enseignement",
        contact: "Contact",
        links: "Liens",
        intro: "Je suis professeur associé au Département d'analytique, opérations et TI à l'école de gestion (ESG) de l'Université du Québec à Montréal (UQAM).",
        affiliations: "Je suis membre du laboratoire de probabilités au Centre de recherches mathématiques (CRM) et membre à part entière de GERAD. Je fais également partie du groupe de recherche sur l'optimisation et la santé à l'UQAM (opt-health).",
        researchInterestsTitle: "Intérêts de recherche",
        researchInterestsContent: "Mon principal intérêt en recherche mathématique porte sur l'étude des systèmes de particules aléatoires et des modèles de polymères, en particulier dans le cadre des systèmes intégrables stochastiques et de la théorie de l'universalité KPZ. L'étude de ces modèles révèle des connexions intéressantes avec divers domaines des mathématiques, y compris l'algèbre, la théorie des files d'attente et la combinatoire (via des analogues géométriques de la correspondance Robinson-Schensted-Knuth). Je m'intéresse également à la théorie des matrices aléatoires et aux aspects probabilistes de la théorie de la probabilité libre. D'un côté plus appliqué, je m'intéresse à l'application de la modélisation probabiliste et de l'apprentissage automatique en médecine, en recherche opérationnelle et en logistique humanitaire.",
        recentPreprintsTitle: "Prépublications récentes",
        recentPreprintsContent: translations.en.recentPreprintsContent
    },
    de: {
        headerTitle: "Janosch Ortmann",
        home: "Startseite",
        publications: "Veröffentlichungen",
        teaching: "Lehre",
        contact: "Kontakt",
        links: "Links",
        intro: "Ich bin außerordentlicher Professor im Department für Analytik, Betrieb und IT an der Fakultät für Management (ESG) der Universität Québec in Montréal (UQAM).",
        affiliations: "Ich bin Mitglied des Wahrscheinlichkeitslabors am Centre de recherches mathématiques (CRM) und Vollmitglied von GERAD. Außerdem bin ich Teil der Forschungsgruppe für Optimierung und Gesundheit an der UQAM (opt-health).",
        researchInterestsTitle: "Forschungsinteressen",
        researchInterestsContent: "Mein Hauptinteresse in der mathematischen Forschung liegt in der Untersuchung von Zufallsteilchensystemen und Polymermodellen, insbesondere im Rahmen stochastischer integrierbarer Systeme und der KPZ-Universalitätstheorie. Die Untersuchung dieser Modelle zeigt interessante Verbindungen zu verschiedenen Bereichen der Mathematik, einschließlich Algebra, Warteschlangentheorie und Kombinatorik (über geometrische Analogien zur Robinson-Schensted-Knuth-Korrespondenz). Ich interessiere mich auch für die Zufallsmatrix-Theorie und probabilistische Aspekte der freien Wahrscheinlichkeitstheorie. Auf einer eher angewandten Seite interessiere ich mich für die Anwendung probabilistischer Modellierung und maschinellen Lernens in der Medizin, im Operations Research und in der humanitären Logistik.",
        recentPreprintsTitle: "Neueste Vorabdrucke",
        recentPreprintsContent: translations.en.recentPreprintsContent
    }
};

function changeLanguage() {
    const language = document.getElementById("languageSelector").value;
    for (const key in translations[language]) {
        document.getElementById(key).innerHTML = translations[language][key];
    }
}

window.onload = () => changeLanguage();

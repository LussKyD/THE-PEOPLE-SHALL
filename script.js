const constitutionSources = {
  officialPdf: "https://www.parliament.go.ke/sites/default/files/2017-05/The_Constitution_of_Kenya_2010.pdf",
  constituteProject: "https://www.constituteproject.org/constitution/Kenya_2010"
};

const chapterTitles = [
  "Sovereignty of the People",
  "The Republic",
  "Citizenship",
  "The Bill of Rights",
  "Land and Environment",
  "Leadership and Integrity",
  "Representation of the People",
  "The Legislature",
  "The Executive",
  "The Judiciary",
  "Devolved Government",
  "Public Finance",
  "The Public Service",
  "National Security",
  "Commissions and Independent Offices",
  "Amendment of this Constitution",
  "General Provisions",
  "Transitional and Consequential Provisions"
];

const chapters = chapterTitles.map((title, index) => ({
  id: `chapter-${index + 1}`,
  number: index + 1,
  title,
  articles: []
}));

chapters[0].articles = [
  {
    number: 1,
    title: "Sovereignty of the people",
    formalText: "Add the official text of Article 1 here.",
    plainText: "Explain that all authority in Kenya comes from the people, who exercise it directly or through elected leaders.",
    keywords: ["sovereignty", "people", "authority"]
  },
  {
    number: 2,
    title: "Supremacy of this Constitution",
    formalText: "Add the official text of Article 2 here.",
    plainText: "Clarify that the Constitution is the highest law and any conflicting law is invalid.",
    keywords: ["supremacy", "constitution", "law"]
  }
];

chapters[3].articles = [
  {
    number: 19,
    title: "Rights and fundamental freedoms",
    formalText: "Add the official text of Article 19 here.",
    plainText: "Explain that the Bill of Rights protects every person's dignity, equality, and freedom.",
    keywords: ["rights", "freedom", "dignity", "equality"]
  },
  {
    number: 43,
    title: "Economic and social rights",
    formalText: "Add the official text of Article 43 here.",
    plainText: "Describe the rights to health, housing, food, water, social security, and education.",
    keywords: ["health", "housing", "education", "social", "water"]
  }
];

chapters[10].articles = [
  {
    number: 174,
    title: "Objects of devolution",
    formalText: "Add the official text of Article 174 here.",
    plainText: "Summarize how devolution brings services closer and improves participation and accountability.",
    keywords: ["devolution", "counties", "services", "participation"]
  }
];

const schedules = [
  {
    id: "schedules",
    title: "Schedules",
    entries: [
      {
        number: "Schedule 1",
        title: "Oaths and affirmations",
        formalText: "Add the official text of Schedule 1 here.",
        plainText: "Explain that this schedule contains official oath wording used by public officials.",
        keywords: ["oath", "affirmation", "officials"]
      }
    ]
  }
];

const glossary = [
  {
    term: "Gazette",
    definition: "The official government publication where laws, notices, and appointments are announced."
  },
  {
    term: "Quorum",
    definition: "The minimum number of members who must be present for a meeting to make valid decisions."
  },
  {
    term: "Ex-officio",
    definition: "Someone who is part of a body because of the position they hold, not by election."
  },
  {
    term: "Devolution",
    definition: "The transfer of power and resources from the national government to county governments."
  },
  {
    term: "Petition",
    definition: "A formal written request submitted to a public authority or court."
  },
  {
    term: "Immunity",
    definition: "Legal protection that prevents someone from being sued or prosecuted in specific situations."
  }
];

const jsonTemplate = {
  meta: {
    title: "Constitution of Kenya (2010)",
    sources: {
      officialPdf: constitutionSources.officialPdf,
      constituteProject: constitutionSources.constituteProject
    }
  },
  chapters: [
    {
      id: "chapter-1",
      number: 1,
      title: "Sovereignty of the People",
      articles: [
        {
          number: 1,
          title: "Sovereignty of the people",
          formalText: "Full official text goes here.",
          plainText: "Beginner-friendly explanation goes here.",
          keywords: ["sovereignty", "citizens", "power"]
        }
      ]
    }
  ],
  schedules: [
    {
      id: "schedules",
      title: "Schedules",
      entries: [
        {
          number: "Schedule 1",
          title: "Oaths and affirmations",
          formalText: "Full schedule text goes here.",
          plainText: "Simple explanation goes here.",
          keywords: ["oath", "affirmation"]
        }
      ]
    }
  ],
  glossary: [
    {
      term: "Gazette",
      definition: "The official government publication used for laws and notices."
    }
  ]
};

const sections = [
  ...chapters.map((chapter) => ({
    ...chapter,
    type: "chapter",
    entries: chapter.articles
  })),
  ...schedules.map((schedule) => ({
    ...schedule,
    type: "schedule",
    numberLabel: "Schedules",
    entries: schedule.entries
  }))
];

const tocList = document.getElementById("tocList");
const tocSearch = document.getElementById("tocSearch");
const chaptersContainer = document.getElementById("chaptersContainer");
const searchInput = document.getElementById("searchInput");
const searchMeta = document.getElementById("searchMeta");
const clearSearch = document.getElementById("clearSearch");
const glossaryList = document.getElementById("glossaryList");
const glossarySearch = document.getElementById("glossarySearch");
const jsonStructure = document.getElementById("jsonStructure");

const linkTargets = [
  "officialPdfLink",
  "officialPdfFooter",
  "constituteLink",
  "constituteFooter"
];

function createElement(tag, className, text) {
  const element = document.createElement(tag);
  if (className) element.className = className;
  if (text !== undefined) element.textContent = text;
  return element;
}

function slugify(text) {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function sectionLabel(section) {
  return section.type === "chapter" ? `Chapter ${section.number}` : section.numberLabel || "Schedules";
}

function setSourceLinks() {
  const map = {
    officialPdfLink: constitutionSources.officialPdf,
    officialPdfFooter: constitutionSources.officialPdf,
    constituteLink: constitutionSources.constituteProject,
    constituteFooter: constitutionSources.constituteProject
  };

  linkTargets.forEach((id) => {
    const el = document.getElementById(id);
    if (el) el.href = map[id];
  });
}

function renderToc() {
  if (!tocList) return;
  tocList.innerHTML = "";

  sections.forEach((section) => {
    const li = createElement("li");
    const label = `${sectionLabel(section)} - ${section.title}`;
    li.dataset.title = label.toLowerCase();

    const link = createElement(
      "a",
      "block rounded-xl border border-transparent px-3 py-2 text-slate-700 hover:border-slate-200 hover:bg-slate-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-kenya-red/30"
    );
    link.href = `#${section.id}`;
    link.textContent = label;

    li.appendChild(link);
    tocList.appendChild(li);
  });
}

const sectionRefs = [];

function buildEntrySearchText(entry, section) {
  const label = section.type === "chapter" ? `Article ${entry.number}` : entry.number;
  return [
    label,
    entry.number,
    entry.title,
    section.title,
    sectionLabel(section),
    entry.formalText,
    entry.plainText,
    (entry.keywords || []).join(" ")
  ]
    .join(" ")
    .toLowerCase();
}

function createEntryCard(entry, section) {
  const articleEl = createElement(
    "article",
    "rounded-2xl border border-slate-200 bg-white p-5 shadow-sm space-y-4"
  );
  const label = section.type === "chapter" ? `Article ${entry.number}` : entry.number;
  articleEl.id = `${section.id}-${slugify(label)}`;

  const header = createElement("div");
  const labelEl = createElement(
    "p",
    "text-xs uppercase tracking-[0.2em] text-slate-500",
    label
  );
  const titleEl = createElement(
    "h4",
    "mt-1 text-lg font-semibold text-slate-900",
    entry.title
  );
  header.appendChild(labelEl);
  header.appendChild(titleEl);

  const originalWrap = createElement("div");
  const originalLabel = createElement(
    "p",
    "text-sm font-semibold text-slate-700",
    "Original Text"
  );
  const originalText = createElement(
    "p",
    "mt-2 font-serif text-base leading-relaxed text-slate-900",
    entry.formalText
  );
  originalWrap.appendChild(originalLabel);
  originalWrap.appendChild(originalText);

  const plainWrap = createElement(
    "div",
    "rounded-xl border-l-4 border-kenya-green bg-kenya-green/10 p-4"
  );
  const plainLabel = createElement(
    "p",
    "text-sm font-semibold text-kenya-green",
    "Plain English"
  );
  const plainText = createElement(
    "p",
    "mt-2 text-base leading-relaxed text-slate-800",
    entry.plainText
  );
  plainWrap.appendChild(plainLabel);
  plainWrap.appendChild(plainText);

  articleEl.appendChild(header);
  articleEl.appendChild(originalWrap);
  articleEl.appendChild(plainWrap);

  return articleEl;
}

function renderSections() {
  if (!chaptersContainer) return;
  chaptersContainer.innerHTML = "";
  sectionRefs.length = 0;

  sections.forEach((section) => {
    const sectionEl = createElement("section", "space-y-4 scroll-mt-24");
    sectionEl.id = section.id;

    const headingWrap = createElement(
      "div",
      "rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
    );
    const headingLabel = createElement(
      "p",
      "text-xs uppercase tracking-[0.2em] text-slate-500",
      sectionLabel(section)
    );
    const headingTitle = createElement(
      "h3",
      "mt-1 text-xl font-semibold text-slate-900",
      section.title
    );
    headingWrap.appendChild(headingLabel);
    headingWrap.appendChild(headingTitle);

    sectionEl.appendChild(headingWrap);

    const entryRefs = [];
    if (!section.entries || section.entries.length === 0) {
      const placeholder = createElement(
        "div",
        "rounded-2xl border border-dashed border-slate-300 bg-slate-50 p-4 text-sm text-slate-600"
      );
      placeholder.textContent =
        "Content coming soon. Add articles for this chapter using the JSON structure in script.js.";
      sectionEl.appendChild(placeholder);
    } else {
      section.entries.forEach((entry) => {
        const entryEl = createEntryCard(entry, section);
        const searchText = buildEntrySearchText(entry, section);
        entryRefs.push({ element: entryEl, searchText });
        sectionEl.appendChild(entryEl);
      });
    }

    chaptersContainer.appendChild(sectionEl);
    sectionRefs.push({ section, sectionEl, entryRefs });
  });
}

function updateSearchMeta(matching, total, query) {
  if (!searchMeta) return;
  if (!query) {
    searchMeta.textContent = `Showing all ${total} articles.`;
    return;
  }
  const message =
    matching === 0
      ? "No articles match that search yet."
      : `Showing ${matching} of ${total} articles.`;
  searchMeta.textContent = message;
}

function applySearch() {
  const query = (searchInput?.value || "").trim().toLowerCase();
  const hasQuery = query.length > 0;
  let totalEntries = 0;
  let matchedEntries = 0;

  sectionRefs.forEach(({ sectionEl, entryRefs }) => {
    if (!entryRefs.length) {
      if (hasQuery) {
        sectionEl.classList.add("hidden");
      } else {
        sectionEl.classList.remove("hidden");
      }
      return;
    }

    let sectionMatches = false;
    entryRefs.forEach(({ element, searchText }) => {
      totalEntries += 1;
      const isMatch = !hasQuery || searchText.includes(query);
      element.classList.toggle("hidden", !isMatch);
      if (isMatch) {
        matchedEntries += 1;
        sectionMatches = true;
      }
    });

    sectionEl.classList.toggle("hidden", hasQuery && !sectionMatches);
  });

  updateSearchMeta(matchedEntries, totalEntries, query);
}

function renderGlossary() {
  if (!glossaryList) return;
  glossaryList.innerHTML = "";
  glossary.forEach((item) => {
    const card = createElement(
      "div",
      "rounded-xl border border-slate-200 bg-slate-50 p-3"
    );
    card.dataset.term = `${item.term} ${item.definition}`.toLowerCase();
    const term = createElement("h3", "text-sm font-semibold text-slate-900", item.term);
    const definition = createElement("p", "mt-1 text-sm text-slate-600", item.definition);
    card.appendChild(term);
    card.appendChild(definition);
    glossaryList.appendChild(card);
  });
}

function applyGlossarySearch() {
  const query = (glossarySearch?.value || "").trim().toLowerCase();
  const items = glossaryList?.children || [];
  Array.from(items).forEach((item) => {
    const matches = !query || item.dataset.term.includes(query);
    item.classList.toggle("hidden", !matches);
  });
}

function applyTocSearch() {
  const query = (tocSearch?.value || "").trim().toLowerCase();
  const items = tocList?.children || [];
  Array.from(items).forEach((item) => {
    const matches = !query || item.dataset.title.includes(query);
    item.classList.toggle("hidden", !matches);
  });
}

function renderJsonTemplate() {
  if (jsonStructure) {
    jsonStructure.textContent = JSON.stringify(jsonTemplate, null, 2);
  }
}

function attachListeners() {
  if (searchInput) {
    searchInput.addEventListener("input", applySearch);
  }
  if (clearSearch) {
    clearSearch.addEventListener("click", () => {
      if (searchInput) searchInput.value = "";
      applySearch();
    });
  }
  if (tocSearch) {
    tocSearch.addEventListener("input", applyTocSearch);
  }
  if (glossarySearch) {
    glossarySearch.addEventListener("input", applyGlossarySearch);
  }
}

setSourceLinks();
renderToc();
renderSections();
renderGlossary();
renderJsonTemplate();
attachListeners();
applySearch();

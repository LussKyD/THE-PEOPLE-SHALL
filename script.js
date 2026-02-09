const defaultSources = {
  officialPdf: "https://www.parliament.go.ke/sites/default/files/2017-05/The_Constitution_of_Kenya_2010.pdf",
  constituteProject: "https://www.constituteproject.org/constitution/Kenya_2010"
};

const defaultGlossary = [
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
  },
  {
    term: "Quasi-judicial",
    definition: "Having powers similar to a court, such as holding hearings and making decisions."
  },
  {
    term: "Statute",
    definition: "A written law passed by a legislature."
  },
  {
    term: "Affidavit",
    definition: "A written statement confirmed by oath or affirmation, used as evidence."
  },
  {
    term: "Appeal",
    definition: "A request to a higher court to review and change a decision."
  },
  {
    term: "Arbitration",
    definition: "A dispute resolution process decided by a neutral third party."
  },
  {
    term: "Bail",
    definition: "Temporary release from custody under conditions while awaiting trial."
  },
  {
    term: "Bill",
    definition: "A proposed law introduced in Parliament."
  },
  {
    term: "By-law",
    definition: "A rule made by a local authority to govern its area."
  },
  {
    term: "Cabinet Secretary",
    definition: "The head of a government ministry in the national executive."
  },
  {
    term: "Census",
    definition: "An official count of the population."
  },
  {
    term: "Constitutional petition",
    definition: "A formal request asking a court to enforce constitutional rights or duties."
  },
  {
    term: "Contempt of court",
    definition: "Disobedience or disrespect toward a court or its orders."
  },
  {
    term: "Delegated legislation",
    definition: "Rules made by an authorized body under powers from an Act of Parliament."
  },
  {
    term: "Decree",
    definition: "A formal order issued by a court."
  },
  {
    term: "Due process",
    definition: "Fair and proper legal procedures before depriving rights or freedoms."
  },
  {
    term: "Habeas corpus",
    definition: "A court order requiring a detained person to be brought before a judge."
  },
  {
    term: "Impeachment",
    definition: "A constitutional process to remove a public official from office."
  },
  {
    term: "Injunction",
    definition: "A court order requiring a person to do or stop doing a specific act."
  },
  {
    term: "Jurisdiction",
    definition: "The legal authority of a court or body to decide cases."
  },
  {
    term: "Ombudsman",
    definition: "An independent officer who investigates complaints against public bodies."
  },
  {
    term: "Referendum",
    definition: "A public vote on a proposed law or constitutional change."
  },
  {
    term: "Separation of powers",
    definition: "Division of government functions among the executive, legislature, and judiciary."
  },
  {
    term: "Statutory instrument",
    definition: "A form of delegated legislation made under an Act."
  },
  {
    term: "Subpoena",
    definition: "A court order to appear or produce documents."
  },
  {
    term: "Suffrage",
    definition: "The right to vote in elections."
  },
  {
    term: "Tribunal",
    definition: "A body set up to resolve disputes or hear cases."
  },
  {
    term: "Veto",
    definition: "The power to reject or stop a proposed law."
  },
  {
    term: "Ward",
    definition: "A local electoral area represented by a ward member."
  },
  {
    term: "Whistleblower",
    definition: "A person who reports wrongdoing within an organization."
  },
  {
    term: "Adjournment",
    definition: "A temporary pause or suspension of a meeting or court session."
  },
  {
    term: "Appropriation",
    definition: "Authorization by Parliament to allocate public funds for a purpose."
  },
  {
    term: "Audit",
    definition: "An official examination of accounts or financial records."
  },
  {
    term: "Bicameral",
    definition: "Having two legislative chambers, such as the National Assembly and Senate."
  },
  {
    term: "Censure",
    definition: "A formal statement of disapproval by a legislative body."
  },
  {
    term: "Coalition",
    definition: "An alliance of political parties formed to govern or pursue a goal."
  },
  {
    term: "Commission",
    definition: "An independent body established to oversee a public function."
  },
  {
    term: "County Assembly",
    definition: "The legislative body of a county government."
  },
  {
    term: "County Executive Committee",
    definition: "The executive team that assists the county governor in administration."
  },
  {
    term: "Fiscal year",
    definition: "A twelve-month period used for budgeting and accounting."
  },
  {
    term: "Indemnity",
    definition: "Protection against legal liability or loss."
  },
  {
    term: "Judicial review",
    definition: "Court supervision of the legality of government actions."
  },
  {
    term: "Public participation",
    definition: "Involving citizens in decision-making, as required by the Constitution."
  },
  {
    term: "Standing orders",
    definition: "Rules that govern how a legislative house conducts its business."
  },
  {
    term: "Summons",
    definition: "An official order requiring someone to appear or produce documents."
  }
];

const jsonTemplate = {
  meta: {
    title: "Constitution of Kenya (2010)",
    sources: {
      officialPdf: defaultSources.officialPdf,
      constituteProject: defaultSources.constituteProject
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
          plainTextSw: "Maelezo rahisi ya Kiswahili yanawekwa hapa.",
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

const fallbackContent = {
  meta: {
    title: "Constitution of Kenya (2010)",
    sources: defaultSources
  },
  chapters: [],
  schedules: [],
  glossary: defaultGlossary
};

let constitutionSources = { ...defaultSources };
let sections = [];
let glossary = defaultGlossary;

const tocList = document.getElementById("tocList");
const tocSearch = document.getElementById("tocSearch");
const chaptersContainer = document.getElementById("chaptersContainer");
const searchInput = document.getElementById("searchInput");
const searchMeta = document.getElementById("searchMeta");
const clearSearch = document.getElementById("clearSearch");
const glossaryList = document.getElementById("glossaryList");
const glossarySearch = document.getElementById("glossarySearch");
const jsonStructure = document.getElementById("jsonStructure");
const backToTop = document.getElementById("backToTop");
const themeToggle = document.getElementById("themeToggle");
const themeToggleLabel = document.getElementById("themeToggleLabel");
const themeIconSun = document.getElementById("themeIconSun");
const themeIconMoon = document.getElementById("themeIconMoon");
const glossaryToggle = document.getElementById("glossaryToggle");

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
  if (section.type === "chapter") {
    return `Chapter ${section.number}`;
  }
  if (section.number) {
    return `Schedule ${section.number}`;
  }
  return "Schedules";
}

function buildSections(data) {
  const chapterList = (data?.chapters || []).map((chapter) => ({
    ...chapter,
    type: "chapter",
    entries: chapter.articles || []
  }));
  const scheduleList = (data?.schedules || []).map((schedule) => ({
    ...schedule,
    type: "schedule",
    entries: schedule.entries || []
  }));
  return [...chapterList, ...scheduleList];
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
      "block rounded-xl border border-transparent px-3 py-2 text-slate-700 hover:border-slate-200 hover:bg-slate-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-kenya-red/30 dark:text-slate-200 dark:hover:border-slate-700 dark:hover:bg-slate-800"
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
    entry.plainTextSw,
    (entry.keywords || []).join(" ")
  ]
    .join(" ")
    .toLowerCase();
}

function createEntryCard(entry, section) {
  const articleEl = createElement(
    "article",
    "rounded-2xl border border-slate-200 bg-white p-5 shadow-sm space-y-4 dark:border-slate-700 dark:bg-slate-900/60"
  );
  const label = section.type === "chapter" ? `Article ${entry.number}` : entry.number;
  articleEl.id = `${section.id}-${slugify(label)}`;

  const header = createElement("div");
  const labelEl = createElement(
    "p",
    "text-xs uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400",
    label
  );
  const titleEl = createElement(
    "h4",
    "mt-1 text-lg font-semibold text-slate-900 dark:text-white",
    entry.title
  );
  header.appendChild(labelEl);
  header.appendChild(titleEl);

  const originalWrap = createElement("div");
  const originalLabel = createElement(
    "p",
    "text-sm font-semibold text-slate-700 dark:text-slate-300",
    "Original Text"
  );
  const originalText = createElement(
    "p",
    "mt-2 whitespace-pre-line font-serif text-base leading-relaxed text-slate-900 dark:text-slate-100",
    entry.formalText
  );
  originalWrap.appendChild(originalLabel);
  originalWrap.appendChild(originalText);

  const plainWrap = createElement(
    "div",
    "rounded-xl border-l-4 border-kenya-green bg-kenya-green/10 p-4 dark:bg-kenya-green/15"
  );
  const plainLabel = createElement(
    "p",
    "text-sm font-semibold text-kenya-green dark:text-kenya-green/90",
    "Plain English"
  );
  const plainText = createElement(
    "p",
    "mt-2 whitespace-pre-line text-base leading-relaxed text-slate-800 dark:text-slate-100",
    entry.plainText
  );
  plainWrap.appendChild(plainLabel);
  plainWrap.appendChild(plainText);

  const kiswahiliWrap = createElement(
    "div",
    "rounded-xl border-l-4 border-kenya-red bg-kenya-red/10 p-4 dark:bg-kenya-red/15"
  );
  const kiswahiliLabel = createElement(
    "p",
    "text-sm font-semibold text-kenya-red dark:text-kenya-red/90",
    "Kiswahili"
  );
  const kiswahiliText = createElement(
    "p",
    "mt-2 whitespace-pre-line text-base leading-relaxed text-slate-800 dark:text-slate-100",
    entry.plainTextSw || "Ongeza maelezo rahisi ya Kiswahili hapa."
  );
  kiswahiliWrap.appendChild(kiswahiliLabel);
  kiswahiliWrap.appendChild(kiswahiliText);

  articleEl.appendChild(header);
  articleEl.appendChild(originalWrap);
  articleEl.appendChild(plainWrap);
  articleEl.appendChild(kiswahiliWrap);

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
    "rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-700 dark:bg-slate-900/60"
    );
    const headingLabel = createElement(
      "p",
    "text-xs uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400",
      sectionLabel(section)
    );
    const headingTitle = createElement(
      "h3",
    "mt-1 text-xl font-semibold text-slate-900 dark:text-white",
      section.title
    );
    headingWrap.appendChild(headingLabel);
    headingWrap.appendChild(headingTitle);

    sectionEl.appendChild(headingWrap);

    const entryRefs = [];
    if (!section.entries || section.entries.length === 0) {
      const placeholder = createElement(
        "div",
        "rounded-2xl border border-dashed border-slate-300 bg-slate-50 p-4 text-sm text-slate-600 dark:border-slate-700 dark:bg-slate-900/30 dark:text-slate-300"
      );
      placeholder.textContent =
        "Content could not be loaded. Please check content.json or refresh the page.";
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
    searchMeta.textContent = `Showing all ${total} entries.`;
    return;
  }
  const message =
    matching === 0
      ? "No entries match that search yet."
      : `Showing ${matching} of ${total} entries.`;
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
  const sorted = [...glossary].sort((a, b) => a.term.localeCompare(b.term));
  const groups = sorted.reduce((acc, item) => {
    const letter = item.term.charAt(0).toUpperCase() || "#";
    if (!acc[letter]) acc[letter] = [];
    acc[letter].push(item);
    return acc;
  }, {});

  Object.keys(groups)
    .sort()
    .forEach((letter) => {
      const groupWrap = createElement(
        "div",
        "glossary-group rounded-2xl border border-slate-200 bg-slate-50 p-4 dark:border-slate-700 dark:bg-slate-900/40"
      );
      const header = createElement(
        "div",
        "flex items-center justify-between"
      );
      const badge = createElement(
        "span",
        "text-xs font-semibold uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400",
        letter
      );
      header.appendChild(badge);

      const list = createElement(
        "dl",
        "mt-3 divide-y divide-slate-200 text-sm dark:divide-slate-700"
      );

      groups[letter].forEach((item) => {
        const row = createElement(
          "div",
          "glossary-entry grid gap-2 py-3 sm:grid-cols-[160px_minmax(0,1fr)]"
        );
        row.dataset.term = `${item.term} ${item.definition}`.toLowerCase();
        const term = createElement(
          "dt",
          "font-semibold text-slate-900 dark:text-white",
          item.term
        );
        const definition = createElement(
          "dd",
          "text-slate-600 dark:text-slate-300",
          item.definition
        );
        row.appendChild(term);
        row.appendChild(definition);
        list.appendChild(row);
      });

      groupWrap.appendChild(header);
      groupWrap.appendChild(list);
      glossaryList.appendChild(groupWrap);
    });
}

function applyGlossarySearch() {
  const query = (glossarySearch?.value || "").trim().toLowerCase();
  const entries = glossaryList?.querySelectorAll(".glossary-entry") || [];
  entries.forEach((entry) => {
    const matches = !query || entry.dataset.term.includes(query);
    entry.classList.toggle("hidden", !matches);
  });

  const groups = glossaryList?.querySelectorAll(".glossary-group") || [];
  groups.forEach((group) => {
    const visible = group.querySelectorAll(".glossary-entry:not(.hidden)").length > 0;
    group.classList.toggle("hidden", !visible);
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

function applyTheme(theme) {
  const isDark = theme === "dark";
  document.documentElement.classList.toggle("dark", isDark);
  document.documentElement.dataset.theme = theme;
  if (document.body) {
    document.body.classList.toggle("dark", isDark);
    document.body.dataset.theme = theme;
  }
  if (themeToggle) {
    themeToggle.setAttribute("aria-pressed", String(isDark));
  }
  if (themeToggleLabel) {
    themeToggleLabel.textContent = isDark ? "Light mode" : "Dark mode";
  }
  if (themeIconSun) {
    themeIconSun.classList.toggle("hidden", !isDark);
  }
  if (themeIconMoon) {
    themeIconMoon.classList.toggle("hidden", isDark);
  }
}

function initializeTheme() {
  let stored = null;
  try {
    stored = localStorage.getItem("theme");
  } catch (error) {
    stored = null;
  }
  const prefersDark =
    window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
  const theme = stored || (prefersDark ? "dark" : "light");
  applyTheme(theme);

  if (!stored && window.matchMedia) {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handler = (event) => {
      let current = null;
      try {
        current = localStorage.getItem("theme");
      } catch (error) {
        current = null;
      }
      if (!current) {
        applyTheme(event.matches ? "dark" : "light");
      }
    };
    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener("change", handler);
    } else if (mediaQuery.addListener) {
      mediaQuery.addListener(handler);
    }
  }
}

function initializeContent(data) {
  const meta = data?.meta || {};
  constitutionSources = { ...defaultSources, ...(meta.sources || {}) };
  glossary = data?.glossary?.length ? data.glossary : defaultGlossary;
  sections = buildSections(data);

  setSourceLinks();
  renderToc();
  renderSections();
  renderGlossary();
  renderJsonTemplate();
  applySearch();
}

async function loadContent() {
  try {
    const response = await fetch("content.json");
    if (!response.ok) {
      throw new Error(`Failed to load content.json (status ${response.status}).`);
    }
    const data = await response.json();
    initializeContent(data);
  } catch (error) {
    console.error("Unable to load content.json", error);
    initializeContent(fallbackContent);
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
  if (glossaryToggle && glossaryList) {
    glossaryToggle.addEventListener("click", () => {
      const isExpanded = glossaryList.classList.toggle("is-expanded");
      glossaryToggle.textContent = isExpanded ? "Collapse" : "Expand";
      glossaryToggle.setAttribute("aria-expanded", String(isExpanded));
    });
  }
  if (themeToggle) {
    themeToggle.addEventListener("click", () => {
      const isDark = document.documentElement.classList.contains("dark");
      const nextTheme = isDark ? "light" : "dark";
      try {
        localStorage.setItem("theme", nextTheme);
      } catch (error) {
        // Ignore storage errors in restricted contexts.
      }
      applyTheme(nextTheme);
    });
  }
  if (backToTop) {
    backToTop.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
    window.addEventListener("scroll", () => {
      const shouldShow = window.scrollY > 20;
      backToTop.classList.toggle("hidden", !shouldShow);
    });
  }
}

initializeTheme();
attachListeners();
loadContent();

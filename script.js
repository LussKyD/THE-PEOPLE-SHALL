const languageSelect = document.getElementById('languageSelect');
const searchInput = document.getElementById('searchInput');
const articleList = document.getElementById('articleList');
const filterButtons = document.querySelectorAll('.filter-btn');
const articleTitle = document.getElementById('articleTitle');
const articleMeta = document.getElementById('articleMeta');
const originalText = document.getElementById('originalText');
const simplifiedText = document.getElementById('simplifiedText');
const exampleText = document.getElementById('exampleText');
const sourceLink = document.getElementById('sourceLink');
const relatedLaws = document.getElementById('relatedLaws');
const realityNote = document.getElementById('realityNote');
const readAloudBtn = document.getElementById('readAloudBtn');
const stopAudioBtn = document.getElementById('stopAudioBtn');
const offlineStatus = document.getElementById('offlineStatus');

const languageLabels = {
  en: 'English',
  sw: 'Kiswahili'
};

const speechLang = {
  en: 'en-KE',
  sw: 'sw-KE'
};

const storageKey = 'tps_language';

const lawSections = [
  {
    id: 'const-49',
    docType: 'constitution',
    docTitle: 'Constitution of Kenya, 2010',
    citation: 'Article 49',
    sectionTitle: {
      en: 'Rights of arrested persons',
      sw: 'Haki za watu waliokamatwa'
    },
    anchorUrl: 'https://www.constituteproject.org/constitution/Kenya_2010#article-49',
    sourceUrl: 'https://www.parliament.go.ke/sites/default/files/2017-05/The_Constitution_of_Kenya_2010.pdf',
    content: {
      en: {
        original: 'An arrested person has the right to be informed promptly, in a language the person understands, of the reason for the arrest; to remain silent; to communicate with an advocate and other persons whose assistance is necessary; to be held separately from persons who are serving a sentence; to be brought before a court as soon as reasonably possible, but not later than twenty-four hours after being arrested; and to be released on bond or bail on reasonable conditions, unless there are compelling reasons not to be released.',
        simplified: 'If the police arrest you, they must tell you why in a language you understand. You can stay silent, talk to a lawyer, and contact family. You must be taken to court within 24 hours, and bail should be considered unless there is a strong reason to keep you in custody.',
        example: 'If you are arrested at night, officers should explain the reason, let you call someone, and take you to court within 24 hours. Bail should not be refused without a clear reason.',
        keywords: ['arrest', 'police', 'bail', 'lawyer', 'custody', '24 hours']
      },
      sw: {
        original: 'Mtu anayekamatwa ana haki ya kuarifiwa mara moja, kwa lugha anayofahamu, sababu ya kukamatwa; ya kunyamaza; ya kuwasiliana na wakili na watu wengine wenye msaada unaohitajika; ya kutenganishwa na watu wanaotumikia kifungo; ya kufikishwa mahakamani haraka iwezekanavyo, lakini si zaidi ya saa ishirini na nne baada ya kukamatwa; na ya kuachiliwa kwa dhamana au bondi kwa masharti yanayofaa, isipokuwa kuna sababu za msingi za kutoachiliwa.',
        simplified: 'Ukikamatwa, polisi lazima wakuambie sababu kwa lugha unayoelewa. Unaweza kunyamaza, kuongea na wakili, na kuwataarifu wa familia. Lazima uende mahakamani ndani ya saa 24, na dhamana izingatiwe isipokuwa kuna sababu nzito ya kukushikilia.',
        example: 'Ukikamatwa usiku, lazima uelezwe sababu, uruhusiwe kupiga simu, na upelekwe mahakamani ndani ya saa 24. Dhamana haipaswi kukataliwa bila sababu ya msingi.',
        keywords: ['kukamatwa', 'polisi', 'dhamana', 'wakili', 'kizuizi', 'saa 24']
      }
    },
    related: [
      {
        title: 'Criminal Procedure Code',
        type: 'Act',
        note: 'Details on arrest procedures, bail, and court process.'
      },
      {
        title: 'National Police Service Act',
        type: 'Act',
        note: 'Operational duties and standards for police conduct.'
      }
    ]
  },
  {
    id: 'const-53',
    docType: 'constitution',
    docTitle: 'Constitution of Kenya, 2010',
    citation: 'Article 53',
    sectionTitle: {
      en: 'Children',
      sw: 'Watoto'
    },
    anchorUrl: 'https://www.constituteproject.org/constitution/Kenya_2010#article-53',
    sourceUrl: 'https://www.parliament.go.ke/sites/default/files/2017-05/The_Constitution_of_Kenya_2010.pdf',
    content: {
      en: {
        original: 'Every child has the right to a name and nationality from birth; to free and compulsory basic education; to basic nutrition, shelter, and health care; to be protected from abuse, neglect, harmful cultural practices, all forms of violence, inhuman treatment and punishment, and hazardous or exploitative labour; and to parental care and protection.',
        simplified: 'Children must go to school for free basic education. They deserve food, shelter, and health care, and must be protected from abuse or harmful work. Parents and the state both have responsibilities to keep children safe.',
        example: 'If a child is forced to skip school to work, that violates the Constitution. Schools should not charge fees that block access to basic education.',
        keywords: ['children', 'education', 'school', 'health', 'protection', 'abuse']
      },
      sw: {
        original: 'Kila mtoto ana haki ya jina na uraia tangu kuzaliwa; ya elimu ya msingi ya bure na ya lazima; ya lishe ya msingi, makazi, na huduma za afya; ya kulindwa dhidi ya dhuluma, kutelekezwa, mila hatari, aina zote za ukatili, adhabu isiyo ya kibinadamu, na kazi hatari au ya unyonyaji; na ya malezi na ulinzi wa wazazi.',
        simplified: 'Watoto lazima wapate elimu ya msingi bila gharama. Wanahitaji chakula, makazi na huduma za afya, na lazima walindwe dhidi ya ukatili au kazi hatari. Wazazi na serikali wanawajibika kuhakikisha watoto wako salama.',
        example: 'Kumlazimisha mtoto kukosa shule ili kufanya kazi ni kinyume cha Katiba. Ada zisizoruhusu mtoto kwenda shule zinahitaji kupingwa.',
        keywords: ['watoto', 'elimu', 'shule', 'afya', 'ulinzi', 'unyonyaji']
      }
    },
    related: [
      {
        title: 'Basic Education Act',
        type: 'Act',
        note: 'Sets rules for free and compulsory basic education.'
      }
    ]
  },
  {
    id: 'const-40',
    docType: 'constitution',
    docTitle: 'Constitution of Kenya, 2010',
    citation: 'Article 40',
    sectionTitle: {
      en: 'Protection of right to property',
      sw: 'Ulinzi wa haki ya mali'
    },
    anchorUrl: 'https://www.constituteproject.org/constitution/Kenya_2010#article-40',
    sourceUrl: 'https://www.parliament.go.ke/sites/default/files/2017-05/The_Constitution_of_Kenya_2010.pdf',
    content: {
      en: {
        original: 'Every person has the right, either individually or in association with others, to acquire and own property of any description and in any part of Kenya. Parliament shall not enact a law that permits the State or any person to arbitrarily deprive a person of property.',
        simplified: 'You have the right to own land or property anywhere in Kenya, alone or with others. The state cannot take your property without a lawful process and fair treatment.',
        example: 'If land is needed for a public road, there must be a legal process and compensation. A private person cannot just grab your land.',
        keywords: ['property', 'land', 'ownership', 'title', 'compensation']
      },
      sw: {
        original: 'Kila mtu ana haki, ama pekee yake au pamoja na wengine, ya kupata na kumiliki mali ya aina yoyote na katika sehemu yoyote ya Kenya. Bunge halitapitisha sheria inayoruhusu serikali au mtu yeyote kumnyanganya mtu mali kiholela.',
        simplified: 'Una haki ya kumiliki ardhi au mali mahali popote Kenya, wewe peke yako au pamoja na wengine. Serikali haiwezi kuchukua mali yako bila utaratibu wa kisheria na haki.',
        example: 'Ikiwa ardhi inahitajika kwa barabara ya umma, lazima kuwe na mchakato wa kisheria na fidia. Mtu binafsi hawezi kuchukua ardhi yako tu.',
        keywords: ['mali', 'ardhi', 'umiliki', 'hati', 'fidia']
      }
    },
    related: [
      {
        title: 'Land Act',
        type: 'Act',
        note: 'Guides acquisition, compensation, and land administration.'
      },
      {
        title: 'Land Registration Act',
        type: 'Act',
        note: 'Explains title registration and ownership records.'
      }
    ]
  },
  {
    id: 'const-210',
    docType: 'constitution',
    docTitle: 'Constitution of Kenya, 2010',
    citation: 'Article 210',
    sectionTitle: {
      en: 'Taxation',
      sw: 'Kodi na ushuru'
    },
    anchorUrl: 'https://www.constituteproject.org/constitution/Kenya_2010#article-210',
    sourceUrl: 'https://www.parliament.go.ke/sites/default/files/2017-05/The_Constitution_of_Kenya_2010.pdf',
    content: {
      en: {
        original: 'No tax or licensing fee may be imposed, waived, or varied except as provided by legislation.',
        simplified: 'Taxes and official fees must be created by a law passed through the proper process. No officer can invent a fee on the spot.',
        example: 'If someone at a roadblock demands a payment that is not in law or an official schedule, you can challenge it.',
        keywords: ['tax', 'taxes', 'fees', 'licensing', 'public finance']
      },
      sw: {
        original: 'Hakuna ushuru au ada ya leseni inayoweza kutozwa, kuondolewa, au kubadilishwa isipokuwa kama imetolewa na sheria.',
        simplified: 'Kodi na ada rasmi lazima ziwe zimewekwa na sheria. Afisa hawezi kuunda ada papo hapo bila msingi wa kisheria.',
        example: 'Mtu akidai malipo barabarani ambayo hayapo kwenye sheria au orodha rasmi, unayo haki ya kupinga.',
        keywords: ['kodi', 'ushuru', 'ada', 'leseni', 'fedha za umma']
      }
    },
    related: [
      {
        title: 'Public Finance Management Act',
        type: 'Act',
        note: 'Rules on how public money is raised and used.'
      },
      {
        title: 'Tax Procedures Act',
        type: 'Act',
        note: 'Administrative rules for tax collection and compliance.'
      }
    ]
  },
  {
    id: 'const-35',
    docType: 'constitution',
    docTitle: 'Constitution of Kenya, 2010',
    citation: 'Article 35',
    sectionTitle: {
      en: 'Access to information',
      sw: 'Upatikanaji wa taarifa'
    },
    anchorUrl: 'https://www.constituteproject.org/constitution/Kenya_2010#article-35',
    sourceUrl: 'https://www.parliament.go.ke/sites/default/files/2017-05/The_Constitution_of_Kenya_2010.pdf',
    content: {
      en: {
        original: 'Every citizen has the right of access to information held by the State; and information held by another person and required for the exercise or protection of any right or fundamental freedom. Every person has the right to the correction or deletion of untrue or misleading information that affects the person.',
        simplified: 'You can request information from government when you need it to protect your rights. If official records about you are wrong, you can ask for them to be corrected or deleted.',
        example: 'If a county office has the wrong details about your land or ID, you can request a correction using this right.',
        keywords: ['information', 'records', 'transparency', 'access', 'correction']
      },
      sw: {
        original: 'Kila raia ana haki ya kupata taarifa zinazoshikiliwa na serikali; na taarifa zinazoshikiliwa na mtu mwingine ambazo zinahitajika kwa kutekeleza au kulinda haki au uhuru wa msingi. Kila mtu ana haki ya kurekebisha au kufuta taarifa zisizo za kweli au zinazopotosha zinazomhusu.',
        simplified: 'Unaweza kuomba taarifa kwa serikali unapozihitaji kulinda haki zako. Rekodi rasmi zikiwa na makosa kuhusu wewe, unaweza kuomba zirekebishwe au zifutwe.',
        example: 'Kama ofisi ya kaunti ina taarifa zisizo sahihi kuhusu ardhi yako, unaweza kuomba marekebisho kwa kutumia haki hii.',
        keywords: ['taarifa', 'rekodi', 'uwazi', 'upatikanaji', 'marekebisho']
      }
    },
    related: [
      {
        title: 'Access to Information Act',
        type: 'Act',
        note: 'Process for requesting public information.'
      }
    ]
  }
];

let activeLanguage = localStorage.getItem(storageKey) || 'en';
if (!languageLabels[activeLanguage]) {
  activeLanguage = 'en';
}
let activeFilter = 'all';
let activeId = lawSections[0] ? lawSections[0].id : null;
let activeUtterance = null;
let serviceWorkerReady = false;

function normalize(text) {
  return text.toLowerCase();
}

function getTitle(section) {
  return section.sectionTitle[activeLanguage] || section.sectionTitle.en;
}

function getKeywords(section) {
  const current = section.content[activeLanguage] || section.content.en;
  return current.keywords || [];
}

function buildSearchText(section) {
  const titles = [
    section.citation,
    section.docTitle,
    section.sectionTitle.en,
    section.sectionTitle.sw
  ];
  const keywords = [
    ...(section.content.en.keywords || []),
    ...(section.content.sw.keywords || [])
  ];
  return normalize([...titles, ...keywords].join(' '));
}

function filterSections() {
  const query = normalize(searchInput.value.trim());
  return lawSections.filter(section => {
    const matchesFilter = activeFilter === 'all' || section.docType === activeFilter;
    const matchesQuery = !query || buildSearchText(section).includes(query);
    return matchesFilter && matchesQuery;
  });
}

function renderList() {
  const sections = filterSections();
  articleList.innerHTML = '';

  if (!sections.length) {
    const empty = document.createElement('div');
    empty.className = 'empty-state';
    empty.textContent = 'No matching articles yet. Try a different keyword.';
    articleList.appendChild(empty);
    return;
  }

  sections.forEach(section => {
    const item = document.createElement('button');
    item.type = 'button';
    item.className = 'list-item' + (section.id === activeId ? ' active' : '');
    item.setAttribute('aria-pressed', section.id === activeId ? 'true' : 'false');
    item.dataset.id = section.id;

    const keywords = getKeywords(section)
      .slice(0, 4)
      .map(term => `<span class="chip">${term}</span>`)
      .join('');

    item.innerHTML = `
      <span class="list-title">${getTitle(section)}</span>
      <span class="list-meta">${section.docTitle} - ${section.citation}</span>
      <span class="chip-row">${keywords}</span>
    `;

    item.addEventListener('click', () => {
      activeId = section.id;
      renderList();
      renderArticle();
    });

    articleList.appendChild(item);
  });
}

function renderArticle() {
  const section = lawSections.find(item => item.id === activeId);
  if (!section) {
    return;
  }

  const text = section.content[activeLanguage] || section.content.en;
  const docTypeLabel = section.docType === 'constitution' ? 'Constitution' : 'Act of Parliament';

  articleTitle.textContent = `${section.citation}: ${getTitle(section)}`;
  articleMeta.textContent = `${docTypeLabel} - ${section.docTitle} - ${languageLabels[activeLanguage] || 'English'}`;
  originalText.textContent = text.original;
  simplifiedText.textContent = text.simplified;
  exampleText.textContent = text.example;

  if (section.sourceUrl) {
    sourceLink.href = section.sourceUrl;
    sourceLink.textContent = 'Official source';
    sourceLink.style.display = 'inline-flex';
  } else {
    sourceLink.style.display = 'none';
  }

  if (section.related && section.related.length) {
    relatedLaws.innerHTML = `
      <h4>Related Acts and practical rules</h4>
      <ul>
        ${section.related.map(item => {
          const label = `${item.title} (${item.type})`;
          const note = item.note ? `<span class="related-note">${item.note}</span>` : '';
          return `<li>${label}${note}</li>`;
        }).join('')}
      </ul>
    `;
  } else {
    relatedLaws.innerHTML = '';
  }
}

function setLanguage(lang) {
  activeLanguage = lang;
  localStorage.setItem(storageKey, lang);
  renderList();
  renderArticle();
}

languageSelect.value = activeLanguage;
languageSelect.addEventListener('change', () => setLanguage(languageSelect.value));

searchInput.addEventListener('input', () => {
  renderList();
  const results = filterSections();
  if (results.length && !results.find(item => item.id === activeId)) {
    activeId = results[0].id;
    renderArticle();
  }
});

filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    filterButtons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');
    activeFilter = button.dataset.filter;
    const results = filterSections();
    if (results.length) {
      activeId = results[0].id;
    }
    renderList();
    renderArticle();
  });
});

function readAloud() {
  if (!window.speechSynthesis) {
    readAloudBtn.disabled = true;
    return;
  }
  if (activeUtterance) {
    window.speechSynthesis.cancel();
  }
  const text = simplifiedText.textContent.trim();
  if (!text) {
    return;
  }
  activeUtterance = new SpeechSynthesisUtterance(text);
  activeUtterance.lang = speechLang[activeLanguage] || 'en-KE';
  window.speechSynthesis.speak(activeUtterance);
}

function stopAloud() {
  if (window.speechSynthesis) {
    window.speechSynthesis.cancel();
  }
}

readAloudBtn.addEventListener('click', readAloud);
stopAudioBtn.addEventListener('click', stopAloud);

if (!window.speechSynthesis) {
  readAloudBtn.disabled = true;
  stopAudioBtn.disabled = true;
  readAloudBtn.textContent = 'Read aloud (not supported)';
}

function updateOfflineStatus() {
  if (!offlineStatus) {
    return;
  }
  if (!navigator.onLine) {
    offlineStatus.textContent = 'Offline mode';
    offlineStatus.classList.add('offline');
    return;
  }
  offlineStatus.classList.remove('offline');
  offlineStatus.textContent = serviceWorkerReady ? 'Offline ready' : 'Online';
}

window.addEventListener('online', updateOfflineStatus);
window.addEventListener('offline', updateOfflineStatus);

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('sw.js')
      .then(() => {
        serviceWorkerReady = true;
        updateOfflineStatus();
      })
      .catch(() => {
        serviceWorkerReady = false;
        updateOfflineStatus();
      });
  });
}

realityNote.textContent = 'Reality check: the Constitution sets principles, but many day-to-day rules live in Acts of Parliament. Use related laws to find the practical steps and procedures.';

updateOfflineStatus();
renderList();
renderArticle();

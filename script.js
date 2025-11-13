// Core nav + language toggle + chapters injection (v1.2)
const menuBtn = document.getElementById('menuBtn');
const menu = document.getElementById('menu');
const langToggle = document.getElementById('langToggle');
const splash = document.getElementById('splash');

menuBtn.addEventListener('click', ()=> menu.classList.toggle('hidden'));

function openSection(name){
  document.querySelectorAll('.section').forEach(s=>s.classList.remove('active'));
  const el = document.getElementById(name);
  if(el) el.classList.add('active');
  menu.classList.add('hidden');
  // focus heading for accessibility
  const h = el.querySelector('h2');
  if(h) h.focus?.();
}

// Language switching
function setLang(lang){
  document.querySelectorAll('[data-en]').forEach(el=>{ el.style.display = (lang==='en')?'block':'none'; });
  document.querySelectorAll('[data-sw]').forEach(el=>{ el.style.display = (lang==='sw')?'block':'none'; });
  document.querySelectorAll('.lang-en').forEach(el=>{ el.style.display = (lang==='en')?'block':'none'; });
  document.querySelectorAll('.lang-sw').forEach(el=>{ el.style.display = (lang==='sw')?'block':'none'; });
  localStorage.setItem('thepeople_lang', lang);
}
langToggle.addEventListener('change', ()=> setLang(langToggle.value));
const saved = localStorage.getItem('thepeople_lang') || (navigator.language && navigator.language.startsWith('sw')? 'sw':'en');
langToggle.value = saved;
setLang(saved);

// Search
const searchCh = document.getElementById('searchCh');
if(searchCh){
  searchCh.addEventListener('input', ()=>{
    const q = searchCh.value.toLowerCase();
    document.querySelectorAll('.chapter').forEach(ch=>{
      const text = ch.textContent.toLowerCase();
      ch.style.display = text.includes(q) ? 'block' : 'none';
    });
  });
}

// Quiz (unchanged simple)
const quiz = [
  {q: 'What does the Bill of Rights protect?', a: ['Someone\'s phone','Basic freedoms','Only leaders'], correct:1},
  {q: 'Who is sovereign according to Chapter One?', a: ['The President','The people','Foreign countries'], correct:1}
];
let current = 0;
const questionEl = document.getElementById('question');
const answersEl = document.getElementById('answers');
const resultEl = document.getElementById('quizResult');
const nextBtn = document.getElementById('nextBtn');
const restartBtn = document.getElementById('restartBtn');
function startQuiz(){ current=0; resultEl.textContent=''; restartBtn.classList.add('hidden'); nextBtn.classList.remove('hidden'); showQuestion(); }
function showQuestion(){ const item = quiz[current]; questionEl.textContent = item.q; answersEl.innerHTML=''; item.a.forEach((text, i)=>{ const btn = document.createElement('button'); btn.className='answer'; btn.textContent = text; btn.onclick = ()=> selectAnswer(i); answersEl.appendChild(btn); }); }
function selectAnswer(i){ const item = quiz[current]; const buttons = answersEl.querySelectorAll('.answer'); buttons.forEach((b, idx)=>{ b.disabled = true; if(idx === item.correct){ b.classList.add('correct'); } if(idx === i && idx !== item.correct){ b.classList.add('wrong'); } }); resultEl.textContent = i === item.correct ? 'Good job! ✅' : 'Not quite — read the lesson and try next.'; }
function nextQuestion(){ current++; if(current >= quiz.length){ resultEl.textContent = 'Quiz finished — great work! 🎉'; nextBtn.classList.add('hidden'); restartBtn.classList.remove('hidden'); questionEl.textContent = 'You completed the quiz.'; answersEl.innerHTML = ''; } else showQuestion(); }
startQuiz();

// Splash: fade after 2s to mimic loader then remove
setTimeout(()=>{
  if(splash){ splash.style.opacity = 0; setTimeout(()=>{ splash.style.display='none'; }, 700); }
}, 2000);

// Start on home
openSection('home');

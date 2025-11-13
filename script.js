// Minimal JS for navigation and quiz
const menuBtn = document.getElementById('menuBtn');
const menu = document.getElementById('menu');
menuBtn.addEventListener('click', ()=> menu.classList.toggle('hidden'));

function openSection(name){
  document.querySelectorAll('.section').forEach(s=>s.classList.remove('active'));
  const el = document.getElementById(name);
  if(el) el.classList.add('active');
  // hide menu on mobile
  menu.classList.add('hidden');
  // focus heading for accessibility
  const h = el.querySelector('h2');
  if(h) h.focus?.();
}

document.querySelectorAll('#menu a').forEach(a=>{
  a.addEventListener('click', (e)=>{
    e.preventDefault();
    openSection(a.dataset.section);
  });
});

// --- Quiz data (simple, educational, non-legal) ---
const quiz = [
  {q: 'What does a constitution do?', a: ['Tells the rules of the country','Makes toys','Sells books'], correct:0},
  {q: 'Which is a right?', a: ['A free lunch for everyone','Safety and fair treatment','Only some people can vote'], correct:1},
  {q: 'Who should follow the constitution?', a: ['Only leaders','Everyone','Only teachers'], correct:1},
];

let current = 0;
const questionEl = document.getElementById('question');
const answersEl = document.getElementById('answers');
const resultEl = document.getElementById('quizResult');
const nextBtn = document.getElementById('nextBtn');
const restartBtn = document.getElementById('restartBtn');

function startQuiz(){
  current = 0; resultEl.textContent=''; restartBtn.classList.add('hidden'); nextBtn.classList.remove('hidden');
  showQuestion();
}
function showQuestion(){
  const item = quiz[current];
  questionEl.textContent = item.q;
  answersEl.innerHTML = '';
  item.a.forEach((text, i)=>{
    const btn = document.createElement('button');
    btn.className = 'answer';
    btn.textContent = text;
    btn.onclick = ()=> selectAnswer(i);
    answersEl.appendChild(btn);
  });
}
function selectAnswer(i){
  const item = quiz[current];
  const buttons = answersEl.querySelectorAll('.answer');
  buttons.forEach((b, idx)=>{
    b.disabled = true;
    if(idx === item.correct){
      b.classList.add('correct');
    }
    if(idx === i && idx !== item.correct){
      b.classList.add('wrong');
    }
  });
  resultEl.textContent = i === item.correct ? 'Good job! ✅' : 'Not quite — read the lesson and try next.';
}
function nextQuestion(){
  current++;
  if(current >= quiz.length){
    resultEl.textContent = 'Quiz finished — great work! 🎉';
    nextBtn.classList.add('hidden');
    restartBtn.classList.remove('hidden');
    questionEl.textContent = 'You completed the quiz.';
    answersEl.innerHTML = '';
  } else showQuestion();
}

// start on load
startQuiz();

// Simple service worker registration (optional) — left commented for beginner friendliness.
// if('serviceWorker' in navigator){
//   navigator.serviceWorker.register('/sw.js').catch(()=>{/* ignore */});
//}

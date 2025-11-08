// ========== Navigation ==========
const navLinks = document.querySelectorAll('.nav-link');
const panels = document.querySelectorAll('.panel');
navLinks.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const tgt = link.dataset.target;
    panels.forEach(p => p.id === tgt ? p.classList.add('active') : p.classList.remove('active'));
    navLinks.forEach(l => l.classList.toggle('active', l === link));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
});
document.querySelectorAll('[data-target]').forEach(b => {
  b.addEventListener('click', e => {
    const id = b.dataset.target;
    document.querySelectorAll('.panel').forEach(p => p.classList.remove('active'));
    document.getElementById(id).classList.add('active');
    navLinks.forEach(l => l.classList.toggle('active', l.dataset.target === id));
  });
});

// ========== Quiz Data ==========
const allQuestions = [
  { q: "Which OSI layer is responsible for end-to-end communication?", options: ["Physical", "Transport", "Data Link", "Presentation"], answer: 1 },
  { q: "Which data structure uses FIFO?", options: ["Stack", "Queue", "Tree", "Graph"], answer: 1 },
  { q: "In DBMS, which normal form removes partial dependency?", options: ["1NF", "2NF", "3NF", "BCNF"], answer: 1 },
  { q: "Which sorting is best for nearly sorted array?", options: ["Selection Sort", "Insertion Sort", "Bubble Sort", "Heap Sort"], answer: 1 },
  { q: "Which is NOT a relational DBMS?", options: ["MySQL", "PostgreSQL", "MongoDB", "SQLite"], answer: 2 },
  { q: "Which HTML tag is used for table row?", options: ["<td>", "<tr>", "<table>", "<th>"], answer: 1 },
  { q: "Which device forwards packets between networks?", options: ["Switch", "Hub", "Router", "Repeater"], answer: 2 },
  { q: "What is the time complexity of binary search (sorted array)?", options: ["O(n)", "O(log n)", "O(n log n)", "O(1)"], answer: 1 },
  { q: "Which protocol is used to transfer web pages?", options: ["FTP", "SMTP", "HTTP", "SNMP"], answer: 2 },
  { q: "Which keyword is used to define a class in Java?", options: ["struct", "class", "object", "def"], answer: 1 },
  { q: "In networking, DHCP stands for?", options: ["Dynamic Host Configuration Protocol", "Domain Host Control Protocol", "Dynamic Hoster Config Proxy", "None"], answer: 0 },
  { q: "Which SQL command is used to remove a table?", options: ["DELETE", "DROP", "TRUNCATE", "REMOVE"], answer: 1 },
  { q: "Python is a ____ language.", options: ["Low level", "High level", "Assembly", "Machine"], answer: 1 },
  { q: "What does AI stand for?", options: ["Artificial Intelligence", "Automatic Interface", "Applied Input", "None"], answer: 0 },
  { q: "Flask is a ____ framework.", options: ["Python", "C", "Java", "C++"], answer: 0 },
  { q: "Which protocol is used to send emails?", options: ["SMTP", "HTTP", "FTP", "SNMP"], answer: 0 },
  { q: "Which layer in OSI model is responsible for routing?", options: ["Network", "Transport", "Session", "Application"], answer: 0 },
  { q: "What does CSS stand for?", options: ["Colorful Style Sheet", "Cascading Style Sheet", "Computer Style System", "Creative Sheet Syntax"], answer: 1 },
  { q: "Which tag is used for image in HTML?", options: ["<photo>", "<img>", "<image>", "<pic>"], answer: 1 },
  { q: "What is the extension of a Python file?", options: [".py", ".java", ".exe", ".c"], answer: 0 },


{
    "q": "What is a common concept related to C?",
    "options": [
      "C basics",
      "C advanced feature",
      "C compiler",
      "C keyword"
    ],
    "answer": 1
  },
  {
    "q": "What is a common concept related to C?",
    "options": [
      "C basics",
      "C advanced feature",
      "C compiler",
      "C keyword"
    ],
    "answer": 2
  },
  {
    "q": "What is a common concept related to Operating System?",
    "options": [
      "Operating System basics",
      "Operating System advanced feature",
      "Operating System compiler",
      "Operating System keyword"
    ],
    "answer": 1
  },
  {
    "q": "What is a common concept related to C++?",
    "options": [
      "C++ basics",
      "C++ advanced feature",
      "C++ compiler",
      "C++ keyword"
    ],
    "answer": 0
  },
  {
    "q": "What is a common concept related to Data Structure?",
    "options": [
      "Data Structure basics",
      "Data Structure advanced feature",
      "Data Structure compiler",
      "Data Structure keyword"
    ],
    "answer": 1
  },
  {
    "q": "What is a common concept related to CSS?",
    "options": [
      "CSS basics",
      "CSS advanced feature",
      "CSS compiler",
      "CSS keyword"
    ],
    "answer": 2
  },
  {
    "q": "What is a common concept related to CSS?",
    "options": [
      "CSS basics",
      "CSS advanced feature",
      "CSS compiler",
      "CSS keyword"
    ],
    "answer": 3
  },
  {
    "q": "What is a common concept related to AI?",
    "options": [
      "AI basics",
      "AI advanced feature",
      "AI compiler",
      "AI keyword"
    ],
    "answer": 1
  },
  {
    "q": "Which event took place in 2024 related to world news 7?",
    "options": [
      "Sports",
      "Technology",
      "Politics",
      "Environment"
    ],
    "answer": 3
  },
  {
    "q": "What is a common concept related to Data Structure?",
    "options": [
      "Data Structure basics",
      "Data Structure advanced feature",
      "Data Structure compiler",
      "Data Structure keyword"
    ],
    "answer": 0
  },
  {
    "q": "What is a common concept related to Java?",
    "options": [
      "Java basics",
      "Java advanced feature",
      "Java compiler",
      "Java keyword"
    ],
    "answer": 2
  },
  {
    "q": "What is a common concept related to C?",
    "options": [
      "C basics",
      "C advanced feature",
      "C compiler",
      "C keyword"
    ],
    "answer": 1
  },
  {
    "q": "What is a common concept related to AI?",
    "options": [
      "AI basics",
      "AI advanced feature",
      "AI compiler",
      "AI keyword"
    ],
    "answer": 0
  },
  {
    "q": "What is a common concept related to Networking?",
    "options": [
      "Networking basics",
      "Networking advanced feature",
      "Networking compiler",
      "Networking keyword"
    ],
    "answer": 2
  },
  {
    "q": "Which event took place in 2024 related to world news 69?",
    "options": [
      "Sports",
      "Technology",
      "Politics",
      "Environment"
    ],
    "answer": 2
  },
  {
    "q": "What is a common concept related to AI?",
    "options": [
      "AI basics",
      "AI advanced feature",
      "AI compiler",
      "AI keyword"
    ],
    "answer": 2
  },
  {
    "q": "Which event took place in 2024 related to world news 48?",
    "options": [
      "Sports",
      "Technology",
      "Politics",
      "Environment"
    ],
    "answer": 3
  },
  {
    "q": "Which event took place in 2024 related to world news 1?",
    "options": [
      "Sports",
      "Technology",
      "Politics",
      "Environment"
    ],
    "answer": 1
  },
  {
    "q": "What is a common concept related to C?",
    "options": [
      "C basics",
      "C advanced feature",
      "C compiler",
      "C keyword"
    ],
    "answer": 2
  },
  {
    "q": "What is a common concept related to CSS?",
    "options": [
      "CSS basics",
      "CSS advanced feature",
      "CSS compiler",
      "CSS keyword"
    ],
    "answer": 3
  },
  {
    "q": "What is a common concept related to Networking?",
    "options": [
      "Networking basics",
      "Networking advanced feature",
      "Networking compiler",
      "Networking keyword"
    ],
    "answer": 1
  },
  {
    "q": "What is a common concept related to Java?",
    "options": [
      "Java basics",
      "Java advanced feature",
      "Java compiler",
      "Java keyword"
    ],
    "answer": 1
  },
  {
    "q": "Which event took place in 2024 related to world news 90?",
    "options": [
      "Sports",
      "Technology",
      "Politics",
      "Environment"
    ],
    "answer": 0
  },
  {
    "q": "What is a common concept related to Python?",
    "options": [
      "Python basics",
      "Python advanced feature",
      "Python compiler",
      "Python keyword"
    ],
    "answer": 3
  },
  {
    "q": "Which event took place in 2024 related to world news 74?",
    "options": [
      "Sports",
      "Technology",
      "Politics",
      "Environment"
    ],
    "answer": 1
  },
  {
    "q": "What is a common concept related to AI?",
    "options": [
      "AI basics",
      "AI advanced feature",
      "AI compiler",
      "AI keyword"
    ],
    "answer": 0
  },
  {
    "q": "What is a common concept related to Networking?",
    "options": [
      "Networking basics",
      "Networking advanced feature",
      "Networking compiler",
      "Networking keyword"
    ],
    "answer": 3
  },
  {
    "q": "Which event took place in 2024 related to world news 23?",
    "options": [
      "Sports",
      "Technology",
      "Politics",
      "Environment"
    ],
    "answer": 3
  },
  {
    "q": "What is a common concept related to C++?",
    "options": [
      "C++ basics",
      "C++ advanced feature",
      "C++ compiler",
      "C++ keyword"
    ],
    "answer": 0
  },
  {
    "q": "Which event took place in 2024 related to world news 80?",
    "options": [
      "Sports",
      "Technology",
      "Politics",
      "Environment"
    ],
    "answer": 1
  },
  {
    "q": "Which event took place in 2024 related to world news 25?",
    "options": [
      "Sports",
      "Technology",
      "Politics",
      "Environment"
    ],
    "answer": 3
  },
  {
    "q": "What is a common concept related to Python?",
    "options": [
      "Python basics",
      "Python advanced feature",
      "Python compiler",
      "Python keyword"
    ],
    "answer": 1
  },
  {
    "q": "What is a common concept related to Networking?",
    "options": [
      "Networking basics",
      "Networking advanced feature",
      "Networking compiler",
      "Networking keyword"
    ],
    "answer": 0
  },
  {
    "q": "What is a common concept related to Networking?",
    "options": [
      "Networking basics",
      "Networking advanced feature",
      "Networking compiler",
      "Networking keyword"
    ],
    "answer": 1
  },
  {
    "q": "What is a common concept related to DBMS?",
    "options": [
      "DBMS basics",
      "DBMS advanced feature",
      "DBMS compiler",
      "DBMS keyword"
    ],
    "answer": 1
  },
  {
    "q": "What is a common concept related to Cyber Security?",
    "options": [
      "Cyber Security basics",
      "Cyber Security advanced feature",
      "Cyber Security compiler",
      "Cyber Security keyword"
    ],
    "answer": 3
  },
  {
    "q": "What is a common concept related to CSS?",
    "options": [
      "CSS basics",
      "CSS advanced feature",
      "CSS compiler",
      "CSS keyword"
    ],
    "answer": 0
  },
  {
    "q": "Which event took place in 2024 related to world news 62?",
    "options": [
      "Sports",
      "Technology",
      "Politics",
      "Environment"
    ],
    "answer": 3
  },

{
  "technical": [
    { "q": "Which OSI layer is responsible for end-to-end communication?", "options": ["Physical", "Transport", "Data Link", "Presentation"], "answer": 1 },
    { "q": "Which data structure uses FIFO?", "options": ["Stack", "Queue", "Tree", "Graph"], "answer": 1 }
  ],
  "current_affairs": [
    { "q": "Who is the current President of India (2025)?", "options": ["Droupadi Murmu", "Narendra Modi", "Amit Shah", "Rajnath Singh"], "answer": 0 },
    { "q": "Which country hosted the 2024 Olympics?", "options": ["Japan", "France", "USA", "China"], "answer": 1 },
    { "q": "Which Indian city was declared cleanest city 2024?", "options": ["Indore", "Surat", "Bhopal", "Pune"], "answer": 0 },
    { "q": "Who won ICC Men’s T20 World Cup 2024?", "options": ["India", "Australia", "England", "South Africa"], "answer": 0 },
    { "q": "Which mission did ISRO launch in 2024?", "options": ["Aditya-L1", "Chandrayaan-3", "Gaganyaan", "Mangalyaan-2"], "answer": 2 }
  ]
}
];

function getRandomQuestions(num) {
  return [...allQuestions].sort(() => 0.5 - Math.random()).slice(0, num);
}
let quizData = getRandomQuestions(10);

// ========== Quiz Logic ==========
const quizWrap = document.getElementById('quiz-wrap');
let currentQ = 0;
let userAns = new Array(quizData.length).fill(null);

function renderQuestion(index) {
  const q = quizData[index];
  quizWrap.innerHTML = '';
  const card = document.createElement('div'); card.className = 'q-card';
  const qText = document.createElement('div'); qText.innerHTML = `<strong>Q${index + 1}.</strong> ${q.q}`;
  const opts = document.createElement('div'); opts.className = 'options';
  q.options.forEach((opt, i) => {
    const o = document.createElement('div'); o.className = 'option'; o.tabIndex = 0; o.textContent = opt;
    if (userAns[index] === i) o.classList.add('selected');
    o.addEventListener('click', () => { userAns[index] = i; updateSelection(opts, index); });
    o.addEventListener('keydown', e => { if (e.key === 'Enter') { userAns[index] = i; updateSelection(opts, index); } });
    opts.appendChild(o);
  });
  card.appendChild(qText); card.appendChild(opts);
  quizWrap.appendChild(card);
}

function updateSelection(optsEl, idx) {
  const children = optsEl.querySelectorAll('.option');
  children.forEach((c, i) => c.classList.toggle('selected', userAns[idx] === i));
}

document.getElementById('nextQ').addEventListener('click', () => {
  if (currentQ < quizData.length - 1) currentQ++;
  renderQuestion(currentQ);
});
document.getElementById('prevQ').addEventListener('click', () => {
  if (currentQ > 0) currentQ--;
  renderQuestion(currentQ);
});



// Show the first question automatically when page loads
window.onload = function() {
  renderQuestion(0);
};


// ========== Results ==========
const resultsKey = 'prepmet_results';

function saveResult(score, percent) {
  const arr = JSON.parse(localStorage.getItem(resultsKey) || '[]');
  arr.push({
    date: new Date().toLocaleString(),
    score,
    percent,
    totalQ: quizData.length
  });
  localStorage.setItem(resultsKey, JSON.stringify(arr));
}

// ✅ Show all saved quiz results
function showResults() {
  const arr = JSON.parse(localStorage.getItem(resultsKey) || '[]');
  const area = document.getElementById('resultArea');
  area.innerHTML = '';

  if (arr.length === 0) {
    area.innerHTML = '<p style="text-align:center;color:gray;">📭 No quiz results yet.</p>';
    return;
  }

  arr.slice().reverse().forEach(r => {
    const d = document.createElement('div');
    d.className = 'note-card';
    d.innerHTML = `
      <strong>📅 ${r.date}</strong><br>
      🧠 Score: <b>${r.score}</b> / ${r.totalQ} (${r.percent}%)
    `;
    area.appendChild(d);
  });
}

document.getElementById('clearResults').addEventListener('click', () => {
  if (confirm('Are you sure you want to delete all results?')) {
    localStorage.removeItem(resultsKey);
    showResults();
  }
});

// Submit Quiz
document.getElementById('submitQuiz').addEventListener('click', () => {
  if (userAns.includes(null) && !confirm('Kuch questions ka answer nahi diya gaya. Phir bhi submit karein?')) return;
  let score = 0;
  quizData.forEach((q, i) => { if (userAns[i] === q.answer) score++; });
  const percent = Math.round((score / quizData.length) * 100);
  alert(`🎉 You scored ${score} out of ${quizData.length} (${percent}%)`);
  saveResult(score, percent);
  document.getElementById('quiz').classList.remove('active');
  document.getElementById('result').classList.add('active');
  navLinks.forEach(l => l.classList.toggle('active', l.dataset.target === 'result'));
  showResults();
});

// ========== Notes ==========
const notesKey = 'prepmet_notes';
const noteInput = document.getElementById('noteInput');
const notesList = document.getElementById('notesList');

function loadNotes() {
  const arr = JSON.parse(localStorage.getItem(notesKey) || '[]');
  notesList.innerHTML = '';
  arr.slice().reverse().forEach((n, iOrig) => {
    const i = arr.length - 1 - iOrig;
    const d = document.createElement('div'); d.className = 'note-card';
    d.innerHTML = `<div>${n}</div><div style="display:flex;gap:8px;justify-content:flex-end"><button onclick="deleteNote(${i})" class="btn ghost">Delete</button></div>`;
    notesList.appendChild(d);
  });
}
window.deleteNote = function (i) {
  const arr = JSON.parse(localStorage.getItem(notesKey) || '[]');
  arr.splice(i, 1);
  localStorage.setItem(notesKey, JSON.stringify(arr));
  loadNotes();
}
document.getElementById('saveNote').addEventListener('click', () => {
  const txt = noteInput.value.trim();
  if (!txt) return alert('Note khali hai.');
  const arr = JSON.parse(localStorage.getItem(notesKey) || '[]');
  arr.push(txt);
  localStorage.setItem(notesKey, JSON.stringify(arr));
  noteInput.value = '';
  loadNotes();
});
document.getElementById('clearNotes').addEventListener('click', () => {
  if (confirm('Saare notes delete karein?')) { localStorage.removeItem(notesKey); loadNotes(); }
});

loadNotes();
showResults();  // page load hote hi results dikhaye





// Page reload hone par last mode load karo
if (localStorage.getItem('darkMode') === 'true') {
  document.body.classList.add('dark-mode');
  darkMode = true;
  toggleBtn.textContent = '☀️';
}


// Simple Google-connected search (opens results in new tab)
document.getElementById("searchInput").addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    let query = e.target.value.trim();
    if (query !== "") {
      window.open(`https://www.google.com/search?q=${encodeURIComponent(query)}`, "_blank");
    }
  }
});



/* ═══════════════════════════════════════════════════════════════
   Math Kangaroo Practice — App Logic
   ═══════════════════════════════════════════════════════════════ */

'use strict';

// ── STATE ──────────────────────────────────────────────────────
const STATE_KEY = 'mk_state';

let state = {
  stars:           0,
  streak:          0,
  lastDate:        null,      // 'YYYY-MM-DD'
  questionsDone:   [],        // IDs seen so far (resets after all 200)
  todayDone:       false,
  todayCorrect:    0,         // first-attempt correct count today
  todayQuestions:  null,      // [id1, id2]
};

// Session (not persisted)
let session = {
  currentQIndex:  0,          // 0 or 1
  firstAttempt:   true,       // has the current Q been answered?
  firstAttempts:  [true, true], // per-question first-attempt tracking
  timerInterval:  null,
  secondsElapsed: 0,
  muted:          true,
};

// ── PERSISTENCE ────────────────────────────────────────────────
function loadState() {
  try {
    const saved = localStorage.getItem(STATE_KEY);
    if (saved) Object.assign(state, JSON.parse(saved));
  } catch (e) { /* ignore */ }
}

function saveState() {
  try { localStorage.setItem(STATE_KEY, JSON.stringify(state)); } catch (e) {}
}

// ── DATE HELPERS ───────────────────────────────────────────────
function todayStr() {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`;
}

function daysDiff(a, b) {
  if (!a || !b) return Infinity;
  return Math.round((new Date(b) - new Date(a)) / 86400000);
}

// ── STREAK LOGIC ───────────────────────────────────────────────
function checkAndUpdateStreak() {
  const today = todayStr();
  if (!state.lastDate) return; // first ever use

  const diff = daysDiff(state.lastDate, today);
  if (diff === 0) {
    // same day — do nothing
  } else if (diff === 1) {
    // consecutive day — streak continues (will be incremented when today completes)
  } else {
    // gap of 2+ days — streak resets
    state.streak = 0;
    saveState();
  }
}

// ── QUESTION POOL ──────────────────────────────────────────────
function getUnseenQuestions() {
  const doneSet = new Set(state.questionsDone);
  return QUESTIONS.filter(q => !doneSet.has(q.id));
}

function pickTodayQuestions() {
  let pool = getUnseenQuestions();
  if (pool.length < 2) {
    // All 200 done — reset cycle
    state.questionsDone = [];
    saveState();
    pool = [...QUESTIONS];
  }
  // Fisher-Yates shuffle, take first 2
  for (let i = pool.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [pool[i], pool[j]] = [pool[j], pool[i]];
  }
  return [pool[0].id, pool[1].id];
}

function getQuestion(id) {
  return QUESTIONS.find(q => q.id === id);
}

// ── DAILY RESET CHECK ─────────────────────────────────────────
function checkDailyReset() {
  const today = todayStr();
  if (state.lastDate !== today) {
    // New day — reset today flags & pick questions
    state.todayDone      = false;
    state.todayCorrect   = 0;
    state.todayQuestions = pickTodayQuestions();
    // Don't update lastDate yet; update when practice completes
    saveState();
  }
}

// ── AUDIO SYSTEM ──────────────────────────────────────────────
const Audio = (() => {
  let ctx = null;

  function getCtx() {
    if (!ctx) ctx = new (window.AudioContext || window.webkitAudioContext)();
    if (ctx.state === 'suspended') ctx.resume();
    return ctx;
  }

  function tone(freq, dur, start, type = 'sine', vol = 0.3) {
    if (session.muted) return;
    try {
      const c = getCtx();
      const osc  = c.createOscillator();
      const gain = c.createGain();
      osc.connect(gain);
      gain.connect(c.destination);
      osc.type = type;
      osc.frequency.setValueAtTime(freq, start);
      gain.gain.setValueAtTime(vol, start);
      gain.gain.exponentialRampToValueAtTime(0.001, start + dur);
      osc.start(start);
      osc.stop(start + dur + 0.05);
    } catch(e) {}
  }

  return {
    correct() {
      try {
        const c = getCtx(), t = c.currentTime;
        tone(523, 0.12, t);           // C5
        tone(659, 0.12, t + 0.1);     // E5
        tone(784, 0.12, t + 0.2);     // G5
        tone(1047, 0.3,  t + 0.32);   // C6
      } catch(e) {}
    },

    wrong() {
      try {
        const c = getCtx(), t = c.currentTime;
        tone(350, 0.18, t,      'triangle', 0.25);
        tone(294, 0.28, t+0.16, 'triangle', 0.20);
      } catch(e) {}
    },

    trophy() {
      try {
        const c = getCtx(), t = c.currentTime;
        const notes = [523, 659, 784, 1047, 784, 1047, 1319];
        notes.forEach((f, i) => tone(f, 0.22, t + i * 0.16, 'sine', 0.35));
      } catch(e) {}
    },

    click() {
      try {
        const c = getCtx(), t = c.currentTime;
        tone(880, 0.06, t, 'sine', 0.15);
      } catch(e) {}
    },

    // Background music: gentle C major arpeggio loop
    _bgNodes:  [],
    _bgActive: false,

    startBg() {
      if (this._bgActive || session.muted) return;
      this._bgActive = true;
      // Twinkle Twinkle-inspired melody
      const melody = [
        523, 523, 784, 784, 880, 880, 784,
        698, 698, 659, 659, 587, 587, 523,
        784, 784, 698, 698, 659, 659, 587,
        784, 784, 698, 698, 659, 659, 587,
        523, 523, 784, 784, 880, 880, 784,
        698, 698, 659, 659, 587, 587, 523
      ];
      const dur = 0.38;
      const gap = 0.42;
      let offset = 0;

      const playMelody = () => {
        if (!this._bgActive || session.muted) return;
        try {
          const c = getCtx(), t = c.currentTime;
          melody.forEach((f, i) => {
            tone(f / 2, dur, t + i * gap, 'sine', 0.12);
          });
          offset = melody.length * gap * 1000;
          this._bgTimer = setTimeout(playMelody, offset);
        } catch(e) { this._bgActive = false; }
      };
      playMelody();
    },

    stopBg() {
      this._bgActive = false;
      if (this._bgTimer) clearTimeout(this._bgTimer);
      if (ctx) { try { ctx.close(); } catch(e) {} ctx = null; }
    },

    toggleMute() {
      session.muted = !session.muted;
      if (session.muted) {
        this.stopBg();
      } else {
        this.startBg();
      }
      return session.muted;
    }
  };
})();

// ── PARTICLES / CONFETTI ───────────────────────────────────────
function spawnParticles(count, emojis, x, y) {
  const container = document.getElementById('particles');
  for (let i = 0; i < count; i++) {
    const el = document.createElement('span');
    el.className = 'particle';
    el.textContent = emojis[Math.floor(Math.random() * emojis.length)];
    el.style.left   = `${x + (Math.random() - 0.5) * 120}px`;
    el.style.top    = `${y}px`;
    el.style.animationDuration = `${0.8 + Math.random() * 0.8}s`;
    el.style.animationDelay   = `${Math.random() * 0.3}s`;
    container.appendChild(el);
    el.addEventListener('animationend', () => el.remove());
  }
}

function launchConfetti() {
  const container = document.getElementById('confetti-container');
  container.innerHTML = '';
  const colors = ['#FF69B4','#FFD700','#9370DB','#FF6B6B','#4ECDC4','#FFB6C1','#C8A2C8'];
  for (let i = 0; i < 80; i++) {
    const piece = document.createElement('div');
    piece.className = 'confetti-piece';
    piece.style.left            = `${Math.random() * 100}%`;
    piece.style.top             = `-20px`;
    piece.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    piece.style.borderRadius    = Math.random() > 0.5 ? '50%' : '2px';
    piece.style.width           = `${6 + Math.random() * 8}px`;
    piece.style.height          = `${6 + Math.random() * 8}px`;
    piece.style.animationDuration = `${1.5 + Math.random() * 1.5}s`;
    piece.style.animationDelay   = `${Math.random() * 0.8}s`;
    container.appendChild(piece);
    piece.addEventListener('animationend', () => piece.remove());
  }
}

// ── CORRECT TOAST ──────────────────────────────────────────────
const CORRECT_MSGS = [
  'Great job! ⭐', 'Awesome! 🌟', "You're so smart! 💫",
  'Brilliant! ✨', 'Wonderful! 🎉', 'Super star! ⭐',
  'Amazing! 🌈', 'You rock! 🎊', 'Way to go! 🏆',
  'Fantastic! 💖', 'Well done! 🌸', "You're a math star! ⭐"
];

// ── TTS TEXT CLEANER ───────────────────────────────────────────
function cleanForTTS(text) {
  return text
    // Remove pictographic emoji (does NOT strip digits, unlike \p{Emoji})
    .replace(/\p{Extended_Pictographic}/gu, ' ')
    .replace(/\p{Emoji_Presentation}/gu, ' ')
    .replace(/[\u{1F000}-\u{1FFFF}]/gu, ' ')   // SMP emoji fallback
    .replace(/[\u2600-\u27BF]/g, ' ')           // misc symbols & dingbats
    .replace(/[\uFE00-\uFE0F\u200D\u20E3]/g, '') // variation selectors, ZWJ
    // Replace underscores (blanks in questions) with silence
    .replace(/_+/g, ' ')
    // ALL CAPS words → lowercase so TTS reads them as words not abbreviations
    .replace(/\b([A-Z]{2,})\b/g, m => m.toLowerCase())
    // Normalise whitespace
    .replace(/\s+/g, ' ')
    .trim();
}

function speakMsg(text) {
  if (!window.speechSynthesis) return;
  const clean = cleanForTTS(text);
  if (!clean) return;

  const doSpeak = (voices) => {
    const utt = new SpeechSynthesisUtterance(clean);
    utt.rate   = 0.88;   // slightly slower → more natural pacing
    utt.pitch  = 1.05;   // close to natural; avoid robotic high pitch
    utt.volume = 1.0;
    // Prefer modern high-quality English voices
    const preferred = /jenny|aria|emma|nova|ava|allison|samantha|karen|daniel|google us english/i;
    const voice = voices.find(v => v.lang.startsWith('en') && preferred.test(v.name))
               || voices.find(v => v.lang === 'en-US')
               || voices.find(v => v.lang.startsWith('en'));
    if (voice) utt.voice = voice;
    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(utt);
  };

  const voices = window.speechSynthesis.getVoices();
  if (voices.length) {
    doSpeak(voices);
  } else {
    // Voices not yet loaded (common on first call) — wait for them
    window.speechSynthesis.onvoiceschanged = () => {
      window.speechSynthesis.onvoiceschanged = null;
      doSpeak(window.speechSynthesis.getVoices());
    };
  }
}

// ── READ QUESTION ALOUD ────────────────────────────────────────
function readQuestionAloud(q) {
  if (!window.speechSynthesis) return;
  const btn = document.getElementById('read-btn');

  // Toggle: click again while speaking → stop
  if (window.speechSynthesis.speaking) {
    window.speechSynthesis.cancel();
    if (btn) btn.classList.remove('speaking');
    return;
  }

  const text = `${q.question}. A: ${q.options[0]}. B: ${q.options[1]}. C: ${q.options[2]}. D: ${q.options[3]}.`;
  const clean = cleanForTTS(text);

  const doSpeak = (voices) => {
    const utt = new SpeechSynthesisUtterance(clean);
    utt.rate   = 0.82;  // slower for reading comprehension
    utt.pitch  = 1.0;
    utt.volume = 1.0;
    const preferred = /jenny|aria|emma|nova|ava|allison|samantha|karen|daniel|google us english/i;
    const voice = voices.find(v => v.lang.startsWith('en') && preferred.test(v.name))
               || voices.find(v => v.lang === 'en-US')
               || voices.find(v => v.lang.startsWith('en'));
    if (voice) utt.voice = voice;
    if (btn) btn.classList.add('speaking');
    utt.onend  = () => { if (btn) btn.classList.remove('speaking'); };
    utt.onerror = () => { if (btn) btn.classList.remove('speaking'); };
    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(utt);
  };

  const voices = window.speechSynthesis.getVoices();
  if (voices.length) {
    doSpeak(voices);
  } else {
    window.speechSynthesis.onvoiceschanged = () => {
      window.speechSynthesis.onvoiceschanged = null;
      doSpeak(window.speechSynthesis.getVoices());
    };
  }
}

function showCorrectToast() {
  const msg = CORRECT_MSGS[Math.floor(Math.random() * CORRECT_MSGS.length)];
  const toast = document.getElementById('correct-toast');
  toast.textContent = msg;
  toast.classList.remove('show');
  void toast.offsetWidth; // force reflow to restart animation
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 1700);
  speakMsg(msg);
}

// ── SCREEN MANAGEMENT ─────────────────────────────────────────
function showScreen(id) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById(id).classList.add('active');
  document.getElementById('app').classList.toggle('no-anim', id === 'screen-question');
}

// ── HEADER UPDATES ─────────────────────────────────────────────
function updateHeader() {
  document.getElementById('stars-count').textContent  = state.stars;
  document.getElementById('streak-count').textContent = state.streak;
}

// ── PROGRESS BAR HELPER ────────────────────────────────────────
function updateProgressBar(barId, fractionId) {
  const done = state.questionsDone.length;
  const pct  = Math.min((done / 200) * 100, 100);
  const bar  = document.getElementById(barId);
  const frac = document.getElementById(fractionId);
  if (bar)  { bar.style.width = `${pct}%`; bar.parentElement.style.setProperty('--progress', `${pct}%`); }
  if (frac) frac.textContent = `${done} / 200`;
}

// ── TIMER ──────────────────────────────────────────────────────
function startTimer() {
  session.secondsElapsed = 0;
  if (session.timerInterval) clearInterval(session.timerInterval);
  session.timerInterval = setInterval(() => {
    session.secondsElapsed++;
    const m = Math.floor(session.secondsElapsed / 60);
    const s = session.secondsElapsed % 60;
    const el = document.getElementById('q-timer');
    if (el) el.textContent = `⏱ ${m}:${String(s).padStart(2,'0')}`;
  }, 1000);
}

function stopTimer() {
  if (session.timerInterval) clearInterval(session.timerInterval);
  session.timerInterval = null;
}

// ── RENDER QUESTION ────────────────────────────────────────────
function renderQuestion(questionId, qIndex) {
  const q = getQuestion(questionId);
  if (!q) return;

  // Reset per-question session state
  session.firstAttempt = true;

  // Meta
  document.getElementById('q-progress').textContent =
    `Question ${qIndex + 1} of 2`;
  document.getElementById('q-topic').textContent = q.topic;
  document.getElementById('q-timer').textContent = '⏱ 0:00';

  // Question text
  document.getElementById('question-text').textContent = q.question;

  // Options
  ['A','B','C','D'].forEach((letter, i) => {
    document.getElementById(`opt-${i}`).textContent = q.options[i] || '';
    const btn = document.querySelector(`.option-btn[data-index="${i}"]`);
    btn.className = 'option-btn';
    btn.disabled = false;
  });

  // Hide feedback
  document.getElementById('feedback-panel').classList.add('hidden');

  // Wire read-aloud button (cancel any ongoing speech first)
  if (window.speechSynthesis) window.speechSynthesis.cancel();
  const readBtn = document.getElementById('read-btn');
  if (readBtn) {
    readBtn.classList.remove('speaking');
    readBtn.onclick = () => readQuestionAloud(q);
  }

  // Reset kangaroo
  const roo = document.getElementById('kangaroo-question');
  if (roo) { roo.className = 'kangaroo-svg idle'; }

  // Start timer
  startTimer();

  showScreen('screen-question');
}

// ── HANDLE ANSWER ──────────────────────────────────────────────
function handleAnswer(selectedIndex) {
  const qId = state.todayQuestions[session.currentQIndex];
  const q   = getQuestion(qId);
  if (!q) return;

  stopTimer();
  Audio.click();

  const isCorrect = selectedIndex === q.answer;
  const wasFirst  = session.firstAttempt;
  session.firstAttempt = false;

  // Disable all buttons
  document.querySelectorAll('.option-btn').forEach(b => { b.disabled = true; });

  // Highlight correct/wrong
  const selectedBtn = document.querySelector(`.option-btn[data-index="${selectedIndex}"]`);
  const correctBtn  = document.querySelector(`.option-btn[data-index="${q.answer}"]`);

  if (isCorrect) {
    selectedBtn.classList.add('correct');
    Audio.correct();
    showCorrectToast();

    if (wasFirst) {
      session.firstAttempts[session.currentQIndex] = true;
      state.stars++;
      updateHeader();
      saveState();
    }
    // Kangaroo happy
    const roo = document.getElementById('kangaroo-question');
    if (roo) { roo.className = 'kangaroo-svg roo-happy'; }
  } else {
    selectedBtn.classList.add('wrong');
    correctBtn.classList.add('correct');
    // Dim others
    document.querySelectorAll('.option-btn').forEach(b => {
      if (b !== selectedBtn && b !== correctBtn) b.classList.add('dim');
    });
    Audio.wrong();
    session.firstAttempts[session.currentQIndex] = false;
    // Kangaroo sad
    const roo = document.getElementById('kangaroo-question');
    if (roo) { roo.className = 'kangaroo-svg roo-sad'; }
  }

  // Show feedback panel
  showFeedback(isCorrect, q);
}

// ── SHOW FEEDBACK ──────────────────────────────────────────────
function showFeedback(isCorrect, q) {
  const panel = document.getElementById('feedback-panel');
  panel.classList.remove('hidden');

  const header = document.getElementById('feedback-header');
  const expl   = document.getElementById('explanation-text');
  const nextBtn = document.getElementById('next-btn');
  const nextBtnText = document.getElementById('next-btn-text');

  if (isCorrect) {
    header.innerHTML = `<span style="font-size:1.4rem">✅</span>
      <span style="color:#28A745">Correct! Great job! ⭐</span>`;
    header.style.color = '#28A745';
  } else {
    header.innerHTML = `<span style="font-size:1.4rem">❌</span>
      <span style="color:#DC3545">Not quite — here's the answer:</span>`;
    header.style.color = '#DC3545';
  }

  expl.textContent = `💡 ${q.explanation}`;

  // Next button text
  const isLastQ = session.currentQIndex === 1;
  nextBtnText.textContent = isLastQ ? 'See Results 🎉' : 'Next Question →';

  // Next button handler (one-time)
  nextBtn.onclick = isLastQ ? finishDay : nextQuestion;
}

// ── NEXT QUESTION ──────────────────────────────────────────────
function nextQuestion() {
  session.currentQIndex = 1;
  // Kangaroo back to idle
  const roo = document.getElementById('kangaroo-question');
  if (roo) roo.className = 'kangaroo-svg idle';
  renderQuestion(state.todayQuestions[1], 1);
}

// ── FINISH DAY ─────────────────────────────────────────────────
function finishDay() {
  stopTimer();

  const today = todayStr();
  const bothdone = session.firstAttempts[0] && session.firstAttempts[1];

  // Count today correct (stars earned this session)
  const starsEarned = session.firstAttempts.filter(Boolean).length;

  // Update streak
  const diff = daysDiff(state.lastDate, today);
  if (diff === 1 || state.lastDate === null) {
    state.streak++;
  } else if (diff === 0) {
    // Finishing same day (shouldn't happen, but graceful)
  } else {
    state.streak = 1; // restart
  }

  // Mark today done
  state.todayDone    = true;
  state.todayCorrect = starsEarned;
  state.lastDate     = today;

  // Add today's questions to done list
  state.questionsDone = [
    ...state.questionsDone,
    ...state.todayQuestions.filter(id => !state.questionsDone.includes(id))
  ];

  saveState();
  updateHeader();
  showCompleteScreen(bothdone, starsEarned);
}

// ── COMPLETE SCREEN ────────────────────────────────────────────
function showCompleteScreen(perfect, starsEarned) {
  const trophyEl   = document.getElementById('complete-trophy');
  const titleEl    = document.getElementById('complete-title');
  const msgEl      = document.getElementById('complete-message');
  const starsEl    = document.getElementById('stars-earned-display');
  const streakEl   = document.getElementById('complete-streak');

  if (perfect) {
    trophyEl.innerHTML = '<span style="font-size:5rem; display:inline-block; animation: trophyBounce 0.8s cubic-bezier(0.34,1.56,0.64,1) both">🏆</span>';
    titleEl.textContent  = 'Perfect Score! 🎉';
    msgEl.textContent    = 'You got BOTH questions right on your first try! You are a Math Star!';
    Audio.trophy();
    setTimeout(launchConfetti, 300);
    setTimeout(() => speakMsg('Perfect! You are a Math Star!'), 400);
    const roo = document.getElementById('kangaroo-complete');
    if (roo) roo.className = 'kangaroo-svg roo-cheer';
  } else if (starsEarned === 1) {
    trophyEl.innerHTML   = '⭐';
    titleEl.textContent  = 'Great effort! ⭐';
    msgEl.textContent    = 'You got one right! Keep practicing — you are getting better every day!';
    Audio.correct();
    setTimeout(() => speakMsg('Great effort! You are getting better every day!'), 400);
  } else {
    trophyEl.innerHTML   = '💪';
    titleEl.textContent  = 'Good try! 💪';
    msgEl.textContent    = 'Keep going — every day of practice makes you stronger!';
    setTimeout(() => speakMsg('Good try! Keep going — every day of practice makes you stronger!'), 400);
  }

  starsEl.textContent   = starsEarned > 0 ? `⭐ +${starsEarned} star${starsEarned>1?'s':''} earned today!` : '';
  streakEl.textContent  = state.streak;

  updateProgressBar('complete-progress-bar', 'complete-progress-fraction');
  showScreen('screen-complete');
}

// ── WELCOME SCREEN ─────────────────────────────────────────────
function showWelcomeScreen() {
  updateProgressBar('progress-bar', 'progress-fraction');
  // Set the progress kangaroo position
  const done = state.questionsDone.length;
  const pct  = Math.min((done / 200) * 100, 100);
  const rooEl = document.querySelector('.progress-kangaroo');
  if (rooEl) rooEl.style.left = `calc(${pct}% - 10px)`;

  showScreen('screen-welcome');
}

// ── DONE TODAY SCREEN ──────────────────────────────────────────
function showDoneTodayScreen() {
  const resultEl  = document.getElementById('done-result');
  const titleEl   = document.getElementById('done-title');
  const msgEl     = document.getElementById('done-message');
  const streakEl  = document.getElementById('done-streak');

  if (state.todayCorrect === 2) {
    resultEl.textContent = '🏆';
    titleEl.textContent  = 'Amazing! You did it!';
    msgEl.textContent    = 'You got both questions right today! Come back tomorrow!';
  } else if (state.todayCorrect === 1) {
    resultEl.textContent = '⭐';
    titleEl.textContent  = 'Great effort today!';
    msgEl.textContent    = 'You completed today\'s practice. See you tomorrow!';
  } else {
    resultEl.textContent = '💪';
    titleEl.textContent  = 'Practice makes perfect!';
    msgEl.textContent    = 'You completed today\'s questions. Keep it up!';
  }

  streakEl.textContent = state.streak;
  updateProgressBar('done-progress-bar', 'done-progress-fraction');
  showScreen('screen-done-today');
}

// ── INIT ───────────────────────────────────────────────────────
function init() {
  loadState();
  checkAndUpdateStreak();
  checkDailyReset();
  updateHeader();

  // Mute button
  const muteBtn = document.getElementById('mute-btn');
  muteBtn.addEventListener('click', () => {
    const nowMuted = Audio.toggleMute();
    muteBtn.textContent = nowMuted ? '🔇' : '🔊';
    Audio.click();
  });

  // Start button
  document.getElementById('start-btn').addEventListener('click', () => {
    Audio.click();
    startPractice();
  });

  // Option buttons
  document.querySelectorAll('.option-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const index = parseInt(btn.dataset.index, 10);
      handleAnswer(index);
    });
  });

  // Register service worker
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/service-worker.js').catch(() => {});
  }

  // Show correct screen
  if (state.todayDone) {
    showDoneTodayScreen();
  } else {
    showWelcomeScreen();
  }
}

// ── START PRACTICE ─────────────────────────────────────────────
function startPractice() {
  // Make sure we have today's questions
  if (!state.todayQuestions) {
    state.todayQuestions = pickTodayQuestions();
    saveState();
  }

  session.currentQIndex   = 0;
  session.firstAttempts   = [true, true];
  session.firstAttempt    = true;

  renderQuestion(state.todayQuestions[0], 0);
}

// ── BOOT ───────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', init);

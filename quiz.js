/* ============================================================
   Quiz engine. Reads QUESTIONS from questions.js.
   Runs entirely in the browser.
   ============================================================ */

const QUIZ_SETTINGS = {
  // How many questions to serve per attempt.
  // Set to a number (e.g. 20) for a random subset, or the string
  // "all" to serve every question in the bank.
  perAttempt: 20,
  shuffleOptions: true   // shuffle the order of answer choices too
};

(function () {
  const root = document.getElementById('quizApp');
  if (!root || typeof QUESTIONS === 'undefined') return;

  let deck = [];
  let current = 0;
  let score = 0;
  let answered = false;

  function shuffle(arr) {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  function buildDeck() {
    let pool = shuffle(QUESTIONS);
    const n = QUIZ_SETTINGS.perAttempt === 'all'
      ? pool.length
      : Math.min(QUIZ_SETTINGS.perAttempt, pool.length);
    pool = pool.slice(0, n);

    // Optionally shuffle options while keeping the correct answer tracked
    return pool.map(item => {
      if (!QUIZ_SETTINGS.shuffleOptions) return { ...item, _opts: item.options, _ans: item.answer };
      const idx = item.options.map((_, i) => i);
      const order = shuffle(idx);
      const opts = order.map(i => item.options[i]);
      const ans = order.indexOf(item.answer);
      return { ...item, _opts: opts, _ans: ans };
    });
  }

  function start() {
    deck = buildDeck();
    current = 0;
    score = 0;
    render();
  }

  function render() {
    answered = false;
    const item = deck[current];

    const card = document.createElement('div');
    card.className = 'quiz-card';

    const progress = document.createElement('p');
    progress.className = 'quiz-progress';
    progress.textContent = `Question ${current + 1} of ${deck.length}`;
    card.appendChild(progress);

    const q = document.createElement('h3');
    q.className = 'quiz-question';
    q.textContent = item.q;
    card.appendChild(q);

    const opts = document.createElement('div');
    opts.className = 'quiz-options';
    item._opts.forEach((text, i) => {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'quiz-option';
      btn.textContent = text;
      btn.addEventListener('click', () => choose(i, opts, card));
      opts.appendChild(btn);
    });
    card.appendChild(opts);

    const actions = document.createElement('div');
    actions.className = 'quiz-actions';
    actions.appendChild(document.createElement('span'));
    const next = document.createElement('button');
    next.type = 'button';
    next.id = 'quizNext';
    next.className = 'quiz-next';
    next.textContent = current === deck.length - 1 ? 'See result' : 'Next question';
    next.disabled = true;
    next.addEventListener('click', advance);
    actions.appendChild(next);
    card.appendChild(actions);

    root.replaceChildren(card);
  }

  function choose(i, opts, card) {
    if (answered) return;
    answered = true;
    const item = deck[current];
    const buttons = opts.querySelectorAll('.quiz-option');
    buttons.forEach((b, idx) => {
      b.disabled = true;
      if (idx === item._ans) b.classList.add('correct');
      if (idx === i && i !== item._ans) b.classList.add('wrong');
    });
    if (i === item._ans) score++;

    const explain = document.createElement('div');
    explain.className = 'quiz-explain';
    const verdict = i === item._ans ? 'Correct. ' : 'Not quite. ';
    const strong = document.createElement('strong');
    strong.textContent = verdict;
    explain.appendChild(strong);
    explain.appendChild(document.createTextNode(item.explain));
    opts.after(explain);

    const next = card.querySelector('#quizNext');
    if (next) next.disabled = false;
  }

  function advance() {
    current++;
    if (current < deck.length) render();
    else showResult();
  }

  function showResult() {
    const card = document.createElement('div');
    card.className = 'quiz-card quiz-result';

    const pct = Math.round((score / deck.length) * 100);
    const s = document.createElement('p');
    s.className = 'quiz-score';
    s.textContent = `${score} / ${deck.length}`;
    card.appendChild(s);

    const label = document.createElement('p');
    label.className = 'quiz-score-label';
    label.textContent = `${pct}% correct`;
    card.appendChild(label);

    const restart = document.createElement('button');
    restart.type = 'button';
    restart.className = 'quiz-restart';
    restart.textContent = 'Try another set';
    restart.addEventListener('click', start);
    card.appendChild(restart);

    root.replaceChildren(card);
  }

  start();
})();

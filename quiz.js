/* ============================================================
   AAISM interactive quiz
   Pure client-side. Nothing is sent anywhere.

   TO ADD / EDIT QUESTIONS: append objects to QUESTIONS below.
     q       : the question text
     options : array of answer strings
     answer  : index (0-based) of the correct option
     explain : shown after answering
   ============================================================ */

const QUESTIONS = [
  {
    q: "What is the primary purpose of a threat model in an AI security programme?",
    options: [
      "To document every line of model code",
      "To systematically identify assets, threats, and mitigations before deployment",
      "To replace the need for access controls",
      "To measure model accuracy on a test set"
    ],
    answer: 1,
    explain: "Threat modelling structures how you identify assets, likely adversaries, attack paths, and the controls that reduce risk — done before, not after, deployment."
  },
  {
    q: "\"Data poisoning\" against a machine-learning system refers to:",
    options: [
      "Encrypting training data so it cannot be read",
      "Injecting malicious or manipulated samples into training data to corrupt model behaviour",
      "Deleting a production database",
      "Overloading an API with traffic"
    ],
    answer: 1,
    explain: "Poisoning attacks tamper with the training set so the resulting model learns attacker-chosen behaviour, such as a backdoor trigger or degraded accuracy."
  },
  {
    q: "Which principle best limits the blast radius if an AI service account is compromised?",
    options: [
      "Least privilege",
      "Security through obscurity",
      "Full administrative access for convenience",
      "Disabling logging to save storage"
    ],
    answer: 0,
    explain: "Least privilege grants each identity only the access it needs, so a compromised account cannot reach far beyond its intended scope."
  },
  {
    q: "A prompt-injection attack primarily targets:",
    options: [
      "The physical GPU hardware",
      "The instructions/context an LLM follows, causing unintended actions",
      "The TLS certificate of the web server",
      "The user's local password manager"
    ],
    answer: 1,
    explain: "Prompt injection manipulates the text an LLM treats as instructions, potentially overriding guardrails or exfiltrating data the model can access."
  },
  {
    q: "Why is model provenance (tracking a model's origin and lineage) important for governance?",
    options: [
      "It makes the model run faster",
      "It supports accountability, reproducibility, and supply-chain trust",
      "It is only a marketing requirement",
      "It removes the need for testing"
    ],
    answer: 1,
    explain: "Provenance records where a model and its data came from, enabling audit, reproducibility, incident response, and confidence in the AI supply chain."
  }
];

(function () {
  const root = document.getElementById('quizApp');
  if (!root) return;

  let current = 0;
  let score = 0;
  let answered = false;

  function render() {
    answered = false;
    const item = QUESTIONS[current];

    const card = document.createElement('div');
    card.className = 'quiz-card';

    const progress = document.createElement('p');
    progress.className = 'quiz-progress';
    progress.textContent = `Question ${current + 1} of ${QUESTIONS.length}`;
    card.appendChild(progress);

    const question = document.createElement('h3');
    question.className = 'quiz-question';
    question.textContent = item.q;
    card.appendChild(question);

    const opts = document.createElement('div');
    opts.className = 'quiz-options';

    item.options.forEach((text, i) => {
      const btn = document.createElement('button');
      btn.className = 'quiz-option';
      btn.type = 'button';
      btn.textContent = text;
      btn.addEventListener('click', () => choose(i, opts, card));
      opts.appendChild(btn);
    });
    card.appendChild(opts);

    const actions = document.createElement('div');
    actions.className = 'quiz-actions';
    const spacer = document.createElement('span');
    const next = document.createElement('button');
    next.className = 'quiz-next';
    next.type = 'button';
    next.textContent = current === QUESTIONS.length - 1 ? 'See result' : 'Next question';
    next.disabled = true;
    next.id = 'quizNext';
    next.addEventListener('click', advance);
    actions.appendChild(spacer);
    actions.appendChild(next);
    card.appendChild(actions);

    root.replaceChildren(card);
  }

  function choose(i, opts, card) {
    if (answered) return;
    answered = true;
    const item = QUESTIONS[current];
    const buttons = opts.querySelectorAll('.quiz-option');

    buttons.forEach((b, idx) => {
      b.disabled = true;
      if (idx === item.answer) b.classList.add('correct');
      if (idx === i && i !== item.answer) b.classList.add('wrong');
    });

    if (i === item.answer) score++;

    const explain = document.createElement('div');
    explain.className = 'quiz-explain';
    const verdict = i === item.answer ? 'Correct. ' : 'Not quite. ';
    explain.innerHTML = '<strong>' + verdict + '</strong>' + escapeHtml(item.explain);
    opts.after(explain);

    const next = card.querySelector('#quizNext');
    if (next) next.disabled = false;
  }

  function advance() {
    current++;
    if (current < QUESTIONS.length) {
      render();
    } else {
      showResult();
    }
  }

  function showResult() {
    const card = document.createElement('div');
    card.className = 'quiz-card quiz-result';

    const pct = Math.round((score / QUESTIONS.length) * 100);
    const scoreEl = document.createElement('p');
    scoreEl.className = 'quiz-score';
    scoreEl.textContent = score + ' / ' + QUESTIONS.length;
    card.appendChild(scoreEl);

    const label = document.createElement('p');
    label.className = 'quiz-score-label';
    label.textContent = pct >= 80 ? 'Strong — you know the fundamentals.'
                      : pct >= 50 ? 'Solid start — review the explanations and retry.'
                      : 'Keep studying — the guides above will help.';
    card.appendChild(label);

    const restart = document.createElement('button');
    restart.className = 'quiz-restart';
    restart.type = 'button';
    restart.textContent = 'Restart quiz';
    restart.addEventListener('click', () => { current = 0; score = 0; render(); });
    card.appendChild(restart);

    root.replaceChildren(card);
  }

  // Prevent any accidental HTML injection from question data
  function escapeHtml(str) {
    const div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
  }

  render();
})();

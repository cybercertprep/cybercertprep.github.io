/* ============================================================
   AAISM practice question bank — 40 concept questions
   ------------------------------------------------------------
   IMPORTANT: These are AI-security-management CONCEPT questions
   written from general domain knowledge, not reproductions of
   the official AAISM exam. Review them against your official
   AAISM materials before relying on them, and trust the official
   syllabus over anything here.

   HOW TO ADD OR EDIT QUESTIONS:
     {
       q: "Your question text?",
       options: ["Option A", "Option B", "Option C", "Option D"],
       answer: 1,                    // 0 = first option, 1 = second, ...
       explain: "Why the correct answer is correct."
     },

   The quiz counts however many questions are here, shuffles them,
   and (by default) serves a random subset per attempt. Change
   QUIZ_SETTINGS.perAttempt in quiz.js to adjust.
   ============================================================ */

const QUESTIONS = [
  {
    q: "What is the primary purpose of threat modelling in an AI system?",
    options: [
      "To document every line of the model's source code",
      "To systematically identify assets, threats, and mitigations before deployment",
      "To replace the need for access controls",
      "To measure the model's accuracy on a validation set"
    ],
    answer: 1,
    explain: "Threat modelling is a structured way to identify what you're protecting, who might attack it and how, and which controls reduce that risk — carried out before deployment."
  },
  {
    q: "A data poisoning attack against a machine-learning model involves:",
    options: [
      "Encrypting the training data so it cannot be read",
      "Injecting manipulated samples into training data to corrupt the model's behaviour",
      "Flooding the inference API with excessive requests",
      "Stealing the model weights through the API"
    ],
    answer: 1,
    explain: "Poisoning tampers with the training set so the model learns attacker-chosen behaviour, such as a hidden backdoor or degraded accuracy on certain inputs."
  },
  {
    q: "Which control most directly limits the damage if an AI service account is compromised?",
    options: [
      "Applying the principle of least privilege",
      "Relying on security through obscurity",
      "Granting broad admin rights for operational convenience",
      "Disabling audit logging to save storage"
    ],
    answer: 0,
    explain: "Least privilege gives each identity only the access it needs, so a compromised account can't reach far beyond its intended scope."
  },
  {
    q: "A prompt injection attack primarily targets:",
    options: [
      "The GPU hardware running the model",
      "The instructions and context that a language model treats as input, causing unintended actions",
      "The TLS certificate of the hosting web server",
      "The user's local password manager"
    ],
    answer: 1,
    explain: "Prompt injection manipulates the text an LLM interprets as instructions, potentially overriding guardrails or triggering actions the model shouldn't take."
  },
  {
    q: "Why does model provenance (tracking a model's origin and lineage) matter for governance?",
    options: [
      "It makes inference run faster",
      "It supports accountability, reproducibility, and trust across the AI supply chain",
      "It is purely a marketing requirement",
      "It removes the need for testing the model"
    ],
    answer: 1,
    explain: "Provenance records where a model and its data came from, enabling audit, reproducibility, incident response, and confidence in the supply chain."
  },
  {
    q: "In AI security, what does a 'model inversion' attack attempt to do?",
    options: [
      "Reverse the order of neural network layers to improve speed",
      "Reconstruct sensitive training data or attributes from a model's outputs",
      "Convert a model to a smaller format for mobile devices",
      "Roll a model back to a previous version"
    ],
    answer: 1,
    explain: "Model inversion exploits model outputs to infer or reconstruct sensitive attributes of the data the model was trained on, creating a privacy risk."
  },
  {
    q: "What is the main goal of an adversarial example?",
    options: [
      "To speed up model training",
      "To cause a model to make an incorrect prediction using a small, often imperceptible, crafted input change",
      "To compress the model for deployment",
      "To improve the model's fairness across groups"
    ],
    answer: 1,
    explain: "Adversarial examples add deliberate perturbations to an input so the model misclassifies it, even when the change is invisible to a human."
  },
  {
    q: "Which statement best describes 'defence in depth' applied to an AI system?",
    options: [
      "Relying on a single very strong firewall",
      "Layering multiple independent controls so no single failure exposes the system",
      "Deploying the model only in offline environments",
      "Using the largest possible model"
    ],
    answer: 1,
    explain: "Defence in depth uses overlapping safeguards across data, model, application, and infrastructure layers, so one control failing doesn't compromise the whole system."
  },
  {
    q: "A model extraction (model stealing) attack aims to:",
    options: [
      "Delete the deployed model from production",
      "Recreate a functional copy of a model by querying it and learning from the responses",
      "Encrypt the model weights for ransom",
      "Overload the model with traffic"
    ],
    answer: 1,
    explain: "By sending many queries and observing outputs, an attacker can train a substitute model that approximates the target, stealing its functionality and intellectual property."
  },
  {
    q: "Why is meaningful human oversight important in high-impact AI decision systems?",
    options: [
      "It guarantees the model will never make errors",
      "It provides accountability and a chance to catch and correct harmful or incorrect automated decisions",
      "It removes the need for testing and monitoring",
      "It makes the system run faster"
    ],
    answer: 1,
    explain: "Human oversight allows review, intervention, and accountability for consequential decisions, which fully automated systems cannot provide on their own."
  },
  {
    q: "What does the 'CIA triad' refer to in information security?",
    options: [
      "Control, Inspection, and Auditing",
      "Confidentiality, Integrity, and Availability",
      "Compliance, Identity, and Access",
      "Cryptography, Isolation, and Authentication"
    ],
    answer: 1,
    explain: "The CIA triad — confidentiality, integrity, and availability — is the foundational model for defining security objectives, including for AI systems."
  },
  {
    q: "A 'backdoor' (trojan) in a machine-learning model is best described as:",
    options: [
      "A documented API endpoint for administrators",
      "Hidden behaviour that produces attacker-chosen outputs when a specific trigger appears in the input",
      "A faster inference path for premium users",
      "An automatic model update mechanism"
    ],
    answer: 1,
    explain: "A model backdoor is planted (often via poisoned training data) so the model behaves normally until it sees a specific trigger, then produces the attacker's chosen output."
  },
  {
    q: "Which practice best supports accountability when an AI system causes a harmful outcome?",
    options: [
      "Disabling logs to protect privacy",
      "Maintaining detailed logging and an audit trail of inputs, decisions, and changes",
      "Deploying without documentation to move faster",
      "Allowing anonymous administrative access"
    ],
    answer: 1,
    explain: "Comprehensive, tamper-resistant logging and audit trails let you reconstruct what happened, assign responsibility, and improve the system after an incident."
  },
  {
    q: "What is 'data minimisation' as a privacy and security principle?",
    options: [
      "Compressing data to save storage costs",
      "Collecting and retaining only the data necessary for a defined purpose",
      "Deleting all data after every training run",
      "Encrypting data before transmission"
    ],
    answer: 1,
    explain: "Data minimisation reduces risk by limiting collection and retention to what's needed, shrinking the attack surface and the impact of any breach."
  },
  {
    q: "Why is a diverse, representative training dataset important from a risk perspective?",
    options: [
      "It always makes the model smaller",
      "It reduces the chance of biased or unfair outcomes for under-represented groups",
      "It removes the need for a validation set",
      "It guarantees the model cannot be attacked"
    ],
    answer: 1,
    explain: "Unrepresentative data can cause a model to perform poorly or unfairly for certain groups, which is both an ethical and an operational risk."
  },
  {
    q: "What is the main security concern with using third-party or open-source pre-trained models?",
    options: [
      "They are always slower than custom models",
      "They may contain hidden backdoors, vulnerabilities, or unknown provenance in the supply chain",
      "They cannot be fine-tuned",
      "They never come with documentation"
    ],
    answer: 1,
    explain: "A pre-trained model is a supply-chain component; without verified provenance it may carry backdoors, licence issues, or vulnerabilities you inherit on adoption."
  },
  {
    q: "Which of these best describes 'red teaming' an AI system?",
    options: [
      "Optimising the model to reduce inference cost",
      "Deliberately attacking or probing the system to find weaknesses before real adversaries do",
      "Labelling training data by hand",
      "Reviewing the model's licence terms"
    ],
    answer: 1,
    explain: "Red teaming simulates adversarial behaviour to surface vulnerabilities, unsafe outputs, and failure modes so they can be fixed proactively."
  },
  {
    q: "What is the purpose of rate limiting on a model's inference API?",
    options: [
      "To improve the model's accuracy",
      "To reduce abuse such as model-extraction querying and denial-of-service attempts",
      "To encrypt the responses",
      "To increase the model's context window"
    ],
    answer: 1,
    explain: "Rate limiting restricts how many queries a client can send, raising the cost of extraction attacks and helping absorb abusive or excessive traffic."
  },
  {
    q: "In an AI risk assessment, 'residual risk' means:",
    options: [
      "Risk that existed before any controls were applied",
      "The risk that remains after mitigating controls have been applied",
      "Risk that only affects the training environment",
      "Risk that has been fully eliminated"
    ],
    answer: 1,
    explain: "Residual risk is what's left after controls; management must decide whether to accept, transfer, or further reduce it."
  },
  {
    q: "Why should security be considered across the entire AI lifecycle rather than only at deployment?",
    options: [
      "Because deployment is the only stage that matters",
      "Because risks arise at data collection, training, evaluation, deployment, and monitoring stages",
      "Because it lowers the electricity cost of training",
      "Because it removes the need for governance"
    ],
    answer: 1,
    explain: "Threats and controls apply throughout the lifecycle — poisoned data, tampered training, unsafe deployment, and drift in monitoring are all distinct risk points."
  },
  {
    q: "What is 'model drift' (or concept drift)?",
    options: [
      "The model file slowly corrupting on disk",
      "A decline in model performance over time as real-world data diverges from the training data",
      "The model moving between cloud regions",
      "A deliberate attack on the training pipeline"
    ],
    answer: 1,
    explain: "Drift occurs when the statistical properties of live data shift away from the training distribution, degrading accuracy and requiring monitoring and retraining."
  },
  {
    q: "Which is the best reason to encrypt model artifacts and training data at rest?",
    options: [
      "To make the model run faster",
      "To protect confidentiality if storage is accessed or stolen by an unauthorised party",
      "To reduce the model's file size",
      "To improve the model's fairness"
    ],
    answer: 1,
    explain: "Encryption at rest ensures that stolen or improperly accessed storage does not expose sensitive data or proprietary model weights in usable form."
  },
  {
    q: "What is the security value of 'input validation' for a model-serving application?",
    options: [
      "It increases the model's parameter count",
      "It filters malformed or malicious inputs before they reach the model or downstream systems",
      "It replaces the need for authentication",
      "It compresses the input data"
    ],
    answer: 1,
    explain: "Validating and sanitising inputs helps block injection, malformed payloads, and other attacks that exploit how inputs are processed."
  },
  {
    q: "Why is 'explainability' relevant to AI governance and risk?",
    options: [
      "It guarantees the model is secure",
      "It helps stakeholders understand and challenge decisions, supporting accountability and compliance",
      "It makes the model train faster",
      "It removes the need for human oversight"
    ],
    answer: 1,
    explain: "Explainability allows affected people, auditors, and regulators to understand why a decision was made, which supports trust, contestability, and compliance."
  },
  {
    q: "A 'membership inference' attack tries to determine:",
    options: [
      "Which cloud provider hosts the model",
      "Whether a specific individual's data was part of the model's training set",
      "How many parameters the model has",
      "The model's inference latency"
    ],
    answer: 1,
    explain: "Membership inference exploits model behaviour to reveal whether a particular record was used in training — a privacy risk, especially for sensitive datasets."
  },
  {
    q: "What is the primary benefit of an incident response plan for AI systems?",
    options: [
      "It prevents all incidents from occurring",
      "It defines roles, steps, and communications so the organisation can respond quickly and consistently when incidents occur",
      "It replaces the need for monitoring",
      "It improves the model's accuracy"
    ],
    answer: 1,
    explain: "An incident response plan doesn't prevent incidents but ensures a prepared, coordinated, and timely response that limits damage and aids recovery."
  },
  {
    q: "Why is 'segregation of duties' a useful control in an AI development pipeline?",
    options: [
      "It speeds up model training",
      "It prevents a single person from controlling every stage, reducing fraud and undetected malicious changes",
      "It removes the need for testing",
      "It guarantees the model is unbiased"
    ],
    answer: 1,
    explain: "Splitting responsibilities across people means malicious or erroneous changes are more likely to be caught, and no single actor can quietly compromise the pipeline."
  },
  {
    q: "What does 'secure by design' mean for AI systems?",
    options: [
      "Security is added only after the system is built",
      "Security requirements and controls are built in from the earliest design stages",
      "Only the user interface is secured",
      "Security is handled entirely by the cloud provider"
    ],
    answer: 1,
    explain: "Secure by design integrates security into architecture and design decisions from the start, rather than bolting it on late where it is costlier and weaker."
  },
  {
    q: "Which is a key risk of over-relying on a model's outputs without monitoring?",
    options: [
      "The model will train itself automatically",
      "Undetected errors, drift, or manipulation can lead to sustained harmful or incorrect decisions",
      "The model will become smaller over time",
      "The API will encrypt itself"
    ],
    answer: 1,
    explain: "Without ongoing monitoring, degradation, bias, or attacks can go unnoticed, allowing flawed automated decisions to accumulate real-world harm."
  },
  {
    q: "What is the purpose of a 'kill switch' or safe fallback in an AI system?",
    options: [
      "To permanently delete the model",
      "To disable or revert to a safe mode quickly if the system behaves dangerously or is compromised",
      "To increase inference speed",
      "To bypass authentication during outages"
    ],
    answer: 1,
    explain: "A tested kill switch or fallback lets operators halt harmful behaviour and revert to a known-safe state, containing damage during an incident."
  },
  {
    q: "Why is inventorying all AI models and data assets important for security?",
    options: [
      "It makes models run faster",
      "You cannot protect, patch, or govern assets you don't know you have",
      "It removes the need for encryption",
      "It guarantees regulatory approval"
    ],
    answer: 1,
    explain: "An accurate asset inventory is foundational: unknown 'shadow' models and datasets can't be risk-assessed, monitored, or secured."
  },
  {
    q: "What best describes the risk of 'shadow AI' in an organisation?",
    options: [
      "AI systems that run only at night",
      "Unauthorised or ungoverned AI tools used without security review or oversight",
      "Backup copies of approved models",
      "Models trained on synthetic data"
    ],
    answer: 1,
    explain: "Shadow AI is unsanctioned AI use that bypasses governance, creating data-leakage, compliance, and security risks the organisation can't see or control."
  },
  {
    q: "Which measure most directly protects data confidentiality while a model is used across organisations?",
    options: [
      "Publishing the training data openly",
      "Techniques such as encryption, access controls, and privacy-preserving methods that limit exposure of sensitive data",
      "Removing all logging",
      "Increasing the model's size"
    ],
    answer: 1,
    explain: "Confidentiality is preserved through layered controls — encryption, strict access, and privacy-preserving techniques — that keep sensitive data from being exposed."
  },
  {
    q: "What is the governance purpose of defining clear AI usage policies?",
    options: [
      "To make the model train faster",
      "To set expectations and boundaries for how AI may be built and used, supporting compliance and risk management",
      "To eliminate the need for security controls",
      "To increase model accuracy"
    ],
    answer: 1,
    explain: "Policies translate risk appetite and legal obligations into concrete rules, guiding acceptable use and giving a basis for enforcement and accountability."
  },
  {
    q: "Why should organisations assess the legal and regulatory context of an AI system?",
    options: [
      "Regulations never apply to AI",
      "Non-compliance can bring legal, financial, and reputational consequences, and requirements vary by jurisdiction and use case",
      "It only matters for open-source models",
      "It removes the need for testing"
    ],
    answer: 1,
    explain: "AI systems may fall under privacy, sector-specific, and emerging AI-specific regulations; assessing this early avoids costly non-compliance and rework."
  },
  {
    q: "What is a key benefit of continuous monitoring for a deployed AI system?",
    options: [
      "It eliminates the need for an incident response plan",
      "It enables early detection of anomalies, drift, abuse, and performance degradation",
      "It permanently prevents all attacks",
      "It makes the model self-aware"
    ],
    answer: 1,
    explain: "Continuous monitoring surfaces problems — attacks, drift, misuse, and degradation — early enough to respond before they cause significant harm."
  },
  {
    q: "Which describes a 'supply chain attack' in the AI context?",
    options: [
      "An attack that only affects physical delivery logistics",
      "Compromising a component, dataset, library, or model that the target depends on, to reach the target indirectly",
      "An attack that only targets the user interface",
      "A denial-of-service attack on the API"
    ],
    answer: 1,
    explain: "Supply-chain attacks compromise upstream dependencies — data, libraries, or pre-trained models — so the malicious element is inherited when the target adopts them."
  },
  {
    q: "Why is it risky to include sensitive or personal data in prompts sent to an external AI service?",
    options: [
      "It makes responses slower",
      "The data may be logged, retained, or exposed outside your control, creating privacy and compliance risks",
      "It always improves the answer quality",
      "It reduces the model's accuracy"
    ],
    answer: 1,
    explain: "Data placed in prompts to a third-party service can leave your control and may be logged or retained, so sensitive information needs careful handling and policy."
  },
  {
    q: "What is the main aim of 'privacy by design' in an AI project?",
    options: [
      "To collect as much data as possible",
      "To embed privacy protections into the system from the outset rather than adding them later",
      "To make the model open source",
      "To remove all access controls"
    ],
    answer: 1,
    explain: "Privacy by design builds data-protection measures into architecture and processes from the start, reducing exposure and easing compliance."
  },
  {
    q: "Which best captures why 'risk cannot be fully eliminated' is an important governance mindset?",
    options: [
      "It means security controls are pointless",
      "It reflects that the goal is to manage risk to an acceptable level, not to achieve impossible perfect security",
      "It means all risk should always be accepted",
      "It means monitoring is unnecessary"
    ],
    answer: 1,
    explain: "Effective risk management aims to reduce risk to a level the organisation can accept, balancing cost, benefit, and residual risk — perfect security isn't attainable."
  }
];

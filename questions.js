/* ============================================================
   AAISM practice question bank — 40 concept questions
   ------------------------------------------------------------
   IMPORTANT: These are AI-security-management CONCEPT questions
   written from general domain knowledge, not reproductions of
   the official AAISM exam. Review them against your official
   ISACA AAISM materials before relying on them.

   Option lengths are deliberately mixed so the correct answer
   is NOT reliably the longest one.

   HOW TO ADD OR EDIT QUESTIONS:
     {
       q: "Your question text?",
       options: ["Option A", "Option B", "Option C", "Option D"],
       answer: 1,                    // 0 = first option, 1 = second, ...
       explain: "Why the correct answer is correct."
     },
   ============================================================ */

const QUESTIONS = [
  {
    q: "What is the primary purpose of threat modelling in an AI system?",
    options: [
      "To identify assets, threats, and mitigations before deployment",
      "To document the source code and record every function the developers wrote during the build",
      "To replace access controls",
      "To measure accuracy on a validation set"
    ],
    answer: 0,
    explain: "Threat modelling identifies what you're protecting, who might attack it and how, and which controls reduce that risk — done before deployment."
  },
  {
    q: "A data poisoning attack against a machine-learning model involves:",
    options: [
      "Injecting manipulated samples into the training data",
      "Encrypting the training data thoroughly so that it can no longer be read by anyone else",
      "Flooding the inference API with requests",
      "Stealing the model weights"
    ],
    answer: 0,
    explain: "Poisoning tampers with the training set so the model learns attacker-chosen behaviour, such as a hidden backdoor or degraded accuracy on certain inputs."
  },
  {
    q: "Which control most directly limits the damage if an AI service account is compromised?",
    options: [
      "Least privilege",
      "Relying on the obscurity of the internal system design to keep attackers from finding a way in",
      "Broad admin rights for convenience",
      "Turning off audit logging"
    ],
    answer: 0,
    explain: "Least privilege gives each identity only the access it needs, so a compromised account can't reach far beyond its intended scope."
  },
  {
    q: "A prompt injection attack primarily targets:",
    options: [
      "The instructions and context a language model treats as input",
      "The graphics processing hardware that physically runs the model in the data centre",
      "The web server's TLS certificate",
      "The user's password manager"
    ],
    answer: 0,
    explain: "Prompt injection manipulates the text an LLM interprets as instructions, potentially overriding guardrails or triggering actions the model shouldn't take."
  },
  {
    q: "Why does model provenance (tracking a model's origin and lineage) matter for governance?",
    options: [
      "It supports accountability, reproducibility, and supply-chain trust",
      "It is a marketing requirement that vendors like to advertise to make their product seem safer",
      "It makes inference run faster",
      "It removes the need to test"
    ],
    answer: 0,
    explain: "Provenance records where a model and its data came from, enabling audit, reproducibility, incident response, and confidence in the supply chain."
  },
  {
    q: "In AI security, what does a 'model inversion' attack attempt to do?",
    options: [
      "Reconstruct sensitive training data from a model's outputs",
      "Reverse the ordering of the neural network's internal layers so that it runs more quickly at inference",
      "Convert the model to a mobile format",
      "Roll the model back to an older version"
    ],
    answer: 0,
    explain: "Model inversion exploits model outputs to infer or reconstruct sensitive attributes of the data the model was trained on, creating a privacy risk."
  },
  {
    q: "What is the main goal of an adversarial example?",
    options: [
      "To cause a wrong prediction using a small crafted input change",
      "To take the existing model and compress it down into a much smaller size for easier deployment",
      "To speed up training",
      "To improve fairness across groups"
    ],
    answer: 0,
    explain: "Adversarial examples add deliberate perturbations to an input so the model misclassifies it, even when the change is invisible to a human."
  },
  {
    q: "Which statement best describes 'defence in depth' applied to an AI system?",
    options: [
      "Layering multiple independent controls so no single failure exposes the system",
      "Relying on a single firewall",
      "Deploying the model only in offline air-gapped environments that are never connected to any network",
      "Using the largest possible model"
    ],
    answer: 0,
    explain: "Defence in depth uses overlapping safeguards across data, model, application, and infrastructure layers, so one control failing doesn't compromise the whole system."
  },
  {
    q: "A model extraction (model stealing) attack aims to:",
    options: [
      "Recreate a copy of a model by querying it and learning from the responses",
      "Delete the model from production",
      "Encrypt the model weights and then demand a ransom payment before releasing them back",
      "Overload the model with traffic"
    ],
    answer: 0,
    explain: "By sending many queries and observing outputs, an attacker can train a substitute model that approximates the target, stealing its functionality and intellectual property."
  },
  {
    q: "Why is meaningful human oversight important in high-impact AI decision systems?",
    options: [
      "It provides accountability and a way to catch and correct harmful automated decisions",
      "It guarantees the model will never make any errors of any kind once it is deployed to production",
      "It removes the need for monitoring",
      "It makes the system faster"
    ],
    answer: 0,
    explain: "Human oversight allows review, intervention, and accountability for consequential decisions, which fully automated systems cannot provide on their own."
  },
  {
    q: "What does the 'CIA triad' refer to in information security?",
    options: [
      "Confidentiality, integrity, and availability",
      "The three-part framework of control, inspection, and thorough auditing of every system event",
      "Compliance, identity, and access",
      "Cryptography, isolation, and authentication"
    ],
    answer: 0,
    explain: "The CIA triad — confidentiality, integrity, and availability — is the foundational model for defining security objectives, including for AI systems."
  },
  {
    q: "A 'backdoor' (trojan) in a machine-learning model is best described as:",
    options: [
      "Hidden behaviour triggered by a specific input pattern",
      "A documented administrative endpoint that the operations team uses to manage the deployed service",
      "A faster path for premium users",
      "An automatic update mechanism"
    ],
    answer: 0,
    explain: "A model backdoor is planted (often via poisoned training data) so the model behaves normally until it sees a specific trigger, then produces the attacker's chosen output."
  },
  {
    q: "Which practice best supports accountability when an AI system causes a harmful outcome?",
    options: [
      "Keeping detailed logs and an audit trail",
      "Disabling all logging on the system so that no potentially sensitive information is ever recorded",
      "Deploying without any documentation",
      "Allowing anonymous admin access"
    ],
    answer: 0,
    explain: "Comprehensive, tamper-resistant logging and audit trails let you reconstruct what happened, assign responsibility, and improve the system after an incident."
  },
  {
    q: "What is 'data minimisation' as a privacy and security principle?",
    options: [
      "Collecting and keeping only the data you actually need",
      "Compressing all stored data as tightly as possible in order to reduce the monthly storage bill",
      "Deleting all data after training",
      "Encrypting data in transit"
    ],
    answer: 0,
    explain: "Data minimisation reduces risk by limiting collection and retention to what's needed, shrinking the attack surface and the impact of any breach."
  },
  {
    q: "Why is a diverse, representative training dataset important from a risk perspective?",
    options: [
      "It reduces biased or unfair outcomes for under-represented groups",
      "It always results in a model file that is physically smaller and therefore cheaper to host",
      "It removes the need for a validation set",
      "It makes the model unhackable"
    ],
    answer: 0,
    explain: "Unrepresentative data can cause a model to perform poorly or unfairly for certain groups, which is both an ethical and an operational risk."
  },
  {
    q: "What is the main security concern with using third-party or open-source pre-trained models?",
    options: [
      "They may carry hidden backdoors or unknown provenance",
      "They are always considerably slower at inference than a model you build entirely in-house",
      "They can never be fine-tuned",
      "They never include documentation"
    ],
    answer: 0,
    explain: "A pre-trained model is a supply-chain component; without verified provenance it may carry backdoors, licence issues, or vulnerabilities you inherit on adoption."
  },
  {
    q: "Which of these best describes 'red teaming' an AI system?",
    options: [
      "Deliberately attacking it to find weaknesses first",
      "Carefully optimising the model's settings so that it costs less to run each inference in production",
      "Hand-labelling the training data",
      "Reviewing the model's licence"
    ],
    answer: 0,
    explain: "Red teaming simulates adversarial behaviour to surface vulnerabilities, unsafe outputs, and failure modes so they can be fixed proactively."
  },
  {
    q: "What is the purpose of rate limiting on a model's inference API?",
    options: [
      "To reduce abuse such as extraction and denial-of-service",
      "To make the underlying model measurably more accurate on the inputs that it receives",
      "To encrypt the responses",
      "To enlarge the context window"
    ],
    answer: 0,
    explain: "Rate limiting restricts how many queries a client can send, raising the cost of extraction attacks and helping absorb abusive or excessive traffic."
  },
  {
    q: "In an AI risk assessment, 'residual risk' means:",
    options: [
      "The risk that remains after controls are applied",
      "The full amount of risk that was originally present before anyone applied a single control",
      "Risk only in the training environment",
      "Risk that is fully eliminated"
    ],
    answer: 0,
    explain: "Residual risk is what's left after controls; management must decide whether to accept, transfer, or further reduce it."
  },
  {
    q: "Why should security be considered across the entire AI lifecycle rather than only at deployment?",
    options: [
      "Risks arise at data, training, evaluation, deployment, and monitoring",
      "Because the moment of deployment is genuinely the only stage where a real attacker could ever act",
      "Because it lowers electricity costs",
      "Because it removes the need for governance"
    ],
    answer: 0,
    explain: "Threats and controls apply throughout the lifecycle — poisoned data, tampered training, unsafe deployment, and drift in monitoring are all distinct risk points."
  },
  {
    q: "What is 'model drift' (or concept drift)?",
    options: [
      "Performance decline as live data diverges from training data",
      "The gradual corruption of the model file on disk caused by failing storage hardware over time",
      "The model moving between cloud regions",
      "A deliberate attack on training"
    ],
    answer: 0,
    explain: "Drift occurs when the statistical properties of live data shift away from the training distribution, degrading accuracy and requiring monitoring and retraining."
  },
  {
    q: "Which is the best reason to encrypt model artifacts and training data at rest?",
    options: [
      "To protect confidentiality if the storage is stolen",
      "To make the model produce its predictions noticeably faster when it is queried by users",
      "To reduce the model's file size",
      "To improve fairness"
    ],
    answer: 0,
    explain: "Encryption at rest ensures that stolen or improperly accessed storage does not expose sensitive data or proprietary model weights in usable form."
  },
  {
    q: "What is the security value of 'input validation' for a model-serving application?",
    options: [
      "It filters malformed or malicious inputs before they reach the model",
      "It raises the total number of parameters inside the model so that it can learn more patterns",
      "It replaces authentication",
      "It compresses the inputs"
    ],
    answer: 0,
    explain: "Validating and sanitising inputs helps block injection, malformed payloads, and other attacks that exploit how inputs are processed."
  },
  {
    q: "Why is 'explainability' relevant to AI governance and risk?",
    options: [
      "It helps people understand and challenge decisions",
      "It provides an ironclad guarantee that the underlying model is completely secure against attackers",
      "It makes training faster",
      "It removes the need for oversight"
    ],
    answer: 0,
    explain: "Explainability allows affected people, auditors, and regulators to understand why a decision was made, which supports trust, contestability, and compliance."
  },
  {
    q: "A 'membership inference' attack tries to determine:",
    options: [
      "Whether a specific person's data was in the training set",
      "Which of the major cloud providers is currently being used to host the deployed model",
      "How many parameters the model has",
      "The model's inference latency"
    ],
    answer: 0,
    explain: "Membership inference exploits model behaviour to reveal whether a particular record was used in training — a privacy risk, especially for sensitive datasets."
  },
  {
    q: "What is the primary benefit of an incident response plan for AI systems?",
    options: [
      "It enables a fast, coordinated response when incidents occur",
      "It completely prevents every possible incident from ever happening once it has been written down",
      "It replaces monitoring",
      "It improves accuracy"
    ],
    answer: 0,
    explain: "An incident response plan doesn't prevent incidents but ensures a prepared, coordinated, and timely response that limits damage and aids recovery."
  },
  {
    q: "Why is 'segregation of duties' a useful control in an AI development pipeline?",
    options: [
      "It stops one person controlling every stage alone",
      "It noticeably shortens the amount of time that the model needs in order to finish training",
      "It removes the need for testing",
      "It guarantees an unbiased model"
    ],
    answer: 0,
    explain: "Splitting responsibilities across people means malicious or erroneous changes are more likely to be caught, and no single actor can quietly compromise the pipeline."
  },
  {
    q: "What does 'secure by design' mean for AI systems?",
    options: [
      "Building security in from the earliest design stages",
      "Adding the security controls at the very end, once the whole system has already been fully built",
      "Securing only the user interface",
      "Leaving security to the cloud provider"
    ],
    answer: 0,
    explain: "Secure by design integrates security into architecture and design decisions from the start, rather than bolting it on late where it is costlier and weaker."
  },
  {
    q: "Which is a key risk of over-relying on a model's outputs without monitoring?",
    options: [
      "Undetected errors or drift can cause sustained harm",
      "The model will quietly begin to retrain itself on its own without anyone asking it to",
      "The model shrinks over time",
      "The API encrypts itself"
    ],
    answer: 0,
    explain: "Without ongoing monitoring, degradation, bias, or attacks can go unnoticed, allowing flawed automated decisions to accumulate real-world harm."
  },
  {
    q: "What is the purpose of a 'kill switch' or safe fallback in an AI system?",
    options: [
      "To quickly disable or revert to a safe mode if the system misbehaves",
      "To permanently and irreversibly delete the entire model along with all of its training data",
      "To increase inference speed",
      "To bypass authentication"
    ],
    answer: 0,
    explain: "A tested kill switch or fallback lets operators halt harmful behaviour and revert to a known-safe state, containing damage during an incident."
  },
  {
    q: "Why is inventorying all AI models and data assets important for security?",
    options: [
      "You can't protect what you don't know you have",
      "It causes each of the deployed models to generate its predictions substantially more quickly",
      "It removes the need for encryption",
      "It guarantees regulatory approval"
    ],
    answer: 0,
    explain: "An accurate asset inventory is foundational: unknown 'shadow' models and datasets can't be risk-assessed, monitored, or secured."
  },
  {
    q: "What best describes the risk of 'shadow AI' in an organisation?",
    options: [
      "Ungoverned AI tools used without security review",
      "Approved backup copies of models that are stored safely in a second data centre for resilience",
      "Systems that only run at night",
      "Models trained on synthetic data"
    ],
    answer: 0,
    explain: "Shadow AI is unsanctioned AI use that bypasses governance, creating data-leakage, compliance, and security risks the organisation can't see or control."
  },
  {
    q: "Which measure most directly protects data confidentiality when a model is used across organisations?",
    options: [
      "Encryption, access controls, and privacy-preserving methods",
      "Publishing the full training dataset openly so that outside researchers can help improve the model",
      "Removing all logging",
      "Increasing model size"
    ],
    answer: 0,
    explain: "Confidentiality is preserved through layered controls — encryption, strict access, and privacy-preserving techniques — that keep sensitive data from being exposed."
  },
  {
    q: "What is the governance purpose of defining clear AI usage policies?",
    options: [
      "To set boundaries for how AI may be built and used",
      "To take the place of every technical security control the organisation would otherwise need to run",
      "To make training faster",
      "To raise model accuracy"
    ],
    answer: 0,
    explain: "Policies translate risk appetite and legal obligations into concrete rules, guiding acceptable use and giving a basis for enforcement and accountability."
  },
  {
    q: "Why should organisations assess the legal and regulatory context of an AI system?",
    options: [
      "Non-compliance carries legal, financial, and reputational risk",
      "Because rules and regulations of any kind have never once applied to artificial intelligence systems",
      "It only matters for open-source models",
      "It removes the need to test"
    ],
    answer: 0,
    explain: "AI systems may fall under privacy, sector-specific, and emerging AI-specific regulations; assessing this early avoids costly non-compliance and rework."
  },
  {
    q: "What is a key benefit of continuous monitoring for a deployed AI system?",
    options: [
      "Early detection of anomalies, drift, abuse, and degradation",
      "It offers a permanent guarantee that no attack of any kind will ever succeed against the system",
      "It replaces the incident response plan",
      "It makes the model self-aware"
    ],
    answer: 0,
    explain: "Continuous monitoring surfaces problems — attacks, drift, misuse, and degradation — early enough to respond before they cause significant harm."
  },
  {
    q: "Which describes a 'supply chain attack' in the AI context?",
    options: [
      "Compromising a dependency the target relies on",
      "An attack that is aimed only at the physical logistics of shipping computer hardware around",
      "An attack only on the user interface",
      "A denial-of-service on the API"
    ],
    answer: 0,
    explain: "Supply-chain attacks compromise upstream dependencies — data, libraries, or pre-trained models — so the malicious element is inherited when the target adopts them."
  },
  {
    q: "Why is it risky to put sensitive or personal data in prompts sent to an external AI service?",
    options: [
      "It may be logged or retained outside your control",
      "It reliably causes the external service to return an answer far more slowly than it otherwise would",
      "It always improves the answer",
      "It reduces model accuracy"
    ],
    answer: 0,
    explain: "Data placed in prompts to a third-party service can leave your control and may be logged or retained, so sensitive information needs careful handling and policy."
  },
  {
    q: "What is the main aim of 'privacy by design' in an AI project?",
    options: [
      "Building privacy protections in from the outset",
      "Gathering as much personal data as you possibly can early on in case it turns out to be useful",
      "Making the model open source",
      "Removing all access controls"
    ],
    answer: 0,
    explain: "Privacy by design builds data-protection measures into architecture and processes from the start, reducing exposure and easing compliance."
  },
  {
    q: "Which best captures why 'risk cannot be fully eliminated' is an important governance mindset?",
    options: [
      "The goal is to manage risk to an acceptable level",
      "It shows that investing in any security controls at all is fundamentally a waste of the budget",
      "It means all risk should be accepted",
      "It means monitoring is pointless"
    ],
    answer: 0,
    explain: "Effective risk management aims to reduce risk to a level the organisation can accept, balancing cost, benefit, and residual risk — perfect security isn't attainable."
  }
];

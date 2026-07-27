/* ============================================================
   AAISM practice question bank — 40 concept questions
   ------------------------------------------------------------
   IMPORTANT: These are AI-security-management CONCEPT questions
   written from general domain knowledge, not reproductions of
   the official AAISM exam. Review them against your official
   ISACA AAISM materials before relying on them.

   Within each question, all four options are kept close in
   length so answer length is not a usable clue. The quiz also
   shuffles option order at runtime.

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
      "Identifying assets, threats, and mitigations before deployment",
      "Documenting the model's full source code and build history",
      "Replacing the need for runtime access controls entirely",
      "Measuring model accuracy against a held-out validation set"
    ],
    answer: 0,
    explain: "Threat modelling identifies what you're protecting, who might attack it and how, and which controls reduce that risk — done before deployment."
  },
  {
    q: "A data poisoning attack against a machine-learning model involves:",
    options: [
      "Encrypting the training data so nobody else can read it",
      "Injecting manipulated samples into the training dataset",
      "Flooding the live inference API with excessive requests",
      "Copying the model weights out through the public API"
    ],
    answer: 1,
    explain: "Poisoning tampers with the training set so the model learns attacker-chosen behaviour, such as a hidden backdoor or degraded accuracy on certain inputs."
  },
  {
    q: "Which control most directly limits the damage if an AI service account is compromised?",
    options: [
      "Granting broad administrative rights for operational ease",
      "Relying on the obscurity of the internal system design",
      "Applying least privilege to every identity and account",
      "Turning off audit logging to conserve storage space"
    ],
    answer: 2,
    explain: "Least privilege gives each identity only the access it needs, so a compromised account can't reach far beyond its intended scope."
  },
  {
    q: "A prompt injection attack primarily targets:",
    options: [
      "The instructions and context the language model reads",
      "The graphics hardware physically running the model",
      "The TLS certificate securing the hosting web server",
      "The password manager stored on the user's device"
    ],
    answer: 0,
    explain: "Prompt injection manipulates the text an LLM interprets as instructions, potentially overriding guardrails or triggering actions the model shouldn't take."
  },
  {
    q: "Why does model provenance (tracking a model's origin and lineage) matter for governance?",
    options: [
      "It is a marketing point that makes a product look safer",
      "It supports accountability, reproducibility, and supply trust",
      "It makes the model produce its predictions much faster",
      "It removes the need to test the model before release"
    ],
    answer: 1,
    explain: "Provenance records where a model and its data came from, enabling audit, reproducibility, incident response, and confidence in the supply chain."
  },
  {
    q: "In AI security, what does a 'model inversion' attack attempt to do?",
    options: [
      "Reverse the network's layer order to speed up inference",
      "Convert the model into a smaller format for mobile use",
      "Roll the deployed model back to an earlier saved version",
      "Reconstruct sensitive training data from model outputs"
    ],
    answer: 3,
    explain: "Model inversion exploits model outputs to infer or reconstruct sensitive attributes of the data the model was trained on, creating a privacy risk."
  },
  {
    q: "What is the main goal of an adversarial example?",
    options: [
      "Forcing a wrong prediction with a tiny crafted change",
      "Compressing a trained model for easier deployment",
      "Speeding up the model's training convergence",
      "Improving the model's fairness across groups"
    ],
    answer: 0,
    explain: "Adversarial examples add deliberate perturbations to an input so the model misclassifies it, even when the change is invisible to a human."
  },
  {
    q: "Which statement best describes 'defence in depth' applied to an AI system?",
    options: [
      "Relying on one strong firewall at the network edge",
      "Layering several independent controls across the system",
      "Running the model only in fully offline environments",
      "Choosing the largest model available for the task"
    ],
    answer: 1,
    explain: "Defence in depth uses overlapping safeguards across data, model, application, and infrastructure layers, so one control failing doesn't compromise the whole system."
  },
  {
    q: "A model extraction (model stealing) attack aims to:",
    options: [
      "Delete the deployed model from the production system",
      "Encrypt the model weights and demand a ransom to unlock",
      "Recreate a copy of the model by querying it repeatedly",
      "Overload the model endpoint with high request volume"
    ],
    answer: 2,
    explain: "By sending many queries and observing outputs, an attacker can train a substitute model that approximates the target, stealing its functionality and intellectual property."
  },
  {
    q: "Why is meaningful human oversight important in high-impact AI decision systems?",
    options: [
      "It guarantees the model will never make any errors",
      "It removes the need for monitoring once it's in place",
      "It makes the overall system respond noticeably faster",
      "It allows harmful automated decisions to be corrected"
    ],
    answer: 3,
    explain: "Human oversight allows review, intervention, and accountability for consequential decisions, which fully automated systems cannot provide on their own."
  },
  {
    q: "What does the 'CIA triad' refer to in information security?",
    options: [
      "Confidentiality, integrity, and availability",
      "Control, inspection, and thorough auditing",
      "Compliance, identity, and access control",
      "Cryptography, isolation, and authentication"
    ],
    answer: 0,
    explain: "The CIA triad — confidentiality, integrity, and availability — is the foundational model for defining security objectives, including for AI systems."
  },
  {
    q: "A 'backdoor' (trojan) in a machine-learning model is best described as:",
    options: [
      "A documented admin endpoint used by the operations team",
      "Hidden behaviour triggered by a specific input pattern",
      "A faster inference path reserved for premium customers",
      "An automatic mechanism that keeps the model updated"
    ],
    answer: 1,
    explain: "A model backdoor is planted (often via poisoned training data) so the model behaves normally until it sees a specific trigger, then produces the attacker's chosen output."
  },
  {
    q: "Which practice best supports accountability when an AI system causes a harmful outcome?",
    options: [
      "Disabling all logging to avoid recording sensitive data",
      "Deploying without documentation to ship the tool faster",
      "Keeping detailed logs and an audit trail of decisions",
      "Allowing shared anonymous administrative access to it"
    ],
    answer: 2,
    explain: "Comprehensive, tamper-resistant logging and audit trails let you reconstruct what happened, assign responsibility, and improve the system after an incident."
  },
  {
    q: "What is 'data minimisation' as a privacy and security principle?",
    options: [
      "Collecting and keeping only the data actually needed",
      "Compressing stored data to cut the monthly storage bill",
      "Deleting the entire dataset after every training run",
      "Encrypting the data while it moves across the network"
    ],
    answer: 0,
    explain: "Data minimisation reduces risk by limiting collection and retention to what's needed, shrinking the attack surface and the impact of any breach."
  },
  {
    q: "Why is a diverse, representative training dataset important from a risk perspective?",
    options: [
      "It always yields a smaller, cheaper-to-host model file",
      "It removes the need for a separate validation dataset",
      "It reduces biased outcomes for under-represented groups",
      "It makes the resulting model impossible to attack"
    ],
    answer: 2,
    explain: "Unrepresentative data can cause a model to perform poorly or unfairly for certain groups, which is both an ethical and an operational risk."
  },
  {
    q: "What is the main security concern with using third-party or open-source pre-trained models?",
    options: [
      "They are always slower than a model you build yourself",
      "They may hide backdoors or have unknown provenance",
      "They can never be fine-tuned on your own private data",
      "They are never supplied with any usable documentation"
    ],
    answer: 1,
    explain: "A pre-trained model is a supply-chain component; without verified provenance it may carry backdoors, licence issues, or vulnerabilities you inherit on adoption."
  },
  {
    q: "Which of these best describes 'red teaming' an AI system?",
    options: [
      "Tuning the model's settings to lower its running cost",
      "Attacking it deliberately to find weaknesses first",
      "Hand-labelling the training data for better accuracy",
      "Reviewing the model's software licence for compliance"
    ],
    answer: 1,
    explain: "Red teaming simulates adversarial behaviour to surface vulnerabilities, unsafe outputs, and failure modes so they can be fixed proactively."
  },
  {
    q: "What is the purpose of rate limiting on a model's inference API?",
    options: [
      "Making the model measurably more accurate on inputs",
      "Encrypting the responses the API returns to clients",
      "Enlarging the context window the model can accept",
      "Reducing abuse such as extraction and denial-of-service"
    ],
    answer: 3,
    explain: "Rate limiting restricts how many queries a client can send, raising the cost of extraction attacks and helping absorb abusive or excessive traffic."
  },
  {
    q: "In an AI risk assessment, 'residual risk' means:",
    options: [
      "The full risk present before any control is applied",
      "The risk that remains after controls are applied",
      "Risk that exists only within the training environment",
      "Risk that has been completely and permanently removed"
    ],
    answer: 1,
    explain: "Residual risk is what's left after controls; management must decide whether to accept, transfer, or further reduce it."
  },
  {
    q: "Why should security be considered across the entire AI lifecycle, not only at deployment?",
    options: [
      "Because deployment is the only stage an attacker can act",
      "Because doing so lowers the electricity cost of training",
      "Because risks arise from data through to monitoring",
      "Because it removes the need for any governance process"
    ],
    answer: 2,
    explain: "Threats and controls apply throughout the lifecycle — poisoned data, tampered training, unsafe deployment, and drift in monitoring are all distinct risk points."
  },
  {
    q: "What is 'model drift' (or concept drift)?",
    options: [
      "Gradual corruption of the model file on failing storage",
      "The model being moved between different cloud regions",
      "A deliberate attack aimed at the training pipeline",
      "Performance decline as live data diverges from training"
    ],
    answer: 3,
    explain: "Drift occurs when the statistical properties of live data shift away from the training distribution, degrading accuracy and requiring monitoring and retraining."
  },
  {
    q: "Which is the best reason to encrypt model artifacts and training data at rest?",
    options: [
      "To protect confidentiality if the storage is stolen",
      "To make the model return its predictions much faster",
      "To reduce the overall size of the stored model file",
      "To improve the model's fairness across user groups"
    ],
    answer: 0,
    explain: "Encryption at rest ensures that stolen or improperly accessed storage does not expose sensitive data or proprietary model weights in usable form."
  },
  {
    q: "What is the security value of 'input validation' for a model-serving application?",
    options: [
      "It increases the number of parameters inside the model",
      "It removes the need for any authentication on the API",
      "It compresses incoming inputs to save on bandwidth",
      "It filters malformed or malicious inputs before the model"
    ],
    answer: 3,
    explain: "Validating and sanitising inputs helps block injection, malformed payloads, and other attacks that exploit how inputs are processed."
  },
  {
    q: "Why is 'explainability' relevant to AI governance and risk?",
    options: [
      "It helps people understand and challenge decisions made",
      "It guarantees the underlying model is fully secure",
      "It makes the model's training finish more quickly",
      "It removes the need for any human oversight at all"
    ],
    answer: 0,
    explain: "Explainability allows affected people, auditors, and regulators to understand why a decision was made, which supports trust, contestability, and compliance."
  },
  {
    q: "A 'membership inference' attack tries to determine:",
    options: [
      "Which cloud provider is hosting the deployed model",
      "Whether a specific person's data was used in training",
      "How many parameters the target model contains",
      "The average inference latency of the model endpoint"
    ],
    answer: 1,
    explain: "Membership inference exploits model behaviour to reveal whether a particular record was used in training — a privacy risk, especially for sensitive datasets."
  },
  {
    q: "What is the primary benefit of an incident response plan for AI systems?",
    options: [
      "It completely prevents any incident from ever occurring",
      "It takes the place of continuous system monitoring",
      "It enables a fast, coordinated response to incidents",
      "It steadily improves the model's predictive accuracy"
    ],
    answer: 2,
    explain: "An incident response plan doesn't prevent incidents but ensures a prepared, coordinated, and timely response that limits damage and aids recovery."
  },
  {
    q: "Why is 'segregation of duties' a useful control in an AI development pipeline?",
    options: [
      "It shortens the time the model needs to finish training",
      "It removes the need for testing before a release",
      "It stops any single person controlling every stage",
      "It guarantees the resulting model will be unbiased"
    ],
    answer: 2,
    explain: "Splitting responsibilities across people means malicious or erroneous changes are more likely to be caught, and no single actor can quietly compromise the pipeline."
  },
  {
    q: "What does 'secure by design' mean for AI systems?",
    options: [
      "Adding the security controls only after it is built",
      "Building security in from the earliest design stages",
      "Securing only the user-facing part of the interface",
      "Leaving all security entirely to the cloud provider"
    ],
    answer: 1,
    explain: "Secure by design integrates security into architecture and design decisions from the start, rather than bolting it on late where it is costlier and weaker."
  },
  {
    q: "Which is a key risk of over-relying on a model's outputs without monitoring?",
    options: [
      "Undetected errors or drift can cause sustained harm",
      "The model will quietly start to retrain itself alone",
      "The model file will steadily shrink over time",
      "The serving API will begin to encrypt itself"
    ],
    answer: 0,
    explain: "Without ongoing monitoring, degradation, bias, or attacks can go unnoticed, allowing flawed automated decisions to accumulate real-world harm."
  },
  {
    q: "What is the purpose of a 'kill switch' or safe fallback in an AI system?",
    options: [
      "Permanently deleting the model and all its data",
      "Bypassing authentication during a service outage",
      "Increasing the model's inference speed under load",
      "Quickly reverting to a safe mode if it misbehaves"
    ],
    answer: 3,
    explain: "A tested kill switch or fallback lets operators halt harmful behaviour and revert to a known-safe state, containing damage during an incident."
  },
  {
    q: "Why is inventorying all AI models and data assets important for security?",
    options: [
      "You cannot protect what you don't know you have",
      "It makes each deployed model generate results faster",
      "It removes the need to encrypt any stored data",
      "It guarantees the system will pass a regulatory audit"
    ],
    answer: 0,
    explain: "An accurate asset inventory is foundational: unknown 'shadow' models and datasets can't be risk-assessed, monitored, or secured."
  },
  {
    q: "What best describes the risk of 'shadow AI' in an organisation?",
    options: [
      "Approved backup copies of models kept for resilience",
      "Ungoverned AI tools used without any security review",
      "AI systems that are scheduled to run only at night",
      "Models that were trained purely on synthetic data"
    ],
    answer: 1,
    explain: "Shadow AI is unsanctioned AI use that bypasses governance, creating data-leakage, compliance, and security risks the organisation can't see or control."
  },
  {
    q: "Which measure most directly protects data confidentiality when a model is shared across teams?",
    options: [
      "Publishing the full training dataset for open review",
      "Encryption, access controls, and privacy techniques",
      "Removing all logging from the model environment",
      "Increasing the overall size of the deployed model"
    ],
    answer: 1,
    explain: "Confidentiality is preserved through layered controls — encryption, strict access, and privacy-preserving techniques — that keep sensitive data from being exposed."
  },
  {
    q: "What is the governance purpose of defining clear AI usage policies?",
    options: [
      "Setting boundaries for how AI may be built and used",
      "Replacing every technical security control in place",
      "Making the model's training process run faster",
      "Raising the raw accuracy of the deployed model"
    ],
    answer: 0,
    explain: "Policies translate risk appetite and legal obligations into concrete rules, guiding acceptable use and giving a basis for enforcement and accountability."
  },
  {
    q: "Why should organisations assess the legal and regulatory context of an AI system?",
    options: [
      "Rules and regulations never actually apply to AI",
      "It matters only for models that are open source",
      "Non-compliance brings legal and financial risk",
      "It removes the need to test the system at all"
    ],
    answer: 2,
    explain: "AI systems may fall under privacy, sector-specific, and emerging AI-specific regulations; assessing this early avoids costly non-compliance and rework."
  },
  {
    q: "What is a key benefit of continuous monitoring for a deployed AI system?",
    options: [
      "It permanently guarantees no attack can ever succeed",
      "Early detection of anomalies, drift, abuse, and decline",
      "It takes the place of the incident response plan",
      "It gradually makes the deployed model self-aware"
    ],
    answer: 1,
    explain: "Continuous monitoring surfaces problems — attacks, drift, misuse, and degradation — early enough to respond before they cause significant harm."
  },
  {
    q: "Which describes a 'supply chain attack' in the AI context?",
    options: [
      "Compromising a dependency that the target relies on",
      "An attack aimed only at physical hardware shipping",
      "An attack that targets only the user-facing interface",
      "A denial-of-service flood against the model's API"
    ],
    answer: 0,
    explain: "Supply-chain attacks compromise upstream dependencies — data, libraries, or pre-trained models — so the malicious element is inherited when the target adopts them."
  },
  {
    q: "Why is it risky to put sensitive personal data in prompts sent to an external AI service?",
    options: [
      "It reliably makes the external service respond slower",
      "It may be logged or retained outside your control",
      "It always improves the quality of the answer given",
      "It reduces the accuracy of the model's response"
    ],
    answer: 1,
    explain: "Data placed in prompts to a third-party service can leave your control and may be logged or retained, so sensitive information needs careful handling and policy."
  },
  {
    q: "What is the main aim of 'privacy by design' in an AI project?",
    options: [
      "Gathering as much personal data as possible early on",
      "Making the entire model open source from the start",
      "Building privacy protections in from the very outset",
      "Removing access controls to simplify the data flow"
    ],
    answer: 2,
    explain: "Privacy by design builds data-protection measures into architecture and processes from the start, reducing exposure and easing compliance."
  },
  {
    q: "Which best captures why 'risk cannot be fully eliminated' is an important governance mindset?",
    options: [
      "It shows that buying security controls wastes budget",
      "It means every identified risk should just be accepted",
      "It means that ongoing monitoring serves no purpose",
      "The goal is managing risk to an acceptable level"
    ],
    answer: 3,
    explain: "Effective risk management aims to reduce risk to a level the organisation can accept, balancing cost, benefit, and residual risk — perfect security isn't attainable."
  }
];

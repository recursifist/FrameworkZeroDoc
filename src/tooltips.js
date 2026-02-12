// Tooltips <span class="tp" data-tp="keyword">
const dict = {
  agi: "AGI: AI with powerful capabilities across broad domains, matching the level of the most-capable human of each domain. It is not an artificial 'team of experts' rather " +
    "an extensive polymath not limited to human brain speeds, memory or performance. It is therefore smarter-than-human making it extremely difficult to control, or verify safety. Using this definition, " +
    "AGI will speed up progress to Superintelligence, either via autonomous self-improvement or AI-assisted research. " +
    "What separates AGI from Superintelligence is the factor of smarter-than-human gap.",
  tee: "Trusted Execution Environment: Secure, privacy-preserving execution for AI containers and their compute workloads.",
  tcme: "Trusted Capable Model Environment: Analyses an AI container in a sealed environment using established AI models (Trusted Capable Models) with given a set of instructions. " +
    "These Trusted Capable Models are 'trusted' in that they act as a neutral mediating party with agreed objective and only output a privacy-preserving report. They are limited by the capabilities and confidence of Trusted Capable Models.",
  assembly: "Refers to the complete AI system/model framework record registered for training or inference",
  phase: "Stage of AI lifecycle: pre-training, post-training, or inference.",
  container: "Securely-stored, encrypted encapsulation of an AI Assembly code base prior to training - or a trained, inference-ready AI. " +
    "To preserve privacy, owning registrants must input the decryption keys whenever a container is deployed to a vault.",
  workload: "Orchestration of training compute tasks (runs) for training. They are based on framework templates. Not utilized for inference by this framework.",
  template: "Standardized framework protocols for Architectures, Workloads & Safety Modules that enable collaborative safety research and development. " +
    "They allow for standardize interaction between components and help enforce permitted architectures, workloads, paradigms and approaches.",
  hardware: "Registered specialized on/off-chip devices verified for secure AI compute. Requires on-premise inspections.",
  precompute: "Pre-Compute Safety (before training begins) to verify compliance with the Safety Standards.",
  postcompute: "Pre-Compute Safety (after training completes) to verify compliance with the Safety Standards.",
  vault: "Vaults are framework-provisioned Trusted Execution Environments with low-surface, hardened runtimes. There are three types (Training, Assembly, & Safety) " +
  "which provide security, private & attestable hardware isolation for training, assembly interaction and the running of Safety Modules.",
  modules: "Implementations of the Safety Template that contain specific AI safety complilations. " +
    "There are three categories: Post-Compute, Pre-Compute, and Live Pre-Compute (full scaffolding, tooling & internet access)." +
    "Collectively they allow secure, private assessment of AI Assemblies, such as training data domains, architecture, phase adherence, restricted algoriths, evaluations, benchmarks, and automated red-teaming. " +
    "They are created by the global safety research community, built off Safety Templates, voted into The Safety Standards and run inside Safety Vaults. ",
  personnel: "Registered, vetted tiered experts in policy, safety, software, or hardware.",
  budget: "Allocated compute resources (compute, memory, bandwidth, energy) for registered AIs and hardware.",
  otk: "One-Time Key: Cryptographic key for secure compute budgeted workload execution or inference use. Issued for compute harware usage.",
  rsi: "Recursive Self-Improvement: AI autonomously enhancing itself (self-modification, self-learning, sibling design, or even rapid human-in-the-loop AI research), potentially leading to rapidly increasing capability where human oversight cannot be meaningfully enacted. " ,
  lossofcontrol: "Loss-of-control of AI: Runaway activity, unintentional self-directed steering/goal-setting, and/or unforeseen critical behavior that cannot be undone. " +
    "It is not dependant on a 'will-to-power' or human-like consciousness. It can arise merely out of a misaligned sub-goal or control loop.",
  backdoor: "Backdoor attacks: Specific triggers that cause alterative behavior when a trigger is provided. Produced via the training data or embedded within the architecture itself.",
  domain: "Data domains allowed in training, restricted to prevent dangerous knowledge.",
  dao: "Decentralized Autonomous Organization: Decentralized blockchain-based platform that runs with immutable transparency, cryptographic trust and control by consensus.",
  sharding: "Dividing blockchain entities logically across nodes for scalability and efficiency.",
  layer1: "Blockchain Mainnet: Main blockchain layer handling core governance and operations.",
  layer2: "Secondary blockchain layer for less dynamic tasks using ZK-Rollups (Zero-Knowledge proofs that allow trusted  blockchain computation to happen on a separate layer to reduce load and increase performance, before being added to the main layer.",
  layer3: "Decentralized apps providing user interfaces for blockchain platform interaction.",
  thestandard: "The Safety Standards: Voted-upon Safety Modules (Pre & Post-Compute) which embody the safety specs, red-lining and policies which apply to a registered AI. Multiple safety standards are defined coresponding to different AI Assemblies and apply systematically (removing the possibility of any double standards). " +
    "This flow allows constraint of an AI's capabilities, differentiating on general and narrow AI. e.g. Restricting a general-purpose AI, or confining a narrow AI to a domain.",
  hwattestations: "Cryptographic zero-knowledge proofs verifying hardware integrity during execution. It's purpose is to detect BIOS modifications, physical seal breach, relocation, anomalies, etc.",
  rsp: "Responsible Safe Scaling Policies: Guidelines for safe AI development.",
  ccbrn: "Cyber, Chemical, Biological, Radiological, Nuclear: Restricted data domains for safety.",
  token: "The framework uses tokens for metering blockchain operations (refer to as 'gas'), not tradable externally. " +
    "Tokens are purchased by the AI authors, safety module developers and nations that maintain a token pool for framework upkeep.",
  devicemating: "Model-Device Mating: Specialized hardware that locks a specific AI system/model to a particular device, particularity relevant for autonomous weapons. " +
    "The device cannot run a different AI and the AI cannot be copied and run on other hardware. " +
    "This ensures that the AI and hardware are used only as intended and prevents unauthorized reuse or repurposing.",
  continuallearning: "Continual learning AI includes all paradigms of online/streaming continual/lifelong‑learning systems " +
    "(e.g. real‑time/frequent reinforcement‑learning) or with any form of meta-learning (short of RSI).",
  gsai: "Guaranteed Safe AI (GSAI): A framework that provides quantifiable guarantees of AI safety, encapsulated in Safety Modules.",
}

let c = ""
const t = document.getElementById("tp-container")
document.addEventListener("click", e => {
  if (e.target.classList.contains("tp")) {
    const k = e.target.dataset.tp
    const v = dict[k] || false
    if (v && v !== c) {
      c = v
      t.textContent = v
      t.classList.remove("invisible")
      return
    }
  }

  t.textContent = ""
  t.classList.add("invisible")
  c = ""
})

const sections = [
  {
    title: "Vinyasa Based Mobility Flows",
    level: "All levels",
    duration: "35-55 min",
    track: "Mobility",
    summary: "Breath-led sequencing that builds usable range through transitions.",
    description:
      "A modern vinyasa-mobility section for building strength through moving range. These flows use transitions, loaded positions, and breath pacing to make mobility feel integrated rather than isolated.",
    focus: "Active mobility, transitions, hips, shoulders, spine",
    bestFor: "Daily flow practice, warmups, and athletic mobility",
    avatarTitle: "Mobility Flow Avatar Pack",
    guide: [
      {
        title: "Modern mobility lens",
        body: "Prioritize control through range. A shape is useful when you can enter it, breathe in it, and leave it without collapsing.",
      },
      {
        title: "Sequencing rule",
        body: "Start with low-load joint prep, move into flowing transitions, then finish with slower positional work.",
      },
      {
        title: "PDF direction",
        body: "Avatar sheets can show the whole flow as a visual map, with breath counts and transition cues under each pose.",
      },
    ],
    offlinePractice: [
      {
        name: "Joint prep matrix",
        time: "5 min",
        cues: "Move wrists, shoulders, spine, hips, knees, and ankles before adding pace.",
      },
      {
        name: "Low lunge mobility wave",
        time: "10 min",
        cues: "Cycle plank, low lunge, half split, lizard, and down dog with steady breath.",
      },
      {
        name: "Standing flow ladder",
        time: "15 min",
        cues: "Link warrior patterns, side angle, triangle, pyramid, and wide fold variations.",
      },
      {
        name: "Range consolidation",
        time: "8 min",
        cues: "Hold active end ranges long enough to organize breath, ribs, pelvis, and joints.",
      },
    ],
    offlineNotes:
      "Move like you are teaching the joints to trust range, not forcing the body into deeper shapes.",
  },
  {
    title: "Handstand Specific Development",
    level: "Progressive",
    duration: "25-45 min",
    track: "Handstand",
    summary: "A deep handstand system for wrists, shoulders, line, balance, entries, and exits.",
    description:
      "This section is the technical center of the site. It focuses on handstand preparation, line development, shoulder elevation, rib control, balance drills, kick-up skill, press prep, and exit confidence.",
    focus: "Wrists, shoulders, hollow line, wall drills, balance",
    bestFor: "Handstand students and strength-skill training blocks",
    avatarTitle: "Handstand Development Avatar Pack",
    guide: [
      {
        title: "Deep handstand focus",
        body: "Build the stack before chasing the hold. Wrists, shoulders, ribs, pelvis, and gaze need to agree before balance becomes repeatable.",
      },
      {
        title: "Progression rule",
        body: "Use short high-quality sets: prep, shape drill, wall drill, entry drill, exit drill, rest. Fatigue should not rewrite the line.",
      },
      {
        title: "PDF direction",
        body: "Avatar PDFs can be grouped into skill packets: wrist prep, wall line, balance, kick-up entries, press prep, and cooldown.",
      },
    ],
    offlinePractice: [
      {
        name: "Wrist capacity prep",
        time: "6 min",
        cues: "Use circles, palm lifts, fingertip pressure, extension loading, and gentle weight shifts.",
      },
      {
        name: "Shoulder elevation block",
        time: "8 min",
        cues: "Practice scapular pushups, down dog shrugs, wall slides, and overhead hollow holds.",
      },
      {
        name: "Wall line practice",
        time: "12 min",
        cues: "Use chest-to-wall holds, wall plank line, toe pulls, and rib-position checks.",
      },
      {
        name: "Balance and exit set",
        time: "10 min",
        cues: "Work small kick-ups or tuck entries, then practice stepping down or cartwheel exits.",
      },
    ],
    offlineNotes:
      "Stop before the wrists feel irritated. Handstands improve faster when every attempt is clean enough to learn from.",
  },
  {
    title: "Flexibility Focused Range of Motion",
    level: "All levels",
    duration: "30-60 min",
    track: "Flexibility",
    summary: "Focused range-of-motion work using active flexibility and long-form holds.",
    description:
      "A flexibility section built around current range-of-motion thinking: progressive loading, active control, nervous-system pacing, joint position, and repeatable practice rather than passive forcing.",
    focus: "Hips, hamstrings, shoulders, adductors, active range",
    bestFor: "Flexibility cycles, recovery days, and deep range work",
    avatarTitle: "Flexibility Range Avatar Pack",
    guide: [
      {
        title: "Modern flexibility lens",
        body: "Flexibility is tolerance plus control. The body needs exposure, strength, breath, and time to make range feel safe.",
      },
      {
        title: "Sequencing rule",
        body: "Warm the joint, enter the range gradually, add active engagement, then hold or pulse with enough support to stay relaxed.",
      },
      {
        title: "PDF direction",
        body: "Avatar PDFs can show progressive ranges, prop setups, breath counts, and active/passive versions of the same position.",
      },
    ],
    offlinePractice: [
      {
        name: "Range warmup",
        time: "8 min",
        cues: "Use gentle flows, joint circles, and low-level strength before longer holds.",
      },
      {
        name: "Hamstring and hip flexor block",
        time: "12 min",
        cues: "Alternate half splits, low lunge, active leg lifts, and supported long holds.",
      },
      {
        name: "Adductor and outer hip block",
        time: "12 min",
        cues: "Use wide fold, frog, pigeon, figure four, and supported variations.",
      },
      {
        name: "Shoulder range close",
        time: "10 min",
        cues: "Finish with overhead range, chest opening, twists, and slow nasal breathing.",
      },
    ],
    offlineNotes:
      "Useful flexibility work feels intense but not threatening. Avoid sharp sensation, numbness, or joint pressure.",
  },
];

const poses = [
  { name: "Low Lunge Wave", sanskrit: "Anjaneyasana variation", section: "Mobility", area: "Hips", level: "Base", cue: "Pulse between hip extension and hamstring length." },
  { name: "Lizard Switch", sanskrit: "Utthan Pristhasana variation", section: "Mobility", area: "Hips", level: "Base", cue: "Shift between inner hip space and active front-leg control." },
  { name: "Loaded Half Split", sanskrit: "Ardha Hanumanasana variation", section: "Mobility", area: "Hamstrings", level: "Base", cue: "Pull the front heel back lightly to create active length." },
  { name: "Primal Squat Reach", sanskrit: "Malasana variation", section: "Mobility", area: "Ankles", level: "Base", cue: "Use breath and reaching patterns to open ankles, hips, and thoracic spine." },
  { name: "Wave Plank", sanskrit: "Phalakasana variation", section: "Mobility", area: "Shoulders", level: "Intermediate", cue: "Glide shoulders, ribs, and hips as one connected line." },
  { name: "Cossack Fold", sanskrit: "Skandasana variation", section: "Mobility", area: "Adductors", level: "Intermediate", cue: "Keep the bent knee tracking and the straight leg active." },
  { name: "Wrist Load Prep", sanskrit: "Hasta mobility", section: "Handstand", area: "Wrists", level: "Base", cue: "Press through knuckles and fingertips before full bodyweight loading." },
  { name: "Scapular Plank", sanskrit: "Phalakasana shoulder drill", section: "Handstand", area: "Shoulders", level: "Base", cue: "Move the shoulder blades without bending the elbows." },
  { name: "Wall Plank Line", sanskrit: "Adho Mukha Vrksasana prep", section: "Handstand", area: "Line", level: "Base", cue: "Stack wrists, shoulders, ribs, pelvis, and heels." },
  { name: "Chest-to-Wall Hold", sanskrit: "Adho Mukha Vrksasana wall", section: "Handstand", area: "Balance", level: "Intermediate", cue: "Push tall through the floor and keep ribs contained." },
  { name: "Toe Pulls", sanskrit: "Handstand balance drill", section: "Handstand", area: "Balance", level: "Intermediate", cue: "Use tiny toe lifts to learn the freestanding line." },
  { name: "Tuck Entry Drill", sanskrit: "Handstand entry", section: "Handstand", area: "Entries", level: "Advanced", cue: "Compact the shape before extending into the line." },
  { name: "Half Split Hold", sanskrit: "Ardha Hanumanasana", section: "Flexibility", area: "Hamstrings", level: "Base", cue: "Use blocks and keep the front leg active." },
  { name: "Supported Pigeon", sanskrit: "Kapotasana prep", section: "Flexibility", area: "Outer hips", level: "Base", cue: "Support the hip so the knee stays quiet." },
  { name: "Frog Range", sanskrit: "Mandukasana variation", section: "Flexibility", area: "Adductors", level: "Intermediate", cue: "Move slowly in and out before holding." },
  { name: "Wall Shoulder Flexion", sanskrit: "Overhead range drill", section: "Flexibility", area: "Shoulders", level: "Base", cue: "Keep ribs down while arms move overhead." },
  { name: "Pancake Lean", sanskrit: "Upavistha Konasana prep", section: "Flexibility", area: "Adductors", level: "Intermediate", cue: "Hinge from the hips and keep the spine long." },
  { name: "Front Split Blocks", sanskrit: "Hanumanasana prep", section: "Flexibility", area: "Hip flexors", level: "Advanced", cue: "Use height so the pelvis can stay square." },
];

const sectionListEl = document.querySelector("#section-list");
const poseGridEl = document.querySelector("#pose-grid");
const builderFlowEl = document.querySelector("#builder-flow");
const filterButtons = document.querySelectorAll(".filter-button");

const metaEl = document.querySelector("#chapter-meta");
const titleEl = document.querySelector("#chapter-title");
const summaryEl = document.querySelector("#chapter-summary");
const descriptionEl = document.querySelector("#chapter-description");
const focusEl = document.querySelector("#chapter-focus");
const bestEl = document.querySelector("#chapter-best");
const guideEl = document.querySelector("#chapter-guide");
const avatarTitleEl = document.querySelector("#avatar-title");
const printableIntroEl = document.querySelector("#printable-intro");
const offlinePracticeEl = document.querySelector("#offline-practice");
const offlineNotesEl = document.querySelector("#offline-notes");
const printButtonEl = document.querySelector("#print-pdf");

function renderSections() {
  if (!sectionListEl) return;

  sectionListEl.innerHTML = sections
    .map(
      (section, index) => `
        <a class="section-card" href="chapter.html?chapter=${index}">
          <span>0${index + 1}</span>
          <h3>${section.title}</h3>
          <p>${section.summary}</p>
          <small>${section.track} / ${section.level}</small>
        </a>
      `,
    )
    .join("");
}

function renderPoses(filter = "All") {
  if (!poseGridEl) return;

  const visiblePoses = filter === "All" ? poses : poses.filter((pose) => pose.section === filter);
  poseGridEl.innerHTML = visiblePoses
    .map(
      (pose) => `
        <article class="pose-card-item">
          <div class="pose-avatar" aria-hidden="true">
            <span>${pose.name.split(" ").map((word) => word[0]).join("").slice(0, 3)}</span>
          </div>
          <div>
            <p>${pose.section} / ${pose.area} / ${pose.level}</p>
            <h3>${pose.name}</h3>
            <span>${pose.sanskrit}</span>
            <small>${pose.cue}</small>
          </div>
        </article>
      `,
    )
    .join("");
}

function renderBuilderFlow() {
  if (!builderFlowEl) return;

  const defaultFlow = [
    "Joint prep and breath rhythm",
    "Pose selection by body area",
    "Peak focus or range target",
    "Avatar PDF flow sheet",
    "Printable cues and timing",
  ];

  builderFlowEl.innerHTML = defaultFlow.map((item) => `<li>${item}</li>`).join("");
}

function getSectionIndex() {
  const params = new URLSearchParams(window.location.search);
  const requested = Number(params.get("chapter"));
  if (Number.isInteger(requested) && requested >= 0 && requested < sections.length) {
    return requested;
  }
  return 0;
}

function renderSectionPage(index) {
  const section = sections[index];
  if (!titleEl || !descriptionEl || !focusEl || !bestEl || !metaEl) return;

  document.title = `${section.title} | Mark Smith Yoga`;
  titleEl.textContent = section.title;
  if (summaryEl) summaryEl.textContent = section.summary;
  descriptionEl.textContent = section.description;
  focusEl.textContent = section.focus;
  bestEl.textContent = section.bestFor;
  if (avatarTitleEl) avatarTitleEl.textContent = section.avatarTitle;

  metaEl.innerHTML = `
    <span>${section.track}</span>
    <span>${section.level}</span>
    <span>${section.duration}</span>
  `;

  if (guideEl) {
    guideEl.innerHTML = section.guide
      .map(
        (item, itemIndex) => `
          <details ${itemIndex === 0 ? "open" : ""}>
            <summary>${item.title}</summary>
            <p>${item.body}</p>
          </details>
        `,
      )
      .join("");
  }

  if (printableIntroEl && offlinePracticeEl && offlineNotesEl) {
    printableIntroEl.textContent = `Use this ${section.duration.toLowerCase()} ${section.track.toLowerCase()} sheet as an offline practice map or avatar PDF companion.`;
    offlinePracticeEl.innerHTML = section.offlinePractice
      .map(
        (item) => `
          <li>
            <div>
              <strong>${item.name}</strong>
              <span>${item.time}</span>
            </div>
            <p>${item.cues}</p>
          </li>
        `,
      )
      .join("");
    offlineNotesEl.innerHTML = `
      <strong>Notes</strong>
      <p>${section.offlineNotes}</p>
    `;
  }
}

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    filterButtons.forEach((item) => item.classList.remove("is-active"));
    button.classList.add("is-active");
    renderPoses(button.dataset.filter);
  });
});

if (printButtonEl) {
  printButtonEl.addEventListener("click", () => {
    document.querySelectorAll("details").forEach((item) => {
      item.open = true;
    });
    window.print();
  });
}

window.addEventListener("beforeprint", () => {
  document.querySelectorAll("details").forEach((item) => {
    item.open = true;
  });
});

renderSections();
renderPoses();
renderBuilderFlow();
renderSectionPage(getSectionIndex());

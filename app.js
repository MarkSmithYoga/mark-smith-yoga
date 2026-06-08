const categories = [
  "All",
  "Wrist",
  "Handstand",
  "Strength",
  "Mobility",
  "Flexibility",
  "Arm Balance",
  "Recovery",
];

const poses = [
  {
    name: "Wrist CARs",
    category: "Wrist",
    focus: "Wrist prep",
    cue: "Circle the wrists slowly through comfortable range before loading the hands.",
  },
  {
    name: "Palm Heel Lift-Offs",
    category: "Wrist",
    focus: "Hand pressure",
    cue: "Keep fingers grounded and lift the heel of the palm with control.",
  },
  {
    name: "Tabletop Wrist Rock",
    category: "Wrist",
    focus: "Loaded mobility",
    cue: "Rock forward and back through the palms without sharp wrist pressure.",
  },
  {
    name: "Down Dog Shoulder Shrug",
    category: "Handstand",
    focus: "Shoulder elevation",
    cue: "Press the floor away and let the shoulder blades move around the ribs.",
  },
  {
    name: "Scapular Push-Up",
    category: "Strength",
    focus: "Shoulder control",
    cue: "Keep elbows straight and move only through the shoulder blades.",
  },
  {
    name: "Wall Hollow Body",
    category: "Handstand",
    focus: "Line awareness",
    cue: "Stack ribs and pelvis while reaching arms overhead against the wall.",
  },
  {
    name: "Wall Plank Line",
    category: "Handstand",
    focus: "Stacking",
    cue: "Use the wall to organize hands, shoulders, ribs, hips, and feet.",
  },
  {
    name: "Chest-to-Wall Hold",
    category: "Handstand",
    focus: "Wall handstand",
    cue: "Keep shoulders tall, ribs contained, and breath steady.",
  },
  {
    name: "Toe Pull Balance",
    category: "Handstand",
    focus: "Balance",
    cue: "Lightly pull one foot away from the wall without losing the stacked line.",
  },
  {
    name: "Tuck Entry",
    category: "Handstand",
    focus: "Entry skill",
    cue: "Jump softly into a compact tuck and stop before the back arches.",
  },
  {
    name: "Compression Pike Lifts",
    category: "Strength",
    focus: "Press prep",
    cue: "Sit tall, press hands down, and lift the legs using hip flexors and core.",
  },
  {
    name: "Straddle Compression Pulses",
    category: "Strength",
    focus: "Press prep",
    cue: "Keep legs active and pulse from the front of the hips.",
  },
  {
    name: "Crow Load Prep",
    category: "Arm Balance",
    focus: "Hand balance",
    cue: "Shift weight into the hands and keep knees connected to the upper arms.",
  },
  {
    name: "Side Crow Coil",
    category: "Arm Balance",
    focus: "Twist and load",
    cue: "Rotate first, then load the hands gradually without rushing lift-off.",
  },
  {
    name: "Firefly Prep",
    category: "Arm Balance",
    focus: "Arm balance",
    cue: "Use hamstring length and strong hands before trying to straighten the legs.",
  },
  {
    name: "Air Baby Prep",
    category: "Arm Balance",
    focus: "Breakdance-inspired balance",
    cue: "Build side-body support and one-arm confidence before lifting high.",
  },
  {
    name: "Low Lunge Hip Bounce",
    category: "Mobility",
    focus: "Hip flexor prep",
    cue: "Use small elastic pulses while keeping the front foot grounded.",
  },
  {
    name: "Low Lunge to Pyramid",
    category: "Mobility",
    focus: "Hip and hamstring",
    cue: "Move between bent-knee hip opening and active hamstring length.",
  },
  {
    name: "Cossack Side Shift",
    category: "Mobility",
    focus: "Adductors",
    cue: "Shift side to side while keeping each foot connected to the floor.",
  },
  {
    name: "Pancake Hinge",
    category: "Flexibility",
    focus: "Middle split prep",
    cue: "Fold from the hips with active legs and a long spine.",
  },
  {
    name: "Half Split Active Hold",
    category: "Flexibility",
    focus: "Hamstrings",
    cue: "Pull the front heel back gently and keep the spine long.",
  },
  {
    name: "Front Split Block Track",
    category: "Flexibility",
    focus: "Splits",
    cue: "Use blocks so the pelvis stays organized and the breath stays calm.",
  },
  {
    name: "Bridge Shoulder Opener",
    category: "Flexibility",
    focus: "Backbend prep",
    cue: "Open the chest while keeping the glutes and legs supportive.",
  },
  {
    name: "Supine Twist Reset",
    category: "Recovery",
    focus: "Downshift",
    cue: "Let the twist be easy and breathe into the side ribs.",
  },
  {
    name: "Rest Shape",
    category: "Recovery",
    focus: "Integration",
    cue: "Pause long enough for the breath to settle before finishing practice.",
  },
];

const guides = [
  {
    title: "Sun Salutation A",
    tag: "Vinyasa",
    body: "A short breath-led pattern for heat, rhythm, folding, plank strength, chest opening, and down dog recovery.",
  },
  {
    title: "Handstand Basics",
    tag: "Skill",
    body: "Start with wrists, shoulder elevation, wall line, balance drills, and clean exits before chasing long holds.",
  },
  {
    title: "Flexibility Rules",
    tag: "Range",
    body: "Useful flexibility work combines exposure, active control, props, breath, and enough time for the body to trust the range.",
  },
  {
    title: "Arm Balance Prep",
    tag: "Strength",
    body: "Build hand pressure, shoulder support, core compression, and clear contact points before trying harder balances.",
  },
];

const affirmations = [
  {
    title: "Before You Walk In",
    category: "Before Class",
    text:
      "You do not have to become someone else to hold the room. Let your breath arrive first, let your voice be simple, and let the practice be enough. The students do not need a performance. They need your honest presence.",
  },
  {
    title: "When You Feel Like A Fraud",
    category: "Imposter Syndrome",
    text:
      "You are not here because you know everything. You are here because you have practiced enough to offer something real. Doubt can ride with you without driving the class. Teach what you know. Stay close to the breath. Let honesty be part of your authority.",
  },
  {
    title: "Small Class Reset",
    category: "Before Class",
    text:
      "A small class is not a failed class. It is a room of people who still chose to arrive. Do not teach to the empty spaces. Teach to the breathing bodies in front of you, with the same care you would offer a full room.",
  },
  {
    title: "When You Compare Yourself",
    category: "Comparison",
    text:
      "Someone else’s confidence does not make your voice less needed. Someone else’s flexibility does not erase your wisdom. Someone else’s following does not measure your impact. Return to your students. Return to the work.",
  },
  {
    title: "When You Mess Up",
    category: "After Class",
    text:
      "You are allowed to lose your words, forget a side, laugh softly, breathe, and begin again. A human teacher gives students permission to be human too. The class does not have to be flawless to be useful.",
  },
  {
    title: "Presence Over Proof",
    category: "Imposter Syndrome",
    text:
      "You do not have to prove you belong by making the class more complicated. Clear is enough. Warm is enough. Steady is enough. Teach the next breath, the next shape, the next honest cue.",
  },
  {
    title: "After A Hard Class",
    category: "After Class",
    text:
      "One hard class is not your whole teaching path. Let the lesson come through without turning it into a story about your worth. Some rooms are awkward. Some days are tender. You still get to grow.",
  },
  {
    title: "Still Learning",
    category: "Imposter Syndrome",
    text:
      "Being unfinished does not disqualify you. It keeps you listening. Let your learning make you kinder, clearer, and less attached to pretending. You can be both a student and a teacher in the same breath.",
  },
];

const focusTemplates = [
  {
    title: "Handstand line",
    body: "Wrist prep, shoulders, wall line, balance.",
    poses: ["Wrist CARs", "Scapular Push-Up", "Wall Hollow Body", "Wall Plank Line", "Chest-to-Wall Hold"],
  },
  {
    title: "Wrist warm-up",
    body: "Low-impact prep before handstands or arm balances.",
    poses: ["Wrist CARs", "Palm Heel Lift-Offs", "Tabletop Wrist Rock", "Down Dog Shoulder Shrug"],
  },
  {
    title: "Splits prep",
    body: "Hip flexors, hamstrings, and active range.",
    poses: ["Low Lunge Hip Bounce", "Low Lunge to Pyramid", "Half Split Active Hold", "Front Split Block Track"],
  },
  {
    title: "Arm balance prep",
    body: "Hand pressure, forward lean, and core support.",
    poses: ["Wrist CARs", "Crow Load Prep", "Side Crow Coil", "Firefly Prep", "Air Baby Prep"],
  },
];

const state = {
  route: "build",
  category: "All",
  affirmationFilter: "All",
  search: "",
  flow: [],
};

const views = document.querySelectorAll(".app-view");
const navButtons = document.querySelectorAll(".nav-button");
const focusGrid = document.querySelector("#focus-grid");
const libraryGrid = document.querySelector("#library-grid");
const categoryFilters = document.querySelector("#category-filters");
const poseSearch = document.querySelector("#pose-search");
const selectedFlow = document.querySelector("#selected-flow");
const flowCount = document.querySelector("#flow-count");
const sheetMeta = document.querySelector("#sheet-meta");
const sheetList = document.querySelector("#sheet-list");
const guideGrid = document.querySelector("#guide-grid");
const affirmationFeature = document.querySelector("#affirmation-feature");
const affirmationGrid = document.querySelector("#affirmation-grid");
const affirmationFilters = document.querySelectorAll("[data-affirmation-filter]");
const printButtons = [document.querySelector("#go-print"), document.querySelector("#print-flow")];
const clearFlow = document.querySelector("#clear-flow");

function initials(name) {
  return name
    .split(" ")
    .map((word) => word[0])
    .join("")
    .slice(0, 3);
}

function setRoute(route) {
  state.route = route;
  views.forEach((view) => view.classList.toggle("is-active", view.id === route));
  navButtons.forEach((button) => button.classList.toggle("is-active", button.dataset.route === route));
  window.location.hash = route;
}

function addPose(poseName) {
  const pose = poses.find((item) => item.name === poseName);
  if (!pose) return;
  state.flow.push({ ...pose });
  renderFlow();
}

function loadTemplate(template) {
  state.flow = template.poses
    .map((name) => poses.find((pose) => pose.name === name))
    .filter(Boolean)
    .map((pose) => ({ ...pose }));
  renderFlow();
  setRoute("build");
}

function movePose(index, direction) {
  const next = index + direction;
  if (next < 0 || next >= state.flow.length) return;
  [state.flow[index], state.flow[next]] = [state.flow[next], state.flow[index]];
  renderFlow();
}

function removePose(index) {
  state.flow.splice(index, 1);
  renderFlow();
}

function renderFocusGrid() {
  focusGrid.innerHTML = focusTemplates
    .map(
      (template, index) => `
        <article class="focus-card">
          <span>${String(index + 1).padStart(2, "0")}</span>
          <strong>${template.title}</strong>
          <p>${template.body}</p>
          <button class="add-button" type="button" data-template="${template.title}">Load focus</button>
        </article>
      `,
    )
    .join("");

  focusGrid.querySelectorAll("[data-template]").forEach((button) => {
    button.addEventListener("click", () => {
      const template = focusTemplates.find((item) => item.title === button.dataset.template);
      if (template) loadTemplate(template);
    });
  });
}

function renderFilters() {
  categoryFilters.innerHTML = categories
    .map(
      (category) => `
        <button class="chip ${category === state.category ? "is-active" : ""}" type="button" data-category="${category}">
          ${category}
        </button>
      `,
    )
    .join("");

  categoryFilters.querySelectorAll("[data-category]").forEach((button) => {
    button.addEventListener("click", () => {
      state.category = button.dataset.category;
      renderFilters();
      renderLibrary();
    });
  });
}

function renderLibrary() {
  const query = state.search.toLowerCase();
  const visible = poses.filter((pose) => {
    const inCategory = state.category === "All" || pose.category === state.category;
    const text = `${pose.name} ${pose.category} ${pose.focus} ${pose.cue}`.toLowerCase();
    return inCategory && (!query || text.includes(query));
  });

  libraryGrid.innerHTML = visible.length
    ? visible
        .map(
          (pose) => `
            <article class="pose-card">
              <span class="pose-icon">${initials(pose.name)}</span>
              <div>
                <span>${pose.category} / ${pose.focus}</span>
                <h3>${pose.name}</h3>
                <p>${pose.cue}</p>
              </div>
              <button class="add-button" type="button" data-pose="${pose.name}">Add to flow</button>
            </article>
          `,
        )
        .join("")
    : `<article class="pose-card"><strong>No matches</strong><p>Try a simpler search or switch to All.</p></article>`;

  libraryGrid.querySelectorAll("[data-pose]").forEach((button) => {
    button.addEventListener("click", () => addPose(button.dataset.pose));
  });
}

function renderFlow() {
  flowCount.textContent = `${state.flow.length} movement${state.flow.length === 1 ? "" : "s"} selected`;
  printButtons.forEach((button) => {
    if (!button) return;
    button.disabled = state.flow.length === 0;
    button.textContent = state.flow.length ? button.dataset.readyText || button.textContent : "Add poses to print";
  });

  selectedFlow.innerHTML = state.flow.length
    ? state.flow
        .map(
          (pose, index) => `
            <li>
              <div>
                <strong>${pose.name}</strong>
                <small>${pose.category} / ${pose.focus}</small>
              </div>
              <div class="flow-controls">
                <button class="move-button" type="button" data-move="-1" data-index="${index}" ${index === 0 ? "disabled" : ""}>Up</button>
                <button class="move-button" type="button" data-move="1" data-index="${index}" ${index === state.flow.length - 1 ? "disabled" : ""}>Down</button>
                <button class="move-button" type="button" data-remove="${index}">Remove</button>
              </div>
            </li>
          `,
        )
        .join("")
    : `<li><strong>No movements yet</strong><small>Open the Library tab or load a focus card to begin.</small></li>`;

  selectedFlow.querySelectorAll("[data-move]").forEach((button) => {
    button.addEventListener("click", () => movePose(Number(button.dataset.index), Number(button.dataset.move)));
  });

  selectedFlow.querySelectorAll("[data-remove]").forEach((button) => {
    button.addEventListener("click", () => removePose(Number(button.dataset.remove)));
  });

  renderSheet();
}

function renderSheet() {
  sheetMeta.textContent = state.flow.length
    ? `${state.flow.length} movements / Smile Asana practice sheet`
    : "Add movements to build your sheet.";

  sheetList.innerHTML = state.flow.length
    ? state.flow
        .map(
          (pose) => `
            <li>
              <span class="sheet-icon">${initials(pose.name)}</span>
              <div>
                <strong>${pose.name}</strong>
                <p>${pose.cue}</p>
              </div>
            </li>
          `,
        )
        .join("")
    : `<li><div><strong>No movements selected yet.</strong><p>Add movements from the library first.</p></div></li>`;
}

function renderGuides() {
  guideGrid.innerHTML = guides
    .map(
      (guide) => `
        <article class="guide-card">
          <span>${guide.tag}</span>
          <h3>${guide.title}</h3>
          <p>${guide.body}</p>
        </article>
      `,
    )
    .join("");
}

function renderAffirmations() {
  if (!affirmationGrid || !affirmationFeature) return;

  const visible =
    state.affirmationFilter === "All"
      ? affirmations
      : affirmations.filter((item) => item.category === state.affirmationFilter);
  const feature = visible[0] || affirmations[0];

  affirmationFeature.innerHTML = `
    <span>${feature.category}</span>
    <h2>${feature.title}</h2>
    <p>${feature.text}</p>
  `;

  affirmationGrid.innerHTML = visible
    .map(
      (item) => `
        <article class="affirmation-card">
          <span>${item.category}</span>
          <h3>${item.title}</h3>
          <p>${item.text}</p>
        </article>
      `,
    )
    .join("");
}

navButtons.forEach((button) => {
  button.addEventListener("click", () => setRoute(button.dataset.route));
});

affirmationFilters.forEach((button) => {
  button.addEventListener("click", () => {
    state.affirmationFilter = button.dataset.affirmationFilter;
    affirmationFilters.forEach((item) => item.classList.toggle("is-active", item === button));
    renderAffirmations();
  });
});

poseSearch.addEventListener("input", () => {
  state.search = poseSearch.value;
  renderLibrary();
});

clearFlow.addEventListener("click", () => {
  state.flow = [];
  renderFlow();
});

document.querySelector("#go-print").dataset.readyText = "Print flow";
document.querySelector("#print-flow").dataset.readyText = "Print practice sheet";

document.querySelector("#go-print").addEventListener("click", () => {
  if (!state.flow.length) return;
  setRoute("print");
});

document.querySelector("#print-flow").addEventListener("click", () => {
  if (!state.flow.length) return;
  window.print();
});

renderFocusGrid();
renderFilters();
renderLibrary();
renderGuides();
renderAffirmations();
renderFlow();

const initialRoute = window.location.hash.replace("#", "");
if (["build", "library", "guides", "teacher-heart", "print"].includes(initialRoute)) {
  setRoute(initialRoute);
}

const libraryItems = [
  {
    title: "The Step You Are On",
    category: "The SmileAsana Collection",
    text:
      "The path reveals itself to those willing to fully walk the step they are on.",
  },
  {
    title: "Clear Direction",
    category: "Presence",
    text:
      "Creating space for an intention is all that is necessary for a clear direction to start to take form in your life. Begin with one honest point of attention, then let the rest organize around it.",
  },
  {
    title: "Contentment Practice",
    category: "Stillness",
    text:
      "Contentment is a state that asks us to be present without reaching for anything other than what we have, and without becoming anyone other than who we are.",
  },
  {
    title: "Return To Breath",
    category: "Breath",
    text:
      "The breath is always waiting for your return. It does not punish your distraction. It simply gives you another doorway back into center.",
  },
  {
    title: "Invisible Consistency",
    category: "Discipline",
    text:
      "Consistency is invisible until it becomes undeniable. What feels small today becomes structure when you repeat it with care.",
  },
  {
    title: "Body And Awareness",
    category: "Movement",
    text:
      "The body bends; awareness expands. Movement becomes practice when attention is present enough to learn from sensation.",
  },
  {
    title: "Curious Courage",
    category: "Courage",
    text:
      "Courage is not the absence of fear. It is the willingness to meet fear with curiosity, breath, and one grounded action.",
  },
  {
    title: "After The Setback",
    category: "Resilience",
    text:
      "A setback does not erase your practice. It gives your practice somewhere honest to go. Begin again without making the pause mean failure.",
  },
  {
    title: "Effort And Ease",
    category: "Balance",
    text:
      "Balance is not half effort and half ease. It is the intelligence to know which one the moment is asking for.",
  },
  {
    title: "Repetition Becomes Progress",
    category: "Growth",
    text:
      "Progress is often disguised as repetition. The work changes you before it becomes obvious to anyone else.",
  },
  {
    title: "Rest Belongs",
    category: "Recovery",
    text:
      "Recovery is not outside the practice. Rest teaches the nervous system that strength does not have to be built through constant force.",
  },
  {
    title: "Attention Leads",
    category: "Focus",
    text:
      "Strength grows where attention goes. Choose one thing clearly enough, and the body begins to understand where to organize itself.",
  },
  {
    title: "Upside Down Lessons",
    category: "Handstand Wisdom",
    text:
      "Handstand teaches the whole body to listen at once. The lesson is not only balance; it is patience under pressure.",
  },
  {
    title: "The Honest Room",
    category: "The Teacher's Notebook",
    text:
      "A teacher does not need to perform certainty. The room needs steadiness, clarity, and a human being willing to stay present.",
  },
  {
    title: "Daily Reflection",
    category: "Daily Reflection",
    text:
      "The next chapter begins with wholehearted participation in this one.",
  },
  {
    title: "Modern Eight Limbs",
    category: "The Eight Limbs",
    text:
      "The classical path becomes modern when it changes how you breathe, choose, speak, rest, move, and relate to the life directly in front of you.",
  },
  {
    title: "Question The Pattern",
    category: "Self-Inquiry",
    text:
      "What you seek often waits inside what you avoid. Self-inquiry begins when you can look without immediately turning away.",
  },
  {
    title: "Quiet Fortitude",
    category: "Inner Strength",
    text:
      "Inner strength is not always intensity. Sometimes it is the quiet decision to remain kind, clear, and available when old patterns ask you to close.",
  },
  {
    title: "No Resistance",
    category: "Stillness",
    text:
      "Stillness is not the absence of movement but the absence of resistance.",
  },
  {
    title: "Freedom Through Engagement",
    category: "Freedom",
    text:
      "Freedom is found in complete engagement with what is. The more honestly you meet the moment, the less energy you spend escaping it.",
  },
  {
    title: "Practice Fingerprints",
    category: "Practice Notes",
    text:
      "Every practice leaves a fingerprint on the mind. The shape may end, but the way you met it keeps teaching.",
  },
  {
    title: "Participation Over Perfection",
    category: "The SmileAsana Collection",
    text:
      "The practice never asks for perfection, only participation.",
  },
  {
    title: "Available To Yourself",
    category: "Presence",
    text:
      "The practice is not becoming someone else. It is becoming available to yourself with fewer conditions.",
  },
  {
    title: "Rise Through Understanding",
    category: "Movement",
    text:
      "We do not rise through force; we rise through understanding. Strength becomes more useful when it is guided by awareness.",
  },
  {
    title: "Remembering Possibility",
    category: "Growth",
    text:
      "Becoming is simply remembering what was always possible, then practicing until the body believes it too.",
  },
];

let activeFilter = "All";

const featuredCard = document.querySelector("#featured-card");
const affirmationGrid = document.querySelector("#reflections");
const filterSection = document.querySelector("#library");

function categories() {
  return ["All", ...new Set(libraryItems.map((item) => item.category))];
}

function visibleItems() {
  return activeFilter === "All"
    ? libraryItems
    : libraryItems.filter((item) => item.category === activeFilter);
}

function renderFilters() {
  filterSection.innerHTML = categories()
    .map(
      (category) => `
        <button
          class="teacher-chip${category === activeFilter ? " is-active" : ""}"
          type="button"
          data-filter="${category}"
        >
          ${category}
        </button>
      `,
    )
    .join("");

  filterSection.querySelectorAll("[data-filter]").forEach((button) => {
    button.addEventListener("click", () => {
      activeFilter = button.dataset.filter;
      render();
    });
  });
}

function render() {
  const visible = visibleItems();
  const feature = visible[0] || libraryItems[0];

  renderFilters();

  featuredCard.innerHTML = `
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

render();

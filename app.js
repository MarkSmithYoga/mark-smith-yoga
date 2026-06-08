const libraryItems = [
  {
    title: "A Clear Beginning",
    category: "Before Class",
    text:
      "Creating space for an intention is all that is necessary for a clear direction to start to take form in your life. Before you teach, give yourself one quiet sentence to stand inside. It does not need to impress anyone. It only needs to be honest enough to organize your breath, your pace, and the way you meet the room.",
  },
  {
    title: "Arrive Without Performing",
    category: "Before Class",
    text:
      "You do not have to become a more impressive version of yourself before students walk in. Let the first few breaths be plain. Feel your feet. Notice the room. Teaching begins more cleanly when you stop trying to prove you are ready and allow yourself to arrive.",
  },
  {
    title: "The Small Room",
    category: "Before Class",
    text:
      "A small class is not a lesser class. It is a room of people who still chose to practice. Teach to the bodies in front of you, not to the empty spaces around them. When the room is quiet, care can become more specific.",
  },
  {
    title: "Contentment Practice",
    category: "Inner Practice",
    text:
      "Contentment is a state that asks us to be present without reaching for anything other than what we have, and without becoming anyone other than who we are. For a teacher, this can soften the urge to chase approval and return the class to something simpler: presence, breath, and service.",
  },
  {
    title: "When Doubt Speaks",
    category: "Inner Practice",
    text:
      "Doubt does not have to disqualify you. It may simply be asking you to slow down, teach what you actually know, and stop pretending to be beyond the learning process. A sincere teacher with clear limits is often easier to trust than a teacher performing certainty.",
  },
  {
    title: "Comparison Reset",
    category: "Inner Practice",
    text:
      "Another teacher's body, voice, audience, or confidence is not evidence against you. Comparison pulls attention away from the room you are actually responsible for. Come back to the student in front of you, the breath happening now, and the work that is yours to refine.",
  },
  {
    title: "Participation Over Perfection",
    category: "Practice Wisdom",
    text:
      "The practice never asks for perfection, only participation. This is useful to remember when you teach and when you move. The point is not to manufacture a flawless moment. The point is to keep meeting the moment with enough honesty that something real can happen.",
  },
  {
    title: "The Step Beneath You",
    category: "Practice Wisdom",
    text:
      "The path reveals itself to those willing to fully walk the step they are on. In teaching, this means you do not need the whole future solved before you offer the next clear cue. In practice, it means the next repetition still matters.",
  },
  {
    title: "Repetition Becomes Trust",
    category: "Practice Wisdom",
    text:
      "Consistency is invisible until it becomes undeniable. Repetition can feel ordinary while it is reshaping the nervous system, the body, and the way you handle pressure. Let the simple work count before it looks dramatic.",
  },
  {
    title: "The Handstand Lesson",
    category: "Movement Lessons",
    text:
      "Handstand teaches patience under pressure. The body has to listen in several directions at once, and the mind has to stay interested without rushing the outcome. That lesson travels well into teaching: organize, breathe, adjust, and try again.",
  },
  {
    title: "Movement With Attention",
    category: "Movement Lessons",
    text:
      "The body bends and awareness expands when movement is approached with attention. A shape is not only a shape. It is a conversation with tension, habit, strength, fear, and possibility. Teach movement in a way that helps students listen instead of simply copy.",
  },
  {
    title: "Effort And Ease",
    category: "Movement Lessons",
    text:
      "Balance is not a perfect split between effort and ease. It is the ability to sense which quality the moment needs. Some students need permission to work. Others need permission to soften. Good teaching helps both become more intelligent.",
  },
  {
    title: "After A Hard Class",
    category: "After Class",
    text:
      "One difficult class is not a verdict on your teaching. Take the information without turning it into a story about your worth. What felt awkward may become useful if you let it teach you instead of letting it close you down.",
  },
  {
    title: "Let The Impact Breathe",
    category: "After Class",
    text:
      "You may not know which cue helped someone, which breath gave them relief, or which moment stayed with them after they left. Teaching often works quietly. Release the need to measure the impact immediately and let the work continue beyond the room.",
  },
  {
    title: "Repair Is Part Of Teaching",
    category: "After Class",
    text:
      "If you forgot a side, lost your words, or felt the class drift, you can still repair with steadiness. Students learn from watching a teacher stay human without collapsing. The class does not have to be flawless to be useful.",
  },
];

let activeFilter = "All";

const featuredCard = document.querySelector("#featured-card");
const reflectionGrid = document.querySelector("#reflections");
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

  reflectionGrid.innerHTML = visible
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

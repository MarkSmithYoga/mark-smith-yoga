const affirmations = [
  {
    title: "Start With Intention",
    category: "Before Class",
    text:
      "Creating space for an intention is all that is necessary for a clear direction to start to take form in your life. Begin with one honest sentence, one steady breath, and let the rest organize around that clarity.",
  },
  {
    title: "Contentment Practice",
    category: "Before Class",
    text:
      "Contentment is a state that asks us to be present without reaching for anything other than what we have, and without becoming anyone other than who we are. From that place, teaching can feel less like proving and more like offering.",
  },
  {
    title: "Arrive As Yourself",
    category: "Before Class",
    text:
      "You do not need to become louder, softer, wiser, or more impressive before you teach. Let your feet feel the floor, let the breath settle, and let your real presence be the first thing you offer the room.",
  },
  {
    title: "When Doubt Gets Loud",
    category: "Imposter Syndrome",
    text:
      "Doubt can be present without being in charge. You are allowed to teach from what you have practiced, what you have studied, and what you are still learning. Let sincerity be stronger than the need to appear certain.",
  },
  {
    title: "The Small Room",
    category: "Before Class",
    text:
      "A quiet room is still a room worth serving. Teach to the people who arrived, not to the number you imagined. Care does not become smaller because the class is small.",
  },
  {
    title: "Your Own Pace",
    category: "Comparison",
    text:
      "Another teacher's path does not reduce the value of yours. Their voice, body, audience, or timing is not evidence against you. Keep returning to the work that is yours to refine.",
  },
  {
    title: "Repair Is Teaching",
    category: "After Class",
    text:
      "If you lose your words or forget a side, you can pause, breathe, and return. Students do not need a flawless performance. They often learn more from watching someone recover with steadiness.",
  },
  {
    title: "Clear Is Enough",
    category: "Imposter Syndrome",
    text:
      "You do not have to make the class complex to make it meaningful. A clear cue, a grounded pace, and a steady tone can carry more than a room full of extra words.",
  },
  {
    title: "After A Rough Class",
    category: "After Class",
    text:
      "One difficult class is not a verdict on your teaching. Take the lesson without turning it into an identity. You are allowed to adjust, learn, and come back with more softness.",
  },
  {
    title: "Student And Teacher",
    category: "Imposter Syndrome",
    text:
      "Being unfinished does not make you unqualified to help. It can keep you curious, careful, and awake. You can respect your own growth while still offering what you know now.",
  },
  {
    title: "Let Silence Work",
    category: "Before Class",
    text:
      "Silence is not always distance. Sometimes people are listening inwardly. Sometimes the practice is doing quiet work. You do not have to fill every space to prove the class is alive.",
  },
  {
    title: "The Part You Do Not See",
    category: "After Class",
    text:
      "You may not know which breath helped someone, which cue stayed with them, or which moment gave them relief. Let the impact exist beyond what you can measure.",
  },
];

let activeFilter = "All";

const featuredCard = document.querySelector("#featured-card");
const affirmationGrid = document.querySelector("#affirmation-grid");
const filterButtons = document.querySelectorAll("[data-filter]");

function visibleAffirmations() {
  return activeFilter === "All"
    ? affirmations
    : affirmations.filter((affirmation) => affirmation.category === activeFilter);
}

function render() {
  const visible = visibleAffirmations();
  const feature = visible[0] || affirmations[0];

  featuredCard.innerHTML = `
    <span>${feature.category}</span>
    <h2>${feature.title}</h2>
    <p>${feature.text}</p>
  `;

  affirmationGrid.innerHTML = visible
    .map(
      (affirmation) => `
        <article class="affirmation-card">
          <span>${affirmation.category}</span>
          <h3>${affirmation.title}</h3>
          <p>${affirmation.text}</p>
        </article>
      `,
    )
    .join("");
}

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    activeFilter = button.dataset.filter;
    filterButtons.forEach((item) => item.classList.toggle("is-active", item === button));
    render();
  });
});

render();

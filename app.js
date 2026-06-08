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
      "Someone else's confidence does not make your voice less needed. Someone else's flexibility does not erase your wisdom. Someone else's following does not measure your impact. Return to your students. Return to the work.",
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
  {
    title: "When The Room Is Quiet",
    category: "Before Class",
    text:
      "Silence does not mean you are failing. Sometimes the room is listening. Sometimes the practice is landing somewhere private. Let the quiet be spacious instead of threatening.",
  },
  {
    title: "After They Leave",
    category: "After Class",
    text:
      "You may never know which cue helped, which breath mattered, or which student needed the exact class you taught. Release the need to measure the impact immediately. Some teaching blooms later.",
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

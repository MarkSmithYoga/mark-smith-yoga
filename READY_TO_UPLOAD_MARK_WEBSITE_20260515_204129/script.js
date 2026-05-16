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

const movementFamilies = [
  {
    section: "Elasticity",
    area: "Fascia warm-up",
    level: "Base",
    items: [
      ["Down Dog Shoulder Bounce", "Pulse through the shoulders with soft elbows and long ribs."],
      ["Low Lunge Hip Bounce", "Use small elastic pulses to warm the front hip and back leg."],
      ["Low Lunge to Pyramid Oscillation", "Move between bent-knee hip opening and active hamstring length."],
      ["Low Lunge to Standing Split Wave", "Shift from grounded hip extension into a light single-leg hinge."],
      ["Runner Switch Bounce", "Alternate front-leg bend and hamstring reach without forcing depth."],
      ["Tabletop Wrist Rock", "Rock forward and back through the palm to prepare hand loading."],
      ["Bear Hover Pulse", "Hover knees low and pulse the spine long."],
      ["Squat to Forward Fold Spring", "Move between deep hip flexion and hamstring length with bent knees."],
      ["Lizard Elbow Hover Pulse", "Use small dips to open inner hip without collapsing."],
      ["Cossack Side-to-Side Spring", "Shift laterally to warm adductors and ankles."],
      ["Wave Plank Shoulder Glide", "Glide shoulders forward and back while keeping ribs organized."],
      ["Puppy Pose Rib Pulse", "Pulse the chest toward the floor while keeping the neck easy."],
      ["Prone Swimmer Sweep", "Sweep arms overhead and behind to warm shoulder range."],
      ["Scapular Down Dog Shrug", "Elevate and depress the shoulders in an inverted line."],
      ["Half Split Heel Drag", "Drag the front heel lightly back to wake up hamstrings."],
      ["Standing Split Toe Tap", "Tap the lifted foot down and rebound into a hinge."],
      ["Frog Rock", "Rock hips back and forward with knees supported."],
      ["Bridge Bounce", "Pulse hips up lightly to warm posterior chain and hip extension."],
      ["Supine Leg Switch", "Alternate hamstring reach and hip flexor length with easy rhythm."],
      ["Wall Wrist Spring", "Pulse palms into the wall before floor loading."],
    ],
  },
  {
    section: "Mobility",
    area: "Primary-inspired vinyasa",
    level: "Base",
    items: [
      ["Forward Fold Toe Grip", "Fold with soft knees and active foot pressure."],
      ["Forward Fold Hand Slide", "Use hands under feet or shins to traction the back line."],
      ["Chair Power Fold", "Sit hips back, reach arms, then fold through the spine."],
      ["Warrior One Hip Drive", "Open front hip and back ankle while reaching overhead."],
      ["Warrior Two Lateral Reach", "Build lateral hip strength and side-body reach."],
      ["Extended Side Angle Spiral", "Rotate ribs while grounding through both feet."],
      ["Triangle Long-Line Reach", "Create length from back heel through top hand."],
      ["Revolved Triangle Line", "Use blocks to rotate without collapsing the spine."],
      ["Wide Fold Center Line", "Hinge wide and distribute weight through the feet."],
      ["Wide Fold Side Walk", "Walk hands side to side for adductor and back-line range."],
      ["Side Lunge Floor Switch", "Shift between side lunge and center fold."],
      ["Balance Toe Hold Prep", "Stand tall and extend one leg with a bent-knee option."],
      ["Side Balance Leg Open", "Open the lifted leg while keeping the pelvis organized."],
      ["Half-Lotus Hinge Prep", "Use tree-like hip opening before folding."],
      ["Staff Seat Upright", "Sit tall and organize ribs over pelvis."],
      ["Seated Forward Fold Active", "Pull heels back gently and lengthen the back line."],
      ["Reverse Plank Line", "Press hips up and open the front body."],
      ["Half-Bound Seated Fold", "Combine hip rotation with hamstring length."],
      ["One-Leg Fold Three Angles", "Fold over center, inside, and outside lines."],
      ["Marichi Twist Prep", "Build spinal rotation with one knee bent."],
      ["Boat Hold Pulses", "Build compression and hip flexor strength."],
      ["Cross-Body Arm Balance Prep", "Load the hands and squeeze inner thighs."],
      ["Turtle Fold Prep", "Thread shoulders under legs without forcing the neck."],
      ["Wide Seated Compression", "Use hands beside thighs and lift heels."],
      ["Bridge to Wheel Prep", "Progress from bridge into deeper front-body opening."],
      ["Shoulder Stand Prep", "Use supported inversion shapes with careful neck space."],
      ["Plow Prep Fold", "Fold hips overhead with support and control."],
      ["Fish Chest Opener", "Open the front ribs after inversion work."],
      ["Lotus Seat Prep", "Prepare hips without forcing knees."],
      ["Rest Shape", "Finish with quiet breath and full-body release."],
    ],
  },
  {
    section: "Mobility",
    area: "Power-vinyasa inspired",
    level: "Intermediate",
    items: [
      ["Child to Down Dog Wave", "Move from grounded breath to shoulder-loaded length."],
      ["Ragdoll Spine Pour", "Release the back line with bent knees."],
      ["Locust Back-Line Lift", "Strengthen posterior chain and shoulder extension."],
      ["Floor Bow Rock", "Open quads and chest with controlled rocking."],
      ["Up Dog Chest Wave", "Open the front body without dumping into the low back."],
      ["Camel Prep Lift", "Open hip flexors and chest with glute support."],
      ["Dead Bug Core Map", "Coordinate ribs, pelvis, and breath."],
      ["Flip Dog Spiral", "Rotate through shoulder, ribs, and hip."],
      ["Side Plank Line", "Build lateral strength and shoulder stability."],
      ["Scissor Leg Core", "Build hip flexor endurance without back strain."],
      ["Half Pigeon Active", "Support outer hip range with active foot and props."],
      ["Double Pigeon Stack", "Use support under the knees for hip rotation."],
      ["Crescent Lunge Reach", "Load hip flexor length with overhead reach."],
      ["Revolved Crescent Coil", "Rotate against the front leg for spinal control."],
      ["Thunderbolt Twist", "Use kneeling rotation to open quads and thoracic spine."],
      ["Crow Load Prep", "Shift weight into hands before lifting feet."],
      ["Seated Single-Leg Extension", "Build hamstring length and hip flexor control."],
      ["Tabletop Front-Body Lift", "Open shoulders and hips with bent knees."],
      ["Eagle Wrap Balance", "Train compression, balance, and upper-back width."],
      ["Airplane Hinge", "Build single-leg posterior-chain control."],
      ["Half Moon Wall Line", "Use a wall or block to refine lateral balance."],
      ["Dancer Bow Line", "Open quads and shoulders in a standing balance."],
      ["Tree Hip Stack", "Train standing hip stability and breath."],
      ["Supine Twist Reset", "Use rotation to downshift after strong work."],
      ["Bound-Angle Rest", "Use support under knees for passive hip opening."],
    ],
  },
  {
    section: "Mobility",
    area: "Hot yoga inspired",
    level: "Base",
    items: [
      ["Half-Moon Side Bend", "Create long side-body lines before deeper work."],
      ["Awkward Chair Strength", "Build quad and ankle heat with upright posture."],
      ["Eagle Shoulder Wrap", "Mobilize upper back and train standing balance."],
      ["Standing Head-to-Knee Prep", "Train single-leg balance and hamstring compression."],
      ["Standing Bow Prep", "Open the front line while balancing."],
      ["Balancing Stick Line", "Reach crown and heel in opposite directions."],
      ["Standing Separate-Leg Fold", "Open hamstrings with a wide base."],
      ["Triangle Strength Hold", "Hold a strong lateral lunge and rotate ribs."],
      ["Tree to Toe Stand Prep", "Prepare hip rotation and ankle balance gradually."],
      ["Fixed Firm Prep", "Open quads and ankles with props as needed."],
      ["Half Tortoise Reach", "Lengthen shoulders and spine from a kneeling base."],
      ["Camel Breath Lift", "Use breath and glutes to support back opening."],
      ["Rabbit Spine Round", "Round the spine and stretch the back body."],
      ["Head-to-Knee Seated Fold", "Fold with one knee bent and one leg extended."],
      ["Spine Twist Tall Seat", "Rotate while keeping both sitting bones grounded."],
    ],
  },
  {
    section: "Handstand",
    area: "Handstand development",
    level: "Progressive",
    items: [
      ["Palm Line Mapping", "Map knuckle, fingertip, and heel-of-hand pressure."],
      ["Finger Brake Drill", "Learn how fingertips control overbalance."],
      ["Wrist Extension Load", "Build tolerance gradually in straight-arm support."],
      ["Scapular Push-Up", "Move shoulder blades without bending elbows."],
      ["Down Dog Shoulder Shrug", "Train elevation in an inverted shape."],
      ["Wall Hollow Body", "Stack ribs and pelvis before going upside down."],
      ["Wall Plank Line", "Use feet on wall to organize shoulder, rib, and hip stack."],
      ["Chest-to-Wall Hold", "Build a clean line with wall feedback."],
      ["Toe Pull Balance", "Peel one foot from the wall to locate balance."],
      ["Heel Pull Balance", "Use light heel taps to learn correction."],
      ["Tuck Handstand Shape", "Compress knees toward chest without losing push."],
      ["Straddle Line Drill", "Open legs wide while keeping the pelvis stacked."],
      ["Split Line Drill", "Use split legs to understand counterbalance."],
      ["Kick-Up Accuracy", "Practice consistent entries without overshooting."],
      ["Tuck Entry Accuracy", "Enter compact before extending."],
      ["Press Compression Prep", "Strengthen hip flexion and shoulder lean."],
      ["Wall Press Negative", "Lower slowly from wall support."],
      ["Freestanding Exit Map", "Practice step-down and cartwheel exits."],
      ["Handstand Shoulder Tap Prep", "Shift weight without twisting the ribs."],
      ["Block Line Squeeze", "Hold a block between thighs to organize midline."],
      ["Crow to Handstand Prep", "Connect arm balance compression to inversion strength."],
      ["Forearm Balance Line", "Use forearms to train shoulder opening and rib control."],
      ["One-Arm Weight Shift", "Shift toward one hand without collapsing shoulder height."],
      ["Wall One-Arm Lean", "Use the wall to explore single-arm loading safely."],
      ["Handstand Snap-Down", "Exit into a controlled forward fold or lunge."],
    ],
  },
  {
    section: "Arm Balance",
    area: "Arm balances and freezes",
    level: "Progressive",
    items: [
      ["Crow Weight Shift", "Learn hand pressure and knee-to-arm contact."],
      ["Side Crow Coil", "Rotate and load the hands without rushing lift-off."],
      ["Flying Pigeon Prep", "Combine figure-four hip shape with hand balance."],
      ["Eight-Angle Prep", "Hook legs around the arm and extend with control."],
      ["Grasshopper Prep", "Combine twist, hip rotation, and hand loading."],
      ["Firefly Prep", "Use hamstring length and straight-arm support."],
      ["Shoulder-Press Prep", "Squeeze inner thighs around upper arms."],
      ["Peacock Lean Prep", "Explore forearm-to-belly contact gradually."],
      ["Baby Freeze Base", "Use head and hands as a tripod-like low balance."],
      ["Air Baby Prep", "Load one arm with knee-to-elbow support."],
      ["Reverse Air Baby Prep", "Explore the opposite-side freeze line with support."],
      ["One-Arm Crow Lean", "Shift toward single-arm support while keeping feet light."],
      ["Elbow Lever Line", "Balance body tension across the elbows."],
      ["QDR Freeze Prep", "Load one bent arm and organize the side body."],
      ["Side Plank Float", "Build lateral shoulder stability before freeze work."],
    ],
  },
  {
    section: "Flexibility",
    area: "Range of motion",
    level: "Progressive",
    items: [
      ["Half Split Active Hold", "Pull heel back and keep the spine long."],
      ["Front Split Block Track", "Use blocks to keep pelvis organized."],
      ["Low Lunge Quad Catch Prep", "Open hip flexor and quad without twisting the knee."],
      ["Pigeon Supported Range", "Support the hip and keep sensation out of the knee."],
      ["Figure-Four Fold", "Use a safer outer-hip option with adjustable depth."],
      ["Frog Progressive Hold", "Build adductor tolerance with support."],
      ["Pancake Hinge", "Fold from the hips with active legs."],
      ["Middle Split Wall Prep", "Use the wall to manage adductor range."],
      ["Couch Stretch Line", "Open quad and hip flexor with rib control."],
      ["Supine Hamstring Strap", "Use a strap to build relaxed hamstring range."],
      ["Shoulder Flexion Wall Slide", "Train overhead range without rib flare."],
      ["Chest Opener Block Support", "Use props for passive chest and shoulder opening."],
      ["Internal Rotation Hip Switch", "Train hip capsule control in seated switches."],
      ["Ninety-Ninety Lift-Off", "Add active control to external and internal rotation."],
      ["Jefferson Curl Prep", "Segment the spine slowly with light load or no load."],
      ["Bridge Shoulder Opener", "Open front body while keeping glutes active."],
      ["Wheel Prep Blocks", "Use elevated hands to make back opening accessible."],
      ["Seated Twist Range", "Rotate with height before pulling deeper."],
      ["Ankle Dorsiflexion Pulse", "Build squat-friendly ankle range."],
      ["Calf Wall Length", "Open the lower leg with knee straight and bent versions."],
    ],
  },
];

const variationMethods = [
  ["Base hold", "Hold the shape and breathe steadily."],
  ["Elastic pulses", "Use small rhythmic pulses without forcing end range."],
  ["Slow eccentric", "Move into the shape slowly and resist the return."],
  ["Isometric press", "Press into the floor, wall, or prop for 5 breaths."],
  ["Active lift-off", "Lift away from the support using the target muscles."],
  ["Transition link", "Connect the movement to the next pose in a smooth flow."],
  ["Prop-supported", "Use blocks, wall, strap, or blanket to make the range precise."],
  ["End-range breath", "Stay near the edge and use slow exhales to reduce guarding."],
];

function slugify(value) {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

const customAvatarSlugs = new Set([
  "compression-pike-lifts",
  "freestanding-endurance-holds",
  "handstand-wall-walks",
  "pike-handstand-entry",
  "straddle-entry",
  "toes-and-nose-handstand",
  "tuck-entry",
  "wall-supported-one-arm-shifts",
]);

const avatarAliases = {
  "forearm-soft-tissue-glide": "forearm-pronation-supination",
  "wrist-cooldown-fold": "prayer-wrist-pulse",
};

function getAvatarPath(name, baseName = name) {
  const nameSlug = slugify(name);
  const baseSlug = slugify(baseName || name);
  if (customAvatarSlugs.has(nameSlug)) return `assets/avatars-custom/${nameSlug}.png`;
  return `assets/avatars/${avatarAliases[baseSlug] || baseSlug}.png`;
}

function showAvatarFallback(image) {
  image.hidden = true;
  image.parentElement?.classList.add("is-fallback");
  if (image.nextElementSibling) image.nextElementSibling.hidden = false;
}

function buildPoseLibrary() {
  const generated = [];

  movementFamilies.forEach((family) => {
    family.items.forEach(([name, cue], itemIndex) => {
      variationMethods.forEach(([method, methodCue], methodIndex) => {
        if (generated.length >= 240) return;
        const poseName = methodIndex === 0 ? name : `${name} - ${method}`;
        generated.push({
          name: poseName,
          originalBase: name,
          section: family.section,
          area: family.area,
          level: methodIndex > 4 ? "Advanced" : family.level,
          cue: `${cue} ${methodCue}`,
          image: getAvatarPath(poseName, name),
        });
      });
    });
  });

  return generated;
}

const poses = buildPoseLibrary();

const warmupOptions = poses
  .filter((pose) => pose.section === "Elasticity")
  .slice(0, 24);

const printableFlowPrograms = [
  {
    title: "Primary-Inspired Mobility Flow",
    subtitle: "Long-form vinyasa map with mobility-focused cueing",
    duration: "75-90 min",
    intention:
      "A structured full-body flow inspired by the arc of a traditional primary practice, translated into modern mobility language.",
    cues: [
      "Keep transitions smooth and repeatable before increasing depth.",
      "Use active feet, soft knees, and controlled breathing in forward folds.",
      "Treat seated folds as hamstring and spine organization, not passive collapse.",
      "Use props for lotus-like hip shapes so the knees stay quiet.",
    ],
    sequence: [
      "Breath-led standing reach",
      "Forward fold toe grip",
      "Chair power fold",
      "Warrior one hip drive",
      "Triangle long-line reach",
      "Revolved triangle line",
      "Wide fold center line",
      "Side lunge floor switch",
      "Balance toe hold prep",
      "Side balance leg open",
      "Seated forward fold active",
      "Reverse plank line",
      "One-leg fold three angles",
      "Marichi twist prep",
      "Boat hold pulses",
      "Turtle fold prep",
      "Wide seated compression",
      "Bridge to wheel prep",
      "Fish chest opener",
      "Rest shape",
    ],
  },
  {
    title: "Power Vinyasa Flow Packet",
    subtitle: "Baptiste-inspired structure with original movement language",
    duration: "45-60 min",
    intention:
      "A strong power-vinyasa format using heat, standing strength, core, back opening, hip opening, and integration.",
    cues: [
      "Build heat through breath and rhythm before asking for bigger shapes.",
      "Prioritize spinal length in twisting and side-body positions.",
      "Use arm balances as optional skill inserts rather than mandatory peak poses.",
      "Close with hips, twists, and quiet breath to absorb the work.",
    ],
    sequence: [
      "Child to down dog wave",
      "Ragdoll spine pour",
      "Crescent lunge reach",
      "Revolved crescent coil",
      "Warrior two lateral reach",
      "Extended side angle spiral",
      "Triangle strength hold",
      "Eagle wrap balance",
      "Airplane hinge",
      "Half moon wall line",
      "Crow load prep",
      "Side plank line",
      "Locust back-line lift",
      "Floor bow rock",
      "Camel breath lift",
      "Half pigeon active",
      "Double pigeon stack",
      "Supine twist reset",
      "Bound-angle rest",
      "Rest shape",
    ],
  },
  {
    title: "Handstand Prep Flow Insert",
    subtitle: "Printable bridge between warm-up and skill work",
    duration: "20-30 min",
    intention:
      "A compact flow section for wrists, shoulders, hollow line, wall work, and safe entry/exit practice.",
    cues: [
      "Stop each drill while the shape is still clean.",
      "Use fingertips as brakes and shoulder elevation as the main support strategy.",
      "Exit practice belongs before long holds.",
      "Choose 5-7 elastic warm-ups before this section.",
    ],
    sequence: [
      "Wall wrist spring",
      "Tabletop wrist rock",
      "Scapular push-up",
      "Down dog shoulder shrug",
      "Wall hollow body",
      "Wall plank line",
      "Chest-to-wall hold",
      "Toe pull balance",
      "Tuck entry accuracy",
      "Freestanding exit map",
    ],
  },
  {
    title: "Handstand PDF 1: Line and Wall Control",
    subtitle: "Beginner-to-intermediate handstand packet",
    duration: "30-40 min",
    intention:
      "A clean handstand practice focused on wrist prep, shoulder elevation, wall line, toe pulls, and safe exits.",
    cues: [
      "Keep every set short enough that the shoulders stay elevated.",
      "Use fingertips as brakes and ribs as your line check.",
      "Step down before fatigue turns the line into a backbend.",
      "Pair this with 5-7 elasticity or wrist prep movements first.",
    ],
    sequence: [
      "Wrist CARs",
      "Palm Heel Lift-Offs",
      "Tabletop Forward Rock",
      "Scapular Push-Up",
      "Down Dog Shoulder Shrug",
      "Wall Hollow Body",
      "Wall Plank Line",
      "Toes and Nose Handstand",
      "Chest-to-Wall Hold",
      "Toe Pull Balance",
      "Freestanding Exit Map",
      "Wrist Cooldown Fold",
    ],
  },
  {
    title: "Handstand PDF 2: Entries and Endurance",
    subtitle: "Intermediate handstand development packet",
    duration: "35-50 min",
    intention:
      "A stronger handstand practice built around tuck, straddle, and pike entries plus endurance holds and one-arm weight shifts.",
    cues: [
      "Warm compression before entry work.",
      "Practice entries with low volume and high accuracy.",
      "Rest before wrists or shoulders feel irritated.",
      "Use the wall for one-arm shifts until shoulder height stays even.",
    ],
    sequence: [
      "Wall Wrist Spring",
      "Planche Lean Line",
      "Compression Pike Lifts",
      "Straddle Compression Pulses",
      "Handstand Wall Walks",
      "Tuck Entry",
      "Straddle Entry",
      "Pike Handstand Entry",
      "Freestanding Endurance Holds",
      "Wall Supported One Arm Shifts",
      "Handstand Snap-Down",
      "Forearm Soft-Tissue Glide",
    ],
  },
];

const sectionListEl = document.querySelector("#section-list");
const poseGridEl = document.querySelector("#pose-grid");
const builderFlowEl = document.querySelector("#builder-flow");
const warmupGridEl = document.querySelector("#warmup-grid");
const selectedWarmupsEl = document.querySelector("#selected-warmups");
const warmupCountEl = document.querySelector("#warmup-count");
const flowProgramGridEl = document.querySelector("#flow-program-grid");
const filterButtons = document.querySelectorAll(".filter-button");
const printBuilderFlowEl = document.querySelector("#print-builder-flow");
const selectedWarmups = new Set();
const selectedFlow = [];

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
            ${
              pose.image
                ? `<img src="${pose.image}" alt="" onerror="showAvatarFallback(this)" /><span hidden>${initials(pose.name)}</span>`
                : `<span>${initials(pose.name)}</span>`
            }
          </div>
          <div>
            <p>${pose.section} / ${pose.area} / ${pose.level}</p>
            <h3>${pose.name}</h3>
            <span>${pose.originalBase || "Movement variation"}</span>
            <small>${pose.cue}</small>
            <button class="add-pose-button" type="button" data-pose="${pose.name}">Add to flow</button>
          </div>
        </article>
      `,
    )
    .join("");

  poseGridEl.querySelectorAll(".add-pose-button").forEach((button) => {
    button.addEventListener("click", () => {
      const pose = poses.find((item) => item.name === button.dataset.pose);
      if (!pose) return;
      selectedFlow.push(pose);
      renderBuilderFlow();
    });
  });
}

function initials(name) {
  return name
    .split(" ")
    .filter((word) => word !== "-" && word.length)
    .map((word) => word[0])
    .join("")
    .slice(0, 3);
}

function renderBuilderFlow() {
  if (!builderFlowEl) return;

  if (!selectedFlow.length) {
    const defaultFlow = [
      "Filter the pose library above.",
      "Click Add to flow on individual poses.",
      "Or add a full PDF flow from the printable flow section.",
      "Print the page or save it as a PDF.",
    ];
    builderFlowEl.innerHTML = defaultFlow.map((item) => `<li>${item}</li>`).join("");
    return;
  }

  builderFlowEl.innerHTML = selectedFlow
    .map(
      (pose, index) => `
        <li>
          <span>${pose.section}</span>
          <strong>${pose.name}</strong>
          <small>${pose.cue}</small>
          <button class="remove-pose-button" type="button" data-index="${index}">Remove</button>
        </li>
      `,
    )
    .join("");

  builderFlowEl.querySelectorAll(".remove-pose-button").forEach((button) => {
    button.addEventListener("click", () => {
      selectedFlow.splice(Number(button.dataset.index), 1);
      renderBuilderFlow();
    });
  });
}

function renderWarmups() {
  if (!warmupGridEl) return;

  warmupGridEl.innerHTML = warmupOptions
    .map(
      (pose, index) => `
        <label class="warmup-card">
          <input type="checkbox" value="${index}" ${selectedWarmups.has(index) ? "checked" : ""} />
          <span>${pose.area}</span>
          <strong>${pose.originalBase}</strong>
          <small>${pose.cue}</small>
        </label>
      `,
    )
    .join("");

  warmupGridEl.querySelectorAll("input").forEach((input) => {
    input.addEventListener("change", () => {
      const index = Number(input.value);
      if (input.checked) {
        if (selectedWarmups.size >= 7) {
          input.checked = false;
          return;
        }
        selectedWarmups.add(index);
      } else {
        selectedWarmups.delete(index);
      }
      renderSelectedWarmups();
      renderWarmups();
    });
  });
}

function renderSelectedWarmups() {
  if (!selectedWarmupsEl || !warmupCountEl) return;

  const selected = [...selectedWarmups].map((index) => warmupOptions[index]);
  warmupCountEl.textContent = `${selected.length} selected`;
  selectedWarmupsEl.innerHTML = selected.length
    ? selected.map((pose) => `<li>${pose.originalBase}</li>`).join("")
    : "<li>Select 5-7 movements for a complete elastic warm-up.</li>";
}

function renderPrintableFlows() {
  if (!flowProgramGridEl) return;

  flowProgramGridEl.innerHTML = printableFlowPrograms
    .map(
      (program) => `
        <article class="flow-program-card">
          <div class="flow-program-header">
            <p>${program.duration}</p>
            <h3>${program.title}</h3>
            <span>${program.subtitle}</span>
          </div>
          <div class="flow-program-body">
            <div>
              <strong>Teaching intention</strong>
              <p>${program.intention}</p>
            </div>
            <div>
              <strong>Key cues</strong>
              <ul>
                ${program.cues.map((cue) => `<li>${cue}</li>`).join("")}
              </ul>
            </div>
          </div>
          <ol class="flow-sequence-list">
            ${program.sequence
              .map(
                (item) => `
                  <li>
                    <span class="flow-avatar-slot">
                      <img src="${getAvatarPath(item)}" alt="" onerror="showAvatarFallback(this)" />
                      <em hidden>${initials(item)}</em>
                    </span>
                    <strong>${item}</strong>
                  </li>
                `,
              )
              .join("")}
          </ol>
          <button class="button primary add-flow-button" type="button" data-flow="${program.title}">Add full flow to builder</button>
          <button class="button secondary print-flow-button" type="button">Print this flow</button>
        </article>
      `,
    )
    .join("");

  flowProgramGridEl.querySelectorAll(".print-flow-button").forEach((button) => {
    button.addEventListener("click", () => window.print());
  });

  flowProgramGridEl.querySelectorAll(".add-flow-button").forEach((button) => {
    button.addEventListener("click", () => {
      const program = printableFlowPrograms.find((item) => item.title === button.dataset.flow);
      if (!program) return;
      selectedFlow.length = 0;
      program.sequence.forEach((name) => {
        const match = poses.find((pose) => slugify(pose.originalBase || pose.name) === slugify(name));
        selectedFlow.push(
          match || {
            name,
            originalBase: name,
            section: "Flow",
            area: program.title,
            level: "Sequence",
            cue: "Use the printable flow cueing for this movement.",
            image: getAvatarPath(name),
          },
        );
      });
      renderBuilderFlow();
      document.querySelector("#sequence-builder")?.scrollIntoView({ behavior: "smooth" });
    });
  });
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

if (printBuilderFlowEl) {
  printBuilderFlowEl.addEventListener("click", () => {
    document.body.classList.add("print-builder");
    window.print();
  });
}

window.addEventListener("beforeprint", () => {
  document.querySelectorAll("details").forEach((item) => {
    item.open = true;
  });
});

window.addEventListener("afterprint", () => {
  document.body.classList.remove("print-builder");
});

renderSections();
renderPoses();
renderBuilderFlow();
renderWarmups();
renderSelectedWarmups();
renderPrintableFlows();
renderSectionPage(getSectionIndex());

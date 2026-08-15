const cards = [
  { category: "FISHING", title: "Go fishing.", flavor: "That's it. That's the whole assignment." },
  { category: "FISHING", title: "Go fishing, but on ice.", flavor: "Regular fishing, now with worse circulation." },
  { category: "FISHING", title: "Buy a lure you absolutely do not need.", flavor: "It might be the one. Science has not ruled it out." },
  { category: "FISHING", title: "Go to the bait shop for one thing.", flavor: "Leave with $47 worth of reasons it took an hour." },
  { category: "FISHING", title: "Tell someone the fish was two inches longer.", flavor: "This is not lying. This is fishing." },
  { category: "FISHING", title: "Check a fishing spot you already know is good.", flavor: "No need to complicate a successful operation." },
  { category: "HUNTING", title: "Go deer hunting.", flavor: "In season. With a tag. Apparently lawyers exist." },
  { category: "HUNTING", title: "Go bear hunting.", flavor: "Legally, obviously. The bear has enough going on." },
  { category: "HUNTING", title: "Go turkey hunting.", flavor: "Spend several hours losing an argument to a bird." },
  { category: "HUNTING", title: "Go bird hunting.", flavor: "Walk through brush for six hours. Call it relaxing." },
  { category: "HUNTING", title: "Go sit in the woods and call it hunting.", flavor: "Nobody needs to know how much sitting was involved." },
  { category: "HUNTING", title: "Check the trail cam.", flavor: "See which animals have been using your property more than you do." },
  { category: "OUTDOORS", title: "Start a small, legal fire.", flavor: "Stare at it for an unreasonable amount of time. Perfect evening." },
  { category: "OUTDOORS", title: "Go for a drive with no destination.", flavor: "If you accidentally accomplish something, turn around." },
  { category: "OUTDOORS", title: "Sit on a porch with a drink.", flavor: "Do not optimize it. Do not make a spreadsheet." },
  { category: "FOOD", title: "Eat fried haddock.", flavor: "Preferably somewhere with wood paneling and suspiciously good tartar sauce." },
  { category: "FOOD", title: "Get clam chowder.", flavor: "New England has rules. This is one of them." },
  { category: "FOOD", title: "Find the best cheeseburger within 20 miles.", flavor: "No reviews. No research. Follow your heart and a hand-painted sign." },
  { category: "FOOD", title: "Eat breakfast at a place older than you.", flavor: "Counter seats strongly encouraged. Cash-only is a good sign." },
  { category: "FOOD", title: "Smoke a piece of meat.", flavor: "Take eight hours to make dinner and mention the bark at least twice." },
  { category: "FOOD", title: "Grill something unnecessary.", flavor: "Dinner already exists. That's not the point." },
  { category: "FOOD", title: "Eat beef jerky in a parking lot.", flavor: "A complete culinary experience. Michelin remains silent." },
  { category: "FOOD", title: "Order an appetizer 'for the table.'", flavor: "Then eat most of it. Leadership means making decisions." },
  { category: "FOOD", title: "Find pie at a diner.", flavor: "Any pie. Any diner. This one is hard to screw up." },
  { category: "PATRIOTS", title: "Watch the Patriots.", flavor: "Optimism is optional. Commentary is mandatory." },
  { category: "PATRIOTS", title: "Rewatch old Patriots highlights.", flavor: "Sometimes the past is a perfectly acceptable place to live for 12 minutes." },
  { category: "PATRIOTS", title: "Say, 'Brady would've made that throw.'", flavor: "Context is not required." },
  { category: "PATRIOTS", title: "Wear Patriots gear somewhere hostile.", flavor: "Not actually hostile. Like Connecticut." },
  { category: "PATRIOTS", title: "Explain the Patriots rebuild to someone who did not ask.", flavor: "Use phrases like 'the pieces are there.' Believe yourself." },
  { category: "PUBLIC SERVICE", title: "Message Karen Roy letting her know the Colts suck.", flavor: "No supporting evidence needed. She knows what she did." },
  { category: "CHAOS", title: "Flip off a stranger in traffic.", flavor: "Use judgment. One finger. Keep moving. We're making a memory, not a police report." },
  { category: "CHAOS", title: "Tell someone, 'That's not how I'd do it.'", flavor: "Refuse to elaborate. Walk away like a consultant." },
  { category: "CHAOS", title: "Give a friend a completely unnecessary hard time.", flavor: "Keep it affectionate. You're not starting a family feud." },
  { category: "SIMPLE LIVING", title: "Take a nap.", flavor: "You've done enough. Probably." },
  { category: "SIMPLE LIVING", title: "Do absolutely nothing for an hour.", flavor: "No guilt. No errands. Sit there like you were built for it." },
  { category: "SIMPLE LIVING", title: "Go to the hardware store for one thing.", flavor: "Buy six things. Forget the one thing." },
  { category: "SIMPLE LIVING", title: "Call somebody you like just to give them crap.", flavor: "This counts as maintaining relationships." },
  { category: "GOOD HUMAN", title: "Bring someone food.", flavor: "Don't make it emotional. Just hand it over and act like it was no big deal." },
  { category: "GOOD HUMAN", title: "Help somebody with a dumb little task.", flavor: "Complain the entire time so they don't get the wrong idea." },
  { category: "BIRTHDAY", title: "Eat something you actually like.", flavor: "It's your birthday. You don't have to pretend kale is exciting." },
  { category: "BIRTHDAY", title: "Have one more good story than you had yesterday.", flavor: "Or don't. Doesn't bother me." }
];

const missMessages = [
  "MISS. VERY IMPRESSIVE.",
  "YOUR AIM IS BETTER THAN JUSTIN'S. BARELY.",
  "YOU HAVE PEYTON MANNING'S ACCURACY.",
  "DID YOU FORGET YOUR GLASSES?",
  "THAT GIFT WAS STANDING STILL.",
  "MAYBE STICK TO FISHING.",
  "GOOD NEWS FOR THE LOCAL WILDLIFE.",
  "BROAD SIDE OF A BARN REMAINS UNDEFEATED.",
  "WIND MUST BE BRUTAL IN HERE.",
  "THE SCOPE IS FINE. PROBABLY.",
  "THAT WAS A WARNING SHOT, RIGHT?",
  "YOU COULDN'T HIT WATER FROM A BOAT.",
  "TRY CLOSING ONE EYE. OR BOTH.",
  "THE DEER ARE FEELING PRETTY SAFE RIGHT NOW.",
  "NICE SHOT. WRONG SPOT.",
  "ERIC HAS SEEN ENOUGH.",
  "AIMING IS APPARENTLY OPTIONAL.",
  "THE PRESENT WILL BE HERE WHEN YOU'RE READY.",
  "AT LEAST NOBODY GOT HURT.",
  "WE'LL CALL THAT A PRACTICE ROUND."
];

const screens = {
  welcome: document.getElementById('welcome'),
  hunt: document.getElementById('hunt'),
  card: document.getElementById('card-screen'),
  success: document.getElementById('success-screen')
};
const range = document.getElementById('range');
const targets = document.getElementById('targets');
const crosshair = document.getElementById('crosshair');
const muzzle = document.getElementById('muzzle');
const miss = document.getElementById('miss');
const toast = document.getElementById('toast');
const cardTitle = document.getElementById('card-title');
const cardFlavor = document.getElementById('card-flavor');
const cardCategory = document.getElementById('card-category');
const cardNumber = document.getElementById('card-number');
const successScreen = document.getElementById('success-screen');
const flameBurst = document.getElementById('flame-burst');

let lastCard = -1;
let lastMiss = -1;
let locked = false;
let toastTimer;
let audioCtx;
let rifleStopTimer;

function showScreen(name) {
  Object.values(screens).forEach(s => s.classList.remove('active'));
  screens[name].classList.add('active');
}

function giftSVG(seed = 0) {
  const wrap = seed % 2 ? '#9f6237' : '#7d894f';
  const ribbon = seed % 3 ? '#d0bb85' : '#b77847';
  return `
  <svg viewBox="0 0 120 150" aria-hidden="true">
    <g fill="none" stroke="#c5b28d" stroke-width="5" stroke-linecap="round" stroke-linejoin="round">
      <path d="M44 40 C30 30, 22 17, 25 7 M34 31 L21 25 M29 21 L18 15 M76 40 C90 30, 98 17, 95 7 M86 31 L99 25 M91 21 L102 15"/>
    </g>
    <rect x="22" y="50" width="76" height="72" rx="5" fill="${wrap}" stroke="#1c2118" stroke-width="4"/>
    <rect x="17" y="43" width="86" height="25" rx="5" fill="${wrap}" stroke="#1c2118" stroke-width="4"/>
    <rect x="53" y="45" width="14" height="77" fill="${ribbon}" opacity=".92"/>
    <rect x="19" y="50" width="82" height="10" fill="rgba(255,255,255,.08)"/>
    <path d="M59 43 C46 31, 38 31, 39 40 C40 48, 51 47, 59 43Z M61 43 C74 31, 82 31, 81 40 C80 48, 69 47, 61 43Z" fill="${ribbon}" stroke="#1c2118" stroke-width="3"/>
  </svg>`;
}

function spawnTargets() {
  targets.innerHTML = '';
  const layouts = window.innerWidth < 620 ? [
    [20,30,.72],[72,27,.62],[43,45,.9],[77,60,.8],[22,65,.68]
  ] : [
    [14,34,.72],[34,23,.62],[55,41,.93],[76,26,.68],[87,58,.82],[28,63,.78]
  ];
  layouts.forEach((pos, i) => {
    const el = document.createElement('button');
    el.className = 'target';
    el.setAttribute('aria-label', 'Antlered birthday present');
    el.style.left = pos[0] + '%';
    el.style.top = pos[1] + '%';
    el.style.setProperty('--scale', pos[2]);
    el.style.setProperty('--speed', (2.7 + (i % 4) * .55) + 's');
    el.style.animationDelay = (-i * .47) + 's';
    el.innerHTML = giftSVG(i);
    el.addEventListener('click', e => {
      e.stopPropagation();
      fire(e.clientX || el.getBoundingClientRect().x, e.clientY || el.getBoundingClientRect().y, true, el);
    });
    targets.appendChild(el);
  });
}

// Real rifle recording: Tikka Model T3, .30-06, near-distance gunshot.
// Source recording: Free Firearms SFX Library mirror (CC0 1.0).
// The deployment workflow downloads it into assets/rifle-shot.wav.
const RIFLE_SOUND_URL = 'assets/rifle-shot.wav?v=__VERSION__';
const rifleSound = new Audio(RIFLE_SOUND_URL);
rifleSound.preload = 'auto';
rifleSound.volume = 0.95;

function initAudio() {
  if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
}

function primeRifleSound() {
  try { rifleSound.load(); } catch (_) {}
}

function fallbackShotSound(hit) {
  try {
    initAudio();
    if (audioCtx.state === 'suspended') audioCtx.resume();
    const now = audioCtx.currentTime;

    const crackLength = Math.floor(audioCtx.sampleRate * .008);
    const crackBuffer = audioCtx.createBuffer(1, crackLength, audioCtx.sampleRate);
    const crackData = crackBuffer.getChannelData(0);
    for (let i = 0; i < crackLength; i++) {
      const decay = 1 - (i / crackLength);
      crackData[i] = (Math.random() * 2 - 1) * decay * decay * decay;
    }
    const crack = audioCtx.createBufferSource();
    crack.buffer = crackBuffer;
    const crackFilter = audioCtx.createBiquadFilter();
    crackFilter.type = 'highpass';
    crackFilter.frequency.value = 1800;
    const crackGain = audioCtx.createGain();
    crackGain.gain.setValueAtTime(.75, now);
    crackGain.gain.exponentialRampToValueAtTime(.001, now + .012);
    crack.connect(crackFilter).connect(crackGain).connect(audioCtx.destination);

    const boom = audioCtx.createOscillator();
    const boomGain = audioCtx.createGain();
    boom.type = 'triangle';
    boom.frequency.setValueAtTime(hit ? 165 : 155, now);
    boom.frequency.exponentialRampToValueAtTime(72, now + .11);
    boomGain.gain.setValueAtTime(.34, now);
    boomGain.gain.exponentialRampToValueAtTime(.001, now + .13);
    boom.connect(boomGain).connect(audioCtx.destination);

    crack.start(now);
    boom.start(now);
    boom.stop(now + .14);
  } catch (_) {}
}

function shotSound(hit) {
  try {
    clearTimeout(rifleStopTimer);
    rifleSound.pause();
    rifleSound.currentTime = 0;
    rifleSound.volume = 0.95;
    const playback = rifleSound.play();

    rifleStopTimer = setTimeout(() => {
      rifleSound.pause();
      rifleSound.currentTime = 0;
    }, 1200);

    if (playback && typeof playback.catch === 'function') {
      playback.catch(() => fallbackShotSound(hit));
    }
  } catch (_) {
    fallbackShotSound(hit);
  }
}

function fire(x, y, isHit, targetEl) {
  if (locked) return;
  muzzle.style.left = x + 'px';
  muzzle.style.top = y + 'px';
  muzzle.classList.remove('flash');
  void muzzle.offsetWidth;
  muzzle.classList.add('flash');
  crosshair.classList.add('firing');
  setTimeout(() => crosshair.classList.remove('firing'), 100);
  shotSound(isHit);

  try {
    if (navigator.vibrate) navigator.vibrate(isHit ? 65 : 45);
  } catch (_) {}

  if (!isHit) {
    let missIdx;
    do missIdx = Math.floor(Math.random() * missMessages.length);
    while (missMessages.length > 1 && missIdx === lastMiss);
    lastMiss = missIdx;
    miss.textContent = missMessages[missIdx];
    miss.classList.remove('show');
    void miss.offsetWidth;
    miss.classList.add('show');
    return;
  }

  locked = true;
  targetEl.classList.add('hit');
  setTimeout(() => {
    pickCard();
    showScreen('card');
    locked = false;
  }, 260);
}

function pickCard() {
  let idx;
  do idx = Math.floor(Math.random() * cards.length);
  while (cards.length > 1 && idx === lastCard);
  lastCard = idx;
  const card = cards[idx];
  cardTitle.textContent = card.title;
  cardFlavor.textContent = card.flavor;
  cardCategory.textContent = card.category;
  cardNumber.textContent = '#' + String(idx + 1).padStart(2, '0');
}

function showToast(message) {
  clearTimeout(toastTimer);
  toast.textContent = message;
  toast.classList.add('show');
  toastTimer = setTimeout(() => toast.classList.remove('show'), 1800);
}

function backToHunt(message) {
  showScreen('hunt');
  spawnTargets();
  if (message) showToast(message);
}

function startOver() {
  showScreen('welcome');
  showToast('Back to the beginning. Very brave.');
}

function triggerFlames() {
  if (!flameBurst) return;
  const flames = flameBurst.querySelectorAll('.flame');
  flames.forEach(flame => {
    flame.style.animation = 'none';
  });
  // force reflow so the animation restarts every time the success screen appears
  void flameBurst.offsetWidth;
  flames.forEach(flame => {
    flame.style.animation = '';
  });
}

function showSuccess() {
  showScreen('success');
  successScreen.classList.remove('entering');
  void successScreen.offsetWidth;
  successScreen.classList.add('entering');
  triggerFlames();
  setTimeout(() => successScreen.classList.remove('entering'), 1700);
}

async function shareApp() {
  const url = window.location.origin + window.location.pathname;
  const shareData = {
    title: "Eric's Birthday Hunt",
    text: "Shoot a gift. Get told what to do. Bad decisions encouraged.",
    url
  };

  try {
    if (navigator.share) {
      await navigator.share(shareData);
      showToast('Shared. You are now part of the problem.');
      return;
    }
  } catch (_) {
    // user cancelled or share failed; fall through to clipboard when possible
  }

  try {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      await navigator.clipboard.writeText(url);
      showToast('Link copied. Go spread the nonsense.');
      return;
    }
  } catch (_) {}

  showToast(url);
}

range.addEventListener('pointermove', e => {
  crosshair.style.left = e.clientX + 'px';
  crosshair.style.top = e.clientY + 'px';
});
range.addEventListener('pointerdown', e => {
  crosshair.style.left = e.clientX + 'px';
  crosshair.style.top = e.clientY + 'px';
});
range.addEventListener('click', e => {
  if (e.target.closest('.target')) return;
  if (e.target.closest('.hunt-header')) return;
  fire(e.clientX, e.clientY, false, null);
});

document.getElementById('start-btn').addEventListener('click', () => {
  primeRifleSound();
  spawnTargets();
  showScreen('hunt');
});
document.getElementById('home-btn').addEventListener('click', () => showScreen('welcome'));
document.getElementById('do-btn').addEventListener('click', () => showSuccess());
document.getElementById('dont-btn').addEventListener('click', () => backToHunt('Correct. It was legally optional.'));
document.getElementById('start-over-btn').addEventListener('click', () => startOver());
document.getElementById('share-btn').addEventListener('click', () => shareApp());

window.addEventListener('resize', () => {
  if (screens.hunt.classList.contains('active')) spawnTargets();
});

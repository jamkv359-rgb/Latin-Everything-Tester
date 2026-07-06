const savedTheme = localStorage.getItem('theme');
const systemPrefersDark = window.matchMedia('(prefers-color-scheme: light)').matches;
let sessionStart = new Date();
let logins = JSON.parse(localStorage.getItem("savedLogins")) || [];
if (!logins.includes(sessionStart.toLocaleDateString())){
    logins.unshift(sessionStart.toLocaleDateString());
}
let loginTimes = JSON.parse(localStorage.getItem("savedLoginTimes")) || [];
loginTimes.unshift(sessionStart.toLocaleTimeString());
localStorage.setItem('savedLogins', JSON.stringify(logins));
localStorage.setItem('savedLoginTimes', JSON.stringify(loginTimes));



const friendlyInteractions = [
    { maxHour: 1,  text: "Midnight revision? The best memory hack is sleep!" },
    { maxHour: 6,  text: "All-nighter? Good luck! But DON'T crack open an energy drink." },
    { maxHour: 8,  text: "Awake? At this hour? What an early bird!" },
    { maxHour: 11, text: "Good morning! A glorious day for productivity!" },
    { maxHour: 13, text: "Studying now? Get a snack, touch some grass. It's lunch." },
    { maxHour: 18, text: "Good afternoon!" },
    { maxHour: 20, text: "It's dinner; spend some family time!" },
    { maxHour: 23, text: "Late-night study? I guess you're a night owl, like me..." }
];
const cozyInteractions = [
    { maxHour: 1,  text: "The world is asleep, but you're still learning. Keep burning that fire of ambition." },
    { maxHour: 6,  text: "The quietest hours often make the best study sessions." },
    { maxHour: 8,  text: "A calm morning and a fresh mind. Not a bad combination." },
    { maxHour: 11, text: "Good morning! Settle in and make yourself comfortable." },
    { maxHour: 13, text: "Lunch break! Stretch your legs and rest your eyes." },
    { maxHour: 18, text: "The afternoon sun is drifting lower. Perfect study weather." },
    { maxHour: 20, text: "Evening already? Time seems to move quickly when you're busy." },
    { maxHour: 23, text: "The stars are out, the room is quiet, and the books are open." }
];
const wittyInteractions = [
    { maxHour: 1,  text: "If you're studying at midnight, you're either very dedicated or very procrastinated." },
    { maxHour: 6,  text: "Still awake? ...That's one strategy." },
    { maxHour: 8,  text: "Look at you, functioning before most teenagers are even conscious." },
    { maxHour: 11, text: "Morning! Time to pretend we're organised." },
    { maxHour: 13, text: "Lunch. Otherwise known as 'study break with food attached'." },
    { maxHour: 18, text: "Good afternoon! Productivity may vary." },
    { maxHour: 20, text: "Dinner first. Latin can wait an hour." },
    { maxHour: 23, text: "Ah yes, the classic 'I'll just do one more thing' hour." }
];
const scholarInteractions = [
    { maxHour: 1,  text: "Even the ancient scholars eventually went to bed." },
    { maxHour: 6,  text: "Aurora rises, and so does today's learning." },
    { maxHour: 8,  text: "A new day, a new declension to conquer." },
    { maxHour: 11, text: "Salve! Ready for another step toward fluency?" },
    { maxHour: 13, text: "Even Cicero would have stopped for lunch." },
    { maxHour: 18, text: "The day grows older, but knowledge stays young." },
    { maxHour: 20, text: "A peaceful evening for reviewing Ablative Absolutes." },
    { maxHour: 23, text: "Burning the midnight oil? The Romans did that too." }
];
const timeQuotes = [
    { maxHour: 1,  text: "Dark mode. For that midnight grind." },
    { maxHour: 6,  text: "Dark mode. For the all-night study session." },
    { maxHour: 8,  text: "Dark mode. For waking with the gentle sun." },
    { maxHour: 11, text: "Dark mode. Soft light for your morning thoughts." },
    { maxHour: 14, text: "Dark mode. For the mid-day cool down." },
    { maxHour: 18, text: "Dark mode. Beating the afternoon slump." },
    { maxHour: 20, text: "Dark mode. For the golden moment of twilight." },
    { maxHour: 23, text: "Dark mode. For your late-night grind." }
];
const cozyQuotes = [
    { maxHour: 1,  text: "Dark mode. Maxxing late-night vibes for your midnight inspiration." },
    { maxHour: 6,  text: "Dark mode. For the quiet hours when the world is asleep." },
    { maxHour: 8,  text: "Dark mode. For waking up gently with the sun." },
    { maxHour: 11, text: "Dark mode. Soft light for your morning thoughts." },
    { maxHour: 13, text: "Dark mode. A pocket of shade in the middle of the day." },
    { maxHour: 18, text: "Dark mode. Catching the slow, leaning afternoon shadows." },
    { maxHour: 20, text: "Dark mode. Easing into the calm of the evening." },
    { maxHour: 23, text: "Dark mode. Unwinding as the stars come out." }
];
const wittyQuotes = [
    { maxHour: 1,  text: "Dark mode. Powered by caffine and code."},
    { maxHour: 6,  text: "Dark mode. Go to sleep. Seriously." },
    { maxHour: 8,  text: "Dark mode. Because the sun is being way too loud right now." },
    { maxHour: 11, text: "Dark mode. Either that, or touch some grass."},
    { maxHour: 13, text: "Dark mode. It's bright outside, but I dare wouldn't look out." },
    { maxHour: 18, text: "Dark mode. Fueling the afternoon screen-stare." },
    { maxHour: 20, text: "Dark mode. Protecting your eyes from the daily wind-down." },
    { maxHour: 23, text: "Dark mode. Officially entering vampire hours." }
];
const techQuotes = [
    { maxHour: 1,  text: "Dark mode. For deep work and high focus." },
    { maxHour: 6,  text: "Dark mode. Powered by caffeine and code." },
    { maxHour: 8,  text: "Dark mode. For the early birds beating the rush." },
    { maxHour: 11, text: "Dark mode. Clearing the workspace for deep focus." },
    { maxHour: 13, text: "Dark mode. Keeping the momentum through lunch." },
    { maxHour: 18, text: "Dark mode. Powering through the final daily sprints." },
    { maxHour: 20, text: "Dark mode. Shifting gears into nocternal territory." },
    { maxHour: 23, text: "Dark mode. For the late-night sweats studying under the radar." }
];

const terribleQuotes = [
    {
        latin: "Errare humanum est.",
        english: "To err is human."
    },
    {
        latin: "Labor omnia vincit.",
        english: "Hard work conquers all things."
    },
    {
        latin: "Repetitio mater studiorum est.",
        english: "Repetition is the mother of learning."
    },
    {
        latin: "Discendo discimus.",
        english: "We learn by learning."
    }
];

const improvingQuotes = [
    {
        latin: "Per aspera ad astra.",
        english: "Through hardships to the stars."
    },
    {
        latin: "Non scholae sed vitae discimus.",
        english: "We learn not for school, but for life."
    },
    {
        latin: "Gutta cavat lapidem.",
        english: "The drop hollows the stone."
    },
    {
        latin: "Paulatim sed certe.",
        english: "Slowly but surely."
    }
];

const decentQuotes = [
    {
        latin: "Fortuna fortes adiuvat.",
        english: "Fortune favours the brave."
    },
    {
        latin: "Qui audet adipiscitur.",
        english: "Who dares, wins."
    },
    {
        latin: "Dimidium facti qui coepit habet.",
        english: "He who has begun has half done."
    },
    {
        latin: "Sapientia potentia est.",
        english: "Knowledge is power."
    }
];

const goodQuotes = [
    {
        latin: "Veni, vidi, vici.",
        english: "I came, I saw, I conquered."
    },
    {
        latin: "Audentes fortuna iuvat.",
        english: "Fortune favours the bold."
    },
    {
        latin: "Virtus in actione consistit.",
        english: "Virtue consists in action."
    },
    {
        latin: "Age quod agis.",
        english: "Do well whatever you do."
    }
];

const excellentQuotes = [
    {
        latin: "Ad astra per aspera.",
        english: "To the stars through hardships."
    },
    {
        latin: "Ad astra abyssosque.",
        english: "To the stars and the depths."
    },
    {
        latin: "Nil difficile volenti.",
        english: "Nothing is difficult for the willing."
    },
    {
        latin: "Scientia potentia est.",
        english: "Knowledge is power."
    },
    {
        latin: "Victoria amat praeparationem.",
        english: "Victory loves preparation."
    }
];

const perfectQuotes = [
    {
        latin: "Alea iacta est.",
        english: "The die is cast."
    },
    {
        latin: "Aut viam inveniam aut faciam.",
        english: "I shall either find a way or make one."
    },
    {
        latin: "Nil desperandum.",
        english: "Never despair."
    },
    {
        latin: "Sic itur ad astra.",
        english: "Thus one journeys to the stars."
    },
    {
        latin: "Carpe diem.",
        english: "Seize the day."
    },
    {
        latin: "Veni, vidi, vici.",
        english: "I came, I saw, I conquered."
    }
];

// ==========================================
// PART 2: WAITS FOR HTML ELEMENTS TO LOAD
// ==========================================
window.onload = function() {
    //document.querySelector("body").classList.toggle("dark"); 
  let hour = new Date().getHours();
  const interact = document.querySelector('.interact');
  const darkInteract = document.querySelector('.dark-interact');
  let interaction = "Hello!";
  let darkModeInteract = "";
  if (savedTheme === 'dark' || (!savedTheme && systemPrefersDark)) {
    document.body.classList.add('dark');
} else {
    document.body.classList.remove('dark');
}
    

    const timeQuote = timeQuotes.find(slot => hour < slot.maxHour) || timeQuotes[0];
    const cozyQuote = cozyQuotes.find(slot => hour < slot.maxHour) || timeQuotes[0];
    const wittyQuote = wittyQuotes.find(slot => hour < slot.maxHour) || timeQuotes[0];
    const techQuote = techQuotes.find(slot => hour < slot.maxHour) || timeQuotes[0];
    const friendlyInteraction = friendlyInteractions.find(slot => hour < slot.maxHour) || friendlyInteractions[0];
    const cozyInteraction = cozyInteractions.find(slot => hour < slot.maxHour) || cozyInteractions[0];
    const wittyInteraction = wittyInteractions.find(slot => hour < slot.maxHour) || wittyInteractions[0];
    const scholarInteraction = scholarInteractions.find(slot => hour < slot.maxHour) || scholarInteractions[0];
  switch (document.body.dataset.pageType){
    case "base":
        darkModeInteract = timeQuote.text;
        interaction = friendlyInteraction.text;
        break;
    case "meta":
        darkModeInteract="Dark mode. This feature took <em>way too long</em> to code.";
        interaction="Heh, you found me.";
        break;
    case "archive":
        darkModeInteract="DISCLAIMER: You won't be able to access Dark Mode in these Beta-version pages. But you can here.";
        interaction="Entering code-error potent territory. Why are you even here?";
        break;
    case "vocab":
        darkModeInteract = cozyQuote.text;
        interaction = cozyInteraction.text;
        break;
    case "noun":
        darkModeInteract = wittyQuote.text;
        interaction = wittyInteraction.text;
        break;
    case "verb":
        darkModeInteract = techQuote.text;
        interaction = scholarInteraction.text;
        break;
    case "pronoun":
        darkModeInteract = wittyQuote.text;
        interaction = wittyInteraction.text;
        break;
    
    case "sampleTest":
        darkModeInteract = timeQuote.text;
        interaction = friendlyInteraction.text;
        break;
    
  }
  console.log("Page type is: " + document.body.dataset.pageType);
  console.log("Page is: " + window.location.pathname.split('/').pop());
  let currentPage = window.location.pathname.split('/').pop()
  let pagesLoaded=JSON.parse(localStorage.getItem('savedPagesLoaded')) || [];
  pagesLoaded.push(currentPage);
  localStorage.setItem('savedPagesLoaded', JSON.stringify(pagesLoaded));

  interact.innerHTML = `"${interaction}"`;
  darkInteract.innerHTML = `${darkModeInteract}`;
    shrinkTextToOneLine(".interact");
    shrinkTextToOneLine(".dark-interact");
    addMacraInputter();
document.getElementById("darkModeToggle").checked = document.body.classList.contains('dark');

document.getElementById("darkModeToggle").onchange = e => {
    // True means add "dark", False means remove "dark"
    isDark = e.target.checked; 
     
    // Force the body to match the checkbox state exactly
    document.body.classList.toggle("dark", isDark);
    
    // Save the correct state to localStorage
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    localStorage.setItem('achievementDarkMode', 'true');

    
};


rerenderUsername();
} 

window.addEventListener("beforeunload", () => {

    const seconds =
        Math.floor((Date.now() - sessionStart) / 1000);

    let total =
        Number(localStorage.getItem("studySeconds")) || 0;

    total += seconds;

    localStorage.setItem("studySeconds", total);

});


function getElement(elementOrSelector) {
  if (typeof elementOrSelector === "string") {
    return document.querySelector(elementOrSelector);
  }

  return elementOrSelector;
}

function getExactLineCount(elementOrSelector) {
  const element = getElement(elementOrSelector);

  if (!(element instanceof Element)) {
    return 0;
  }

  const style = window.getComputedStyle(element);

  const clientHeight = element.clientHeight;
  const paddingTop = parseFloat(style.paddingTop) || 0;
  const paddingBottom = parseFloat(style.paddingBottom) || 0;

  const textHeight = clientHeight - paddingTop - paddingBottom;

  let lineHeight = parseFloat(style.lineHeight);

  if (isNaN(lineHeight)) {
    const fontSize = parseFloat(style.fontSize);
    lineHeight = fontSize * 1.2;
  }

  return Math.round(textHeight / lineHeight);
}

function shrinkTextToOneLine(elementOrSelector) {
  const element = getElement(elementOrSelector);

  if (!(element instanceof Element)) {
    return;
  }

  const MIN_FONT_SIZE = 8;

  let currentFontSize =
    parseFloat(window.getComputedStyle(element).fontSize);

  while (
    getExactLineCount(element) > 1 &&
    currentFontSize > MIN_FONT_SIZE
  ) {
    currentFontSize -= 1;
    element.style.fontSize = currentFontSize + "px";

    void element.offsetHeight;
  }
  
}

/*============================================================================
MACRA ADDER
============================================================================*/

function addMacraInputter() {
  if (document.getElementById("macraInputter")) return;

  document.body.insertAdjacentHTML("beforeend", `
    <div id="macraInputter" style="width: 25%; position: fixed; height: 10vh; object-fit: cover; top: 10%; left: 0%; z-index: 9999; border: 2px solid var(--bluepop); border-radius: 25px; background-color: var(--card); padding: 2px 20px; display: flex; flex-direction: column; justify-content: center; align-items: center;">
      <div class="macra-msg">Click to input macra</div>
      <div style="width: 100%; display: flex;">
      <div class="macra" type="button" data-macron="ā">ā</div>
      <div class="macra" type="button" data-macron="ē">ē</div>
      <div class="macra" type="button" data-macron="ī">ī</div>
      <div class="macra" type="button" data-macron="ō">ō</div>
      <div class="macra" type="button" data-macron="ū">ū</div>
      </div>
      
    </div>

    <style>
      .macra {
        font-size: 13px;
        border-radius: 999px;
        border: 1px solid var(--border);
        background: var(--bg);
        color: var(--bluepop);
        font-weight: 700;
        cursor: pointer;
        transition: background-color 0.15s ease;
        width: 20%;
        height: 90%;
        font-size: 2vh;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      .macra:hover {
        background-color: var(--card);
        transition: background-color 0.2s ease;
      }

      .macra-msg {
        width: 100%;
        text-align: center;
        font-size: 2cqh;
        margin-bottom: 1vh;
      }
    </style>
  `);

  document.body.style.marginBottom = "5vh";

  document.querySelectorAll(".macra").forEach(button => {
    button.addEventListener("mousedown", event => {
      event.preventDefault();

      const macron = button.dataset.macron;
      const activeEl = document.activeElement;

      if (
        activeEl &&
        (activeEl.tagName === "INPUT" || activeEl.tagName === "TEXTAREA")
      ) {
        const start = activeEl.selectionStart;
        const end = activeEl.selectionEnd;
        const text = activeEl.value;

        activeEl.value =
          text.substring(0, start) +
          macron +
          text.substring(end);

        activeEl.selectionStart =
          activeEl.selectionEnd =
          start + macron.length;

        activeEl.dispatchEvent(
          new Event("input", { bubbles: true })
        );

        button.textContent = "Inputted";
        localStorage.setItem('achievementMacronKeyboard', 'true');
        setTimeout(() => {
          button.innerHTML = macron;
        }, 800);
      } else {
        alert("No textbox selected to input macron!");
      }
    });
  });
}




/*============================================================================
TEST RESULT QUOTES
============================================================================*/

function randomQuote(list){
    return list[Math.floor(Math.random()*list.length)];
}

function calcScore(score, total){

    const percent = score / total;

    let quote = "";

    if (percent < 0.2){
        quote = randomQuote(terribleQuotes);
    }
    else if (percent < 0.5){
        quote = randomQuote(improvingQuotes);
    }
    else if (percent < 0.75){
        quote = randomQuote(decentQuotes);
    }
    else if (percent < 0.9){
        quote = randomQuote(goodQuotes);
    }
    else if (percent < 1){
        quote = randomQuote(excellentQuotes);
    }
    else{
        quote = randomQuote(perfectQuotes);
    }
    console.log(quote);
    return `<em>'${quote.latin}'</em><br><em>'${quote.english}'</em>`;
}

function rerenderUsername(){
    let username = localStorage.getItem("username");
    if (username ===""){
      document.getElementById("username-greet").innerHTML = ``;
      console.log("No username to load");
    }else{
      document.getElementById("username-greet").innerHTML = `Hi, <strong>${username}</strong>!.  `;
      console.log("Username is: "+username);
    }
}

/* =========================
   UNIVERSAL MUSIC PLAYER
========================= */

(function () {
    const MUSIC_STATE_KEY = "latinMusicState";

    /*
        Assumes:
        /interact.js
        /music/musicData.js
        /music/song-file.mp3
    */
    const interactScript = [...document.scripts].find(script =>
        script.src && script.src.includes("interact.js")
    );

    const siteRoot = interactScript
        ? new URL("./", interactScript.src).href
        : new URL("./", window.location.href).href;

    const musicDataUrl = new URL("music/musicData.js", siteRoot).href;
    const musicFolderUrl = new URL("music/", siteRoot).href;

    let audio = new Audio();
    let tracks = [];
    let state = readMusicState();

    let playerEls = {};
    let lastSaveTime = 0;

    function readMusicState() {
        const saved = localStorage.getItem(MUSIC_STATE_KEY);

        if (!saved) {
            return {
                currentIndex: null,
                currentTime: 0,
                isPlaying: false,
                repeatSong: false,
                loopPlaylist: true,
                volume: 0.7
            };
        }

        try {
            return {
                currentIndex: null,
                currentTime: 0,
                isPlaying: false,
                repeatSong: false,
                loopPlaylist: true,
                volume: 0.7,
                ...JSON.parse(saved)
            };
        } catch {
            return {
                currentIndex: null,
                currentTime: 0,
                isPlaying: false,
                repeatSong: false,
                loopPlaylist: true,
                volume: 0.7
            };
        }
    }

    function saveMusicState(updates = {}) {
        state = {
            ...state,
            ...updates
        };

        localStorage.setItem(MUSIC_STATE_KEY, JSON.stringify(state));
    }

    function loadMusicData() {
        return new Promise((resolve, reject) => {
            if (Array.isArray(window.musicData)) {
                resolve();
                return;
            }

            const script = document.createElement("script");
            script.src = musicDataUrl;
            script.onload = resolve;
            script.onerror = reject;
            document.head.appendChild(script);
        });
    }

    function prepareTracks() {
        tracks = [...window.musicData].sort((a, b) =>
            String(a.index).localeCompare(String(b.index))
        );
    }

    function getTrackByIndex(index) {
        return tracks.find(track => String(track.index) === String(index));
    }

    function getCurrentTrack() {
        return getTrackByIndex(state.currentIndex) || tracks[0];
    }

    function getCurrentTrackPosition() {
        return tracks.findIndex(track => String(track.index) === String(state.currentIndex));
    }

    function getTrackSrc(track) {
        return new URL(track.fileName, musicFolderUrl).href;
    }

    function escapeHTML(value) {
        return String(value)
            .replaceAll("&", "&amp;")
            .replaceAll("<", "&lt;")
            .replaceAll(">", "&gt;")
            .replaceAll('"', "&quot;")
            .replaceAll("'", "&#039;");
    }

    function formatTime(seconds) {
        if (!seconds || Number.isNaN(seconds)) return "0:00";

        const mins = Math.floor(seconds / 60);
        const secs = Math.floor(seconds % 60);

        return `${mins}:${String(secs).padStart(2, "0")}`;
    }

    function injectMusicStyles() {
        if (document.getElementById("musicPlayerStyles")) return;

        const style = document.createElement("style");
        style.id = "musicPlayerStyles";

        style.textContent = `
            body.has-music-player {
                padding-bottom: 120px !important;
            }

            .music-player {
                position: fixed;
                left: 50%;
                bottom: 16px;
                transform: translateX(-50%);
                z-index: 10000;
                width: min(950px, calc(100vw - 32px));
                background: var(--card, #ffffff);
                color: var(--text, #1f2937);
                border: 1px solid var(--border, #e5e7eb);
                border-radius: 18px;
                box-shadow: 0 10px 30px rgba(0,0,0,0.18);
                padding: 12px;
                box-sizing: border-box;
                display: grid;
                grid-template-columns: 1fr auto;
                gap: 12px;
                align-items: center;
            }

            .music-player-main {
                min-width: 0;
            }

            .music-player-title {
                font-weight: 800;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
            }

            .music-player-subtitle {
                font-size: 12px;
                color: var(--muted, #6b7280);
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
                margin-top: 2px;
            }

            .music-player-controls {
                display: flex;
                align-items: center;
                gap: 8px;
                flex-wrap: wrap;
                justify-content: flex-end;
            }

            .music-player button {
                border: 1px solid var(--border, #e5e7eb);
                background: var(--bg, #f6f7fb);
                color: var(--text, #1f2937);
                border-radius: 10px;
                padding: 8px 10px;
                cursor: pointer;
                font-weight: 700;
            }

            .music-player button.active {
                background: var(--accent, #4f46e5);
                color: white;
                border-color: var(--accent, #4f46e5);
            }

            .music-progress-row {
                display: grid;
                grid-template-columns: 42px 1fr 42px;
                gap: 8px;
                align-items: center;
                margin-top: 8px;
                font-size: 12px;
                color: var(--muted, #6b7280);
            }

            .music-progress,
            .music-volume {
                width: 100%;
            }

            .music-volume-wrap {
                width: 90px;
            }

            .music-library-section {
                margin-bottom: 24px;
            }

            .music-track-card {
                width: 100%;
                text-align: left;
                cursor: pointer;
                border: 1px solid transparent;
            }

            .music-track-card.is-current {
                border-color: var(--accent, #4f46e5);
            }

            .music-track-name {
                font-weight: 800;
            }

            .music-track-meta {
                font-size: 12px;
                color: var(--muted, #6b7280);
                margin-top: 3px;
            }

            .music-track-source {
                font-size: 12px;
                color: var(--accent, #4f46e5);
                text-decoration: none;
            }

            @media (max-width: 700px) {
                .music-player {
                    grid-template-columns: 1fr;
                }

                .music-player-controls {
                    justify-content: flex-start;
                }

                .music-volume-wrap {
                    width: 100%;
                }
            }
        `;

        document.head.appendChild(style);
    }

    function buildMiniPlayer() {
        if (document.getElementById("musicMiniPlayer")) return;

        document.body.classList.add("has-music-player");

        const player = document.createElement("div");
        player.id = "musicMiniPlayer";
        player.className = "music-player";

        player.innerHTML = `
            <div class="music-player-main">
                <div class="music-player-title" id="musicPlayerTitle">No song selected</div>
                <div class="music-player-subtitle" id="musicPlayerSubtitle">Choose a track from the music library</div>

                <div class="music-progress-row">
                    <span id="musicCurrentTime">0:00</span>
                    <input id="musicProgress" class="music-progress" type="range" min="0" max="100" value="0">
                    <span id="musicDuration">0:00</span>
                </div>
            </div>

            <div class="music-player-controls">
                <button type="button" id="musicPrevBtn">⏮</button>
                <button type="button" id="musicPlayBtn">▶</button>
                <button type="button" id="musicNextBtn">⏭</button>
                <button type="button" id="musicRepeatBtn" title="Repeat current song">🔂</button>
                <button type="button" id="musicLoopBtn" title="Loop playlist">🔁</button>
                <div class="music-volume-wrap">
                    <input id="musicVolume" class="music-volume" type="range" min="0" max="1" step="0.01">
                </div>
            </div>
        `;

        document.body.appendChild(player);

        playerEls = {
            title: document.getElementById("musicPlayerTitle"),
            subtitle: document.getElementById("musicPlayerSubtitle"),
            currentTime: document.getElementById("musicCurrentTime"),
            duration: document.getElementById("musicDuration"),
            progress: document.getElementById("musicProgress"),
            volume: document.getElementById("musicVolume"),
            prevBtn: document.getElementById("musicPrevBtn"),
            playBtn: document.getElementById("musicPlayBtn"),
            nextBtn: document.getElementById("musicNextBtn"),
            repeatBtn: document.getElementById("musicRepeatBtn"),
            loopBtn: document.getElementById("musicLoopBtn")
        };

        playerEls.volume.value = state.volume;
        audio.volume = state.volume;

        playerEls.prevBtn.addEventListener("click", playPreviousTrack);
        playerEls.playBtn.addEventListener("click", togglePlay);
        playerEls.nextBtn.addEventListener("click", playNextTrack);

        playerEls.repeatBtn.addEventListener("click", () => {
            saveMusicState({ repeatSong: !state.repeatSong });
            updatePlayerDisplay();
        });

        playerEls.loopBtn.addEventListener("click", () => {
            saveMusicState({ loopPlaylist: !state.loopPlaylist });
            updatePlayerDisplay();
        });

        playerEls.progress.addEventListener("input", () => {
            if (!audio.duration) return;

            audio.currentTime = (Number(playerEls.progress.value) / 100) * audio.duration;

            saveMusicState({
                currentTime: audio.currentTime
            });
        });

        playerEls.volume.addEventListener("input", () => {
            audio.volume = Number(playerEls.volume.value);

            saveMusicState({
                volume: audio.volume
            });
        });
    }

    function updatePlayerDisplay() {
        const track = getCurrentTrack();

        if (!track) return;

        playerEls.title.textContent = track.name;
        playerEls.subtitle.textContent = `${track.type} • ${track.author}`;

        playerEls.playBtn.textContent = audio.paused ? "▶" : "⏸";

        playerEls.repeatBtn.classList.toggle("active", state.repeatSong);
        playerEls.loopBtn.classList.toggle("active", state.loopPlaylist);

        playerEls.currentTime.textContent = formatTime(audio.currentTime);
        playerEls.duration.textContent = formatTime(audio.duration);

        if (audio.duration) {
            playerEls.progress.value = (audio.currentTime / audio.duration) * 100;
        } else {
            playerEls.progress.value = 0;
        }

        document.querySelectorAll("[data-music-track]").forEach(button => {
            button.classList.toggle(
                "is-current",
                button.dataset.musicTrack === String(state.currentIndex)
            );
        });
    }

    function loadTrack(trackIndex, options = {}) {
        const track = getTrackByIndex(trackIndex) || tracks[0];

        if (!track) return;

        const shouldPlay = options.play || false;
        const startTime = options.startTime || 0;

        saveMusicState({
            currentIndex: track.index,
            currentTime: startTime
        });

        audio.src = getTrackSrc(track);
        audio.load();

        audio.addEventListener(
            "loadedmetadata",
            () => {
                if (startTime > 0 && audio.duration) {
                    audio.currentTime = Math.min(startTime, Math.max(audio.duration - 0.25, 0));
                }

                updatePlayerDisplay();

                if (shouldPlay) {
                    playCurrentTrack();
                }
            },
            { once: true }
        );

        updatePlayerDisplay();
    }

    function playCurrentTrack() {
        const track = getCurrentTrack();

        if (!track) return;

        if (!audio.src) {
            loadTrack(track.index, {
                play: true,
                startTime: state.currentTime || 0
            });

            return;
        }

        audio.play()
            .then(() => {
                saveMusicState({ isPlaying: true });
                updatePlayerDisplay();
            })
            .catch(() => {
                saveMusicState({ isPlaying: false });
                updatePlayerDisplay();
            });
    }

    function pauseCurrentTrack() {
        audio.pause();

        saveMusicState({
            isPlaying: false,
            currentTime: audio.currentTime || 0
        });

        updatePlayerDisplay();
    }

    function togglePlay() {
        if (audio.paused) {
            playCurrentTrack();
        } else {
            pauseCurrentTrack();
        }
    }

    function playTrackByIndex(trackIndex) {
        loadTrack(trackIndex, {
            play: true,
            startTime: 0
        });
    }

    function playNextTrack() {
        if (tracks.length === 0) return;

        let currentPosition = getCurrentTrackPosition();

        if (currentPosition === -1) {
            currentPosition = 0;
        }

        let nextPosition = currentPosition + 1;

        if (nextPosition >= tracks.length) {
            nextPosition = 0;
        }

        loadTrack(tracks[nextPosition].index, {
            play: true,
            startTime: 0
        });
    }

    function playPreviousTrack() {
        if (tracks.length === 0) return;

        let currentPosition = getCurrentTrackPosition();

        if (currentPosition === -1) {
            currentPosition = 0;
        }

        let previousPosition = currentPosition - 1;

        if (previousPosition < 0) {
            previousPosition = tracks.length - 1;
        }

        loadTrack(tracks[previousPosition].index, {
            play: true,
            startTime: 0
        });
    }

    function handleTrackEnded() {
        if (state.repeatSong) {
            loadTrack(state.currentIndex, {
                play: true,
                startTime: 0
            });

            return;
        }

        const currentPosition = getCurrentTrackPosition();
        const isLastTrack = currentPosition === tracks.length - 1;

        if (!isLastTrack) {
            playNextTrack();
            return;
        }

        if (state.loopPlaylist) {
            loadTrack(tracks[0].index, {
                play: true,
                startTime: 0
            });

            return;
        }

        saveMusicState({
            isPlaying: false,
            currentTime: 0
        });

        updatePlayerDisplay();
    }

    function connectAudioEvents() {
        audio.addEventListener("play", () => {
            saveMusicState({ isPlaying: true });
            updatePlayerDisplay();
        });

        audio.addEventListener("pause", () => {
            saveMusicState({
                isPlaying: false,
                currentTime: audio.currentTime || 0
            });

            updatePlayerDisplay();
        });

        audio.addEventListener("timeupdate", () => {
            updatePlayerDisplay();

            const now = Date.now();

            if (now - lastSaveTime > 1000) {
                lastSaveTime = now;

                saveMusicState({
                    currentTime: audio.currentTime || 0,
                    isPlaying: !audio.paused
                });
            }
        });

        audio.addEventListener("ended", handleTrackEnded);

        window.addEventListener("beforeunload", () => {
            saveMusicState({
                currentTime: audio.currentTime || 0,
                isPlaying: !audio.paused
            });
        });
    }

    function buildMusicHomepage() {
        const library = document.getElementById("musicLibrary");

        if (!library) return;

        library.innerHTML = "";

        const groupedTracks = {};

        for (let track of tracks) {
            if (!groupedTracks[track.type]) {
                groupedTracks[track.type] = [];
            }

            groupedTracks[track.type].push(track);
        }

        const sortedTypes = Object.keys(groupedTracks).sort((typeA, typeB) => {
            const aFirstIndex = groupedTracks[typeA][0].index.slice(0, 2);
            const bFirstIndex = groupedTracks[typeB][0].index.slice(0, 2);

            return aFirstIndex.localeCompare(bFirstIndex);
        });

        for (let type of sortedTypes) {
            const section = document.createElement("div");
            section.className = "category-card music-library-section";

            const heading = document.createElement("h2");
            heading.textContent = type;
            section.appendChild(heading);

            const trackList = document.createElement("div");
            trackList.className = "link-group";

            groupedTracks[type]
                .sort((a, b) => String(a.index).localeCompare(String(b.index)))
                .forEach(track => {
                    const button = document.createElement("button");
                    button.type = "button";
                    button.className = "nav-button music-track-card";
                    button.dataset.musicTrack = track.index;

                    button.innerHTML = `
                        <div>
                            <div class="music-track-name">${escapeHTML(track.name)}</div>
                            <div class="music-track-meta">
                                ${escapeHTML(track.author)} • Track ${escapeHTML(track.index)} • <a href="${track.link}" style="margin: 0 0 0px 0px;" class="music-track-source" rel="noopener noreferrer" target="_blank"><u>Source</u></a>
                            </div>
                        </div>
                        <span>Play</span>
                    `;

                    button.addEventListener("click", () => {
                        playTrackByIndex(track.index);
                    });

                    trackList.appendChild(button);

                    /*if (track.link) {
                        const source = document.createElement("a");
                        source.href = track.link;
                        source.target = "_blank";
                        source.rel = "noopener noreferrer";
                        source.className = "music-track-source";
                        source.textContent = "Source / credit";
                        source.style.margin = "0 0 8px 16px";
                        trackList.appendChild(source);
                    }*/
                });

            section.appendChild(trackList);
            library.appendChild(section);
        }

        updatePlayerDisplay();
    }

    async function initMusicSystem() {
        try {
            await loadMusicData();
        } catch {
            console.warn("Music data could not be loaded.");
            return;
        }

        if (!Array.isArray(window.musicData) || window.musicData.length === 0) {
            return;
        }

        prepareTracks();
        injectMusicStyles();
        buildMiniPlayer();
        connectAudioEvents();
        buildMusicHomepage();

        const startingTrack = getCurrentTrack();

        if (!state.currentIndex && startingTrack) {
            saveMusicState({
                currentIndex: startingTrack.index,
                currentTime: 0,
                isPlaying: false
            });
        }

        loadTrack(state.currentIndex, {
            play: state.isPlaying,
            startTime: state.currentTime || 0
        });

        window.MusicPlayer = {
            playTrack: playTrackByIndex,
            play: playCurrentTrack,
            pause: pauseCurrentTrack,
            next: playNextTrack,
            previous: playPreviousTrack,
            getState: () => state
        };
    }

    window.addEventListener("load", initMusicSystem);
})();
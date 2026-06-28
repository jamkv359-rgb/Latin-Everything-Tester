const savedTheme = localStorage.getItem('theme');
const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

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
};


} 
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
    <div id="macraInputter" style="width: 50%; position: fixed; height: 5vh; object-fit: cover; top: 93%; left: 25%; z-index: 9999; border: 2px solid var(--bluepop); border-radius: 50px; background-color: var(--card); padding: 2px 20px; display: flex; justify-content: center; align-items: center;">
      <div class="macra-msg">Click to input macra → </div>
      <div class="macra" type="button" data-macron="ā">ā</div>
      <div class="macra" type="button" data-macron="ē">ē</div>
      <div class="macra" type="button" data-macron="ī">ī</div>
      <div class="macra" type="button" data-macron="ō">ō</div>
      <div class="macra" type="button" data-macron="ū">ū</div>
      <div class="macra-msg"> ← Optional, not needed </div>
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
        width: 10%;
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
        width: 25%;
        text-align: center;
        font-size: 2cqh;
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
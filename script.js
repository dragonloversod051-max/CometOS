
console.log("1");
        
        function updateTime() {
          var Time = new Date().toLocaleString('en-US', {hour12: true});

          var timeText = document.querySelector("#timeElement");
          timeText.innerHTML = Time;
        }

      function updateBattery() {
          var Battery = navigator.getBattery().then(function(battery) {
            var batteryLevel = battery.level * 100;
            var batteryText = document.querySelector("#batteryElement");
            if (batteryLevel >= 75) {
              batteryText.innerHTML = "☀️Charged Up and Ready!☀️";
            }
            else if (batteryLevel>=50) {
              batteryText.innerHTML = "🌗I Can Last A While!🌗";
            }
            else if (batteryLevel>=25) {
              batteryText.innerHTML = "🌑I'm Running Low...🌑";
            }
            else if (batteryLevel>5) {
              batteryText.innerHTML = "❄️Really, Really Low...";
            }
            else {
              batteryText.innerHTML = "🚨I NEED CHARGE NOW! ABOUT TO DIE!🚨";
            }
          }
        );        }
        

        updateTime();
        updateBattery();

        setInterval(updateTime, 1000);
        setInterval(updateBattery, 10000);

console.log("2");


// Make the DIV element draggable:
dragElement(document.getElementById("welcome"));
dragElement(document.querySelector("#notebook"));
dragElement(document.getElementById("familyTree"));
dragElement(document.getElementById("relseithurInfo"));
dragElement(document.getElementById("settings"));
dragElement(document.getElementById("calculator"));
// Step 1: Define a function called `dragElement` that makes an HTML element draggable.
function dragElement(element) {
  // Step 2: Set up variables to keep track of the element's position.
  var initialX = 0;
  var initialY = 0;
  var currentX = 0;
  var currentY = 0;
  var windowStartX = 0;
  var windowStartY = 0;

  // Step 3: Check if there is a special header element associated with the draggable element.
  if (document.getElementById(element.id + "header")) {
    // Step 4: If present, assign the `dragMouseDown` function to the header's `onmousedown` event.
    // This allows you to drag the window around by its header.
    document.getElementById(element.id + "header").onmousedown = startDragging;
  } else {
    // Step 5: If not present, assign the function directly to the draggable element's `onmousedown` event.
    // This allows you to drag the window by holding down anywhere on the window.
    element.onmousedown = startDragging;
  }

  // Step 6: Define the `startDragging` function to capture the initial mouse position and set up event listeners.
  function startDragging(e) {
    e = e || window.event;
    e.preventDefault();
    // Step 7: Get the mouse cursor position at startup.
    initialX = e.clientX;
    initialY = e.clientY;

    // Keep the window in the same place when removing its centering transform.
    var position = element.getBoundingClientRect();
    windowStartX = position.left;
    windowStartY = position.top;
    element.style.transform = "none";
    element.style.left = windowStartX + "px";
    element.style.top = windowStartY + "px";
    // Step 8: Set up event listeners for mouse movement (`elementDrag`) and mouse button release (`closeDragElement`).
    document.onmouseup = stopDragging;
    document.onmousemove = elementDrag;
  }

  // Step 9: Define the `elementDrag` function to calculate the new position of the element based on mouse movement.
  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // Step 10: Calculate the new cursor position.

    var shiftX = e.clientX - initialX;
    var shiftY = e.clientY - initialY;
    var maxTop = bottomBar.getBoundingClientRect().top;
    var maxLeft = window.innerWidth - element.offsetWidth;
    var newTop = Math.max(0, Math.min(maxTop, windowStartY + shiftY));
    var newLeft = Math.max(0, Math.min(maxLeft, windowStartX + shiftX));

    element.style.top = newTop + "px";
    element.style.left = newLeft + "px";

  }

  // Step 12: Define the `stopDragging` function to stop tracking mouse movement by removing the event listeners.
  function stopDragging() {
    document.onmouseup = null;
    document.onmousemove = null;
  }


}

console.log("3");
var biggestIndex = 10

var topBar = document.querySelector("#topBar")


//Closing the window
var notebook = document.querySelector("#notebook");
var welcomeScreen = document.querySelector("#welcome");
var familyTree = document.querySelector("#familyTree");
var settings = document.querySelector("#settings");
var calculator = document.querySelector("#calculator")

function closeWindow(element) {
  element.style.display = "none";
}

function openWindow(element) {
  element.style.display = "block";
  biggestIndex = biggestIndex + 1;
  element.style.zIndex = biggestIndex;
  topBar.style.zIndex = biggestIndex+1;
}


console.log("4");
//closebutton
var notebookClose = document.querySelector("#notebookClose");
var welcomeScreenClose = document.querySelector("#welcomeClose");
var familyTreeClose = document.querySelector("#familyTreeClose");
var settingsClose = document.querySelector("#settingsClose");
var calculatorClose = document.querySelector("#calculatorClose")

//openbutton

var welcomeScreenOpen = document.querySelector("#welcomeOpen")
var notebookScreenOpen = document.querySelector("#notebookOpen")
var familyTreeScreenOpen = document.querySelector("#familyTreeOpen")
var settingsScreenOpen = document.querySelector("#settingsOpen")
var calculatorScreenOpen = document.querySelector("#calculatorOpen")

welcomeScreenClose.addEventListener("click", function() {
  closeWindow(welcomeScreen);
});

notebookClose.addEventListener("click", function() {closeWindow(notebook);});

familyTreeClose.addEventListener("click", function() {closeWindow(familyTree);});

settingsClose.addEventListener("click", function() {closeWindow(settings);});

calculatorClose.addEventListener("click", function() {closeWindow(calculator);});


welcomeScreenOpen.addEventListener("click", function() {
  openWindow(welcomeScreen);
});

notebookScreenOpen.addEventListener("click", function(){
  selectIcon(NBicon)
  openWindow(notebook)
})

familyTreeScreenOpen.addEventListener("click", function(){
  selectIcon(familyTreeOpen)
  openWindow(familyTree)
})

settingsScreenOpen.addEventListener("click", function() {
  selectIcon(settingsOpen)
  openWindow(settings)
})

calculatorScreenOpen.addEventListener("click", function() {
  selectIcon(calculatorOpen)
  openWindow(calculator)
})

console.log("5");

//icon selection

var selectedIcon = undefined
function selectIcon(element) {
  element.classList.add("selected");
  selectedIcon = element
  setTimeout(function() {
    deselectIcon(element)
  }, 1000)
}
function deselectIcon(element) {
  element.classList.remove("selected");
  selectedIcon = undefined
}

console.log("6");
//window rising to top
var bottomBar = document.querySelector("#bottomBar")
var biggestIndex = 10
function handleWindowTap(element) {
  biggestIndex = biggestIndex + 1;
  element.style.zIndex = biggestIndex;
  topBar.style.zIndex = biggestIndex+1;
  bottomBar.style.zIndex = biggestIndex+1;
}
function addWindowTapHandling(element){
  element.addEventListener("mousedown", () => handleWindowTap(element))
}
addWindowTapHandling(welcomeScreen)
addWindowTapHandling(notebook)
addWindowTapHandling(familyTree)
addWindowTapHandling(settings)
addWindowTapHandling(calculator)

console.log("7");

//Objects and storing for notebook window?
var content = [
  {
    title: `<p class = "sbTitle" style = "margin-top: 16px;">Welcome</p>`,
    date: `<p class = "sbDate">5/7/2026</p>`,
    content: `

    <div id = "NotesContent">

        <!--Notes-->
        <div style = "text-align: center">
          <p contenteditable = "false" style = "text-align: center; font-family: Playpen Sans; padding-left: 70px; padding-right: 20px; padding-top: 0px; margin-top: 0px;">
            Welcome to <strong>Fantasy Notes</strong>!
            <br>
            <br> So it's a New Academy! Pretty massive, actually. And they gave us each this diary.
                  So, I guess I can write stuff down here. Imagine if this is found like, 1000 years 
                  in the future or something. And someone reads it. That would be crazy!
            <br>
            <br> Well, I guess I'll start with the pretty massive information. I'm studying at <strong> <dfn>The Arx Nubium</dfn></strong>!
                  It's massive - both in size and in name. It's a castle on a floating island!

            <br><br> It means "The Citadel of Clouds". And, honestly, when you look at it, it really is!

            <br><br> We've got loads of classes here. And we can choose most of them. This is mine:
            
            <ul>
              <li> Swordfighting (I mean, obviously)</li>
              <li> Exploration </li>
              <li> Ship / Flymaster building </li>
              <li> Archery <li>
              <dfn> All of these are from a package called 'The Pirate Training Program'. Don't worry, its 
              not what you think.</dfn>
              <li> Spellbound (this is the spells and magic class) </li>
            </ul>          
            <br><br> Well, I gotta go to class now. I'll write more later. Goodbye!
          </p>
        </div>
    </div>
    `
     
  },
   {
    title: `<p class = "sbTitle">New Note</p>`,
    date: `<p class = "sbDate">12/7/2026</p>`,
    content: `
      <div style = "font-family: Playpen Sans; padding-left: 0px; padding-right: 20px; padding-top: 0px; padding-bottom: 0px;" contenteditable = "true" id = "editableNote" class = "nbNote">
        <p>
          Here's some sample text
        </p>
      </div>
      `
  }
]

var savedNotes = localStorage.getItem("notes");

if (savedNotes) {
    content = JSON.parse(savedNotes);
}



var noteContent = document.getElementById("#noteContent")

function setNotesContent(index) {

var noteContent = document.querySelector("#noteContent")
noteContent.innerHTML = content[index].content

if (index === 1) {
    var editableNote = document.getElementById("editableNote");

    editableNote.addEventListener("input", function () {
        content[1].content = noteContent.innerHTML;
        localStorage.setItem("notes", JSON.stringify(content));
        console.log(document.getElementById("noteContent").innerHTML);
    });
}


}
setNotesContent(0);

console.log("8");




function addToSidebar(index){
  var NotesSidebar = document.querySelector("#NotesSidebar");
  var note = content[index];
  var newDiv = document.createElement("div")

  newDiv.innerHTML = `
    <p style="margin: 0px;">
      ${note.title}
    </p>
    <p style="font-size: 12px; margin: 0px;">
      ${note.date}
    </p>
    `;


  newDiv.addEventListener("click", function() {
    setNotesContent(index);
  });

  NotesSidebar.appendChild(newDiv);
}

for (let i = 0; i < content.length; i++) {
  addToSidebar(i);
}

console.log("9");

const img = document.getElementById("familyTreeImage");

img.addEventListener("click", function (e) {
    console.log(e.offsetX, e.offsetY);
});


// #region Profile Window
const characters = {
  fulleri: {
    name: "Fulleri",
    description: "An accountant with a desire for order - occasionally too much of it."
  },

  torstein: {
    name: "Torstein",
    description: "A Weapons Tester and Blacksmith with extraordinarily good combat skill."
  },

  skålgard: {
    name: "Skålgard",
    description: "One of the best swordfighters in the family, beaten only by Comet herself. Serious, smart, and skilled."
  },

  calzar: {
    name: "Calzar",
    description: `
    <p> The happy-go-lucky younger brother, Calzar is one of the most trustworthy people you could ever meet.
     While not always the sharpest tool in the shed, he does have his moments. </p>`
  },

  runa: {
    name: "Runa",
    description: `<p> A runic translator, inscriber, and mage, Runa worked earnestly on several official
    projects to uncover the history of the continent for all of Alarica. </p>`
  },

  caspian: {
    name: "Caspian",
    description: `<p> Seafarer by profession and by heart, Caspian is among the best of sailors and captains 
    you could hope to come across. With an inherent sense of the air and the sea, Captain Caspian became one
    of the best navigators to ever sail the Six Straits. </p> `
  },

  torrin: {
    name: "Torrin the Nefarious",
    description: `<p> Centuries ago, during the reign of the great King Eric IV, Torrin the Nefarious terrorized 
    the Six Straits and the waters that lay beyond them. Of the few pirates alive at the time, all had reached
    the heights of infamy, but only one's name passed into legend. For while the ruthless pirate had terrorized the
    hearts and souls of all who lived by the coast, <s> he had had one last redeemable action. In the Final Battle
    of</s>`
  },

  evelyn: {
    name: "Evelyn of Crystfall",
    description: `<p> A relseiðric with a key eye for adventure. Figuring out the science behind the relseiðrs
     more often than not leads her to the farthest reaches of the continent. </p>`
  },

  tavroc: {
    name: "Tavroc",
    description: `<p> Possibly being descended of royal blood, Tavroc is also the Rimem mage in the Castle of Skyroot
    - one of its highest positions. He can perform Tidal magic - assosciated with water, currents, and the moons.
     He is smart, kind, and funny </p>`
  },

  calford: {
    name: "Calford",
    description: `<p> The fun-loving uncle, Calford has - according to Comet - one of the coolest jobs ever.
     Calford is a starmapper - an explorer. Starmappers map the uncharted areas of the continent and planet - 
     often going so far that the only guide back home is the positions of the stars. </p>`
  },

  sorcha: {
    name: "Sorcha",
    description: `<p> A sorceress with a pretentious disposition and a smirk that delights in petty victories 
    - many a times gotten through the misuse of Dune magic - connecting her to the power of the Sun, light, and
    flames. </p>`
  },
  
  valco: {
    name: "Valco",
    description: "Commander in the army of Skyroot, with an unfortunate mean streak for his soldiers. </p>"
  },

  cassie: {
    name: "Cassie",
    description: `<p> The spoilt, mean cousin. Comet, Skålgard and Calzar often stay far away from her. This,
    however, doesn't stop Cassie from trying to ruin any game they play - or, for that matter, anything they do. </p>`
  },

  teneris: {
    name: "Teneris",
    description: `<p>A treasure hunter who spent half her life searching for the 'The Gift of Marcin', a legendary
     treasure hidden even to this day. With vast, untold wealth, artifacts, and knowledge, The Gift of Marcin
     is the most sought after treasure in all of Alarica.</p>`
  },

  kaelen: {
    name: "Kaelen",
    description: `<p> One of the most important scouts under the Castle of Skyroot. His information created the 
    opportunity for Skyroot, at the last second, to win the war against Cinderheim. </p>`
  },

  lyra: {
    name: "Lyra",
    description: `<p> A smart, kind healer, who smuggled people in need into the Citadel (which used to be corrupt
    at the time; hence the need to smuggle). While the history books may not remember her, the people she helped
    certainly will.</p>`
  },

  alvis: {
    name: "Remim Mage Alvis",
    description: `<p> The Remim(high) mage of the Citadel, Alvis had extensive knowledge of magic and relseiðrs.
    While being in one of the highest, most important posts of the Citadel, Alvis had a kind heart. His magic,
    combined with his wife's intelligence allowed for one of the most successful refugee support operations ever
    to be carried out. </p>`
  },

  eric: {
    name: "King Eric IV of Skorgard",
    description: `<p> Long ago, the continent of Alarica was split into five major kingdoms. Skorgard was the largest.
    That also meant it was harder to control. After a great civil war, Skorgard broke apart into smaller, regional
     empires such as Skyroot and Crystfall. King Eric IV was the Last King of Skorgard. It was due to him that the
     final seperation unfolded without bloodshed, unlike the long civil war that had led to it, fueled by his
     predecessors. </p>`
  },

  comet: {
    name: "Comet",
    description: `<p> Who is Comet? Well, thats what this entire workspace is designed to answer. Go find
    out yourself, adventurer </p>`
  },
}

function openProfile(person) {
  openWindow(document.getElementById("profileWindow"));

  document.getElementById("profileName").innerText = characters[person].name;
  
  document.getElementById("profileDescription").innerHTML = characters[person].description;
}

document.querySelectorAll(".Button").forEach(button => {
  button.onclick = function () {
    let person = button.id.replace("Button", "");
    openProfile(person);
  };
  
});

document.getElementById("profileClose").addEventListener("click", function() {
  closeWindow(document.getElementById("profileWindow"))
});


var profileWindow = document.getElementById("profileWindow");



// #endregion



// #region Settings

function selectWPButton(event) {
  var targetElement = event.currentTarget
  targetElement.classList.add("selectedWPButton");

  if (targetElement.id === "WP1") {
    document.body.style.backgroundImage = "url('Landscape.png')"
    localStorage.setItem("WP", "white")
  }

  else if (targetElement.id === "WP2") {
    document.body.style.backgroundImage = "url('WP2.jpg')"
    localStorage.setItem("WP", "alien")
  }

  else if (targetElement.id === "WP3") {
    document.body.style.backgroundImage = "url('WP3.jpg')"
    localStorage.setItem("WP", "mushroom")
  }

  else if (targetElement.id === "WP4") {
    document.body.style.backgroundImage = "url('WP4.jpg')"
    localStorage.setItem("WP", "blue")
  }

}

function deselectWPButton() {
  document.querySelectorAll('.selectedWPButton').forEach(function(button) {
    button.classList.remove("selectedWPButton");
  });
  }


function handleWPButton() {
  deselectWPButton(event);
  selectWPButton(event);
}

document.querySelectorAll('.buttonWP').forEach(function(button) {
  button.addEventListener('click', handleWPButton)
})


var savedWP = localStorage.getItem("WP")

if (savedWP === "white") {
  document.body.style.backgroundImage = "url('Landscape.png')"
}

else if (savedWP === "alien") {
  document.body.style.backgroundImage = "url('WP2.jpg')"
}

else if (savedWP === "mushroom") {
  document.body.style.backgroundImage = "url('WP3.jpg')"
}

else if (savedWP === "blue") {
  document.body.style.backgroundImage = "url('WP4.jpg')"
}

else {
  document.body.style.backgroundImage = "url('Landscape.png')"
}

// #endregion


// #region Calculator app

let firstNum
let secondNum
let step = 0
let operation
let result = 0
let calcDisplay = document.getElementById("calcDisplay")


let numArray = []
let numArray2 = []

// step 1: GET DA NUMBER AND PUT IT IN THE DISPLAY
// step 2: PRESS AND SAVE OPERATOR
// step 3: PRESS AND SAVE 2nd NUMBER
// step 4: CALCULATE


function getNumber (num) {
  if (step === 0 || step === 1) {
    numArray.push(num) //So here its gonna look like (1,2,3) : There are commas
    step === 1
    firstNum = Number(numArray.join('')) // This'll join the array into an actual number
    calcDisplay.value = firstNum
  }
  else if (step === 2 || step === 3) {
    numArray2.push(num)
    secondNum = Number(numArray2.join(''))
    calcDisplay.value = secondNum
    step = 3
  }
  else if (step === 4) {
    calcDisplay.style.fontSize = "30px"
    calcDisplay.value = "Please Reset The Equation";
  }
}

function getOperator(op) {
  if (step === 4) {
    calcDisplay.style.fontSize = "30px"
    calcDisplay.value = "Please Reset The Equation";
  }
  else if (step === 3) {
    calcDisplay.style.fontSize = "13px";
    calcDisplay.value = "Please Equate. You cannot calculate with more than two numbers at a time"
    console.log("PLS")
  }
  else {
  step = 2
  operation = op}

}

function clearDisplay () {
  calcDisplay.style.fontSize = "50px";
  calcDisplay.value = "0"
  firstNum = null
  secondNum = null
  operation = null
  result = 0
  numArray = []
  numArray2 = []
  step = 0
}

function calculate () {
  calcDisplay.style.fontSize = "50px";
  if (operation === "+") {
    result = firstNum + secondNum
    calcDisplay.value = result

  }
  else if (operation === "-") {
    result = firstNum - secondNum
    calcDisplay.value = result

  }
  else if (operation === "*") {
    result = firstNum * secondNum
    calcDisplay.value = result

  }
  else if (operation === "/") {
    result = firstNum / secondNum
    calcDisplay.value = result
  }
  step = 4
}
// #endregion

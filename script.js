
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
// Step 1: Define a function called `dragElement` that makes an HTML element draggable.
function dragElement(element) {
  // Step 2: Set up variables to keep track of the element's position.
  var initialX = 0;
  var initialY = 0;
  var currentX = 0;
  var currentY = 0;

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
    // Step 8: Set up event listeners for mouse movement (`elementDrag`) and mouse button release (`closeDragElement`).
    document.onmouseup = stopDragging;
    document.onmousemove = dragElement;
  }

  // Step 9: Define the `elementDrag` function to calculate the new position of the element based on mouse movement.
  function dragElement(e) {
    e = e || window.event;
    e.preventDefault();
    // Step 10: Calculate the new cursor position.
    currentX = initialX - e.clientX;
    currentY = initialY - e.clientY;
    initialX = e.clientX;
    initialY = e.clientY;
    // Step 11: Update the element's new position by modifying its `top` and `left` CSS properties.
    let maxTop;
    let maxRight;
    
    if (element.id === "welcome") {

      maxTop = Math.max(element.offsetTop - currentY, 95);
      maxTop = Math.min(maxTop, 855);

      maxRight = Math.min(element.offsetLeft - currentX, 1217);
      maxRight = Math.max(maxRight, 220);}

    else if (element.id === "notebook") {
      maxTop = Math.max(element.offsetTop - currentY, 372);
      maxTop = Math.min(maxTop, 1135);
      console.log(maxTop)
      
      maxRight = Math.min(element.offsetLeft - currentX, 1217);
      maxRight = Math.max(maxRight, 220);      
    }
    element.style.top = maxTop+ "px";
    element.style.left = maxRight + "px";
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
var notebook = document.querySelector("#notebook")
var welcomeScreen = document.querySelector("#welcome");

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
var welcomeScreenClose = document.querySelector("#welcomeClose")

//openbutton

var welcomeScreenOpen = document.querySelector("#welcomeOpen")
var notebookScreenOpen = document.querySelector("#notebookOpen")

welcomeScreenClose.addEventListener("click", function() {
  closeWindow(welcomeScreen);
});

notebookClose.addEventListener("click", function() {closeWindow(notebook);});

welcomeScreenOpen.addEventListener("click", function() {
  openWindow(welcomeScreen);
});

notebookScreenOpen.addEventListener("click", function(){
  selectIcon(NBicon)
  openWindow(notebook)
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
      <div style = "font-family: Playpen Sans; padding-left: 0px; padding-right: 20px; " contenteditable = "true" id = "editableNote">
        <p style = "padding-top: 20px;">
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
let draggableElem = document.getElementById("draggable-elem");
let initialX = 0,
  initialY = 0;

let moveElement = false;

// events object
let events = {
  mouse: {
    down: "mousedown",
    move: "mousemove",
    up: "mouseup",
  },
  touch: {
    down: "touchstart",
    move: "touchmove",
    up: "touchend",
  },
};

let deviceType = "";

// detech touch device
const isTouchdevice = () => {
  try {
    // we try to create touchevent (it would fail desktops and throw error)
    document.createEvent("TouchEvent");
    deviceType = "touch";
    return true;
  } catch (e) {
    deviceType = "mouse";
    return false;
  }
};

isTouchdevice();

// start (mouse down / touch start)
draggableElem.addEventListener(events[deviceType].down, (e) => {
  e.preventDefault();
  //initial x and y points
  initialX = !isTouchdevice() ? e.clientX : e.touches[0].clientX;
  initialY = !isTouchdevice() ? e.clientY : e.touches[0].clientY;

  //start movement
  moveElement = true;
});

//move
draggableElem.addEventListener(events[deviceType].move, (e) => {
  // if movement == true then set top and left to new x andy while removing

  if (moveElement) {
    e.preventDefault();
    let newX = !isTouchdevice() ? e.clientX : e.touches[0].clientX;
    let newY = !isTouchdevice() ? e.clientY : e.touches[0].clientY;

    draggableElem.style.top =
      draggableElem.offsetTop - (initialY - newY) + "px";
    draggableElem.style.left =
      draggableElem.offsetLeft - (initialX - newX) + "px";

    initialX = newX;
    initialY = newY;
  }
});

//mouse up
draggableElem.addEventListener(
  events[deviceType].up,
  (stopMovement = (e) => {
    moveElement = false;
  })
);

draggableElem.addEventListener("mouseleave", stopMovement);
draggableElem.addEventListener(events[deviceType].up, (e) => {
  moveElement = false;
});

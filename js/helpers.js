// RANDOM NUMBERS
let getRandomNumbers = (size) => {
  return Math.floor(Math.random() * size);
};

// COMPARE USER-TREASURE DISTANCES
let getDistance = (e, target) => {
  let diffX = e.offsetX - target.x;
  let diffY = e.offsetY - target.y;
  return Math.sqrt(diffX * diffX + (diffY + diffY));
};

let getDistanceHint = (distance) => {
  if (distance < 30) {
    return (
      (document.getElementById("burn").style.visibility = "visible"),
      "Quemandose" &
        (document.getElementById("very-cold").style.visibility = "hidden") &
        (document.getElementById("frozen").style.visibility = "hidden") &
        (document.getElementById("cold").style.visibility = "hidden") &
        (document.getElementById("warm").style.visibility = "hidden") &
        (document.getElementById("hot").style.visibility = "hidden")
    );
  } else if (distance < 100) {
    return (
      (document.getElementById("hot").style.visibility = "visible"),
      "Tibio" &
        (document.getElementById("very-cold").style.visibility = "hidden") &
        (document.getElementById("frozen").style.visibility = "hidden") &
        (document.getElementById("cold").style.visibility = "hidden") &
        (document.getElementById("warm").style.visibility = "hidden") &
        (document.getElementById("burn").style.visibility = "hidden")
    );
  } else if (distance < 150) {
    return (
      (document.getElementById("warm").style.visibility = "visible"),
      "Tibio" &
        (document.getElementById("very-cold").style.visibility = "hidden") &
        (document.getElementById("frozen").style.visibility = "hidden") &
        (document.getElementById("cold").style.visibility = "hidden") &
        (document.getElementById("hot").style.visibility = "hidden") &
        (document.getElementById("burn").style.visibility = "hidden")
    );
  } else if (distance < 180) {
    return (
      (document.getElementById("cold").style.visibility = "visible"),
      "Frío" &
        (document.getElementById("very-cold").style.visibility = "hidden") &
        (document.getElementById("frozen").style.visibility = "hidden") &
        (document.getElementById("warm").style.visibility = "hidden") &
        (document.getElementById("hot").style.visibility = "hidden") &
        (document.getElementById("burn").style.visibility = "hidden")
    );
  } else if (distance < 360) {
    return (
      (document.getElementById("very-cold").style.visibility = "visible"),
      "Muy Frío" &
        (document.getElementById("cold").style.visibility = "hidden") &
        (document.getElementById("frozen").style.visibility = "hidden") &
        (document.getElementById("warm").style.visibility = "hidden") &
        (document.getElementById("hot").style.visibility = "hidden") &
        (document.getElementById("burn").style.visibility = "hidden")
    );
  } else {
    return (
      (document.getElementById("frozen").style.visibility = "visible"),
      "Congelado" &
        (document.getElementById("cold").style.visibility = "hidden") &
        (document.getElementById("very-cold").style.visibility = "hidden") &
        (document.getElementById("warm").style.visibility = "hidden") &
        (document.getElementById("hot").style.visibility = "hidden") &
        (document.getElementById("burn").style.visibility = "hidden")
    );
  }
};

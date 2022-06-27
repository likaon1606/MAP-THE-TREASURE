//WIDTH AND HEIGHT IMAGE
const WITH = 400;
const HEIGHT = 400;

//TARGET X-Y
let target = {
    x: getRandomNumbers(WITH),
    y: getRandomNumbers(HEIGHT)
}
//console.log(target);

//TRACKS TO THE USER
let $map = document.getElementById('map');
let $distance = document.getElementById('distance');
let clicks = 0;

$map.addEventListener('click', (e) => {
    clicks++;
    let distance = getDistance(e, target);
    //console.log(distance);
    let distanceHint = getDistanceHint(distance);
    //console.log(distanceHint);
    $distance.innerHTML = `<h1>${distanceHint}</h1>`;

    if ( distance < 20 ) {
        (document.getElementById("congratulations").style.visibility = "visible"), "felicidades" &
        (document.getElementById("cold").style.visibility = "hidden") &
        (document.getElementById("frozen").style.visibility = "hidden") &
        (document.getElementById("warm").style.visibility = "hidden") &
        (document.getElementById("hot").style.visibility = "hidden") &
        (document.getElementById("burn").style.visibility = "hidden") &
        (document.getElementById("very-cold").style.visibility = "hidden");
        alert(`Encontraste el tesoro en: ${clicks} clicks.`);
        // location.reload('click') //refresh page
        
    }
});



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
        alert(`Found the treasure in ${clicks}`)
        location.reload(); //refresh page
    }
});



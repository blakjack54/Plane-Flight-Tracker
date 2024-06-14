let map;
let flightPath;
let planeMarker;
let flights = [
  { lat: 40.7128, lng: -74.0060 },
  { lat: 34.0522, lng: -118.2437 },
  { lat: 51.5074, lng: -0.1278 }
];
let flightIndex = 0;

function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    zoom: 3,
    center: { lat: 30, lng: 0 }
  });

  planeMarker = new google.maps.Marker({
    position: flights[flightIndex],
    map: map,
    icon: {
      path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW,
      scale: 5,
      strokeColor: '#FF0000'
    },
    animation: google.maps.Animation.DROP
  });

  flightPath = new google.maps.Polyline({
    path: flights,
    geodesic: true,
    strokeColor: '#0000FF',
    strokeOpacity: 1.0,
    strokeWeight: 2
  });

  flightPath.setMap(map);
}

document.getElementById('startTracking').addEventListener('click', () => {
  setInterval(() => {
    flightIndex = (flightIndex + 1) % flights.length;
    planeMarker.setPosition(flights[flightIndex]);
    map.setCenter(flights[flightIndex]);
  }, 3000); // Change position every 3 seconds
});

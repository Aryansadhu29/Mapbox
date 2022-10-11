mapboxgl.accessToken = 'pk.eyJ1IjoiYXNocmFmMDUxMSIsImEiOiJjbDhhZzI0anQwZ21jM3BuM2h3aXRzMGVtIn0.ze9DSwc3u99CtQ0Sbk-QQw';

navigator.geolocation.getCurrentPosition(successLocation,errorLocation, {
  enableHighAccuracy: true
})

function successLocation(position) {
  setupMap([position.coords.longitude, position.coords.latitude])
}

function errorLocation() {
  setupMap()
}


function setupMap(center){
 const map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/streets-v11',
  center: center,
  zoom:15
 })
 const nav = new mapboxgl.NavigationControl();
 map.addControl(nav)
 var directions = new MapboxDirections({
   accessToken: mapboxgl.accessToken
  });
  map.addControl(directions, 'top-left')

}

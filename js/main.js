// Map object
var mymap = L.map('map', {
    center: [0, 0],
    zoom: 20,
    maxZoom: 22,
    minZoom: 19,
    zoomControl: false,
    detectRetina: true});

// Add NHL rink basemap
var mytile = L.tileLayer('assets/tiles/{z}/{x}/{y}.png', {
  maxZoom: 22,
  tms: true,
  attribution: 'NHL Goal Data &copy; gisdummy, NHL API | Basemap &copy; WAR on Ice, QMetaTiles | Made By Gordon DeLap'
}).addTo(mymap);

// Variable that will hold NHL goaLs data
var goals = "assets/NHLGoals2018Season.geojson";

// Create heat map of goals
$.getJSON(goals, function(data) {
   coords = data.features.map(feat => feat.geometry.coordinates.slice().reverse())
   var heat = L.heatLayer(coords,{
     radius: 12,
     blur: 11,
     max: 1.0
    }).addTo(mymap);
});

// Change position of zoom controls
new L.Control.Zoom({
  position: 'bottomleft'
}).addTo(mymap);

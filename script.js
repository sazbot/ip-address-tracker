// initialise leafletjs.com map
let map = L.map("map").setView([51.505, -0.09], 13);

// add tile layer
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  attribution: "© OpenStreetMap",
}).addTo(map);

// add marker to map
var marker = L.marker([51.5, -0.09]).addTo(map);

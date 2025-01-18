const searchButton = document.getElementById('searchButton');
const searchInput = document.getElementById('search');
const latElement = document.getElementById('lat');
const lonElement = document.getElementById('lon');
const mapElement = document.getElementById('map');

let h2 = document.querySelector('p')
var map;
var marker;


function success(pos){
    console.log(pos.coords.latitude, pos.coords.longitude)
    // h2.innerHTML = `<strong>Latitude: </strong>${pos.coords.latitude} <strong>Longintude: </strong>${pos.coords.longitude}`

    if( map === undefined){
        map = L.map('map').setView([pos.coords.latitude, pos.coords.longitude], 13);
    

    }else{
        map.remove()
        map = L.map('map').setView([pos.coords.latitude, pos.coords.longitude], 13);
    }
    
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);
    
    L.marker([pos.coords.latitude, pos.coords.longitude]).addTo(map)
        .bindPopup('Eu estou aqui! ')
}

function error(error){
    console.log(error)
}

var watchID = navigator.geolocation.watchPosition(success, error, {
    enableHighAccuracy: true,
    timeout: 5000
})

searchButton.addEventListener('click', () => {
    const query = searchInput.value;
    if (query) {
      fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(query)}`)
        .then(response => response.json())
        .then(data => {
          if (data.length > 0) {
            const { lat, lon } = data[0];
            latElement.textContent = parseFloat(lat).toFixed(6);
            lonElement.textContent = parseFloat(lon).toFixed(6);
  
            if (!map) {
              map = L.map(mapElement).setView([lat, lon], 13);
              L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution: '&copy; OpenStreetMap contributors'
              }).addTo(map);
            }
  
            if (marker) {
              marker.setLatLng([lat, lon]);
            } else {
              marker = L.marker([lat, lon]).addTo(map);
            }
  
            map.setView([lat, lon], 13);
          } else {
            alert('Local não encontrado.');
          }
        })
        .catch(error => alert('Erro ao buscar local: ' + error.message));
    } else {
      alert('Por favor, insira um local para buscar.');
    }
  });
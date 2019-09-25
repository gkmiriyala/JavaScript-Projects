window.addEventListener('load', ()=> {
    let long;
    let lat;
    let temperateDescription = document.querySelector(".temperature-description");
    let temperateDegree = document.querySelector(".temperature-degree");
    let locationTimezone = document.querySelector(".location-timezone");
    
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(position => {
            long = position.coords.longitude;
            lat = position.coords.latitude;

            const proxy = `https://cors-anywhere.herokuapp.com/`;
            const api = `${proxy}https://api.darksky.net/forecast/c90ff6400596001b75351d064dc75452/${lat},${long}`; 

            fetch(api)
            .then(response =>{
                return response.json();
            })
            .then(data => {
                const {temperature, summary } = data.currently; 

                // Set DOM Elements from the api
                temperateDegree.textContent = temperature;
                temperateDescription.textContent = summary;
                locationTimezone.textContent = data.timezone;
            })
        });
    }
});
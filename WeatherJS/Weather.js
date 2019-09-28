window.addEventListener('load', ()=> {
    let long;
    let lat;
    let temperateDescription = document.querySelector(".temperature-description");
    let temperateDegree = document.querySelector(".temperature-degree");
    let locationTimezone = document.querySelector(".location-timezone");
    let temperatureSection = document.querySelector('.temperature');
    const temperatureSpan = document.querySelector('.temperature span');
    
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
                const {temperature, summary, icon } = data.currently; 

                // Set DOM Elements from the api
                temperateDegree.textContent = Math.floor(temperature);
                temperateDescription.textContent = summary;
                locationTimezone.textContent = data.timezone;


                //FORMULA FOR CELSIUS
                let celsius = (temperature - 32) * (5/9)
                
                //set Icon
                setIcons(icon, document.querySelector(".icon"));

                
                temperatureSection.addEventListener('click', changeDegreeUnit);

                //Change temperature between Celsius/Farenheit
                function changeDegreeUnit(){
                    if(temperatureSpan.textContent === "F") {
                        temperateDegree.textContent = Math.floor(celsius);
                        temperatureSpan.textContent = "C";
                    }else {
                        temperateDegree.textContent = Math.floor(temperature);
                        temperatureSpan.textContent = "F";
                    }
                };
            })
        });
    }

    function setIcons(icon, iconID) {
        const skycons = new Skycons({color: "white"});
        const currentIcon = icon.replace(/-/g, "_").toUpperCase();
        skycons.play();
        return skycons.set(iconID, Skycons[currentIcon]);
    };
});
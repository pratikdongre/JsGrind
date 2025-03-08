
let weatherForm =document.querySelector('.weatherForm');
let cityInput = document.querySelector('.cityInput');

let card = document.querySelector('.card');
let apikey = '1424fda8af7d50af55562a26125209730c7c47122001';


weatherForm.addEventListener('submit',async event => {
event.preventDefault();
let city = cityInput.value;
if(city) {
    try{

        let weatherData = await getWeatherData(city);
        displayWeatherInfo(weatherData);

    } 
    catch(error){
        console.error(error);
        displayError(error);
        
    }

}else {
    displayError("Please enter a city");
}

})

async function getWeatherData(city){
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`;

    const response = await fetch(apiUrl);
    // console.log(response);

    if(!response.ok){
        throw new Error("could not fetched weather data")
    }

    return await response.json();
    
    
    // const data = await response.json();

  
    // console.log(data);

    

}

function displayWeatherInfo(data){
    console.log(data);
    
   const {name : city , 
          main : {temp,humidity},
          weather :[{description,id}] } = data;
    
    card.textContent = '';
    card.style.display  = 'flex';
    
    const cityDisplay = document.createElement('h1');
    const tempDisplay = document.createElement('p');
    const humidityDisplay = document.createElement("p");
    const descDisplay = document.createElement('p');
    const weatherEmoji = document.createElement('p');

    cityDisplay.textContent = city;
    cityDisplay.classList.add("cityDisplay");
    card.appendChild(cityDisplay);

    tempDisplay.innerHTML = `${(temp -273.15).toFixed(1)}&deg;C`;
    tempDisplay.classList.add("tempDisplay");
    card.appendChild(tempDisplay);

    humidityDisplay.textContent = `Humidity : ${humidity}%`;
    humidityDisplay.classList.add("humidityDisplay");
    card.appendChild(humidityDisplay);

    descDisplay.innerHTML = description;
    descDisplay.classList.add("descDisplay");
    card.appendChild(descDisplay);

    weatherEmoji.textContent = getWeatherEmoji(id);
    weatherEmoji.classList.add("weatherEmoji");
    card.appendChild(weatherEmoji);
}


function getWeatherEmoji(weatherid){

    switch(true){
        case (weatherid >=200 && weatherid <300):
            return '⛈️';
        case (weatherid >=300 && weatherid <400):
            return '💦';
        case (weatherid >=500 && weatherid <600):
            return '🌧️';    
        case (weatherid >=600 && weatherid <700):
            return '❄️';  
        case (weatherid >=700 && weatherid <800):
            return '🌫️';  
        case (weatherid === 800):
            return '☀️';               
        case (weatherid >=801 && weatherid <810):
            return '☁️';   
        default : 
        return '?';      
    }
}

function displayError(message){

    let errorDisplay =document.createElement('p');
    errorDisplay.innerHTML = message;
    errorDisplay.classList.add("errorMsg");
    card.textContent = '';
    card.style.display = 'flex';
    card.appendChild(errorDisplay)

}

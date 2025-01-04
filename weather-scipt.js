const apiKey = "93c372cc5c7e7958f9a9533135766ebe";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");
const card = document.querySelector(".card");

async function checkWeather(city){
   
    const response = await fetch(apiUrl+`&q=${city}&appid=${apiKey}&units=metric`);

    if (response.status==404){
        document.querySelector(".error").style.display = "block";
    }
    else{ 
    
        document.querySelector(".error").style.display = "none";
    
        var data = await response.json();

        console.log(data);

        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) +" °C";
        document.querySelector(".humidity").innerHTML = data.main.humidity+" %";
        document.querySelector(".wind").innerHTML = data.wind.speed+" m/s";


        if (data.weather[0].main == "Clouds"){
            weatherIcon.src = "SourceImg/images/clouds.png";
            //card.style.background = "linear-gradient(135deg, ##dddddd, #575757)";
            card.style.backgroundColor ="#828282"
            card.style.color = "#000";
        }
        if (data.weather[0].main == "Rain"){
            weatherIcon.src = "SourceImg/images/rain.png";
            //card.style.background = "linear-gradient(135deg, ##555579, #2f2f5e)";
            card.style.backgroundColor ="rgb(19, 154, 154)"
            card.style.color = "#fff";
        }
        }
        if (data.weather[0].main == "Snow"){
            weatherIcon.src = "SourceImg/images/snow.png";
            //card.style.background = "linear-gradient(135deg, #eeeeff, #dddddd)";
            card.style.backgroundColor ="#fff"
            card.style.color = "#000";
        }
        if (data.weather[0].main == "Mist"){
            weatherIcon.src = "SourceImg/images/mist.png";
            //card.style.background = "linear-gradient(135deg, #00feba, #5b548a)";
            card.style.color = "#fff";
            card.style.backgroundColor ="#43688f";
        }
        if (data.weather[0].main == "Drizzle"){
            weatherIcon.src = "SourceImg/images/drizzle.png";
            //card.style.background = "linear-gradient(135deg, #8c8c8c, #6f6767)";
            card.style.color = "#fff";
            card.style.backgroundColor ="#5f748a";
        }
        if (data.weather[0].main == "Clear"){
            weatherIcon.src = "SourceImg/images/clear.png";
            //card.style.background = "linear-gradient(135deg, #fcff9d, #9aeea1)";
            card.style.color = "#fff";
            card.style.backgroundColor = "#fff700";
        }
        
        document.querySelector(".weather").style.display = "block";
   
 
    }

searchBtn.addEventListener("click", ()=>{
checkWeather(searchBox.value);


})


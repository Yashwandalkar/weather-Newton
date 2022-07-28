// input 
// on click of button, grab the input from user
// ask the internet to give me weather detail of that city 
// display that data in result block 

const city = document.getElementById("city")
const search = document.getElementById("search")

// asynk function for fetching weather details 
async function fetchWeather(cityName) {
 let apiKey = "86e5d061b47db077c2b1924672848680"
 let api = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`

 try{
  let response = await fetch(api)
  let result = await response.json()

 document.getElementById("temp").innerHTML=result.main.temp
 document.getElementById("max_temp").innerHTML=result.main.temp_max
 document.getElementById("min_temp").innerHTML=result.main.temp_min
 document.getElementById("humidity").innerHTML=result.main.humidity
 } catch (error) {
  console.log(error)
 }
}

// // On click of search button (adding eventListener)
 search.addEventListener("click",(e)=>{
//     // grab input from city input field
      let cityName = city.value

      fetchWeather(cityName)
 
    })

//     // ask open weather api to give me weather data of that city
//     let apiKey = "86e5d061b47db077c2b1924672848680"
//     let api = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`

//     fetch(api)
//       .then((response) => {
//         return response.json()
//     })
//     .then((response)=>{
//         console.log(response)
//         console.log(response.main.temp)
//         document.getElementById("temp").innerHTML=response.main.temp
//         document.getElementById("max_temp").innerHTML=response.main.max_temp
//         document.getElementById("min_temp").innerHTML=response.main.min_temp
//         document.getElementById("humidity").innerHTML=response.main.humidity
//     })
//       .catch((error) => {
//         console.log(error)
//     })
    
    
    
    
    
    
//     // display data of that city
// })
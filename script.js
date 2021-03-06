
const form = document.querySelector("form");
const starsignHeader = document.getElementById("starsign-header")
const description = document.getElementById("description")
const moodP = document.getElementById("mood")
const colourP = document.getElementById("colour")
const luckyTimeP = document.getElementById("lucky-time")
const luckyNumberP = document.getElementById("lucky-number")
const output = document.getElementById("output")
const giphy =document.getElementById("giphy");

// Twinkle twinkle

const starContainer = document.getElementById('star-container')

for (let i = 0; i < 100; i++) {
    const element = document.createElement('div')
    element.style.top=`${Math.random()*100}%`
    element.style.left=`${Math.random()*100}%`
    element.style.animation = `twinkle ${1+Math.random()*10}s ease-out infinite`
    starContainer.appendChild(element)
    element.setAttribute('class', 'star')
    }

// Return button    
function returnToMain() {
    output.style.animation = "fadeOut 1.5s ease-in-out"
    setTimeout(function(){
        output.style.animation = "fadeIn 1.5s ease-in-out"
        output.style.display = "none"
        giphy.removeChild(giphy.firstChild)
    },1500)
}

// Find starsign from Date of Birth user input
function starsign(dob) {
    const dobDay = Number(dob.split('-')[2])
    const dobMonth = Number(dob.split('-')[1])
    if ((dobDay >= 21 && dobMonth === 3) || (dobDay <= 19 && dobMonth === 4)) {
        return "aries"
    }
    if ((dobDay >= 20 && dobMonth === 4) || (dobDay <= 20 && dobMonth === 5)) {
        return "taurus"
    }
    if ((dobDay >= 21 && dobMonth === 5) || (dobDay <= 20 && dobMonth === 6)) {
        return "gemini"
    }
    if ((dobDay >= 21 && dobMonth === 6) || (dobDay <= 22 && dobMonth === 7)) {
        return "cancer"
    }
    if ((dobDay >= 23 && dobMonth === 7) || (dobDay <= 22 && dobMonth === 8)) {
        return "leo"
    }
    if ((dobDay >= 23 && dobMonth === 8) || (dobDay <= 22 && dobMonth === 9)) {
        return "virgo"
    }
    if ((dobDay >= 23 && dobMonth === 9) || (dobDay <= 22 && dobMonth === 10)) {
        return "libra"
    }
    if ((dobDay >= 23 && dobMonth === 10) || (dobDay <= 22 && dobMonth === 11)) {
        return "scorpio"
    }
    if ((dobDay >= 23 && dobMonth === 11) || (dobDay <= 21 && dobMonth === 12)) {
        return "sagittarius"
    }
    if ((dobDay >= 22 && dobMonth === 12) || (dobDay <= 19 && dobMonth === 1)) {
        return "capricorn"
    }
    if ((dobDay >= 20 && dobMonth === 1) || (dobDay <= 18 && dobMonth === 2)) {
        return "aquarius"
    }
    if ((dobDay >= 19 && dobMonth === 2) || (dobDay <= 20 && dobMonth === 3)) {
        return "pisces"
    }
}

// Fetch data from API
form.addEventListener("submit", (event) => {

    const formData = new FormData(form);
    const data = Object.fromEntries(formData)
    const sign = starsign(data.sign)
    const day = data.day
    // const mood = "grumpy"
    const URL = `https://aztro.sameerkumar.website/?sign=${sign}&day=${day}`;
    event.preventDefault();
fetch(URL, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: { "content-type": "application/json" },
})
.then(response => {
    if (!response.ok) throw new Error(response.status);
    return response.json()
})
.then(json => { 
    starsignHeader.innerHTML = `Hey there, ${sign.charAt(0).toUpperCase()+sign.slice(1)}!`
    description.innerHTML = `<b>${day.charAt(0).toUpperCase()+day.slice(1)} is looking like this:</b><br> ${json.description}`
    moodP.innerHTML = ` ${json.mood}`
    colourP.innerHTML = ` ${json.color}`
    colourP.style.color = `${json.color}`
    luckyTimeP.innerHTML = ` ${json.lucky_time}`
    luckyNumberP.innerHTML = ` ${json.lucky_number}`
    output.style.display = "block"
    gifapi(json.mood)
    })
    .catch((error) => console.error(error))
});


function gifapi(signMood){
    const URL2 = `https://api.giphy.com/v1/gifs/random?api_key=pduIuGlCw67hBvjSybp6vOMcpVHE4xGu&tag=${signMood}&limit=1`;
    fetch(URL2, {
            method: 'GET',
            headers: {"content-type": "application/json"}, 
         })
         .then(response => {
             if (!response.ok) throw new Error(response.status);
             return response.json()
         })
         .then(response => {
             console.dir(response)
             console.log(response.data.image_original_url) //this is the gif url we need to display!!!

             var img = document.createElement("img");
             img.style.height= `200px`
             console.log(img)
             img.src = response.data.image_original_url;
             console.log(img.src)
             giphy.appendChild(img)
        })
}




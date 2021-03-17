
const form = document.querySelector("form");


form.addEventListener("submit", (event) => {
    const formData = new FormData(form);
    const data = Object.fromEntries(formData)
    const sign = data.sign
    const day = data.day
    const URL = `https://aztro.sameerkumar.website/?sign=${sign}&day=${day}`;
//    const URL2 = ``
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
    document.getElementById("testp").innerHTML = `Your lucky time is ${json.lucky_time}, and your lucky number is ${json.lucky_number}`
    console.log(json.lucky_time);
    console.log(json.lucky_number);
    console.log(json.mood);
    console.log(json.color);
    console.log(json.compatibility);
    console.log(json.description);
    })
    .catch((error) => console.error(error));
// Second fetch will go here
});
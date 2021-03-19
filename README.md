# Week 2 - API Project
![](https://media.giphy.com/media/5fBH6zsQ5HVp73dNB9m/giphy.gif)

---

**Team:** 
- Craig (User Advocate) 
- Amy (Facilitator)
- Safia (Quality)
- Michael (Deployment)


---

<img src="https://i.imgur.com/r7meWHV.png" style="height: 300px;">

---

<img src="https://media.giphy.com/media/3gNtpuuBVDnpzIaZTe/giphy.gif" style="height: 300px;"> **Who we are**
<!-- .element: class="fragment" data-fragment-index="0" -->

**What we chose** <img src="https://media.giphy.com/media/l4FWLWWYBgape4QDY1/giphy.gif" style="height: 300px;">
<!-- .element: class="fragment" data-fragment-index="2" -->

---

<img src="https://media.giphy.com/media/i3aFcQfGLGtyLNzdwH/giphy.gif" style="height: 300px;"> **Why we chose it**
<!-- .element: class="fragment" data-fragment-index="0" -->

**How we got there** <img src="https://media.giphy.com/media/8F9hm3NlQ8zVpH8wzC/giphy.gif" style="height: 300px;">
<!-- .element: class="fragment" data-fragment-index="1" -->

---

```javascript=
function starsign(dob) {
    const dobDay = Number(dob.split('-')[2])
    const dobMonth = Number(dob.split('-')[1])
    if ((dobDay >= 21 && dobMonth === 3) || (dobDay <= 19 && dobMonth === 4)) {
        return "aries"
    }
```

---

```javascript=
form.addEventListener("submit", (event) => {

    const formData = new FormData(form);
    const data = Object.fromEntries(formData)
    const sign = starsign(data.sign)
    const day = data.day
    const URL = `https://aztro.sameerkumar.website/?sign=${sign}&day=${day}`;
    event.preventDefault();
```

---

```javascript=
.then(json => { 
    starsignHeader.innerHTML = `Hey there, ${sign.charAt(0).toUpperCase()+sign.slice(1)}!`
    description.innerHTML = `<b>${day.charAt(0).toUpperCase()+day.slice(1)} is looking like this:</b><br> ${json.description}`
    moodP.innerHTML = ` ${json.mood}`
    colourP.innerHTML = ` ${json.color}`
    colourP.style.color = `${json.color}`
    luckyTimeP.innerHTML = ` ${json.lucky_time}`
    luckyNumberP.innerHTML = ` ${json.lucky_number}`
```

---

<img src="https://media.giphy.com/media/1oC7ENXZ3GOHKS0lEA/giphy.gif" style="height: 500px;">

**YOU ARE ENJOYING THIS PRESENTATION**

---
<!-- 
### ==User Journey== 

We decided to create a website for people who are interested in astrology and astronomy. Our company name **==astrologia de cada dia==** in spanish means astrology every day. 

 The user has to input their date of birth and day of reading and receive a horoscope reading. From the data they receive a giphy image will be generated. For example, if their mood is happy, they will see a gif related to that theme.
 -->



<!-- ### ==Core Stories==
As a user, I want to:

- [x] See an interesting mashup of different data
    - [x] Text
    - [x] images
- [x] Input information to change the displayed result
    - [x] input date of birth
    - [x] input day you want the horoscope reading for
- [x] View the app on all of my devices
 -->

<!-- 
**Stretch stories**
- [ ] As an impatient user, I want to see some indication that data is loading
- [ ] As a confused user, I want to be told when something goes wrong -->


<!-- ### ==API 1==

The user is to input data which we will use to access the first api and use the response to access the second api. 

We searched for Horoscope API and came across [Rapid API](https://rapidapi.com/sameer.kumar/api/aztro/endpoints) where we found [aztro](https://github.com/sameerkumar18/aztro) (the astrology API). It had great documentation and information on how to implement the api in different languages including ES6.  -->

---

**==ECMAScript (ES6)==**
```javascript=
const URL = 'https://aztro.sameerkumar.website/?sign=aries&day=today';
fetch(URL, {
    method: 'POST'
})
.then(response => response.json())
.then(json => {
    const date = json.current_date;
    console.log(date);
});
```

---

```javascript=
.then(json => { 
    starsignHeader.innerHTML = `Hey there, ${sign.charAt(0).toUpperCase()+sign.slice(1)}!`
    description.innerHTML = `<b>${day.charAt(0).toUpperCase()+day.slice(1)} is looking like this:</b><br> ${json.description}`
    moodP.innerHTML = ` ${json.mood}`
    colourP.innerHTML = ` ${json.color}`
    colourP.style.color = `${json.color}`
    luckyTimeP.innerHTML = ` ${json.lucky_time}`
    luckyNumberP.innerHTML = ` ${json.lucky_number}`
```

---

### ==API 2==

We had lots of trouble accessing our chosen second API [](https://rapidapi.com/astronomyapi-astronomyapi-default/api/astronomy) as it required a URL. The github pages URL was not acceptable, so we tried using a custom domain. That didn't work and we had trouble reverting that change (from custom domain to github url). Finally we decided to use [giphy API](https://developers.giphy.com/) to display an image. We felt we had a lot of text on our response and that an image would be a better fit.

---

We also had trouble adding our second API after we'd chosen giphy, as we weren't sure on the syntax of the URL and kept getting a 403 error. Eventually we used Postman which made us realise that we were using the wrong request method! 

---

### ==Other issues:==

- The responsivity on small mobile screens could be better
- We could have made the CSS sections more clearly defined
- We could have communicated better around what we were working on before   dipping out into interviews
- We had issues with deleting a previous commit... (more on this in the next slide)
- We didn't use the points system properly or effectively 

___

### ==Time Travel:==

Because of this last point, we learned the hard way that you should not try to 'go back in time' once things go wrong in Git/GitHub! It's often best just to commit over your previous commits rather than to remove things.

![](https://media.giphy.com/media/JDKxRN0Bvmm2c/source.gif)

---

### ==Learnings== :tada:

We had some issues getting stuck in the Vim editor when we did a `git merge`.

<!-- This happens because Git needs you to write a commit message, so it opens up your default text editor (which is Vim if you haven't changed it). Vim is very old and kind of unintuitive (and hard to escape 😅 ), so you should probably  -->

Change the default editor to your usual one (e.g. VS Code). 
 - editing your terminal config file (probably ~/.zshrc, ~/.bashrc or ~/.bash_profile) 
 - to add this line:
    `export EDITOR="code -w"`

<!-- [Please enter a commit message to explain why this merge is necessary,
especially if it merges an updated upstream into a topic branch.](https://stackoverflow.com/questions/19085807/please-enter-a-commit-message-to-explain-why-this-merge-is-necessary-especially) -->

---

**Or**

1. press `i` (i for insert)
2. write your merge message
3. press `esc` (escape)
4. write `:wq` (write & quit)
5. then press **enter**

---

**==To reverse custom domain==**

We had to revert custom domain changes by deleting  the `CNAME` file. This file was in the project folder on our local repos.

---

**==Scope==**

We were trying to access the gif url and add it to a div in the response box the user would view, but we could not get it to work. It was because we were adding our code outside of the curly brackets and where the was not defined.

---

```javascript
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
             console.log(response.data.image_original_url) 
             var img = document.createElement("img");
             img.style.height= `200px`
             console.log(img)
             img.src = response.data.image_original_url;
             console.log(img.src)
             giphy.appendChild(img)
        })  ** we added it here by mistake **
    }
```

<!-- Always check to see that the code is being implemented in the correct place before you start debugging to figure out why its not working. -->

---

### ==Thank you for listening!==

![](https://media.giphy.com/media/3ohrywroItSL169pg4/giphy.gif)
# Week-2 API Project
**Team:** - 
Craig (User Advocate), Amy (Facilitator), Safia (Quality), Micheal (Deployment)

Blow 'em away

---

**Core Stories **
As a user, I want to:

[x] See an interesting mashup of different data
    [x] text
    [x] images
[x] Input information to change the displayed result
    [x] input date of birth
    [x] input day you want the horoscope reading for
[x] View the app on all of my devices


**Stretch stories **
[] As an impatient user, I want to see some indication that data is loading
[] As a confused user, I want to be told when something goes wrong

---

## User Journey 

We decided to create a website for people who are interested in astrology and astronomy. Our company name **astrologia de cada dia** in spanish means astrology every day. 

 The user has to input their date of birth and day of reading and receive a horoscope reading. From the data they receive a giphy image will be generated. For example, if their mood is happy, they will see a gif related to that theme.


---

## API 1

The user is to input data which we will use to access the first api and use the response to access the second api. 

We searched for Horoscope API and came across [Rapid API](https://rapidapi.com/sameer.kumar/api/aztro/endpoints) where we found [aztro](https://github.com/sameerkumar18/aztro) (the astrology API). It had great documentation and information on how to implement the api in different languages including ES6. 

---

## API 2

We had lots of trouble accessing our chosen second API [](https://rapidapi.com/astronomyapi-astronomyapi-default/api/astronomy) as it required a URL. The github pages URL was not acceptable, so we tried using a custom domain. That didn't work and we had trouble reverting that change (from custom domain to github url). Finally we decided to use [giphy API](https://developers.giphy.com/) to display an image. We felt we had a lot of text on our response and that an image would be a better fit.

---

## Learnings :tada:

We kept getting this message in the terminal when `git merge main`
[Please enter a commit message to explain why this merge is necessary,
especially if it merges an updated upstream into a topic branch.](https://stackoverflow.com/questions/19085807/please-enter-a-commit-message-to-explain-why-this-merge-is-necessary-especially)

To solve this:

1. press `i` (i for insert)
2. write your merge message
3. press `esc` (escape)
4. write `:wq` (write & quit)
5. then press **enter**

**To reverse custom domain**
We had to revert custom domain changes by delete the `CNAME` file that contained these changes. 

**Scope**

We were trying to access the gif url and add it to a div in the response box the user would view, but we could not get it to work. It was because we were adding our code out side the curly brackets and where the `response.data.image_original_url` did not exist. Always check to see that the code is being implemented in the correct place before you start debugging to figure out why its not working.

---
/***** Deliverable 1 *****/
const header = document.querySelector("h1#header")
console.log("Here's your header:", header)


/***** Deliverable 2 *****/
header.style.color = 'red'


/***** Deliverable 3 *****/
// console.log('This is what the traveler object looks like: ', traveler)


//1. find the element we need. Div w/ profile as id! Because it has all the data

const profile = document.querySelector('div#profile')
const img = profile.querySelector('img')

//2. update the element found above!
img.src = traveler.photo
img.alt = traveler.name


const h2 = profile.querySelector('h2')
h2.textContent = traveler.name

const em = profile.querySelector('em')
em.textContent = traveler.nickname

// Steps = FIND & UPDT



/***** Deliverable 4 *****/

// look for ul with the id of animals (ul#animals)
//1. be able to iterate through that array
//2. create an outer li

traveler.animalSightings.forEach(function(animalSighting){


    const li = document.createElement('li')
    li.dataset.id = animalSighting.id
    li.innerHTML = `<p>${animalSighting.description}</p>
    <img src="${animalSighting.photo}" alt="${animalSighting.species}"/>
    <a href="${animalSighting.link}" target="_blank">Here's a video about the ${animalSighting.species} species!</a>
  `
  
  // 3. add it to the DOM!
  const ul = document.querySelector('ul#animals')
  ul.append(li)
})









/***** Deliverable 5 *****/


const liToRemove = document.querySelector('[data-id="3"]')
liToRemove.remove()
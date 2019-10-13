console.log('%c HI', 'color: firebrick')

const breedUrl = 'https://dog.ceo/api/breeds/list/all'


function fetchImages() {
    fetch('https://dog.ceo/api/breeds/image/random/4')
    .then(resp => resp.json())
    .then(json => renderImages(json))
}

function renderImages(json){
    container = document.getElementById('dog-image-container');
    json['message'].forEach(image => {
        img = document.createElement('img')
        img.src = image
        container.appendChild(img)
    });
}

document.addEventListener('DOMContentLoaded', function() {
    fetchImages()
    fetchBreeds()
    
    // changeColor()
    const dropdown = document.getElementById('breed-dropdown')

    dropdown.addEventListener('click', function(){
        let dropdownValue = document.getElementById('breed-dropdown').value  
        let list = document.querySelector('ul')
            let items = list.getElementsByTagName('li')
            for (let i = 0; i < items.length; ++i){  
                if(!items[i].innerText.startsWith(dropdownValue)){
                    items[i].style.display = 'none';
                } else {
                    items[i].style.display = 'block';
                }
            }
    })
})

function fetchBreeds() {
    fetch(breedUrl)
    .then(resp => resp.json())
    .then(json => renderBreeds(Object.keys(json['message'])))
    // return json['message']
}

// let dogs 

// function fetchBreedsWithoutRender() {
//     fetch(breedUrl)
//     .then(resp => resp.json())
//     .then(json => {
//          dogs = json.message
//         let filteredDogs = dogs.filter(dog => { letter == dog[0] })....
//     })
// }

// fetchBreedsWithoutRender()

function renderBreeds(json){
    list = document.getElementById('dog-breeds');
    json.forEach(breed =>{
        li = document.createElement('li')
        li.innerText = breed
        list.appendChild(li)
        li.addEventListener('click', function() {
            // console.log(li)
            this.style.color = 'firebrick'
        })
    });
}

// dog[0]

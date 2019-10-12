console.log('%c HI', 'color: firebrick')

const breedUrl = 'https://dog.ceo/api/breeds/list/all'
dropdown = document.getElementById('breed-dropdown')

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
  })

// dropdown.addEventListener('click', function(){
//     let dropdownValue = document.getElementById('breed-dropdown').value  
//     list = document.querySelector('ul')
//     if (dropdownValue){
//         while (list.firstChild) {
//             list.removeChild(list.firstChild);
//           }
//     }
// })

function fetchBreeds() {
    fetch(breedUrl)
    .then(resp => resp.json())
    .then(json => renderBreeds(Object.keys(json['message'])))
}

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


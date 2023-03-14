const images = [
    {
        image: 'img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morales',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];

const actualimgEL = document.getElementById("actual-img");
const ImgtitleEL = document.getElementById("Img-title");
const ImgDescriptionEL = document.getElementById("Img-description");
const arrowupEL = document.getElementById("arrow-up");
const arrowdownEL = document.getElementById("arrow-down");

let CarouselIndex = 0


arrowdownEL.addEventListener("click", () => {
    
    CarouselIndex++;

    Carousel(images[CarouselIndex]);
})

arrowupEL.addEventListener("click", () => {
    
    CarouselIndex--;

    Carousel(images[CarouselIndex]);
})



Carousel(images[CarouselIndex])

function Carousel(CarouselObject) {
    
    actualimgEL.src = CarouselObject.image;

    ImgtitleEL.innerText = CarouselObject.title;

    ImgDescriptionEL.innerText = CarouselObject.text;
}


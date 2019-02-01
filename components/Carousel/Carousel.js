class Carousel {
    constructor(carouselConstrctr) {
        this.carouselConstrctr = carouselConstrctr;
        // console.log(this.carouselConstrctr);
        this.leftButton = document.querySelector('.left-button');
        this.rightButton = document.querySelector('.right-button');
        this.images = document.querySelectorAll('.carousel-img')
        // console.log(this.images);

        this.index = 0;

        this.leftButton.addEventListener('click', () => this.cycleLeft());
        this.rightButton.addEventListener('click', () => this.cycleRight());
        this.images[0].style.display = 'block';
    }
    cycleLeft() {
        this.images[this.index].style.display = 'none';
        this.index === 0 ? this.index = this.images.length-1 : this.index--;
        this.images[this.index].style.display = 'block';
        // console.log(this.index);
    }

    cycleRight() {
        this.images[this.index].style.display = 'none';
        this.index === this.images.length-1 ? this.index = 0 : this.index++;
        this.images[this.index].style.display = 'block';

    }

}

// let carousel = document.querySelector();

/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the laft and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this compoennt. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

let carouselList = document.querySelectorAll('.carousel')
carouselList.forEach( eachImage => new Carousel(eachImage));
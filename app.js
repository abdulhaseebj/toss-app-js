const img = document.querySelector('img');
const p = document.querySelector('p');
function masjid() {
    const randomNumber = Math.ceil(Math.random() * 2)
    // console.log(randomNumber);
    if (randomNumber === 1) {
        p.innerHTML = 'Hurrah! You won the toss';
        img.src = './assets/download.jpeg'

    } else {
        p.innerHTML = 'Sorry! You loss the toss';
        img.src = './assets/download (1).jpeg'
    }

}
function chand() {
    const randomNumber = Math.ceil(Math.random() * 2)
    // console.log(randomNumber);
    if (randomNumber === 1) {
        p.innerHTML = 'Sorry! You loss the toss';
        img.src = './assets/download.jpeg'
    } else {
        p.innerHTML = 'Hurrah! You won the toss';
        img.src = './assets/download (1).jpeg'
    }

}


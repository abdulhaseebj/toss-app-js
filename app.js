// const img = document.querySelector('.coin-img');
const p = document.querySelector('.pera');
const choice = document.querySelector('.choice');
const coin = document.querySelector('.coin');
function heads() {
    const randomNumber = Math.ceil(Math.random() * 2)
    // console.log(randomNumber);
    if (randomNumber === 1) {
        p.innerHTML = 'You won the toss';
        choice.innerHTML = 'You choose Head'
        coin.innerHTML = '<img class="coin-img" src="./assets/head.png" alt="">'

        

    } else {
        p.style.color = 'Red'
        p.innerHTML = 'You loss the toss';
        choice.innerHTML = 'You choose Head'
        coin.innerHTML = '<img class="coin-img" src="./assets/tails.png" alt="">'
    }

}
function tail() {
    const randomNumber = Math.ceil(Math.random() * 2)
    // console.log(randomNumber);
    if (randomNumber === 1) {
        p.style.color = 'Red'
        p.innerHTML = 'You loss the toss';
        choice.innerHTML = 'You choose Tail'
        coin.innerHTML = '<img class="coin-img" src="./assets/head.png" alt="">'

    } else {
        p.innerHTML = 'You won the toss';
        choice.innerHTML = 'You choose Tail'
        coin.innerHTML = '<img class="coin-img" src="./assets/tails.png" alt="">'

        
    }

}


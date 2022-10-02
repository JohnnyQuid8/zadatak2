// const card1 = document.querySelector(".col-1-of-4");
// const card2 = document.querySelector(".col-1-of-4");
// const card3 = document.querySelector(".col-1-of-4");
// const card4 = document.querySelector(".col-1-of-4");
// const cards = [card1, card2, card3, card4];
// console.log(cards)
// for (var i = 0; i < cards.length; i++) {
//     cards[i].addEventListener('click', (e) => {
//         e.target.classList.add('one-click')
//     });
// }

const cardone = document.querySelector('.first');
const cardtwo = document.querySelector('.second');
const cardthree = document.querySelector('.third');
const cardfour = document.querySelector('.fourth');
// const cards = document.querySelectorAll(".col-1-of-4");
const cards = [cardone, cardtwo, cardthree, cardfour];
const button = document.querySelector(".button");
const img5 = document.querySelector("fifth");
const forinput = document.querySelector('.for-input');
// const imgupload = document.getElementById('upload');
const maindiv = document.querySelector('.wrapDivs');
const buttonColor = document.querySelector('.button-color');
// const niz = [];
// window.addEventListener('load', () => {
console.log(cards)
// function changeColor() {
//     cards.forEach((card, index) => {

//         setTimeout(() => {
//             card.classList.add('green')
//             setTimeout(() => {
//                 card.classList.remove('green')
//             }, 2000)
//         }, 2000)
//     }
//     )
// }









// }
// )

function changeColor() {
    for (let i = 0; i < cards.length; i++) {

        setTimeout(() => {
            cards[i].classList.add('green');
            setTimeout(() => {
                cards[i].classList.remove('green');

            }, 1000)
        }, 2000)



    }
}
buttonColor.addEventListener('click', changeColor);

// cards.forEach((value) => {
//     setTimeout(() => {
//         value.classList.add('green')
//     }, 2000)
// })


cards.forEach(card => {
    card.addEventListener("dblclick", (e) => {
        e.target.classList.add('dbl-click')
    })
})
cards.forEach(card => {
    card.addEventListener("click", (e) => {
        e.target.classList.add('one-click')
    })
})
// const label = document.getElementById('label');

const input = document.createElement('input');
input.type = 'file';
input.text = 'upload';
input.id = 'upload';

console.log(input)
// forinput.appendChild(label);
forinput.appendChild(input);






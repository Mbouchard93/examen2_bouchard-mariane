import '../style/main.css'

/**
 * @param {number} index 
 * @param {string} pxSm 
 * @param {string} pxLg 
 */
class Card {
    constructor(index, pxSm, pxLg) {
        this.index = index;
        this.pxSm = pxSm;
        this.pxLg = pxLg;
    }
    /**
     * 
     * @returns {HTMLElement} 
     */
    toHtml() {
        const div = document.createElement('div')
        const index = document.createElement('span');
        const pxSm = document.createElement('span');
        const pxLg = document.createElement('span');

        index.textContent = this.index;
        pxSm.textContent = this.pxSm;
        pxLg.textContent = this.pxLg;
        div.className = 'bg-black w-[200px] h-[200px] lg:w-[300px] lg:h-[300px] rounded-lg text-white flex items-center justify-center flex-col card text-lg font-semibold'
        pxSm.className = 'lg:hidden'
        pxLg.className = 'hidden lg:block'

        div.appendChild(index);
        div.appendChild(pxSm);
        div.appendChild(pxLg);

        return div
    }
}

/**
 * 
 * @type {Card[]}
 */
const cards = [
    new Card(1, '200px / 200px', '300px / 300px'),
    new Card(2, '200px / 200px', '300px / 300px'),
    new Card(3, '200px / 200px', '300px / 300px'),
    new Card(4, '200px / 200px', '300px / 300px'),
    new Card(5, '200px / 200px', '300px / 300px'),
    new Card(6, '200px / 200px', '300px / 300px'),
    new Card(7, '200px / 200px', '300px / 300px'),
    new Card(8, '200px / 200px', '300px / 300px'),
    new Card(9, '200px / 200px', '300px / 300px'),
]

/**
 *
 * @type {HTMLElement}
 */
const container = document.querySelector('.container')

cards.forEach(card => {
    container.appendChild(card.toHtml());
});

/**
 * 
 * @type {HTMLElement}
 */
const btn = document.querySelector('button');
/**
 * 
 * @type {NodeList}
 */
const cardsIndex = document.querySelectorAll('.card');
/**
 * 
 * @type {HTMLElement}
 */
const bg = document.querySelector('body');

btn.addEventListener('click', () => {
    btn.classList.toggle('bg-black');
    btn.classList.toggle('bg-pink-500');
    bg.classList.toggle('bg-teal-100');
    bg.classList.toggle('bg-black');
    cardsIndex.forEach(cardIndex => {
        cardIndex.classList.toggle('bg-black');
        cardIndex.classList.toggle('bg-pink-500')
    });

})
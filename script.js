let counter = 0;

const btns = document.querySelectorAll('button');
const value = document.querySelector('#value')

console.log(btns);

btns.forEach(btn => {
    console.log(btn);
    btn.addEventListener('click', (e) => {
        console.log(e.currentTarget.classList);
        const style = e.currentTarget.classList;
        if (style.contains('decrease')) {
            counter--;
        } else if (style.contains('increase')) {
            counter++;
        } else {
            counter = 0;
        }

        if (counter < 0) {
            value.style.color = 'red';
        } 
        if (counter > 0) {
            value.style.color = 'green';
        } 
        if (counter === 0){
            value.style.color = 'grey';
        }

        value.textContent = counter;

    });
});
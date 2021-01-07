import css from'./footer.css';
import { blue, makeColorStyle } from './button-styles';

console.log(css);

const footer = document.createElement('footer');
const top = document.createElement('div');
top.innerText = 'This is the top part of the footer!';
top.style = blue;
const bottom = document.createElement('div');
bottom.innerText = 'This is the bottom part of the footer!';
bottom.style = makeColorStyle('green');
footer.appendChild(top);
footer.appendChild(bottom);

export { top, bottom, footer };

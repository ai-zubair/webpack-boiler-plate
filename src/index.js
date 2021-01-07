import nav from './nav';
import { footer } from './footer';
import makeButton from './button';
import { makeColorStyle } from './button-styles';
import imageData from './wl-logo.jpg';
import makeImage from './image';
// import { sayMyName } from './say-my-name.ts';

document.body.appendChild(makeButton('This is a button'));
document.body.appendChild(footer);
document.body.appendChild(makeImage(imageData));
console.log(sayMyName('Zubair'));

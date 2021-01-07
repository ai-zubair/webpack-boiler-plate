// take a str, the button label and return a element
import './button.css';
import { red } from './button-styles';

/**
 *
 * @param {string} buttonName
 * @returns {Element}
 */
const makeButton = (buttonName) => {
  const button = document.createElement('button');
  button.innerText = buttonName;
  button.style = red;
  return button;
};

export default makeButton;

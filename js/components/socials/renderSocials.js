import { isValidInput } from './isValidInput.js';
import { isValidSocialItem } from './isValidSocialItem.js';

function renderSocials(selector, data) {
    // input validation
    if (!isValidInput(selector, data)) return false;

    const DOM = document.querySelector(selector);
    if (!DOM) return false;

    // logic 
    let newHTML = '';

    for (let i = 0; i < data.length; i++) {
        const item = data[i];

        if (!isValidSocialItem(item)) continue;

        newHTML += `<a href="${item.href}" target="_blank" class="fa fa-${item.icon}" ></a>`;
    }

    // post logic validation
    if (newHTML === '') return false;

    // return result
    DOM.innerHTML = newHTML;

    return true;
}

export { renderSocials }
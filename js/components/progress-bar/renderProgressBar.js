import { isValidInput } from './isValidInput.js';
import { isValidProgressBar } from './isValidProgressBar.js';

function renderProgressBar(selector, data) {
    // input validation 
    if (!isValidInput(selector, data)) {
        return false;
    }

    // tikriname, kad DOM nera null
    // null - pasakau, ka grazinti, bet ne tai grazina, o undefined - kai nieko nepasakau, ka grazinti
    // cia tikriname, o ne gale, kad iskart butu aisku, ar yra tinkama vieta, kur reiks padeti duomenis
    // to sum up, kas cia vyksta: kintamsis DOM yra = iesko HTML faile (document) elemento, kuris atitinka paklausima, siuo atveju - selector'iu (kuris main.js yra .left +beje+ su if tikrinama, kad jeigu nerado DOM, tai grazina false ir funkcija yra nebetesiama)
    const DOM = document.querySelector(selector);
    if (!DOM) return false;

    // generuojame turini
    let HTML = '';

    for (let i = 0; i < data.length; i++) {

        // cia bar - tai progress bar sutrumpinimas
        const bar = data[i];

        if (!isValidProgressBar(bar)) {
            continue;
            // continue - nes ciklo dalis; false butu tik rezultatas
        }

        HTML += `<div class="progress-bar">
                    <div class="top">
                        <div class="label">${bar.title}</div>
                        <div class="value">${bar.value}%</div>
                    </div>
                    <div class="bottom">
                        <div class="progress" style="width: ${bar.value}%;">
                            <div class="bar"></div>
                        </div>
                    </div>
                </div>`;
    }

        // jeigu kai praejo cikla ir nerado tinkamu duomenu, tai vyksta sitas
        // post logic validation
    if (HTML === '') {
        console.log('Nerasta tinkamu duomenu');
        return false;
    }

    // randame vieta, kur reikes padeti turini


//jau virsuje patikrinome, kad DOM nebutu tuscias ir tinkamas

    DOM.innerHTML += HTML;

    // graziname true, kad zinoti, kad funkcija suveike gerai, bet nera butina, kitu atveju grazintu undefined
    return true;

}

export { renderProgressBar }
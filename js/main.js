import { Clock } from './components/clock/Clock.js'

import { progressBarData } from './data/progressBarData.js';
import { renderProgressBar } from "./components/progress-bar/renderProgressBar.js";

import { socialsData } from './data/socialsData.js';
import { renderSocials } from './components/socials/renderSocials.js';

const clock = new Clock('.hero', '.clock');
if (clock.isValidSelector) {
    if (!clock.arBusMetines()) {
        clock.atnaujintiInformacija();
        clock.start();
    }
}

renderProgressBar('.left', progressBarData);

renderSocials('footer > .row-long' ,socialsData);

/*
sinakse:
export { suma };
import { } from './js/......';

+body'je
<script src="./js/main.js" type="module"></script>

data - kintamieji
components - logika
*/

// pirma import data ir tik tada functions!
import { Clock } from './components/clock/Clock.js'

import { progressBarData } from './data/progressBarData.js';
import { renderProgressBar } from "./components/progress-bar/renderProgressBar.js";

import { socialsData } from './data/socialsData.js';
import { renderSocials } from './components/socials/renderSocials.js';

import { formValidation } from './components/form/formValidation.js';

const clock = new Clock('.hero .clock', {
    month: 1,
    day: 1,
    hour: 0,
    minutes: 0,
    seconds: 0
});
clock.init();

renderProgressBar('.left', progressBarData);

renderSocials('footer > .row-long' ,socialsData);

formValidation();

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
import { progressBarData } from './data/progressBarData.js';
import { renderProgressBar } from "./components/progress-bar/renderProgressBar.js";

import { socialsData } from './data/socialsData.js';
import { renderSocials } from './components/socials/renderSocials.js';

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
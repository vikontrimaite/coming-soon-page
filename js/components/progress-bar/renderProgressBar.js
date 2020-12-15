function renderProgressBar(selector, data) {
    // generuojame turini
    let HTML = '';
    
    for (let i = 0; i < data.length; i++) {
        const bar = data[i];
        HTML += `<div class="progress-bar">
        <div class="top">
            <div class="label">${bar.title}</div>
            <div class="value">${bar.value}</div>
        </div>
        <div class="bottom">
            <div class="progress" style="width: 90%;">
                <div class="bar"></div>
            </div>
        </div>
        </div>`;
    }
    console.log(HTML);

    // rasti vieta, kur padeti turinti
    const D0M = document.querySelector(selector);
     
    // atnaujinti turini
    DOM.innerHTML += HTML;
}

export { renderProgressBar };

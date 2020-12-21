class Clock {
    constructor() {
        // 2021-04-29 10:00
        this.now = Date.now();

        this.deadline = {
            year: (new Date()).getFullYear(),
            month: 4 + 1,
            day: 29,
            hour: 10,
            minutes: 0,
            seconds: 0
        }
        // this.dataString = '2020-11-26 10:00:00'
        this.dataString = this.createDataString();
        this.DOM = null;
        this.DOMdays = null;
        this.DOMhour = null;
        this.DOMminutes = null;
        this.DOMseconds = null;
    }
    createDataString() {
        // this.dataString = `${this.deadline.year}-${this.deadline.month}-${this.deadline.day} ${this.deadline.hour}${this.deadline.minutes}${this.deadline.seconds}`;

        // kitas variantas - tokiu budu is kiekvieno objekto dalyko padaro po nauja kintamaji pvz const year, const month ir t.t.
        const {year, month, day, hour, minutes, seconds} = this.deadline;
        return `${year}-${month}-${day} ${hour}:${minutes}:${seconds}`;
    }

    arBusMetines() {
        const jubiliejausMiliseconds = (new Date(this.dateString)).getTime();
        return this.now < jubiliejausMiliseconds;
    }

    atnaujintiInformacija() {
        this.deadline.year++;
        this.dateString = this.createDataString();
    }

    isValidSelector() {
        const DOM = document.querySelector(this.selector);
        if (!DOM) {
            console.log('Error: bad selector');
            return false;
        }
        this.DOM = DOM;
        return true;
    }

    findClockValueElements() {
        const value = this.DOM.querySelectorsAll('.value');
        this.DOMdays = value[0];
        this.DOMhour = value[1];
        this.DOMminutes = value[2];
        this.DOMseconds = value[3];
    }

}

export { Clock }

function isValidProgressBar(bar) {
            // bar validation
            //typeof tikrina, kad bar butu objektas {}, o Array.isArray - kad nebutu array'jus []
        if (typeof bar !== 'object' || bar === null || Array.isArray(bar)) {
            return false;
        }

        // sitie du iesko, ar bar'as turi title ar value + ar bar.title nera tuscias
        if (!bar.title || typeof bar.title !== 'string') {
            return false;
        }

        // 0 tinka, turi buti skaicius nuo 0 iki 100
        if (typeof bar.value !== 'number' || bar.value < 0 || bar.value > 100) {
            return false;
        }
return true;
}

export { isValidProgressBar }
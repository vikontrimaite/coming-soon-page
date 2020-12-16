function isValidProgressBar(bar) {
            // bar validate
        if (typeof bar !== 'object' || bar === null || Array.isArray(bar)) {
            return false;
        }

        // sitie du iesko, ar bar'as turi title ar value + ar bar.title nera tuscias
        if (!bar.title || typeof bar.title !== 'string') {
            return false;
        }

        // jeigu 0, tinka, bet nerodo, taigi
        if (typeof bar.value !== 'number' || bar.value < 0 || bar.value > 100) {
            return false;
        }
return true;
}

export { isValidProgressBar }
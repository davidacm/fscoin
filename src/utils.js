export const tLocal = {
    /**
     * get the value from the local storage. The value will be parsed before return.
     * the default value, if given, won't be parsed.
     * @param key: the key to get from the local storage.
     * @param defaultValue: an optional value to be returned if the key is not found.
     * @returns: the value of the key if exist. Default value or null otherwise.
     */
    get(key, defaultValue) {
        let v = localStorage.getItem(key);
        return v !== null ? JSON.parse(v) : defaultValue ? defaultValue : v;
    },
    /**
     *
     * @param key: the key to asign the value.
     * @param value: an object to store. JSON.stringify will be aplied to this object.
     * @returns: true if all is OK.
     */
    set(key, value) {
        localStorage.setItem(key, JSON.stringify(value));
        return true;
    },
    remove(key) {
        localStorage.removeItem(key);
    }
};

// generates an unique id (consecutive number) to use as a ID. Just a temporal solution to do some tests.
export const uuid = {
    counter: 0,
    // tLocal.get('count', 0) as number,
    getId() {
        // tLocal.set("count", ++this.counter)
        ++this.counter;
        return String(this.counter);
    }
};

const beepState = {
    audioContext: undefined,
    osc: undefined,
    waitToBreak: 0,
    isRunning: false
};

function startAudioContext() {
    if (!beepState.audioContext)
        beepState.audioContext = new AudioContext();
}

/**
 * produces a beep tone with a sine wave in the browser.
 * @param frequency: the freq of the wave. default 440.
 * @param duration: duration in ms. default is 100.
 * @param volume: the volume, default is 1. Don't use very high values or you can get distorted sounds.
 */
export function beep(frequency = 440, duration = 100, volume = 1) {
    var _a;
    startAudioContext();
    if (!beepState.audioContext)
        return;
    if (beepState.osc)
        beepState.osc.stop(beepState.audioContext.currentTime);
    beepState.osc = (_a = beepState.audioContext) === null || _a === void 0 ? void 0 : _a.createOscillator();
    let [osc, audio] = [beepState.osc, beepState.audioContext];
    let g = audio.createGain();
    osc.connect(g);
    osc.frequency.value = frequency;
    osc.type = "sine";
    g.connect(audio.destination);
    g.gain.value = volume;
    osc.start(audio.currentTime);
    beepState.isRunning = true;
    osc.stop(audio.currentTime + duration * 0.001);
    osc.onended = () => beepState.isRunning = false;
}

const WAIT_TIME = 30;
/**
 * for debug purposes. If a beep is running, this will wait WAIT_TIME ms more from the last beep to interrupt the current beep. This will allow to hear the differences between events.
 * WAIT_TIME is set to 30 ms, change it to your needs.
 * */
export function beepSlower(frequency = 440, duration = 100, volume = 1) {
    if (beepState.waitToBreak < 0)
        beepState.waitToBreak = 0;
    if (beepState.isRunning) {
        beepState.waitToBreak += WAIT_TIME;
        setTimeout(() => {
            beep(frequency, duration, volume);
            beepState.waitToBreak -= WAIT_TIME;
        }, beepState.waitToBreak);
    }
    else
        beep(frequency, duration, volume);
}

const ARRAY_CREATORS = {
    8: Uint8Array,
    16: Uint16Array,
    32: Uint32Array
};

export function randomIntegers(start, end, quant) {
    if (start > end) {
        [start, end] = [end, start];
    }
    const totalRange = end - start + 1;
    const nBytes = Math.ceil(Math.log(totalRange) / Math.LN2);
    let bytes = -1;
    for (let k in ARRAY_CREATORS) {
        if (parseInt(k) - nBytes >= 0) {
            bytes = parseInt(k);
            break;
        }
    }
    if (!(bytes in ARRAY_CREATORS))
        throw Error("Unable to get the correct bytes for the required random range");
    const tmp = new ARRAY_CREATORS[bytes](quant);
    window.crypto.getRandomValues(tmp);
    const maxRange = Math.pow(2, bytes) - 1;
    return tmp.map(n => totalRange / maxRange * n + start);
}


export function randint(start, end) {
    return randomIntegers(start, end, 1)[0];
}

export function choose() {
    const l = randint(1, 1023);
    const a = {0:0, 1:0};
    for (let i = 0; i<= l; ++i)
        a[randint(1, 1000)%2] += 1;
    return a[1] > a[0]? 1: 0;
}

export function beepChoose() {
    function timeoutChoose() {
        const c = choose();
        let fq = c == 1? 1500: 500;
        beepSlower(fq, 50);
    }

    for (let i = 0; i<3; ++i) {
        setTimeout(timeoutChoose, i*1000 + randint(1, 1023));
    }
}

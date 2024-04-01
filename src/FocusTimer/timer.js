import state from './state.js'
import * as el from './elements.js'
import { reset } from './action.js'
import { kichenTimer } from './sounds.js'

export function countDown() {
    if (!state.isRunning) {
        return
    }

    let minutes = Number(el.minutes.textContent)
    let seconds = Number(el.seconds.textContent)
    
    seconds--

    if (seconds < 0) {
        seconds = 59
        minutes--
    }

    if (minutes < 0) {
        reset()
        kichenTimer.play()
        return
    }

    uptadeDisplay(minutes, seconds)
    state.countdownId = setTimeout(() => countDown(), 1000)
}

export function uptadeDisplay(minutes, seconds) {

    minutes = minutes ?? state.minutes // Nulish coaleshing operator
    seconds = seconds ?? state.seconds

    el.minutes.textContent = String(minutes).padStart(2, "0");
    el.seconds.textContent = String(seconds).padStart(2, "0");
}
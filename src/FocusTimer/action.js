import  state  from './state.js'
import * as timer from './timer.js'
import * as el from './elements.js'
import * as sounds from './sounds.js'

export function toggleRunning() {
   state.isRunning = document.documentElement.classList.toggle('running') // o "classlist.toggle" retorna um "False" ou "True"
   timer.countDown();
   sounds.buttonPressAudio.play()
}

export function reset() {
    state.isRunning = false; // funcao reset deve reiniciar estado "isRunning"
    document.documentElement.classList.remove('running'); // funcao reset deve remover "running" da classlist
    timer.uptadeDisplay();
    sounds.buttonPressAudio.play()
}

export function toggleMusic() {
   state.isMute = document.documentElement.classList.toggle('music-on') // funcao toggleMusic deve remover/adicionar "music-on" da classlist
   sounds.bgAudio.play()

    if(state.isMute){
        sounds.bgAudio.play()
        return
    }

    sounds.bgAudio.pause()
}

export function set() {
    el.minutes.setAttribute('contenteditable', true)
    el.minutes.focus()
}



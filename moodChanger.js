const h1 = document.querySelector('h1');
const happyBtn = document.getElementById('happy');
const sadBtn = document.getElementById('sad');
const angryBtn = document.getElementById('angry');
const confusedBtn = document.getElementById('confused');
const idkBtn = document.getElementById('idk');
const resetBtn = document.getElementById('reset');


happyBtn.addEventListener('click', (e) => {
    store.dispatch({type: 'HAPPY', payload: 'ʘ‿ʘ' })
    const state = store.getState();
    h1.innerText = state.mood;
})
sadBtn.addEventListener('click', (e) => {
    store.dispatch({type: 'SAD', payload: 'ಠ╭╮ಠ' })
    const state = store.getState();
    h1.innerText = state.mood;
})
angryBtn.addEventListener('click', (e) => {
    store.dispatch({type: 'ANGRY', payload: 'ಠ_ಠ' })
    const state = store.getState();
    h1.innerText = state.mood;
})
confusedBtn.addEventListener('click', (e) => {
    store.dispatch({type: 'CONFUSED', payload: '(@_@)' })
    const state = store.getState();
    h1.innerText = state.mood;
})
idkBtn.addEventListener('click', (e) => {
    store.dispatch({type: 'IDK', payload: '¯\_(ツ)_/¯' })
    const state = store.getState();
    h1.innerText = state.mood;
})
resetBtn.addEventListener('click', (e) => {
    store.dispatch({type: 'RESET', payload: 'MOOD CHANGER' })
    const state = store.getState();
    h1.innerText = state.mood;
})
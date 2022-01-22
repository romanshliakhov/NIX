document.querySelector('.randomizer__btn').onclick = function(){
    let count = document.querySelector('#count').value;
    let min = document.querySelector('#min').value;
    let max = document.querySelector('#max').value;
    let result = [];
    for ( let i = 0; i < count; i++) {
        result.push(randomInteger(min, max));
    }       
    document.querySelector('#result').value = result;
    return result;
};

function randomInteger(min, max) {        
    let rand = min - 0.5 + Math.random() * (max - min + 1);
    rand = Math.round(rand);
    return rand;
}

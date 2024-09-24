var increseBtn = document.querySelector('.inc') ;
var resetBtn = document.querySelector('.res') ;
var decreseBtn = document.querySelector('.dec') ;

var number = document.querySelector('h1');

number.innerHTML = 0 ;

increseBtn.addEventListener('click' , function(){
    return number.innerHTML ++
})

resetBtn.addEventListener('click' , function(){
    return number.innerHTML = 0 ;
})

decreseBtn.addEventListener('click' , function(){
    return number.innerHTML --
})
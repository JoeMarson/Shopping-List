// ! Set Var
let total = 0
let count = 0
let shownNumber = document.getElementById('number')
let total_show = document.getElementById('totalPrice')
const decrease_btn = document.getElementById('decBtn')
const reset_btn = document.getElementById('resBtn')
const increase_btn = document.getElementById('incBtn')
const resetAll_btn = document.getElementById('resetAll')

// Box 2
let count2 = 0
let shownNumber2 = document.getElementById('number2')
const decrease_btn2 = document.getElementById('decBtn2')
const reset_btn2 = document.getElementById('resBtn2')
const increase_btn2 = document.getElementById('incBtn2')

// Box 3
let count3 = 0
let shownNumber3 = document.getElementById('number3')
const decrease_btn3 = document.getElementById('decBtn3')
const reset_btn3 = document.getElementById('resBtn3')
const increase_btn3 = document.getElementById('incBtn3')

// Box 4
let count4 = 0
let shownNumber4 = document.getElementById('number4')
const decrease_btn4 = document.getElementById('decBtn4')
const reset_btn4 = document.getElementById('resBtn4')
const increase_btn4 = document.getElementById('incBtn4')

// Box 5
let count5 = 0
let shownNumber5 = document.getElementById('number5')
const decrease_btn5 = document.getElementById('decBtn5')
const reset_btn5 = document.getElementById('resBtn5')
const increase_btn5 = document.getElementById('incBtn5')

// Box 6
let count6 = 0
let shownNumber6 = document.getElementById('number6')
const decrease_btn6 = document.getElementById('decBtn6')
const reset_btn6 = document.getElementById('resBtn6')
const increase_btn6 = document.getElementById('incBtn6')

// Box 7
let count7 = 0
let shownNumber7 = document.getElementById('number7')
const decrease_btn7 = document.getElementById('decBtn7')
const reset_btn7 = document.getElementById('resBtn7')
const increase_btn7 = document.getElementById('incBtn7')

// Box 8
let count8 = 0
let shownNumber8 = document.getElementById('number8')
const decrease_btn8 = document.getElementById('decBtn8')
const reset_btn8 = document.getElementById('resBtn8')
const increase_btn8 = document.getElementById('incBtn8')

// Box 9
let count9 = 0
let shownNumber9 = document.getElementById('number9')
const decrease_btn9 = document.getElementById('decBtn9')
const reset_btn9 = document.getElementById('resBtn9')
const increase_btn9 = document.getElementById('incBtn9')

// ! DEC / RESET / INC
function decrease(){
    if (count >=1)
    count = count-1
    shownNumber.innerHTML = count
    total1()
}

function reset(){
    count = 0
    shownNumber.innerHTML = count
    total1()
}

function increase(){
    count = count+1
    shownNumber.innerHTML = count
    total1()
}

// DEC / RESET / INC (2)
function decrease2(){
    if (count2 >=1)
    count2 = count2-1
    shownNumber2.innerHTML = count2
    total1()
}

function reset2(){
    count2 = 0
    shownNumber2.innerHTML = count2
    total1()
}

function increase2(){
    count2 = count2+1
    shownNumber2.innerHTML = count2
    total1()
}

// DEC / RESET / INC (3)
function decrease3(){
    if (count3 >=1)
    count3 = count3-1
    shownNumber3.innerHTML = count3
    total1()
}

function reset3(){
    count3 = 0
    shownNumber3.innerHTML = count3
    total1()
}

function increase3(){
    count3 = count3+1
    shownNumber3.innerHTML = count3
    total1()
}

// DEC / RESET / INC (4)
function decrease4(){
    if (count4 >=1)
    count4 = count4-1
    shownNumber4.innerHTML = count4
    total1()
}

function reset4(){
    count4 = 0
    shownNumber4.innerHTML = count4
    total1()
}

function increase4(){
    count4 = count4+1
    shownNumber4.innerHTML = count4
    total1()
}

// DEC / RESET / INC (5)
function decrease5(){
    if (count5 >=1)
    count5 = count5-1
    shownNumber5.innerHTML = count5
    total1()
}

function reset5(){
    count5 = 0
    shownNumber5.innerHTML = count5
    total1()
}

function increase5(){
    count5 = count5+1
    shownNumber5.innerHTML = count5
    total1()
}

// DEC / RESET / INC (6)
function decrease6(){
    if (count6 >=1)
    count6 = count6-1
    shownNumber6.innerHTML = count6
    total1()
}

function reset6(){
    count6 = 0
    shownNumber6.innerHTML = count6
    total1()
}

function increase6(){
    count6 = count6+1
    shownNumber6.innerHTML = count6
    total1()
}

// DEC / RESET / INC (7)
function decrease7(){
    if (count7 >=1)
    count7 = count7-1
    shownNumber7.innerHTML = count7
    total1()
}

function reset7(){
    count7 = 0
    shownNumber7.innerHTML = count7
    total1()
}

function increase7(){
    count7 = count7+1
    shownNumber7.innerHTML = count7
    total1()
}

// DEC / RESET / INC (8)
function decrease8(){
    if (count8 >=1)
    count8 = count8-1
    shownNumber8.innerHTML = count8
    total1()
}

function reset8(){
    count8 = 0
    shownNumber8.innerHTML = count8
    total1()
}

function increase8(){
    count8 = count8+1
    shownNumber8.innerHTML = count8
    total1()
}

// DEC / RESET / INC (9)
function decrease9(){
    if (count9 >=1)
    count9 = count9-1
    shownNumber9.innerHTML = count9
    total1()
}

function reset9(){
    count9 = 0
    shownNumber9.innerHTML = count9
    total1()
}

function increase9(){
    count9 = count9+1
    shownNumber9.innerHTML = count9
    total1()
}

// ! TOTAL
function total1 (){
    total = count * 1 + count2 * 1 + count3 * 3 + count4 * 1 + count5 * 2 + count6 * 1 + count7 * 5 + count8 * 5 + count9 * 4
    total_show.innerHTML = (`£${total}`)
}

// ! RESET ALL
function resetAll (){
    reset()
    reset2()
    reset3()
    reset4()
    reset5()
    reset6()
    reset7()
    reset8()
    reset9()
}

// ! MAIN
function main(){
    decrease_btn.addEventListener('click', function(){
        decrease()
    })
    reset_btn.addEventListener('click', function(){
        reset()
    })
    increase_btn.addEventListener('click', function(){
        increase()
    })

    // #2
    decrease_btn2.addEventListener('click', function(){
        decrease2()
    })
    reset_btn2.addEventListener('click', function(){
        reset2()
    })
    increase_btn2.addEventListener('click', function(){
        increase2()
    })

    // #3
    decrease_btn3.addEventListener('click', function(){
        decrease3()
    })
    reset_btn3.addEventListener('click', function(){
        reset3()
    })
    increase_btn3.addEventListener('click', function(){
        increase3()
    })

    // #4
    decrease_btn4.addEventListener('click', function(){
        decrease4()
    })
    reset_btn4.addEventListener('click', function(){
        reset4()
    })
    increase_btn4.addEventListener('click', function(){
        increase4()
    })

    // #5
    decrease_btn5.addEventListener('click', function(){
        decrease5()
    })
    reset_btn5.addEventListener('click', function(){
        reset5()
    })
    increase_btn5.addEventListener('click', function(){
        increase5()
    })

    // #6
    decrease_btn6.addEventListener('click', function(){
        decrease6()
    })
    reset_btn6.addEventListener('click', function(){
        reset6()
    })
    increase_btn6.addEventListener('click', function(){
        increase6()
    })

    // #7
    decrease_btn7.addEventListener('click', function(){
        decrease7()
    })
    reset_btn7.addEventListener('click', function(){
        reset7()
    })
    increase_btn7.addEventListener('click', function(){
        increase7()
    })

    // #8
    decrease_btn8.addEventListener('click', function(){
        decrease8()
    })
    reset_btn8.addEventListener('click', function(){
        reset8()
    })
    increase_btn8.addEventListener('click', function(){
        increase8()
    })

    // #9
    decrease_btn9.addEventListener('click', function(){
        decrease9()
    })
    reset_btn9.addEventListener('click', function(){
        reset9()
    })
    increase_btn9.addEventListener('click', function(){
        increase9()
    })

    // ! Reset All
    resetAll_btn.addEventListener('click', function(){
        resetAll()
    })
}

main()
/*
Javasript Execution
    - Globle Execution Context
        this
    - Function Execution Context
    - Eval Execution Context

    { }
        - Memory creation phase
            val1 -> undefined
            val2 -> undefined
            addNum -> function defination
            result -> undefined
        - Execution phase
            val1 <- 10
            val2 <- 2
            addNum() -> new variable environment + execution thread
                    ________________|____________
                    |                           |
                Memory Phase            Execution Context
                    val1 -> undefined       num1 -> 10
                    val2 -> undefined       num2 -> 2
                    total -> undefined      total -> 12

*/

let val1 = 10
let val2 = 2
function addNum(num1, num2){
    let total = num1 + num2
    return console.log(total)
}
addNum(val1, val2)

/*
    Call Stack
*/
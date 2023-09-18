// Starting array
let array = [28, 43, -12, 30, 4, 0, -36]

// Write your solution below:


let getMin = 0
let getMax = 0
for(let i = 1; i < array.length; i++){
    if(array[i] < getMin){
        getMin = array[i]
    }else if(array[i] > getMax){
        getMax = array[i]
    }
}

console.log (getMin, getMax)

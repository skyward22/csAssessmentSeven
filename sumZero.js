function addToZero(arr) {
    for (let i = 0; i < arr.length; i++) {
    let sum = arr[i] + arr[i]
        if (sum === 0){
            return true
        }else{
            return false
        }
    }    
}


console.log(addToZero([1, 2, 3, -2]))

// O(n)

// Extra-Credit
// O(n)
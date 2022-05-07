const addToZero = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        for(let j= i+1; j<arr.length; j++){
            if (arr[j] + arr[i] === 0){
                return true
            }     
        }
    }  
    return false
}


console.log(addToZero([1, 2, 3, -2]))

// O(n^2)

// Extra-Credit
// O(1)
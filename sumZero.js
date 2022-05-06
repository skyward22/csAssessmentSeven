function addToZero(arr) {
    for (let i = 0; i < arr.length; i++) {
      if(0 === arr[i] && arr[i]){
          return true
      }else{
          return false
        }
    }
}

console.log(addToZero([1, 2, 3, -2]))

// Extra-Credit
// O(n)
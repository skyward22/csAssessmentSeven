function data(arr){
    var show = arr.splice(" ");
     show.sort(function (a,b){
         return b.length - a.length; 
     })
     return show[0].length;
}
console.log(data(["hi", "hello"]));


// Extra-Credit
// O(n)
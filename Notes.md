| Array |   doubleAppend-Runtime    |  doubleInsert-Runtime |
| ------| ------------------------- | --------------------- |          
| xlarge| append 1.713875 ms        | insert 764.787959 ms  |
| large | append 483.791 μs         | insert 7.730375 ms    |
| medium| append 96.417 μs          | insert 136.958 μs     |
| small | append 54.792 μs          | insert 25.292 μs      |
| tiny  | append 52.792 μs          | insert 20.375 μs      |


The ".unshift()" method is more efficient the small the array is. As the array keeps getting better the ".unshift()" method gets less efficient and the ".push()" method is more efficient. This is because the ".push()" method adds to the end of the array and the ".unshift()" method adds to the front. Therefore, the ".push()" method scales better. 

Extra Credit: The ".unshift()" method is slower as the array gets bigger because it has to re index everything in the array, so it's doing extra work each time the method is used. 
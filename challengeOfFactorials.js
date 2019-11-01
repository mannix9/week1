function factorials(num){ 
    
    for(i=num - 1; i >=1; i--){ // I set my 'for loop' here notice num is subtracted by 1.

        num = (num*i) 
        //console.log(num)
    }
    return num
}   
console.log(factorials(6)) // Here I call my function and give it a value.

//console.log("test")
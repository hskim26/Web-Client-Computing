const min = function(...array){
    let result = array[0];

    for(let item of array){
        if(item < result)
            result = item;
    
    }
   return result;
}



console.log(min(11, 29, 43, 4, 90));
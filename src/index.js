'use strict';

// Pseudocode ReduceRight
/* 
    array.reduceRight(callback, [startValue]);
    callback(previousValue, currentValue, index, array);
    if(startValue){
        previousValue = startValue;
        currentValue = array[array.lenght - 1];
    }else{
        previousValue = array[array.lenght - 1];
        currentValue = array[array.lenght - 2];
    }
*/

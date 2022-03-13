

function emptyArray(arr) {

    
    arr.splice(0, arr.length);
    
    return arr;
}

const array = ["egg", "bacon" ,"toast","coffee","random","juice"];
console.log(array);


const result = emptyArray(array);
console.log(result);
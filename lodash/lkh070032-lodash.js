
var aaaaa = function (){
    function chunk(array, size) {
    var result = [];
    for (var i = 0; i < array.length; i++) {
        if (i % size === 0) {
            result.push([]);
        }
        result[Math.floor(i / size)].push(array[i]);
    }
    return result;
}
    function compact(array) {
    return array ? array.filter(Boolean) : [];
}
    function concat() {
    var result = [];
    for (var i = 0; i < arguments.length; i++) {
        if (Array.isArray(arguments[i])) {
            [].push.apply(result, arguments[i]);
        } else {
            result.push(arguments[i]);
        }
    }
    return result;
}
    function difference(array, values) {
    var result = [];
    for (var i = 0; i < array.length; i++) {
        var isPresent = false; 
        for (var j = 0; j < values.length; j++) {
            if (array[i] === values[j]) {
                isPresent = true;
                break;
            }
        }
        if (!isPresent) {
            result.push(array[i]);
        }
    }

    return result; 
}
    function fill(array, value, start, end) {
    for (var i = start || 0; i < (end || array.length); i++) {
        array[i] = value;
    }
    return array;
}
    function drop(array,count){
        for(var i =0;i<count;i++){
            array.shift()
        }
    return array
    }
    function findIndex(){

    }
    function findLastIndex(){

    }
    function flatten(array) {
    var result = [];
    for (var i = 0; i < array.length; i++) {
        if (Array.isArray(array[i])) {
            result.push.apply(result, array[i]);
        } else {
            result.push(array[i]);
        }
    }
    return result;
}
    function flattenDeep(arr) {
     var result = [];
     for (var i = 0; i < arr.length; i++) {
     if (Array.isArray(arr[i])) { 
      result = result.concat(flattenDeep(arr[i])); 
    } else {
      result.push(arr[i]);
    }
  }
    return result;
}
   function flattenDepth(arr,size){
    var result = [];
     for (var i = 0; i < arr.length; i++) {
     if (Array.isArray(arr[i])) { 
        if(size>0){
            var flattened = flattenDepth(arr[i],size-1)
            result = result.concat(flattened)
        }else{
            result.push(arr[i])
        }
    } else {
      result.push(arr[i]);
    }
  }
    return result;
   }
}
return {
    chunk: chunk,
    compact: compact,
    difference: difference,
    fill: fill,
    drop: drop,

}()







 
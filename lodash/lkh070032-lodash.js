var lkh070032 = function (){
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
    function findIndex(array, callback) {
    for (let i = 0; i < array.length; i++) {
    if (callback(array[i], i, array)) {
      return i;
    }
  }
  return -1;
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
   function fromPairs(pairs) {
   return pairs.reduce((obj, [key, value]) => {
    obj[key] = value;
    return obj;
  }, {});
}
   function toPairs(obj) {
    return Object.keys(obj).map(key => [key, obj[key]]);
}
   function head(array){
    var result = []
    result.push(array[0])
    return result
   }
   function indexOf(array, value, fromIndex=0){
    if(fromIndex !==0){
        for(var i =fromIndex;i<array.length;i++){
            if(array[i]===value)
            return i
        }
    }
    if(fromIndex == 0){
    for(var i =0;i<array.length;i++){
        if(array[i] == value){
            return i
        }
    }
  }
   }
   function lastIndexOf(array, value, fromIndex=array.length-1){
    for(var i = fromIndex;i<array.length;i--){
        if(array[i] === value){
            return i
        }
    }
   }
   function initial(array){
    var result=[]
    for(var i =0;i<array.length-1;i++){
        result.push(array[i])
    }
    return result
   }
   function join(array, separator){
    return result = array.join(separator)
   }
   function last(array){
    return array.pop()
   }
   function pull(array, ...values) {
    // 创建一个新数组用于存放结果
    let result = [];
    // 遍历原数组
    for (let i = 0; i < array.length; i++) {
        // 检查当前元素是否不在要移除的值中
        if (!values.includes(array[i])) {
            // 如果不在，则添加到结果数组中
            result.push(array[i]);
        }
    }
    return result;
}
   function reverse(array){
     var result=[]
     for(var i =array.length-1;i>=0 ;i--){
        result.push(array[i])
     }
     return result
   }
   function every(){
     
   }
   function some(){
    
   }
   return {
    chunk:chunk,
    compact:compact,
    difference:difference,
    fill:fill,
    drop:drop,
    concat:concat,
    flatten:flatten,
    flattenDeep:flattenDeep,
    flattenDepth:flattenDepth,
    findIndex:findIndex,
    findLastIndex:findLastIndex,
    fromPairs:fromPairs,
    toPairs:toPairs,
    head:head,
    indexOf:indexOf,
    lastIndexOf:lastIndexOf,
    initial:initial,
    join:join,
    last:last,
    pull:pull,
    reverse:reverse,
    every:every,
}
}()








 
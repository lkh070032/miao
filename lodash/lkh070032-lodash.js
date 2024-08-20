var lkh070032 = function (){
    function matchesProperty(key, value) {
        return function(object) {
        return object[key] === value;
      };
    }
    
    function matches(object) {
      return function(other) {
        for (var key in object) {
          if (object.hasOwnProperty(key) && object[key] !== other[key]) {
            return false;
          }
        }
        return true;
      };
    }
    
    function property(key) {
      return function(object) {
        return object[key];
      };
    }
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
    function difference(array, ...values) {
        var ans = []
        var set = new Set()
        for (var i = 0; i < values.length; i++) {
          var value = values[i]
          for (var val of value) {
            set.add(val)
          }
        }
        for (var i = 0; i < array.length; i++) {
          if (!set.has(array[i])) {
            ans.push(array[i])
          }
        }
        return ans
      }
        function fill(array, value, start, end) {
        for (var i = start || 0; i < (end || array.length); i++) {
            array[i] = value;
        }
        return array;
    }
        function drop(array,n =1){
            for(var i =0;i<n;i++){
                if(array) array.shift()
            }
        return array
        }
     function findIndex(array, predicate, fromIndex = 0) {
            if (typeof predicate == 'function') {
                for (var i = fromIndex; i < array.length; i++) {
                    if (predicate(array[i])) {
                        return i
                    }
                }
                return -1
            } else if (Array.isArray(predicate)) {
                predicate = matchesProperty(predicate[0],predicate[1])
            } else if (typeof predicate == "object") {
                predicate = matches(predicate)
            } else if (typeof predicate == "string") {
                predicate = property(predicate)
            }
            for (var i = fromIndex; i < array.length; i++) {
                if (predicate(array[i])) {
                    return i
                }
            }
            return -1
        }
        function findLastIndex(array,predicate,fromIndex = array.length-1){
            if (typeof predicate == 'function') {
                for (var i = fromIndex; i >=0; i--) {
                    if (predicate(array[i])) {
                        return i
                    }
                }
                return -1
            } else if (Array.isArray(predicate)) {
                predicate = matchesProperty(predicate[0],predicate[1])
            } else if (typeof predicate == "object") {
                predicate = matches(predicate)
            } else if (typeof predicate == "string") {
                predicate = property(predicate)
            }
            for (var i = fromIndex; i>=0; i--) {
                if (predicate(array[i])) {
                    return i
                }
            }
            return -1
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
        return array[0]
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
       function lastIndexOf(array, value, fromIndex = array.length - 1) {
        if (fromIndex < 0) {
            return -1
        }
        for (var i = fromIndex; i >= 0; i--) {
            if (this.isEqual(array[i], value)) {
                return i
            }
        }
        return -1
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
       function isEqual(a,b){
        if(a === b){
            return true
        }
        if(typeof a !== typeof b ){
            return false
        }
        if(Array.isArray(a) && Array.isArray(b)){
            if(a.length !== b.length){
                return false
            }
            for(var i =0;i<a.length;i++){
                if(!isEqual(a[i],b[i])){
                    return false
                }
            }
            return true
        }
        if (typeof a === 'object' && typeof b === 'object') {
        const keys1 = Object.keys(a);
        const keys2 = Object.keys(b);
    
        if (keys1.length !== keys2.length) {
          return false;
        }
    
        for (let key of keys1) {
          if (!keys2.includes(key) || !isEqual(a[key], b[key])) {
            return false;
          }
        }
    
        return true;
      }
      return false
       }
       function repeat(string, n) {
        if (n <= 0) {
            return ''; // 如果n为0或负数，返回空字符串
        }
        var repeatedString = '';
        for (var i = 0; i < n; i++) {
            repeatedString += string; // 将字符串添加到结果字符串中
        }
        return repeatedString; // 循环结束后返回结果字符串
    }
    function padStart(string, n, Chars) {
        // 如果没有提供 Chars 或者 Chars 是 null，则默认使用空格
        if (Chars === undefined || Chars === null) {
            Chars = ' ';
        }
        // 计算需要填充的字符数量
        var neededPadding = n - string.length;
        // 如果原始字符串长度已经达到或超过目标长度，直接返回原始字符串
        if (neededPadding <= 0) {
            return string;
        }
        // 计算需要重复填充的字符序列的次数
        var repeatCount = Math.ceil(neededPadding / Chars.length);
        // 构建重复的填充字符序列
        var padding = Chars.repeat(repeatCount).slice(0, neededPadding);
        // 返回拼接了填充字符序列的字符串
        return padding + string;
    }  
        function padEnd(string,n,Chars){
            if (Chars === undefined || Chars === null) {
            Chars = ' ';
        }
        var neededPadding = n - string.length;
        if (neededPadding <= 0) {
            return string;
        }
        var repeatCount = Math.ceil(neededPadding / Chars.length);
        var padding = Chars.repeat(repeatCount).slice(0, neededPadding);
        return string + padding;
    }  
        function pad(string,n,chars){
         if(chars === undefined || chars === null){
            chars = ' '
         }
         var neededPadding = n-string.length
         if(neededPadding <= 0){
            return string
         }
         var half = Math.floor(neededPadding/2)
         var leftpadding = half
         var rightpadding = half + (neededPadding % 2);
         var left = chars.repeat(leftpadding)
         var right = chars.repeat(rightpadding)
         return left+string+right
    }
        function keys (obj){
        var result = [];
        for (var key in obj) {
            if (obj.hasOwnProperty(key)) {
                result.push(key);
            }
        }
        return result;
        }
        function values (obj){
        var result = [];
        for (var key in obj) {
            if (obj.hasOwnProperty(key)) {
                result.push(obj[key]);
            }
        }
        return result;
        }
        function random(min, max, floating = false) {
        if(!max){
            max=0
        }
        if (min > max) {
        // 交换 min 和 max 如果 min 大于 max
        let temp = min;
        min = max;
        max = temp;
      }
      if (floating) {
        // 生成浮点数
        return Math.random() * (max - min) + min;
      } else {
        // 生成整数
        return Math.floor(Math.random() * (max - min + 1)) + min;
      }
    }
    function round(number, precision = 0) {
      var result = Math.pow(10, precision);
      return Math.round(number * result) / result;
    }
       function ceil(number,precision = 0){
        var result = Math.pow(10,precision)
        return Math.ceil(number*result)/result
       }
       function floor(number,precision = 0){
        var result = Math.pow(10,precision)
        return Math.floor(number*result)/result
       }
       function cloneDeep(value){
        if(value === null || typeof value !== 'object'){
            return value
        }
        if(Array.isArray(value)){
            var result = []
            for(var i = 0 ;i <value.length;i++){
                result.push(value[i])
            }
            if(result === value){
              return true
            }
            return false
        }    
       }
       function trim(string,chars){
        if(string === ''){
            return string
        }
        if(typeof chars !== 'string'){
            chars =' '
            chars.split('')
        }
        var i,j
        for(var i = 0;i<string.length;i++){
            var s = string[i]
            if(chars.indexOf(s)===-1){
                break
            }
        }
        for(var j =string.length-1;j>=0;j--){
            var s = string[j]
            if(chars.indexOf(s)===-1){
                break
            }
        }
        return string.slice(i,j+1)
       }
       function max(array){
        if(array.length === 0 || !Array.isArray(array)){
            return undefined
        }
        var max = array[0]
        for(var i = 0;i<array.length;i++){
        var next = array[i]
        if(next>max){
            max = next
        }
        }
        return max
       }
       function min(array){
        if(array.length === 0 || !Array.isArray(array)){
            return undefined
        }
        var min = array[0]
        for(var i = 0;i<array.length;i++){
        var next = array[i]
        if(next<min){
            min = next
        }
        }
        return min
       }
       function forEach(collection ,iteratee=identity){
        if (array.length === undefined) { 
            for (let key in array) {
                if (iteratee(array[key], key, array) === false) {
                    return array
                }
            }
        } else {
            for (var i = 0; i < array.length; i++) {
                if (iteratee(array[i], i, array) === false) {
                    return array
                }
            }
        }
        return array
       }
       function isArray(value){
        if(Array.isArray(value)){
            return true
        }else{
            return false
        }
       }
       function isBoolean(value){
        return typeof value ==="boolean"
       }
       function isDate(value) {
        return Object.prototype.toString.call(value) === '[object Date]';
       }
       function isElement(value){
        return value instanceof HTMLElement
       }
       function parserJSON(JSON){
        var i = 0
        return paserType()
        function paserType(){
         if(JSON[i] === "{"){
            return parserObject()
         }else if(JSON[i]==="["){
            return parserArray()
         }else if(JSON[i]==='"'){
            return parserString()
         }else if(JSON[i]>=0 && JSON[i]<=9 ||JSON[i]==='-'||JSON[i]==='.'){
            return paserNumber()
         }else if(JSON[i] === "t"){
            if(JSON.slice(i,i+4)==="true"){
                i+=4
            return true
            }else{
            i+=4
            throw new SyntaxError("error")
         }
         }else if(JSON[i]==="f"){
            if(JSON.slice(i,i+5)==="false"){
                i+=5
                return false
            }else{
                i+=5
                throw new SyntaxError("error")
            }
         }else{
            i+=4
            return null
         }
        }
        function parserObject(){
            var obj ={}
            i++
            var key = null
            var value = null
            if(JSON[i]==="}"){
                i++
                return obj
            }
            while(i<JSON.length){
                if(JSON[i]==="}"){
                    i++
                    break
                }else if(JSON[i]==="."){
                    i++
                }else if(JSON[i]==='"'){
                    key =parserString
                    if(JSON[i]===":"){
                        i++
                        value = paserType()
                    }else{
                        throw new SyntaxError("error")
                    }
                    obj[key]=value
                }else{
                    throw new SyntaxError("error")
                }
            }
            return obj
        }
        function parserArray(){
            i++
            var result = []
            var value = null
            while(i<JSON.length){
                if(JSON[i]==="]"){
                    i++
                    break
                }else if(JSON[i]===","){
                    i++
                }else{
                    value = paserType()
                    result.push(value)
                }
            }
            return result
        }
        function parserString(){
            i++
            var result = ""
            while(JSON[i]!=='"'){
                result += JSON[i++]
            }
            i++
            return result
        }
        function paserNumber() {
            var startIdx = i
            while(JSON[i] >= '0' && JSON[i] <= '9') {
              i++
            }
            return Number(JSON.slice(startIdx, i))
          }
       }
       function stringifyJSON(obj) {
        if (Array.isArray(obj)) {
            let str = ''
            for (let i = 0; i < obj.length; i++) {
                str += ',' + stringifyJSON(obj[i])
            }
            str = str.slice(1)
            return '[' + str + ']'
        } else if (typeof obj === 'object' && obj !== null && !(obj instanceof RegExp)) {
            let str = ''
            for (let key in obj) {
                if (obj.hasOwnProperty(key)) {
                    str += ',"' + key + '"' + ':' + stringifyJSON(obj[key])
                }
            }
            str = str.slice(1)
            return '{' + str + '}'
        } else if (typeof obj === 'string') {
            return '"' + obj + '"'
        } else {
            return obj + ''
        }
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
        isEqual:isEqual,
        repeat:repeat,
        padStart:padStart,
        padEnd:padEnd,
        pad:pad,
        keys:keys,
        values:values,
        random:random,
        round:round,
        ceil:ceil,
        floor:floor,
        cloneDeep:cloneDeep,
        trim:trim,
        max:max,
        min:min,
        forEach:forEach,
        isArray:isArray,
        isBoolean:isBoolean,
        isDate:isDate,
        isElement:isElement,
        stringifyJSON:stringifyJSON,
        parserJSON:parserJSON,
    }   
    }()
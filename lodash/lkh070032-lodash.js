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
                predicate = this.matchesProperty(predicate[0],predicate[1])
            } else if (typeof predicate == "object") {
                predicate = this.matches(predicate)
            } else if (typeof predicate == "string") {
                predicate = this.property(predicate)
            }
            for (var i = fromIndex; i < array.length; i++) {
                if (predicate(array[i])) {
                    return i
                }
            }
            return -1
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
    }
    }()








 

  // 表示一个二维向量
class Vector {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  plus(v) {
    return new Vector(this.x + v.x, this.y + v.y);
  }

  minus(v) {
    return new Vector(this.x - v.x, this.y - v.y);
  }

  get length() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }
}

class Complex {
  constructor(real, imag) {
    this.real = real;
    this.imag = imag;
  }

  plus(c) {
    return new Complex(this.real + c.real, this.imag + c.imag);
  }

  minus(c) {
    return new Complex(this.real - c.real, this.imag - c.imag);
  }

  multiple(c) {
    const real = this.real * c.real - this.imag * c.imag;
    const imag = this.real * c.imag + this.imag * c.real;
    return new Complex(real, imag);
  }

  div(c) {
    const helper = new Complex(c.real, -c.imag);
    const denominator = c.multiple(helper).real;
    const numerator = this.multiple(helper);
    const real = numerator.real / denominator;
    const imag = numerator.imag / denominator;

    return new Complex(real, imag);
  }

  toString() {
    return '' + this.real + (this.imag > 0 ? "+" : '') + this.imag + 'i'
  }
}
  // var c1 = new Complex(4, 5)
  // var c2 = new Complex(1, -2)

  // var c3 = c1.plus(c2)
  // var c4 = c1.minus(c2)
  // var c5 = c1.multiple(c2)
  // var c6 = c1.div(c2)

  // console.log(c6.toString()) // 2+3i

  // 
  // function Matrix() {

  // }


  // =================================================================
  // =================================================================
  // =================================================================
  // =================================================================
  // 以下作业写好后上传到： `https://[username].github.io/miao/oop.js`,
  // =================================================================
  // =================================================================
  // =================================================================
  // =================================================================

  // 表示一个单向链表
  class LinkedList{
    constructor(){
      this._head=null
      this._length=0
    }
    Node(idx){
      this.idx=idx
      this.next=null
    }
    at(idx){
      var p=this._head
      while(idx > 0 && p){
        p=p.next
        idx--
      }
      if(p){
        return p.val
      }else{
        return undefined
      }
    }
    set(idx, val){
      var p =this._head
      while(idx>0 && p){
        p=p.next
        idx--
      }
      if(p){
        p.val =val
      }
    }
    append(val){
      var node  ={
        val:val,
        next:null,
      }
      this._length++
      if(this._head == null){
        this._head = node
        return this
      }
      var p = this._head
      while(p.next){
        p=p.next
      }
      p.next = node
      return this
    }
    pop(){
      if(this._head == null){
        return undefined
      }
      this._length--
      if(this._head.next==null){
        var result = this._head.val
        this._head = null
        return result
      }
      var p= this._head
      while(p.next.next){
        p=p.next
      }
      var result =p.next.val
      p.next = null
      return result
    }
    prepend(val){
      var node = {
        val:val,
        next:this._head
      }
      this._length++
      this._head = node
      return this
    }
    shift(){
      if(this._head == null){
        return undefined
      }
      this._length--
      var result = this._head.val
      this._head = this._head.next
      return result
    }
    toArray(){
      var result = []
      var p = this._head
      while(p){
        result.push(p.val)
        p = p.next
      }
      return result
    }
    toString(){
      return this.toArray().join('->')
    }
    get size() {
      return this._length
    }
  }
  
 


  // 表示一个集合（集合中元素没有序，但不能重复）
  // 构造函数可选的可以传入集合中的初始值，但会被去重后存放
  class MySet{
    constructor(initalValues = []){
      this._elements = []
      for(var val of initalValues){
        this.add(val)
      }
    }
    add(value){
      if(!this._elements.includes(value)){
        this._elements.push(value)
      }
      return this
    }
    delete(value){
      var idx= this._elements.indexOf(value)
      if(idx >= 0){
        this._elements.splice(idx,1)
      }
      return this
    }
    get size() {
      return this._elements.length
    }
    clear(){
      this._elements=[]
      return this
    }
    has(value){
      return this._elements.includes(value);
    }
    forEach(){
      for (let value of this._elements) {
        func(value)
      }
    }
  }
 
  //var c = new Collection() //初始化一个空集合
  // c.add(5)
  // c.add(5)
  // c.size // 1
  // c.add(8)
  // c.size // 2
  // c.has(5) // true
  // c.has(999) // false
  // c.delete(5)
  // c.size // 1
  // c.delete(9)
  // c.size // 1




  // 表示一个映射
  // 这个映射中，可以把任何值映射到任何值，映射的key不限于字符串
  class MyMap{
    constructor(initPairs = []){
      this._pairs = []
      for(var pair of initPairs){
        var key = pair[0]
        var val = pair[1]
        this.set(key,val)
      }
    }
    set(key,val){
      for(var i=0;i<this._pairs.length;i+=2){
        if(this._pairs[i] === key){
          this._pairs[i+1]=val
          return this
        }
        }
        this._pairs.push(key,val)
        return this
    }
    get(key){
      for(var i = 0; i<this._pairs.length;i+=2){
        if(this._pairs[i] === key){
          return this._pairs[i+1]
        }
      }
      return undefined
    }
    has(key){
      for(var i = 0;i<this._elements.length;i+=2){
        if(this._pairs[i]===key){
          return true
        }
      }
      return false
    }
    delete(key){
      for(var i=0;i<this._pairs.length;i+=2){
        if(this._pairs[i] === key){
          this._pairs.splice(i,2)
          return true
        }
      }
      return false
    }
    clear(){
      this._pairs=[]
      return this
    }
    get size(){
      return this._pairs.length/2
    }
    forEach(iterator) {
      for(var i = 0;i<this._elements.length;i+=2){
        iterator(this._pairs[i+1],this._pairs[i])
      }
    }
  }



  // 表示一个栈：即后进先出，先进后出
  class Stack{
    constructor(){
      this._elements=[]
    }
    push(val){
      this._elements.push(val)
    }
    pop(){
      return this._elements.pop()
    }
    peek(){
      return this._elements[this._elements.length - 1]
    }
    get size(){
      return this._elements.length
    }
  }
 
  // stack.size 获取栈中元素的数量

  // var stack = new Stack()
  // stack.in(1)
  // stack.in(2)
  // stack.size // 2
  // stack.in(3)
  // stack.size // 3
  // stack.out() // 3
  // stack.out() // 2
  // stack.in(5)
  // stacik.out() // 5 


  // 表示一个队列：即先进先出，后进后出
  class Queue{
    constructor(){
      this._head = null
    this._tail = null
    this._length = 0
    }
    add(val){
      var node={
        val:val,
        next:null,
      }
      this._length++
      if(this._head == null){
        this._head = this._tail = node
        return this
      }
      this._tail.next=node
      this._tail = node
      return this
    }
    pop(val){
      if(this._head == null){
        return undefined
      }
      this._length--
      if(this._head == this._tail){
        var result=this._haed.val
        this._head = this.tail = null
        return result
      }
      var result = this._head.val
      this._head = this._head.next
      return result
    }
    peek(){
      return this._head.val
    }
    get size(){
      return this._length
    }
  }

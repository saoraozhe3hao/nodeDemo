function sub1(){
   this.age = "Tom";
   console.log(22);
}
sub1.age = "John";

//exports 即要被引用的对象。只能添加成员，不能直接给它赋值。因为它是个对象引用，给它赋值，改变了它引用的对象
exports.sub = sub1;
let numbers=[12,35,67,89,45];
document.write("Numbers");
numbers.forEach(function(value){
    document.write("<br>"+value);
});

numbers.forEach(function(value,index){
    document.write("<br>"+index+"="+value);
});
//for(let i=0;i<numbers.length;i++){
//    document.write("<br>"+numbers[i]);
//}
let number1=new Array(12,35,67,89,45);
document.write("<br>Number1");
for(let i=0;i<number1.length;i++){
    document.write("<br>"+numbers[i]);
}
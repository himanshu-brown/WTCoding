function sum(){
    let num = prompt("Enter a number", "0");
    num=parseInt(num);
    sum=0;
    while(num!=0){
        a = num%10;
        sum=sum+a;
        num=num/10;
    }
    alert("Sum of digit : "+sum);
}
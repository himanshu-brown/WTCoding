function primenumber(){
    let num = prompt("Enter a number ", "0");
    num=parseInt(num);
    flag=0;
    if(Number.isInteger(num)){
        for(i=2;i<=num/2;i++){
            if(num%i==0){
                flag=1;
                break;
            }
        }
        if(flag==1){
            alert("Input is a number but Number is not prime");
        }
        else{
            alert("Input is a number and Number is prime");
        }
    }
    else{
        alert("Please enter a number only");
    }
}
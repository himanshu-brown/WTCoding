function showalert()
{
    window.alert("This is alert box");
}

function showconfirm()
{
    let value=confirm("Do you want to display message?");
    if(value==true)
    {
        window.alert("Welcome to confirm box");
    }
    else
    {
        window.alert("You are not welcome");
    }
}

function showprompt()
{
    let name=prompt("Enter you name","KIET");
    if(name!=null)
    {
        alert("Welcome "+name);
    }
    else
    {
        alert("We do not know your name");
    }
}
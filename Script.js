let display=document.getElementById('display');
function appendValue(val)
{
   display.value+=val;
}
function clearDisplay()
{
    display.value='';
}
function deleteLast()
{
display.value=display.value.slice(0,-1);
}
function calculateResult()
{
    try{
        display.value=eval(display.value);
    }
    catch(e)
    {
        display.value='Error';
    }
}
function square()
{
    let value=parseFloat(document.getElementById('display').value);
    if(!isNaN(value))
    {
        document.getElementById('display').value=value*value;
    }
    else
    {
        document.getElementById('display').value='Error';
    }
}
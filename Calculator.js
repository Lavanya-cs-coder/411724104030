function appendValue(value)
{
    let input = document.querySelector(".inp");
    input.value += value;
}

function clearDisplay()
{
    let input = document.querySelector(".inp");
    input.value = "";
}

function calculate()
{
    let input = document.querySelector(".inp");

    try
    {
        input.value = eval(input.value);
    }
    catch(error)
    {
        input.value = "Error";
    }
}
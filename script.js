let zatn = 1;
let userAgent = navigator.userAgent;
let power = false;

function add(no) {
    let output = no;
    if(output == '↑') { 
        power = true;
    }

    if(output == '⋮' || output == ':' ||
     output == 'X' || output == '-' ||
      output == '+' || output == 'e') power = false;

    if (power) {
        if(output == 0)  output = '₀';
        if(output == 1)  output = '₁';
        if(output == 2)  output = '₂';
        if(output == 3)  output = '₃';
        if(output == 4)  output = '₄';
        if(output == 5)  output = '₅';
        if(output == 6)  output = '₆';
        if(output == 7)  output = '₇';
        if(output == 8)  output = '₈';
        if(output == 9)  output = '₉';
    }

    document.getElementById("question").innerHTML += output;
}

function calc() {
    if(question.value != "")
    {
        let input = question.innerHTML;

        input = rectifyquestion(input);

        let resulv = eval(input);
        result.innerHTML = resulv;

        let resultc = result.innerHTML;
        resultc = resultc.replace(".", ",");

        if(resultc == "Infinity")
        {
            resultc = "NaN";
        }

        result.innerHTML = resultc;

        power = false;
    }
}

function rectifyquestion(question)
{
    let input = question;
    input = input.replace(',', '.');
    input = input.replace(':', '/');
    input = input.replace('X', '*');
    input = input.replace('↑', '**');
    input = input.replace('₀', '0');
    input = input.replace('₁', '1');
    input = input.replace('₂', '2');
    input = input.replace('₃', '3');
    input = input.replace('₄', '4');
    input = input.replace('₅', '5');
    input = input.replace('₆', '6');
    input = input.replace('₇', '7');
    input = input.replace('₈', '8');
    input = input.replace('₉', '9');
    input = input.replace('π', Math.PI);
    input = input.replace('⋮', '%');
    input = input.replace('e', Math.E);
    input = input.replace('ʀ', Math.random())

    return input;
}

function vi(){
    power = false;
    question.innerHTML = "";
    result.innerHTML = "Výsledok...";
}

function about()
{
    alert("Vytvorené od MG.");
}

function DilButton()
{
    let DialogResult = prompt("Zadajte príklad:");
    question.innerHTML = DialogResult;
}

function DeleteLatest()
{
    let value = question.innerHTML;
    let editedvalue = value.slice(0, -1)
    question.innerHTML = editedvalue;
}
// Question no 1
const names = document.querySelector("#name")
const youremail = document.querySelector("#email")

function submit(){
    console.log(names.value);
    console.log(youremail.value);
}




















// Question no 2
let num1 = (document.querySelector("#num1"))
let num2 = (document.querySelector("#num2"))
let operator = document.querySelector("#operator")
let head = document.querySelector("#head-3")
function calculate(){
    
    switch(operator.value){
        case("+"):
        let sum = num1.value + num2.value;
        console.log( sum );
        head.innerHTML = "Your answer is -> " + sum;
        break
        case("-"):
        let sub = num1.value - num2.value;
        head.innerHTML = "Your answer is -> " + sub;

        break
        case("*"):
        let multiply = num1.value * num2.value;
        head.innerHTML = "Your answer is -> " + multiply;

        break
        case("/"):
        let division = num1.value / num2.value;
        head.innerHTML = "Your answer is -> " + division;

        break
        default:
            console.log("Operator Theek Daal")
    }
}



















// Question no 3



















// Question no 4
function changetext(){
    let paragraph = document.querySelector("#para-change")
    paragraph.style.backgroundColor="grey"
    paragraph.style.padding="30px"
    paragraph.style.fontSize="2rem"
    paragraph.innerHTML="Hello Jee"
}



















// Question no 5
function change_color(){
    const mydiv = document.querySelector("#my-div");    
    
    if(mydiv.style.backgroundColor =="white"){
        mydiv.style.backgroundColor="red";
        mydiv.style.color="white";
    }

    else{
        mydiv.style.backgroundColor="white";
        mydiv.style.color="black";
    }
}



















// Question no 6
const paragraph = document.querySelector("#para-h");
paragraph.style.visibility="hidden"

function show_hidden_text(){
    if(paragraph.style.visibility=="hidden"
    ){
    paragraph.style.visibility="visible"
    }

    else{
        paragraph.style.visibility="hidden"

    }
}
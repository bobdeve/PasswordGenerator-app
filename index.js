const characters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T",
    "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",
    "0", "1", "2", "3", "4", "5", "6", "7", "8", "9",
    "~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".", "?",
    "/"];

   
    var btnMain = document.getElementById("btngene");
    var btnGene2 = document.getElementById("btng2");
    var btnGene1 = document.getElementById("btng1");
    
   
    const myCheckbox1=document.getElementById("symbols");
    const myCheckbox2=document.getElementById("numberss");
    var arrayLetters = characters.slice(0,52);
    var arraySymbols = characters.slice(62,91);
    arrayLetters.push(...arraySymbols)
    let charac=[];
    
    // arrayLetters.push(arraySymbols);
   
    console.log(characters.slice(0,52));

    // theme change event listeners
    const themeToggle = document.getElementById("#label-id");
    const body= document.querySelector("body");
    var themes = document.querySelector(".main")

   




    
    function myCheckboxcheck(){
        if(myCheckbox1.checked && myCheckbox2.checked){
            charac= [...characters.slice(0,52)];
         }
        else if(myCheckbox1.checked){
           charac= [...characters.slice(0,62)];
        }
        else if(myCheckbox2.checked){
             charac=[...arrayLetters];
            
        }
        else{
   
           charac=[...characters]
        }

    }

   
    


function setlength() {



    // if(myCheckbox1.checked && myCheckbox2.checked){
    //    var charac = characters.slice(0,52)
    //  }
    // else if(myCheckbox1.checked){
    //    charac = characters.slice(0,62)
    // }
    // else if(myCheckbox2.checked){
    //      charac = arrayLetters;
    // }
    myCheckboxcheck();

   
    btnGene1.textContent = "";
    btnGene2.textContent = "";


    var submitButton = document.getElementById("submitButton");
    var inputNumber = document.getElementById("inputNumber");

    // Get the value of the input as a number
    var number = parseFloat(inputNumber.value);

    //check if the input value is a number
    if (isNaN(number)) {
        alert("Please enter a valid number");
    }
    else {
        //  console.log("The number you entered is " + number); 
        // if it is a number use it in the code below

        for (var i = 0; i < number; i++) {
            let randomNum1 = Math.floor(Math.random() * charac.length);
            let randomNum2 = Math.floor(Math.random() * charac.length);
            btnGene1.textContent += charac[randomNum1];
            btnGene2.textContent += charac[randomNum2];


        }

    }
    inputNumber.value = "";

}
function toggleclick(){
    themes.classList.toggle("light-theme");
}

function numgenerator() {
    
    myCheckboxcheck();

    btnGene1.textContent = "";
    btnGene2.textContent = "";
    for (var i = 0; i < 15; i++) {
        let randomNum1 = Math.floor(Math.random() * charac.length)
        let randomNum2 = Math.floor(Math.random() * charac.length)
        btnGene1.textContent += charac[randomNum1];
        btnGene2.textContent += charac[randomNum2];


    }

}
function btnGenee1() {

   

    //Get the text of the button
    var btntext1 = btnGene1.innerHTML;

    //Create a temporary input element to copy the text to the clipboard
    var tempInput1 = document.createElement("input");
    tempInput1.value = btntext1;

    document.body.appendChild(tempInput1);
    
    //Select and copy the text

    tempInput1.select();
    document.execCommand("copy");

    //Remove the temporary element from the DOM
    document.body.removeChild(tempInput1);

    //alert the user that the text was copied

    alert("Text copied successfully to clipboard => " + btntext1);


}
function btnGenee2() {


    var btntext2 = btnGene2.innerHTML;

    var tempInput2 = document.createElement("input");
    tempInput2.value = btntext2;
    document.body.appendChild(tempInput2);

    tempInput2.select();
    document.execCommand("copy");


    document.body.removeChild(tempInput2);

    alert("Text copied successfully to clipboard => " + btntext2);




}









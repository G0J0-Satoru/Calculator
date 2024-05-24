const display = document.getElementById("display");


function appendToDisplay(input){
    display.value+= input;
}




function calculate(){


    //try block is used 
    try{
        display.value = eval(display.value); //this is the inbuilt js calculator evalu
 
    }

    catch (error){

        display.value = "Error";
    }


}



function clearDisplay() {
    
    display.value = "";
}

//when ever clear is clicked the displays value will go empty
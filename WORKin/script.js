'use strict';

//USER Interaction
function main() {
    let button1 = document.getElementById("submit");
    button1.addEventListener('click', clickHandler);
    let spinBtn =  document.querySelector(".spin");
    spinBtn.addEventListener('click', spin);
let pageadjusts = document.getElementsByClassName("radio")
for (let pageadjust of pageadjusts){
    pageadjust.addEventListener('change', handleStyling);
}

    
  }
//Wheel function  
  function spin() {
    let x = 1024;
	let y = 9999;
	let deg = Math.floor(Math.random() * (x - y)) + y; 
	document.getElementById('box').style.transform = "rotate("+deg+"deg)";

	let mainbox = document.getElementById('mainbox');
	mainbox.classList.remove(stylevalues.classes[1]);
	setTimeout(function(){
		mainbox.classList.add(stylevalues.classes[1]);
	},5000);
}
//Radio Buttons
function handleStyling(evnt) {
   let radioValue = evnt.target.value;
   let credit = document.getElementById('credit');
   let bodyC =  document.querySelector('body');
    if (radioValue === stylevalues.arrayTF[0]) {
    bodyC.style.backgroundImage = "url('img/watch2.jpg')";
    credit.classList.remove(stylevalues.classes[0]);

    }else if (radioValue === stylevalues.arrayTF[1]) {
        bodyC.style.backgroundImage = "url('img/sky.jpg')";
        credit.classList.remove(stylevalues.classes[0]);

        
        

     }
     else if (radioValue === stylevalues.arrayTF[2]) {
        bodyC.style.backgroundImage = "url('img/street.jpg')";
        credit.classList.remove(stylevalues.classes[0]);

        
        

     }
     else if (radioValue === stylevalues.arrayTF[3]) {
        bodyC.style.backgroundImage = "url('img/tree.jpg')";
        credit.classList.remove(stylevalues.classes[0]);

        
        

     }
     else if (radioValue === stylevalues.arrayTF[4]) {
        bodyC.style.backgroundImage = "url('img/souths.jpg')";
        credit.classList.remove(stylevalues.classes[0]);

        
        

     }
     else {
        bodyC.style.backgroundColor = '#F44336';
        credit.classList.add(stylevalues.classes[0]);


     }
}
//Form
 function clickHandler() {
    let Lspinners =  document.querySelector(".box1");
    let Tspinners =  document.querySelector(".box2");

    let userinputs =  document.querySelectorAll(".prize");
    let inputtext1 = userinputs[0].value;
    let inputtext2 = userinputs[1].value;
    let inputtext3 = userinputs[2].value;
    let inputtext4 = userinputs[3].value;
    let inputtext5 = userinputs[4].value;
    let inputtext6 = userinputs[5].value;
    let inputtext7 = userinputs[6].value;
    let inputtext8 = userinputs[7].value;
    let FLspinn = Lspinners.firstElementChild;
    let LLspinn = Lspinners.lastElementChild;
    let L2spin = FLspinn.nextElementSibling;
    let L3spin = L2spin.nextElementSibling;
    let FTspinn = Tspinners.firstElementChild;
    let LTspinn = Tspinners.lastElementChild;
    let T2spin = FTspinn.nextElementSibling;
    let T3spin = T2spin.nextElementSibling;

    FLspinn.firstElementChild.textContent = inputtext1;
    L2spin.firstElementChild.innerHTML = inputtext2;
    L3spin.lastElementChild.innerHTML = inputtext3;
    LLspinn.lastElementChild.innerHTML = inputtext4;
    FTspinn.firstElementChild.textContent = inputtext5;
    T2spin.firstElementChild.innerHTML = inputtext6;
    LTspinn.lastElementChild.innerHTML = inputtext7;
    T3spin.lastElementChild.innerHTML = inputtext8;


    
      }
//backgroundColor on load in
function colors() {
        let request = new XMLHttpRequest();
        request.open('GET', 'colors.json');
        request.responseType = 'json';
        request.send();
    
        request.addEventListener('load', handleAjaxResponse);
    
        request.addEventListener('error', function(evnt) {
            console.error('Request Failed');
            console.error(evnt);
        });
    }
//GRAB JSON
function handleAjaxResponse(evnt) {
        if (evnt.target.statusText !== 'OK') {
            console.error(evnt.target.statusText);
            console.error(evnt.target.status);
            return;
        }
        let bodyC =  document.querySelector('body');
        let loadedData = evnt.target.response;
        bodyC.style.backgroundColor = loadedData.crimson;       
    }
//obj
const stylevalues = {
        arrayTF:["1","2","3","4","5","6"],
        classes: ['invis', 'animate']
    };
colors();
main();

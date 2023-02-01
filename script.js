
// // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> start for popUp 
function togglePopup(){
    document.getElementById("popUp1").classList.toggle("active");}
// 
// // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> end for popUp 
//  const replay = document.querySelector('#rePlay');

//  replay.addEventListener('click',()=>{
//     yourText.textContent = ``;
//     pcText.textContent = ` `;
//       showWinner.textContent = "";
//       btnP.style.display ="inline";
//       line1.style.display="inline"
//       line2.style.display="inline";
//       line3.style.display="inline";
//       btnS.style.display="inline";
//         btnR.style.display="inline";
//       tryagain.textContent="";
//       btnS.style.border = "";
//       btnR.style.border = "";
//       btnP.style.border = "";
//       show2.innerHTML="";
//       show2.style.border="";
//       pickYou.innerHTML="";
//       pickPc.innerHTML="";

//  });

let yourText = document.querySelector("#yourPicked");
let pcText = document.querySelector("#pcPicked");
let btnP = document.querySelector('.BtnP');
let btnR = document.querySelector('.BtnR');
let btnS = document.querySelector('.BtnS');
let showWinner =document.querySelector('#finalResult');
let tryagain = document.querySelector('#tryAgain');
let line1 = document.querySelector('.line1');
let line2 = document.querySelector('.line2');
let line3 = document.querySelector('.line3');
var counter = 0;
let pic1 = document.querySelector("#img1");
let pic2 = document.querySelector("#img2");
let pic3 = document.querySelector("#img3");
let show2 = document.querySelector('#showPc');
let pickYou=document.querySelector('#pickYou');
let pickPc=document.querySelector('#pickPc');


 const randNum1 = Math.floor(Math.random() * 3) +1;


btnS.addEventListener('click',()=>{
       if(randNum1==1){


        show2.innerHTML=`<img src="https://imgs.search.brave.com/vg1EwAtXpmq4bdTroAINvHgYg8UqVMrnV2AL6thdQHE/rs:fit:474:225:1/g:ce/aHR0cHM6Ly90c2U0/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5t/ZEoyNXNQUjJoVjdo/d041dUtWQ0lnSGFI/YSZwaWQ9QXBp">`
        show2.style.border="10px solid #1C6817";
        
        btnS.style.border = "10px solid #581845";
        pickYou.innerHTML="You Picked";
        pickPc.innerHTML="Pc Picked";

        // imgR.style.display="none"
        // btnP.style.display ="none";
        line1.style.display="none"
        line2.style.display="none";
        line3.style.display="none";
        btnR.style.display="none";
        btnP.style.display="none";
        tryagain.innerHTML ="try again(This match is tie)";
        var rePlay = document.createElement("button");

        var text = document.createTextNode("Play Again");
        rePlay.appendChild(text);
        
        rePlay.setAttribute("id", "#rePlay");
        
        rePlay.addEventListener("click", function(){
            yourText.textContent = ``;
                pcText.textContent = ` `;
                  showWinner.textContent = "";
                  btnP.style.display ="inline";
                  line1.style.display="inline"
                  line2.style.display="inline";
                  line3.style.display="inline";
                  btnS.style.display="inline";
                    btnR.style.display="inline";
                  tryagain.textContent="";
                  btnS.style.border = "";
                  btnR.style.border = "";
                  btnP.style.border = "";
                  show2.innerHTML="";
                  show2.style.border="";
                  pickYou.innerHTML="";
                  pickPc.innerHTML="";
        });
        
        document.body.appendChild(rePlay);
        rePlay.style.position = "absolute";
        
        rePlay.style.top = "370px";
        rePlay.style.left= "730px";
        document.body.appendChild(rePlay);
        
        rePlay.style.width="141px";
        rePlay.style.height="45px";

        

       }
       else if(randNum1==2){
        show2.innerHTML=`<img src="https://imgs.search.brave.com/4wmXjN3l-oq6LRMzutW1NHSbmFXCCEiJhzoiPg6ntSA/rs:fit:180:225:1/g:ce/aHR0cHM6Ly90c2U0/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC54/T2VUSWlEZWtZN0V5/VWxYWnRVNG5RQUFB/QSZwaWQ9QXBp">`
        btnS.style.border = "10px solid #581845";
        show2.style.width="100px"
        show2.style.height="100px"
        show2.style.border="10px solid #1C6817"
        btnS.style.borderRadius = "50%";

        pickYou.innerHTML="You Picked";
        pickPc.innerHTML="Pc picked";
        // btnP.style.display ="none";
        line1.style.display="none"
        line2.style.display="none";
        line3.style.display="none";

        btnR.style.display="none";
        btnP.style.display="none";
        showWinner.innerHTML="Oops😟You lost against pc";
   
        var rePlay = document.createElement("button");

var text = document.createTextNode("Play Again");
rePlay.appendChild(text);

rePlay.setAttribute("id", "#rePlay");

rePlay.addEventListener("click", function(){
    yourText.textContent = ``;
        pcText.textContent = ` `;
          showWinner.textContent = "";
          btnP.style.display ="inline";
          line1.style.display="inline"
          line2.style.display="inline";
          line3.style.display="inline";
          btnS.style.display="inline";
            btnR.style.display="inline";
          tryagain.textContent="";
          btnS.style.border = "";
          btnR.style.border = "";
          btnP.style.border = "";
          show2.innerHTML="";
          show2.style.border="";
          pickYou.innerHTML="";
          pickPc.innerHTML="";
});

document.body.appendChild(rePlay);
rePlay.style.position = "absolute";

rePlay.style.top = "370px";
rePlay.style.left= "730px";
document.body.appendChild(rePlay);

rePlay.style.width="141px";
rePlay.style.height="45px";

         
       }
       else{
        btnS.style.border = "10px solid #581845";

         show2.innerHTML=`<img src="https://imgs.search.brave.com/brss2OLCKsgCZXNnxy2nLgFb8QAw0Wb2jwIRNqT5aUA/rs:fit:474:225:1/g:ce/aHR0cHM6Ly90c2Ux/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5z/M1BheDNWZENOaWdU/UW03dUwtNWhBSGFI/YSZwaWQ9QXBp">`;
         show2.style.border="10px solid #1C6817";
           btnP.style.display="none";
           line1.style.display="none"
           line2.style.display="none";
           line3.style.display="none";
           btnR.style.display="none";
        btnP.style.display="none";
        pickYou.innerHTML="You Picked";
        pickPc.innerHTML="Pc Picked";

           showWinner.innerHTML="Congrats😍You won against pc";
        //    document.getElementById("BtnR")= "https://imgs.search.brave.com/brss2OLCKsgCZXNnxy2nLgFb8QAw0Wb2jwIRNqT5aUA/rs:fit:474:225:1/g:ce/aHR0cHM6Ly90c2Ux/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5z/M1BheDNWZENOaWdU/UW03dUwtNWhBSGFI/YSZwaWQ9QXBp";


           
        counter=counter+1;
        document.getElementById("counter").innerHTML=counter;

        var rePlay = document.createElement("button");

var text = document.createTextNode("Play Again");
rePlay.appendChild(text);

rePlay.setAttribute("id", "#rePlay");

rePlay.addEventListener("click", function(){
    yourText.textContent = ``;
        pcText.textContent = ` `;
          showWinner.textContent = "";
          btnP.style.display ="inline";
          line1.style.display="inline"
          line2.style.display="inline";
          line3.style.display="inline";
          btnS.style.display="inline";
            btnR.style.display="inline";
          tryagain.textContent="";
          btnS.style.border = "";
          btnR.style.border = "";
          btnP.style.border = "";
          show2.innerHTML="";
          show2.style.border="";
          pickYou.innerHTML="";
          pickPc.innerHTML="";
});

document.body.appendChild(rePlay);
rePlay.style.position = "absolute";

rePlay.style.top = "370px";
rePlay.style.left= "730px";
document.body.appendChild(rePlay);

rePlay.style.width="141px";
rePlay.style.height="45px";


       }
});
btnR.addEventListener('click',()=>{

    if(randNum1==1){
        // btnP.style.display = "none";
        // show1.innerHTML=`<img src="">`
        btnR.style.border = "10px solid #581845";
        
        show2.innerHTML=`<img src="https://imgs.search.brave.com/vg1EwAtXpmq4bdTroAINvHgYg8UqVMrnV2AL6thdQHE/rs:fit:474:225:1/g:ce/aHR0cHM6Ly90c2U0/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5t/ZEoyNXNQUjJoVjdo/d041dUtWQ0lnSGFI/YSZwaWQ9QXBp">`
        show2.style.border="10px solid #1C6817"

        counter=counter+1;
        document.getElementById("counter").innerHTML=counter;
        line1.style.display="none"
        line2.style.display="none";
        line3.style.display="none";
        btnS.style.display="none";
        btnP.style.display="none";
        pickYou.innerHTML="You Picked";
        pickPc.innerHTML="Pc Picked";
        showWinner.innerHTML ="Congrats😍You won against pc";
        var rePlay = document.createElement("button");

var text = document.createTextNode("Play Again");
rePlay.appendChild(text);

rePlay.setAttribute("id", "#rePlay");

rePlay.addEventListener("click", function(){
    yourText.textContent = ``;
        pcText.textContent = ` `;
          showWinner.textContent = "";
          btnP.style.display ="inline";
          line1.style.display="inline"
          line2.style.display="inline";
          line3.style.display="inline";
          btnS.style.display="inline";
            btnR.style.display="inline";
          tryagain.textContent="";
          btnS.style.border = "";
          btnR.style.border = "";
          btnP.style.border = "";
          show2.innerHTML="";
          show2.style.border="";
          pickYou.innerHTML="";
          pickPc.innerHTML="";
});

document.body.appendChild(rePlay);
rePlay.style.position = "absolute";

rePlay.style.top = "370px";
rePlay.style.left= "730px";
document.body.appendChild(rePlay);

rePlay.style.width="141px";
rePlay.style.height="45px";



    }
    else if(randNum1==2){
        btnR.style.border = "10px solid #581845";
        show2.innerHTML=`<img src="https://imgs.search.brave.com/4wmXjN3l-oq6LRMzutW1NHSbmFXCCEiJhzoiPg6ntSA/rs:fit:180:225:1/g:ce/aHR0cHM6Ly90c2U0/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC54/T2VUSWlEZWtZN0V5/VWxYWnRVNG5RQUFB/QSZwaWQ9QXBp">`
        // img.style.width="100px";
        // img.style.height="100px";

        show2.style.border="10px solid #1C6817"

        //  btnS.setAttribute("src", "downloads/rock.img1.jpg");
        //  btnR.setAttribute("src","downloads/rock.img1.jpg")
        //  btnP.style.display ="none";   
         line1.style.display="none"
         line2.style.display="none";
         line3.style.display="none";
         btnS.style.display="none";
         btnP.style.display="none";
         pickYou.innerHTML="You Picked";
        pickPc.innerHTML="Pc Picked";
         tryagain.innerHTML ="try again(This match is tie)";

         var rePlay = document.createElement("button");

var text = document.createTextNode("Play Again");
rePlay.appendChild(text);

rePlay.setAttribute("id", "#rePlay");

rePlay.addEventListener("click", function(){
    yourText.textContent = ``;
        pcText.textContent = ` `;
          showWinner.textContent = "";
          btnP.style.display ="inline";
          line1.style.display="inline"
          line2.style.display="inline";
          line3.style.display="inline";
          btnS.style.display="inline";
            btnR.style.display="inline";
          tryagain.textContent="";
          btnS.style.border = "";
          btnR.style.border = "";
          btnP.style.border = "";
          show2.innerHTML="";
          show2.style.border="";
          pickYou.innerHTML="";
          pickPc.innerHTML="";
});

document.body.appendChild(rePlay);
rePlay.style.position = "absolute";

rePlay.style.top = "370px";
rePlay.style.left= "730px";
document.body.appendChild(rePlay);

rePlay.style.width="141px";
rePlay.style.height="45px";


    }
    else{
        // btnS.setAttribute("src", "href/https://imgs.search.brave.com/4wmXjN3l-oq6LRMzutW1NHSbmFXCCEiJhzoiPg6ntSA/rs:fit:180:225:1/g:ce/aHR0cHM6Ly90c2U0/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC54/T2VUSWlEZWtZN0V5/VWxYWnRVNG5RQUFB/QSZwaWQ9QXBp");
        // btnR.setAttribute("src", "href/https://imgs.search.brave.com/brss2OLCKsgCZXNnxy2nLgFb8QAw0Wb2jwIRNqT5aUA/rs:fit:474:225:1/g:ce/aHR0cHM6Ly90c2Ux/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5z/M1BheDNWZENOaWdU/UW03dUwtNWhBSGFI/YSZwaWQ9QXBp")
        // btnP.style.display ="none";  
        btnR.style.border = "10px solid #581845";
        show2.innerHTML=`<img src="https://imgs.search.brave.com/brss2OLCKsgCZXNnxy2nLgFb8QAw0Wb2jwIRNqT5aUA/rs:fit:474:225:1/g:ce/aHR0cHM6Ly90c2Ux/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5z/M1BheDNWZENOaWdU/UW03dUwtNWhBSGFI/YSZwaWQ9QXBp">`
        show2.style.border="10px solid #1C6817"

 
        line1.style.display="none"
        line2.style.display="none";
        line3.style.display="none";
        btnS.style.display="none";
        btnP.style.display="none";
        pickYou.innerHTML="You Picked";
        pickPc.innerHTML="Pc Picked";
        showWinner.innerHTML="Oops😟You lost against pc";
        var rePlay = document.createElement("button");

var text = document.createTextNode("Play Again");
rePlay.appendChild(text);

rePlay.setAttribute("id", "#rePlay");

rePlay.addEventListener("click", function(){
    yourText.textContent = ``;
        pcText.textContent = ` `;
          showWinner.textContent = "";
          btnP.style.display ="inline";
          line1.style.display="inline"
          line2.style.display="inline";
          line3.style.display="inline";
          btnS.style.display="inline";
            btnR.style.display="inline";
          tryagain.textContent="";
          btnS.style.border = "";
          btnR.style.border = "";
          btnP.style.border = "";
          show2.innerHTML="";
          show2.style.border="";
          pickYou.innerHTML="";
          pickPc.innerHTML="";
});

document.body.appendChild(rePlay);
rePlay.style.position = "absolute";

rePlay.style.top = "370px";
rePlay.style.left= "730px";
document.body.appendChild(rePlay);

rePlay.style.width="141px";
rePlay.style.height="45px";


    }
});
btnP.addEventListener('click',()=>{
    if(randNum1==1){
      btnP.style.border = "10px solid #581845";
      show2.innerHTML=`<img src="https://imgs.search.brave.com/vg1EwAtXpmq4bdTroAINvHgYg8UqVMrnV2AL6thdQHE/rs:fit:474:225:1/g:ce/aHR0cHM6Ly90c2U0/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5t/ZEoyNXNQUjJoVjdo/d041dUtWQ0lnSGFI/YSZwaWQ9QXBp">`
        show2.style.border="10px solid #1C6817"


        // btnS.setAttribute("src", "href/https://imgs.search.brave.com/brss2OLCKsgCZXNnxy2nLgFb8QAw0Wb2jwIRNqT5aUA/rs:fit:474:225:1/g:ce/aHR0cHM6Ly90c2Ux/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5z/M1BheDNWZENOaWdU/UW03dUwtNWhBSGFI/YSZwaWQ9QXBp");
        // btnR.setAttribute("src", "href/https://imgs.search.brave.com/vg1EwAtXpmq4bdTroAINvHgYg8UqVMrnV2AL6thdQHE/rs:fit:474:225:1/g:ce/aHR0cHM6Ly90c2U0/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5t/ZEoyNXNQUjJoVjdo/d041dUtWQ0lnSGFI/YSZwaWQ9QXBp");
        // btnP.style.display ="none";
        line1.style.display="none"
        line2.style.display="none";
        line3.style.display="none";
        btnS.style.display="none";
        btnR.style.display="none";
        pickYou.innerHTML="You Picked";
        pickPc.innerHTML="Pc Picked";
        showWinner.innerHTML ="Oops😟You lost against pc";

        var rePlay = document.createElement("button");

        var text = document.createTextNode("Play Again");
        rePlay.appendChild(text);
        
        rePlay.setAttribute("id", "#rePlay");
        
        rePlay.addEventListener("click", function(){
            yourText.textContent = ``;
                pcText.textContent = ` `;
                  showWinner.textContent = "";
                  btnP.style.display ="inline";
                  line1.style.display="inline"
                  line2.style.display="inline";
                  line3.style.display="inline";
                  btnS.style.display="inline";
                    btnR.style.display="inline";
                  tryagain.textContent="";
                  btnS.style.border = "";
                  btnR.style.border = "";
                  btnP.style.border = "";
                  show2.innerHTML="";
                  show2.style.border="";
                  pickYou.innerHTML="";
                  pickPc.innerHTML="";
        });
        
        document.body.appendChild(rePlay);
        rePlay.style.position = "absolute";
        
        rePlay.style.top = "370px";
        rePlay.style.left= "730px";
        document.body.appendChild(rePlay);
        
        rePlay.style.width="141px";
        rePlay.style.height="45px";

    }
    else if(randNum1==2){
      btnP.style.border = "10px solid #581845";
      show2.innerHTML=`<img src="https://imgs.search.brave.com/4wmXjN3l-oq6LRMzutW1NHSbmFXCCEiJhzoiPg6ntSA/rs:fit:180:225:1/g:ce/aHR0cHM6Ly90c2U0/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC54/T2VUSWlEZWtZN0V5/VWxYWnRVNG5RQUFB/QSZwaWQ9QXBp">`
        show2.style.border="10px solid #1C6817"


        // btnP.style.display="none";
        // btnS.setAttribute("src", "href/https://imgs.search.brave.com/brss2OLCKsgCZXNnxy2nLgFb8QAw0Wb2jwIRNqT5aUA/rs:fit:474:225:1/g:ce/aHR0cHM6Ly90c2Ux/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5z/M1BheDNWZENOaWdU/UW03dUwtNWhBSGFI/YSZwaWQ9QXBp");
        counter=counter+1;
        document.getElementById("counter").innerHTML=counter;
        line1.style.display="none"
        line2.style.display="none";
        line3.style.display="none";
        pickYou.innerHTML="You Picked";
        pickPc.innerHTML="Pc picked";
        
        btnS.style.display="none";
        btnR.style.display="none";
        showWinner.innerHTML ="Congrats😍You won against pc"

        var rePlay = document.createElement("button");

var text = document.createTextNode("Play Again");
rePlay.appendChild(text);

rePlay.setAttribute("id", "#rePlay");

rePlay.addEventListener("click", function(){
    yourText.textContent = ``;
        pcText.textContent = ` `;
          showWinner.textContent = "";
          btnP.style.display ="inline";
          line1.style.display="inline"
          line2.style.display="inline";
          line3.style.display="inline";
          btnS.style.display="inline";
            btnR.style.display="inline";
          tryagain.textContent="";
          btnS.style.border = "";
          btnR.style.border = "";
          btnP.style.border = "";
          show2.innerHTML="";
          show2.style.border="";
          pickYou.innerHTML="";
          pickPc.innerHTML="";
});

document.body.appendChild(rePlay);
rePlay.style.position = "absolute";

rePlay.style.top = "370px";
rePlay.style.left= "730px";
document.body.appendChild(rePlay);

rePlay.style.width="141px";
rePlay.style.height="45px";

    }
    else{
        // btnS.setAttribute("src", "href/https://imgs.search.brave.com/brss2OLCKsgCZXNnxy2nLgFb8QAw0Wb2jwIRNqT5aUA/rs:fit:474:225:1/g:ce/aHR0cHM6Ly90c2Ux/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5z/M1BheDNWZENOaWdU/UW03dUwtNWhBSGFI/YSZwaWQ9QXBp");
        // btnR.setAttribute("src", "href/https://imgs.search.brave.com/brss2OLCKsgCZXNnxy2nLgFb8QAw0Wb2jwIRNqT5aUA/rs:fit:474:225:1/g:ce/aHR0cHM6Ly90c2Ux/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5z/M1BheDNWZENOaWdU/UW03dUwtNWhBSGFI/YSZwaWQ9QXBp");
        // btnP.style.display="none";
        btnP.style.border = "10px solid #581845";
        show2.innerHTML=`<img src="https://imgs.search.brave.com/brss2OLCKsgCZXNnxy2nLgFb8QAw0Wb2jwIRNqT5aUA/rs:fit:474:225:1/g:ce/aHR0cHM6Ly90c2Ux/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5z/M1BheDNWZENOaWdU/UW03dUwtNWhBSGFI/YSZwaWQ9QXBp">`;
        show2.style.border="10px solid #1C6817"
        show2.style.height="100px";
        show2.style.width="100px";
        // tryagain.innerHTML ="try again";
        line1.style.display="none"
        line2.style.display="none";
        line3.style.display="none";
        btnS.style.display="none";
        btnR.style.display="none";
        pickYou.innerHTML="You Picked";
        pickPc.innerHTML="Pc Picked";
        tryagain.innerHTML ="try again(This match is tie)";

        var rePlay = document.createElement("button");
var text = document.createTextNode("Play Again");
rePlay.appendChild(text);

rePlay.setAttribute("id", "#rePlay");

rePlay.addEventListener("click", function(){
    yourText.textContent = ``;
        pcText.textContent = ` `;
          showWinner.textContent = "";
          btnP.style.display ="inline";
          line1.style.display="inline"
          line2.style.display="inline";
          line3.style.display="inline";
          btnS.style.display="inline";
          btnR.style.display="inline";
          tryagain.textContent="";
          btnS.style.border = "";
          btnR.style.border = "";
          btnP.style.border = "";
          show2.innerHTML="";
          show2.style.border="";
          pickYou.innerHTML="";
          pickPc.innerHTML="";
});

document.body.appendChild(rePlay);
rePlay.style.position = "absolute";

rePlay.style.top = "370px";
rePlay.style.left= "730px";
document.body.appendChild(rePlay);

rePlay.style.width="141px";
rePlay.style.height="45px";

    }
});




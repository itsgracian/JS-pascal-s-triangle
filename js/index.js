//# Hey my name is gratian tuyishimire, this is my work
//@thank you.

//@beginning of my code
//@footer add current year to footer
let footerYear=document.querySelector(".fullyear");
//@add footerYear to index.html
footerYear.textContent=new Date().getFullYear();
//so after footer stuff
//@ getform assignment
const getForm=document.querySelector(".btn-submit");

//@ now i am going to deal with number that comes from input value
//@and validation before pascal's triangle
//@but before that let's create element that will be envoked when there is
//error in validation method ;
//@element creation start

const divisionError=document.createElement('div');
const h5=document.createElement('h5');
const closeError=document.createElement('div');
//set textContent
closeError.innerHTML='<p>X</p>';
//set attribute
divisionError.setAttribute('class','errors');
closeError.setAttribute('class','closeError');
divisionError.appendChild(h5);
divisionError.appendChild(closeError);

const validation=number=>{
  //@validation
  //check if input data is number and is not empty
  if (number=="") {
    //@set error when input is empty
  h5.textContent='please input field is required.';
    //append divisionError to errorDisp
    const errorDisp=document.querySelector(".errorDisp");
    divisionError.style.display='block';
    errorDisp.appendChild(divisionError);
  }
  else if (isNaN(number)) {
  h5.textContent='please input field must only be a number.';
    //append divisionError to errorDisp
    divisionError.style.display='block';
    const errorDisp=document.querySelector(".errorDisp");
    errorDisp.appendChild(divisionError);
  }else {
    return true;
  }
}
//@add event listener when btn is clicked
//on getForm variable
getForm.addEventListener('click',pascalTriangle);

function pascalTriangle(e){
  e.preventDefault();
  //validation of input data
   let number=document.querySelector(".number").value;
   //@check for validation
   if (validation(number)==true) {
     //make divisionError invisible
     divisionError.style.display='none';
     //@time to start pascal triangles
     var triangle=[
       [1]
     ];
     var rep;

     for(var i=0; i<number-1;i++)
       {
         rep=[1];
         //@for
         for(var j=1; j < triangle[i].length; j++ ){
           rep[j]=triangle[i][j]+triangle[i][j-1];
         }
         rep.push(1);
         triangle.push(rep);
       }
       //create new element and append to the body of html document
       const overlay=document.querySelector(".overlay");
       const dataStore=document.querySelector('.dataStore');
       //@set attribute

       let output="";
      //@loop through
      for(var i in triangle){
         output +="<p>"+triangle[i]+"</p>";
      }
      //append
      dataStore.innerHTML="<p>"+output+"</p>";
      overlay.style.display='block';
   }
}





/*hide error displays*/
closeError.addEventListener('click',()=>{
  divisionError.style.display='none';
});
//closing overlay
close=document.querySelector(".closeDv");
close.addEventListener('click',()=>{
  document.querySelector(".overlay").style.display='none';
})

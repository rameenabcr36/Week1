
function display_none(x){

    var classfaq = 'faq-' +x;
var toc=document.getElementById(classfaq);
var classsvg = 'svg' +x;
var svg11=document.getElementById(classsvg);

if (toc.style.display === "none") {
    toc.style.display = "block";
    svg11.style.transform='rotate(45deg)';
} else {
    toc.style.display = "none";
    svg11.style.transform='rotate(0deg)';
    
}


}

function ValidateEmail(input) {

    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  
    if (input.value.match(validRegex)) {
  
      alert("Valid email address!");
  
      document.form1.text1.focus();
  
      return true;
  
    } else {
  
      alert("Invalid email address!");
  
      document.form1.text1.focus();
  
      return false;
  
    }
  
  }
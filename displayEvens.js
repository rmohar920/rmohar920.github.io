function clearErrors() {
    for (var loopCounter = 0;
          loopCounter < document.forms["evenNumbers"].elements.length;
        loopCounter++) {
          if (document.forms["evenNumbers"].elements[loopCounter]
           .parentElement.className.indexOf("has-") != -1) {

 document.forms["evenNumbers"].elements[loopCounter]
               .parentElement.className = "form-group";
        }
    }
}

function resetForm() {
    clearErrors();
       document.forms["evenNumbers"]["startNum"].value="";
    document.forms["evenNumbers"]["endNum"].value="";
    document.forms["evenNumbers"]["stepNum"].value="";
     document.getElementById("submitButton").innerText = "Display Evens";
    document.forms["evenNumbers"]["startNum"].focus();
}

function validateItems() {
    clearErrors();
    var startNum = document.forms["evenNumbers"]["startNum"].value;
      var endNum = document.forms["evenNumbers"]["endNum"].value;
    var stepNum = document.forms["evenNumbers"]["stepNum"].value;
       if (startNum == "" || isNaN(startNum)) {
        alert("Starting number must be filled in with a number.");
        document.forms["evenNumbers"]["startNum"]
           .parentElement.className = "form-group has-error";
        document.forms["evenNumbers"]["startNum"].focus();
        return false;
    }
   if (endNum == "" || isNaN(endNum) || Number(endNum) <= Number(startNum)) {
       alert("Ending number must be filled in with a number that is greater than the starting number.");
         document.forms["evenNumbers"]["endNum"]
          .parentElement.className = "form-group has-error"
       document.forms["evenNumbers"]["endNum"].focus();
       return false;
   }
   if (stepNum == "" || isNaN(stepNum) || stepNum < 0) {
    alert("Step number must be filled in with a number that is greater than 0.");
       document.forms["evenNumbers"]["stepNum"]
       .parentElement.className = "form-group has-error"
    document.forms["evenNumbers"]["stepNum"].focus();
    return false;
    }
     document.getElementById("submitButton").innerText = "Recalculate";
   document.getElementById("displayStartNum").innerText = startNum;
     document.getElementById("displayEndNum").innerText = endNum;
   document.getElementById("displayStepNum").innerText = stepNum;
       for (var i = Number(startNum); i <= Number(endNum); i+=Number(stepNum)){
       if (Number(i) % 2 === 0){
          document.getElementById("results").innerHTML += i + "<br/>";
       }
    }

    return false;
 }

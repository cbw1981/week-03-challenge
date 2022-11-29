//define variables
var upper=["A","B","C","D","E","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var lower=['a','b','c','d','e','f','g','h','i','j','k','l','m','o','p','q','r','s','t','u','v','q','r','s','t','u','v','w','x','y','z'];
var number=['0','1','2','3','4','5','6','7','8','9'];
var specChar =['!','@','#','$','%','^','&','*','?','<','+','>'];

var confirmUpper;
var confirmLower;
var confirmSpecChar;
var confirmNumber;
var confirmLength;
var randoPassword=""
var passwordChar=[]

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");


function generatePassword (){
  confirmLength= 
    (prompt ("Please pick a character length between 8 and 128 characters"));
  
   
    if (confirmLength<8 || confirmLength>128){
      alert ("password must be between 8-128 characters");
     var confirmLength=
      prompt ("Please pick a character length between 8 and 128 characters");
    };

    confirmLower=
    confirm ("Would you like lowercase letters? If yes click OK, if no click CANCEL");

    confirmUpper=
    confirm ("Would you like uppercase letters? If yes click OK, if no click CANCEL");

    confirmNumber=
    confirm ("Would you like to include numbers? If yes click OK, if no click CANCEL");

    confirmSpecChar=
    confirm ("How about special characters? If yes click OK, if no click CANCEL");

    if (confirmLength!=true && confirmLower!=true && confirmUpper!=true && confirmNumber!=true && confirmSpecChar!=true)
    alert ("Please select at least one character type");

    if (confirmSpecChar) {
      passwordChar = passwordChar.concat(specChar);
    }
  
    if (confirmNumber) {
      passwordChar = passwordChar.concat(number)
    }
      
    if (confirmLower) {
      passwordChar = passwordChar.concat(lower)
    }
  
    if (confirmUpper) {
      passwordChar = passwordChar.concat(upper)
    }

    for (var i = 0; i < confirmLength; i++) {
      randoPassword = randoPassword + passwordChar[Math.floor(Math.random() * passwordChar.length)];
    }
    return randoPassword;

  }
    

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

//call the function
writePassword();

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

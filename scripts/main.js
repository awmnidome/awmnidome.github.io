var myImage = document.querySelector('img');

myImage.onclick = function() {
  var mySrc = myImage.getAttribute('src');
  if(mySrc === 'images/Merry-Christmas.jpg') {
    myImage.setAttribute ('src', 'images/Merry-Christmas-holidyas.png');
  } else {
    myImage.setAttribute ('src', 'images/Merry-Christmas.jpg');
  }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'Mozilla is cool, ' + myName;
}

if(!localStorage.getItem ('name')) {
  setUserName;
} else {
  var storedName = localStorage.getItem('name');
  myHeading.textContent = 'This is a test site, ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}

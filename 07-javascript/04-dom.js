// Exercise #1:
// when the user clicks the 'copy' button, copy the user input to the output area

// fetch JavaScript objects representing specific elements in the DOM
const copyButton = document.getElementById("copy");
// add an event listener on the target element
copyButton.addEventListener("click", function handleClick() {
  // callback function to handle event
  const inputText = document.getElementById("userInput1").value;
  console.log(inputText);
  const outputField = document.getElementsByClassName("output")[0];
  outputField.textContent = inputText;
  console.log(outputField.textContent);
  //   alert("the button has been pressed");
});

// Exercise #2:
// when the user enters input text, copy the user input to the output area

// fetch JavaScript objects representing specific elements in the DOM
const inputField = document.getElementById("userInput2");
// add an event listener on the target element
inputField.addEventListener("input", function handleInput(event) {
  // callback function to handle event
  const inputText = event.target.value;
  console.log(inputText);

  const section = document.getElementById("inputEventExample");
  const outputArray = document.getElementsByClassName("output2");

  if (outputArray.length == 0) {
    //the output field doesn't exist, create it and add it to the html
    const outputSection = document.createElement("div");
    outputSection.setAttribute("class", "output2");
    section.append(outputSection);
  }

  const outputField = document.getElementsByClassName("output2")[0];
  outputField.textContent = inputText;
  console.log(outputField.textContent);
});

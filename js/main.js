const calculator = document.getElementById("calculator”");
const keys = document.getElementById("calculator__keys");
const display = document.getElementById("display");

keys.addEventListener("click", e => {
 if (e.target.matches("button")) {
    const key = e.target;
    const action = key.dataset.action;
    const keyContent = key.textContent;
    const displayedNum = display.textContent;

    if (!action) {
      if (displayedNum === '0') {
        display.textContent = keyContent;
        console.log(keyContent);
      }else {
        display.textContent = displayedNum + keyContent;
        console.log(displayedNum);
      }
    }
    if(
      action === 'add' ||
      action === 'subtract' ||
      action === 'multiply' ||
      action === 'divide'
    ) {
      console.log('operator key!')
    }
    if(action === 'decimal') {
      console.log('decimal key!')
    }

    if(action === 'clear') {
      console.log('clear key!')
    }

    if(action === 'calculate') {
      console.log('equal key!')
    }
 }
})

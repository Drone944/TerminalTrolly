//fix the errors and complete the code.

const terminalOutput = document.querySelector('.terminal-output');
const terminalInput = document.querySelector('input[type="text"]');

 
function handleInput(command) {
     

    switch (action) {
         
        case 'help':
            viewCommand();
            break;
        
        default:
            terminalOutput.textContent += `Invalid command: ${command}\n`;
            break;
    }

    terminalInput.value = '';
}

function viewCommand() {
    terminalOutput.innerHTML += "Available Commands:<br>" +
        "- list: List all products<br>" +
        "- details [product_id]: View product details<br>"+
        "- add [product_id]: Add a product to cart<br>" +
        "- cart: View your cart<br>"+
        "- buy: Buy all products in the cart<br>"+
        "- clear: Clear the screen";
}


 

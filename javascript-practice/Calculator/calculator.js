// Calculator App - Day 2
console.log("=== JavaScript Calculator ===");

// Calculator state
let currentOperation = '0';
let previousOperation = '';
let operation = null;
let waitingForOperand = false;

// DOM elements
const currentOperationElement = document.getElementById('currentOperation');
const previousOperationElement = document.getElementById('previousOperation');

// Update the display
function updateDisplay() {
    currentOperationElement.textContent = currentOperation;
    previousOperationElement.textContent = previousOperation;
    
    // Remove error class if it was added
    currentOperationElement.classList.remove('error');
}

// Append number to current operation
function appendNumber(number) {
    if (waitingForOperand) {
        currentOperation = number;
        waitingForOperand = false;
    } else {
        if (currentOperation === '0') {
            currentOperation = number;
        } else {
            currentOperation += number;
        }
    }
    updateDisplay();
}

// Handle decimal point
function appendDecimal() {
    if (waitingForOperand) {
        currentOperation = '0.';
        waitingForOperand = false;
    } else if (currentOperation.indexOf('.') === -1) {
        currentOperation += '.';
    }
    updateDisplay();
}

// Clear all (AC button)
function clearAll() {
    currentOperation = '0';
    previousOperation = '';
    operation = null;
    waitingForOperand = false;
    
    // Remove active state from all operator buttons
    document.querySelectorAll('.btn-operator').forEach(btn => {
        btn.classList.remove('active');
    });
    
    updateDisplay();
    console.log("Calculator cleared");
}

// Clear entry (CE button)
function clearEntry() {
    currentOperation = '0';
    updateDisplay();
}

// Backspace function
function backspace() {
    if (currentOperation.length > 1) {
        currentOperation = currentOperation.slice(0, -1);
    } else {
        currentOperation = '0';
    }
    updateDisplay();
}

// Set operation (+, -, ×, ÷)
function setOperation(nextOperation) {
    const inputValue = parseFloat(currentOperation);
    
    // Remove active state from all operator buttons
    document.querySelectorAll('.btn-operator').forEach(btn => {
        btn.classList.remove('active');
    });
    
    // Add active state to clicked operator button
    const operatorButton = document.querySelector(`[data-operation="${nextOperation}"]`);
    if (operatorButton) {
        operatorButton.classList.add('active');
    }
    
    if (previousOperation === '') {
        previousOperation = `${currentOperation} ${nextOperation}`;
    } else if (operation) {
        const result = performCalculation();
        
        if (result === 'Error') {
            return;
        }
        
        currentOperation = String(result);
        previousOperation = `${currentOperation} ${nextOperation}`;
    }
    
    waitingForOperand = true;
    operation = nextOperation;
    updateDisplay();
}

// Perform the actual calculation
function performCalculation() {
    const prev = parseFloat(previousOperation);
    const current = parseFloat(currentOperation);
    
    if (isNaN(prev) || isNaN(current)) {
        return 'Error';
    }
    
    let result;
    
    switch (operation) {
        case '+':
            result = prev + current;
            break;
        case '-':
            result = prev - current;
            break;
        case '×':
            result = prev * current;
            break;
        case '÷':
            if (current === 0) {
                showError("Cannot divide by zero!");
                return 'Error';
            }
            result = prev / current;
            break;
        default:
            return current;
    }
    
    // Round to avoid floating point precision issues
    result = Math.round((result + Number.EPSILON) * 100000000) / 100000000;
    
    return result;
}

// Calculate and show result (= button)
function calculate() {
    if (operation && !waitingForOperand) {
        const result = performCalculation();
        
        if (result === 'Error') {
            return;
        }
        
        previousOperation = `${previousOperation} ${currentOperation} =`;
        currentOperation = String(result);
        operation = null;
        waitingForOperand = true;
        
        // Remove active state from all operator buttons
        document.querySelectorAll('.btn-operator').forEach(btn => {
            btn.classList.remove('active');
        });
        
        updateDisplay();
        console.log(`Calculation result: ${result}`);
    }
}

// Show error message
function showError(message) {
    currentOperation = message;
    currentOperationElement.classList.add('error');
    updateDisplay();
    
    // Clear error after 2 seconds
    setTimeout(() => {
        clearAll();
    }, 2000);
    
    console.error(`Calculator error: ${message}`);
}

// Keyboard support
document.addEventListener('keydown', function(event) {
    const key = event.key;
    
    // Prevent default behavior for calculator keys
    if ('0123456789+-*/=.'.includes(key) || key === 'Enter' || key === 'Escape' || key === 'Backspace') {
        event.preventDefault();
    }
    
    // Numbers
    if (key >= '0' && key <= '9') {
        appendNumber(key);
        animateButton(`.btn-number[onclick="appendNumber('${key}')"]`);
    }
    
    // Operations
    switch (key) {
        case '+':
            setOperation('+');
            animateButton('[data-operation="+"]');
            break;
        case '-':
            setOperation('-');
            animateButton('[data-operation="-"]');
            break;
        case '*':
            setOperation('×');
            animateButton('[data-operation="×"]');
            break;
        case '/':
            setOperation('÷');
            animateButton('[data-operation="÷"]');
            break;
        case '=':
        case 'Enter':
            calculate();
            animateButton('.btn-equals');
            break;
        case '.':
            appendDecimal();
            animateButton('.btn-number[onclick="appendDecimal()"]');
            break;
        case 'Escape':
            clearAll();
            animateButton('.btn-clear[onclick="clearAll()"]');
            break;
        case 'Backspace':
            backspace();
            animateButton('.btn-clear[onclick="backspace()"]');
            break;
    }
});

// Animate button press for keyboard input
function animateButton(selector) {
    const button = document.querySelector(selector);
    if (button) {
        button.style.transform = 'scale(0.95)';
        setTimeout(() => {
            button.style.transform = '';
        }, 100);
    }
}

// Add hover sound effect (optional - browser dependent)
function playClickSound() {
    // This creates a subtle click sound using Web Audio API
    try {
        const audioContext = new (window.AudioContext || window.webkitAudioContext)();
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();
        
        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);
        
        oscillator.frequency.value = 800;
        oscillator.type = 'sine';
        
        gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.1);
        
        oscillator.start(audioContext.currentTime);
        oscillator.stop(audioContext.currentTime + 0.1);
    } catch (error) {
        // Silently fail if Web Audio API is not supported
    }
}

// Add click sound to all buttons
document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
        button.addEventListener('click', playClickSound);
    });
});

// Initialize display
updateDisplay();

console.log("Calculator loaded! Try using your keyboard or clicking buttons.");
console.log("Keyboard shortcuts: Numbers (0-9), +, -, *, /, Enter/=, Escape (clear), Backspace, . (decimal)");
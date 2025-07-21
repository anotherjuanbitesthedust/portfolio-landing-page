// DOM Manipulation Practice - Day 2
console.log("=== DOM Manipulation Practice ===");
console.log("DOM Practice loaded! Try Ctrl+D for demo mode.");

// Exercise 1: Basic Element Selection and Modification
function changeContent() {
    const title = document.getElementById('title');
    const description = document.querySelector('.description');
    
    title.textContent = 'Content Changed with JavaScript!';
    description.innerHTML = '<strong>This description was updated using DOM manipulation!</strong>';
    
    // Add some styling
    title.style.color = '#4ade80';
    description.style.fontStyle = 'italic';
}

function addHighlight() {
    const title = document.getElementById('title');
    title.classList.toggle('highlight');
}

// Exercise 2: Dynamic Task List
let taskCounter = 1;

function addTask() {
    const input = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');
    
    if (input.value.trim() === '') {
        alert('Please enter a task!');
        return;
    }
    
    // Create task element
    const taskDiv = document.createElement('div');
    taskDiv.className = 'task-item fade-in';
    taskDiv.innerHTML = `
        <span onclick="toggleComplete(this)">${input.value}</span>
        <button onclick="deleteTask(this)" style="background: #ef4444;">Delete</button>
    `;
    
    taskList.appendChild(taskDiv);
    input.value = '';
    
    console.log(`Task added: ${input.value}`);
}

function toggleComplete(taskSpan) {
    taskSpan.classList.toggle('completed');
}

function deleteTask(deleteBtn) {
    const taskDiv = deleteBtn.parentElement;
    taskDiv.remove();
}

function clearCompleted() {
    const completedTasks = document.querySelectorAll('.completed');
    completedTasks.forEach(task => {
        task.parentElement.remove();
    });
}

// Allow Enter key to add tasks
document.addEventListener('DOMContentLoaded', function() {
    const taskInput = document.getElementById('taskInput');
    if (taskInput) {
        taskInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                addTask();
            }
        });
    }
});

// Exercise 3: Interactive Color Changer
function randomColor() {
    const colorBox = document.getElementById('colorBox');
    const colors = ['#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4', '#feca57', '#ff9ff3', '#54a0ff'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    
    colorBox.style.backgroundColor = randomColor;
    colorBox.style.transform = 'scale(1.1)';
    
    setTimeout(() => {
        colorBox.style.transform = 'scale(1)';
    }, 200);
}

function resetColor() {
    const colorBox = document.getElementById('colorBox');
    colorBox.style.backgroundColor = '#3b82f6';
    colorBox.style.transform = 'scale(1)';
}

function customColor() {
    const colorPicker = document.getElementById('colorPicker');
    const colorBox = document.getElementById('colorBox');
    colorBox.style.backgroundColor = colorPicker.value;
}

// Exercise 4: Counter with Event Listeners
let counter = 0;

// Using modern event listeners instead of onclick
document.addEventListener('DOMContentLoaded', function() {
    const counterDisplay = document.getElementById('counterDisplay');
    const incrementBtn = document.getElementById('incrementBtn');
    const decrementBtn = document.getElementById('decrementBtn');
    const resetBtn = document.getElementById('resetBtn');
    const stepInput = document.getElementById('stepInput');
    
    if (counterDisplay && incrementBtn && decrementBtn && resetBtn && stepInput) {
        function updateCounter() {
            counterDisplay.textContent = counter;
            
            // Add visual feedback
            counterDisplay.style.transform = 'scale(1.1)';
            setTimeout(() => {
                counterDisplay.style.transform = 'scale(1)';
            }, 150);
        }
        
        incrementBtn.addEventListener('click', () => {
            const step = parseInt(stepInput.value) || 1;
            counter += step;
            updateCounter();
        });
        
        decrementBtn.addEventListener('click', () => {
            const step = parseInt(stepInput.value) || 1;
            counter -= step;
            updateCounter();
        });
        
        resetBtn.addEventListener('click', () => {
            counter = 0;
            updateCounter();
        });
    }
});

// Exercise 5: Form Validation
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactForm');
    const nameInput = document.getElementById('nameInput');
    const emailInput = document.getElementById('emailInput');
    const messageInput = document.getElementById('messageInput');
    
    if (form && nameInput && emailInput && messageInput) {
        // Real-time validation
        nameInput.addEventListener('blur', validateName);
        emailInput.addEventListener('blur', validateEmail);
        messageInput.addEventListener('blur', validateMessage);
        
        function validateName() {
            const nameError = document.getElementById('nameError');
            if (nameInput.value.length < 2) {
                nameError.textContent = 'Name must be at least 2 characters';
                return false;
            }
            nameError.textContent = '';
            return true;
        }
        
        function validateEmail() {
            const emailError = document.getElementById('emailError');
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            
            if (!emailRegex.test(emailInput.value)) {
                emailError.textContent = 'Please enter a valid email';
                return false;
            }
            emailError.textContent = '';
            return true;
        }
        
        function validateMessage() {
            const messageError = document.getElementById('messageError');
            if (messageInput.value.length < 10) {
                messageError.textContent = 'Message must be at least 10 characters';
                return false;
            }
            messageError.textContent = '';
            return true;
        }
        
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const isValidName = validateName();
            const isValidEmail = validateEmail();
            const isValidMessage = validateMessage();
            
            if (isValidName && isValidEmail && isValidMessage) {
                document.getElementById('formSuccess').classList.remove('hidden');
                form.reset();
                
                setTimeout(() => {
                    document.getElementById('formSuccess').classList.add('hidden');
                }, 3000);
            }
        });
    }
});

// Exercise 6: Image Gallery Simulation
function loadGallery() {
    const gallery = document.getElementById('gallery');
    const imageUrls = [
        'https://picsum.photos/200/150?random=1',
        'https://picsum.photos/200/150?random=2',
        'https://picsum.photos/200/150?random=3',
        'https://picsum.photos/200/150?random=4'
    ];
    
    gallery.innerHTML = '';
    
    imageUrls.forEach((url, index) => {
        const img = document.createElement('img');
        img.src = url;
        img.alt = `Gallery image ${index + 1}`;
        img.style.cssText = `
            width: 150px;
            height: 100px;
            object-fit: cover;
            margin: 0.5rem;
            border-radius: 5px;
            cursor: pointer;
            transition: transform 0.3s;
        `;
        
        img.addEventListener('mouseover', () => {
            img.style.transform = 'scale(1.1)';
        });
        
        img.addEventListener('mouseout', () => {
            img.style.transform = 'scale(1)';
        });
        
        img.addEventListener('click', () => {
            alert(`You clicked image ${index + 1}`);
        });
        
        gallery.appendChild(img);
    });
}

function clearGallery() {
    const gallery = document.getElementById('gallery');
    gallery.innerHTML = '';
}

// Bonus: Keyboard shortcuts
document.addEventListener('keydown', function(e) {
    // Ctrl + D for demo mode
    if (e.ctrlKey && e.key === 'd') {
        e.preventDefault();
        console.log('Demo mode activated!');
        changeContent();
        randomColor();
        loadGallery();
    }
});
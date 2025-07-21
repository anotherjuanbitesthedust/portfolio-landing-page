// ES6+ JavaScript Practice - Day 2
console.log("=== Day 2: JavaScript ES6+ Review ===");

// 1. ARROW FUNCTIONS
console.log("\n1. Arrow Functions:");

// Old way
function oldAdd(a, b) {
    return a + b;
}

// ES6 way
const add = (a, b) => a + b;
const multiply = (a, b) => a * b;
const greet = name => `Hello, ${name}!`;

console.log("add(5, 3):", add(5, 3));
console.log("multiply(4, 7):", multiply(4, 7));
console.log("greet('Developer'):", greet('Developer'));

// 2. TEMPLATE LITERALS
console.log("\n2. Template Literals:");

const name = "Frontend Developer";
const experience = 2;
const skills = ["HTML", "CSS", "JavaScript", "React"];

// Template literal with expressions
const introduction = `Hi! I'm a ${name} with ${experience} years of experience.
I specialize in: ${skills.join(', ')}.
Today is ${new Date().toDateString()}.`;

console.log(introduction);

// 3. DESTRUCTURING
console.log("\n3. Destructuring:");

// Array destructuring
const colors = ['red', 'green', 'blue', 'yellow'];
const [primary, secondary, ...otherColors] = colors;

console.log("Primary color:", primary);
console.log("Secondary color:", secondary);
console.log("Other colors:", otherColors);

// Object destructuring
const developer = {
    name: "Alex",
    age: 25,
    skills: ["React", "Node.js"],
    location: "Austin, TX"
};

const { name: devName, age, skills: devSkills, location: devLocation } = developer;
console.log(`${devName}, ${age}, lives in ${devLocation}`);
console.log("Skills:", devSkills);

// 4. SPREAD OPERATOR
console.log("\n4. Spread Operator:");

const frontendSkills = ["HTML", "CSS", "JavaScript"];
const backendSkills = ["Node.js", "Express", "MongoDB"];
const allSkills = [...frontendSkills, ...backendSkills, "Git", "React"];

console.log("All Skills:", allSkills);

// Copying arrays and objects
const originalArray = [1, 2, 3];
const copiedArray = [...originalArray, 4, 5];
console.log("Original:", originalArray, "Copied:", copiedArray);

// 5. CONST/LET vs VAR
console.log("\n5. Let/Const vs Var:");

// Block scope with let/const
if (true) {
    let blockScoped = "I'm block scoped";
    const alsoBlockScoped = "Me too!";
    var functionScoped = "I'm function scoped";
}

console.log("var works outside block:", functionScoped);

// 6. ARRAY METHODS
console.log("\n6. Modern Array Methods:");

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Map - transform each element
const doubled = numbers.map(num => num * 2);
console.log("Doubled:", doubled);

// Filter - keep elements that match condition
const evens = numbers.filter(num => num % 2 === 0);
console.log("Even numbers:", evens);

// Reduce - combine all elements into single value
const sum = numbers.reduce((acc, num) => acc + num, 0);
console.log("Sum:", sum);

// Find - get first match
const firstBigNumber = numbers.find(num => num > 5);
console.log("First number > 5:", firstBigNumber);

// Some/Every - boolean tests
const hasEvenNumber = numbers.some(num => num % 2 === 0);
const allPositive = numbers.every(num => num > 0);
console.log("Has even number:", hasEvenNumber);
console.log("All positive:", allPositive);

// 7. PRACTICAL EXERCISE
console.log("\n7. Practical Exercise:");

// Create a function that processes developer data
const processDeveloperData = (developers) => {
    return developers
        .filter(dev => dev.experience >= 2)
        .map(dev => ({
            ...dev,
            level: dev.experience >= 5 ? 'Senior' : 'Mid-level',
            introduction: `${dev.name} is a ${dev.experience >= 5 ? 'Senior' : 'Mid-level'} developer`
        }))
        .sort((a, b) => b.experience - a.experience);
};

const developerTeam = [
    { name: "Alice", experience: 3, skills: ["React", "Node.js"] },
    { name: "Bob", experience: 1, skills: ["HTML", "CSS"] },
    { name: "Carol", experience: 6, skills: ["React", "Python", "AWS"] },
    { name: "Dave", experience: 4, skills: ["Vue", "PHP"] }
];

const qualifiedDevelopers = processDeveloperData(developerTeam);
console.log("Qualified developers:", qualifiedDevelopers);
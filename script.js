function calculate() {
  const num1 = parseFloat(document.getElementById("num1").value);
  const operator = document.getElementById("operator").value;
  const num2 = parseFloat(document.getElementById("num2").value);
  let result;

  if (isNaN(num1) || isNaN(num2)) {
    result = "Invalid input!";
  } else {
    switch (operator) {
      case "+":
        result = num1 + num2;
        break;
      case "-":
        result = num1 - num2;
        break;
      case "*":
        result = num1 * num2;
        break;
      case "/":
        if (num2 === 0) {
          result = "Cannot divide by zero!";
        } else {
          result = num1 / num2;
        }
        break;
      default:
        result = "Invalid operator!";
    }
  }

  document.getElementById("result").innerText = `Result: ${result}`;
}

// Task 2: Array Operations
function calculateSum() {
  const arrayInput = document.getElementById("arrayInput").value;
  const numbers = arrayInput.split(",").map(Number);
  let Sum = 0;

  for (let number of numbers) {
    Sum += number;
  }

  document.getElementById(
    "sumResult"
  ).innerText = `Sum of array numbers: ${Sum}`;
}

// Task 3: Object Manipulation
const Person = {
  firstName: "Kamya",
  lastName: "chowdhary",
  age: 19,
  getFullName: function () {
    return `${this.firstName} ${this.lastName}`;
  },
  incrementAge: function () {
    this.age += 1;
  },
};

document.getElementById(
  "fullName"
).innerText = `Full Name: ${Person.getFullName()}`;
document.getElementById("age").innerText = `Age: ${Person.age}`;

function incrementAge() {
  Person.incrementAge();
  document.getElementById("age").innerText = `Age: ${Person.age}`;
}

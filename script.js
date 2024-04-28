let displayValue = '0';
let recentSolutions = []; // Array to store recent solutions

function updateDisplay() {
  document.getElementById('display').innerText = displayValue;
}

function updateRecentSolutions() {
  const recentSolutionsElement = document.getElementById('recentSolutions');
  recentSolutionsElement.innerHTML = ''; // Clear previous solutions
  
  recentSolutions.forEach(solution => {
    const solutionElement = document.createElement('div');
    solutionElement.textContent = solution;
    recentSolutionsElement.appendChild(solutionElement);
  });
}

function appendNumber(num) {
  if (displayValue === '0') {
    displayValue = num;
  } else {
    displayValue += num;
  }
  updateDisplay();
}

function appendOperator(operator) {
  displayValue += operator;
  updateDisplay();
}

function clearDisplay() {
  displayValue = '0';
  updateDisplay();
}

function calculate() {
  try {
    const result = eval(displayValue);
    const expression = `${displayValue} = ${result}`; // Build expression and result
    recentSolutions.push(expression); // Add expression and result to recent solutions
    updateRecentSolutions(); // Update recent solutions display
    displayValue = result.toString();
  } catch (error) {
    displayValue = 'Error';
  }
  updateDisplay();
}

function deleteLastDigit() {
  displayValue = displayValue.slice(0, -1);
  if (displayValue === '') {
    displayValue = '0';
  }
  updateDisplay();
}

function calculatePercentage() {
  displayValue = parseFloat(displayValue) / 100;
  updateDisplay();
}

function appendDecimal() {
  if (!displayValue.includes('.')) {
    displayValue += '.';
    updateDisplay();
  }
}
function showCalculator() {
  document.querySelector('.calculator').style.display = 'block';
  document.querySelector('.recent-solutions').style.display = 'none';
}

function showRecent() {
  document.querySelector('.calculator').style.display = 'none';
  document.querySelector('.recent-solutions').style.display = 'block';
}

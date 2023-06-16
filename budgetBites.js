// JavaScript code
async function generateMealPlan() {
    const numberOfMeals = document.getElementById('numberOfMeals').value;
    const budget = document.getElementById('monthlyBudget').value;
    const health = document.getElementById('healthSpecification').value;
  
    const response = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=ba00a93c69384d4dbdcf98bb53557617&number=${numberOfMeals}&diet=${health}`);
    const data = await response.json();
  
    const mealPlanTable = document.getElementById('meal-plan-table');
  
    // Clear out any existing rows in the table
    mealPlanTable.innerHTML = '';
  
    // Loop over the meal plan data and create new rows in the table
    for (let meal of data.results) {
      const row = document.createElement('tr');
  
      const cellName = document.createElement('td');
      cellName.textContent = meal.title;
      row.appendChild(cellName);
  
      const cellImage = document.createElement('td');
      const image = document.createElement('img');
      image.src = meal.image;
      image.alt = meal.title;
      cellImage.appendChild(image);
      row.appendChild(cellImage);
  
      const cellIngredients = document.createElement('td');
      const ingredientsList = document.createElement('ul');
      for (let ingredient of meal.extendedIngredients) {
        const listItem = document.createElement('li');
        listItem.textContent = ingredient.original;
        ingredientsList.appendChild(listItem);
      }
      cellIngredients.appendChild(ingredientsList);
      row.appendChild(cellIngredients);
  
      mealPlanTable.appendChild(row);
    }
  }
  
  // Attach the event listener to the button
  document.getElementById('generateButton').addEventListener('click', generateMealPlan);
  
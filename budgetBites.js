// JavaScript code
async function generateMealPlan() {
    const numberOfMeals = document.getElementById('numberOfMeals').value;
    const budget = document.getElementById('monthlyBudget').value;
    const health = document.getElementById('healthSpecification').value;

    const response = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=Api key&number=${numberOfMeals}&diet=${health}`);
    const data = await response.json();

    const mealPlanTable = document.getElementById('meal-plan-table');
    const mealPlanTableBody = mealPlanTable.getElementsByTagName('tbody')[0];

    // Clear out any existing rows in the table
    mealPlanTableBody.innerHTML = '';

    // Loop over the meal plan data and create new rows in the table
    for (let meal of data.results) {
        const row = document.createElement('tr');

        const cellDay = document.createElement('td');
        cellDay.textContent = meal.day || ''; // Check if 'day' property exists in the meal object
        row.appendChild(cellDay);

        const cellName = document.createElement('td');
        cellName.textContent = meal.title || ''; // Check if 'title' property exists in the meal object
        row.appendChild(cellName);

        const cellImage = document.createElement('td');
        const image = document.createElement('img');
        image.src = meal.image || ''; // Check if 'image' property exists in the meal object
        image.alt = meal.title || ''; // Check if 'title' property exists in the meal object
        cellImage.appendChild(image);
        row.appendChild(cellImage);

        const cellIngredients = document.createElement('td');
        const ingredientsList = document.createElement('ul');
        if (meal.extendedIngredients) {
            for (let ingredient of meal.extendedIngredients) {
                const listItem = document.createElement('li');
                listItem.textContent = ingredient.original || ''; // Check if 'original' property exists in the ingredient object
                ingredientsList.appendChild(listItem);
            }
        }
        cellIngredients.appendChild(ingredientsList);
        row.appendChild(cellIngredients);

        mealPlanTableBody.appendChild(row);
    }
}

// Attach the event listener

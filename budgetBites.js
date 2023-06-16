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
    for (let meal of data.meals) {
        const row = mealPlanTable.insertRow();

        const cellName = row.insertCell();
        cellName.innerText = meal.name;

        const cellImage = row.insertCell();
        const image = document.createElement('img');
        image.src = meal.image;
        image.alt = meal.name;
        cellImage.appendChild(image);

        const cellIngredients = row.insertCell();
        const ingredientsList = document.createElement('ul');
        for (let ingredient of meal.ingredients) {
            const listItem = document.createElement('li');
            listItem.innerText = ingredient;
            ingredientsList.appendChild(listItem);
        }
        cellIngredients.appendChild(ingredientsList);

        const cellInstructions = row.insertCell();
        const instructionsList = document.createElement('ol');
        for (let step of meal.instructions) {
            const listItem = document.createElement('li');
            listItem.innerText = step;
            instructionsList.appendChild(listItem);
        }
        cellInstructions.appendChild(instructionsList);
    }
}

// Attach the event listener to the button
document.getElementById('generateButton').addEventListener('click', generateMealPlan);
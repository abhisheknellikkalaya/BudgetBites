async function generateMealPlan() {
    const numberOfMeals = document.getElementById('number-of-meals').value;
    const budget = document.getElementById('budget').value;
    const health = document.getElementById('health').value;

    const response = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=ba00a93c69384d4dbdcf98bb53557617&number=${numberOfMeals}&diet=${health}`);
    const data = await response.json();

    const mealPlanTable = document.getElementById('meal-plan-table');
    // Clear out any existing rows in the table
    mealPlanTable.innerHTML = '';

    // Here you would loop over the meal plan data and create new rows in the table
    // for each meal, populating the rows with the meal's data. This will depend on
    // the structure of the data returned by the API.
}
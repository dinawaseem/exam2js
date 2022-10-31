$("#searchInput").keyup((e) => {
  search(e.target.value);
});

$("#searchLetter").keyup((e) => {
  searchByLetter(e.target.value);
});

let meals = [];
async function search(params) {
  let response = await fetch(
    `http://www.themealdb.com/api/json/v1/1/search.php?s=${params}`
  );
  response = await response.json();
  meals = response.meals;
  displayMeal();
}

async function searchByLetter(params) {
  let response = await fetch(
    `http://www.themealdb.com/api/json/v1/1/search.php?s=${params}`
  );
  response = await response.json();
  meals = response.meals;
  displayMeal();
}

function displayMeal() {
  let x = "";
  for (let i = 0; i < meals.length; i++) {
    x += `
    <div class="col-md-3 col-sm-12 my-2">
                <div class="parent w-100">
                    <div class="child-img" onclick="">
                        <img src="${meals[i].strMealThumb}" class="w-100">
                        <div class="child w-100">
                            <h4>${meals[i].strMeal}</h4>
                        </div>
                    </div>
                </div>
            </div>
        `;
    document.getElementById("allMeals").innerHTML = x;
  }
}

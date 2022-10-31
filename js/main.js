/*Loading Icon*/
$(document).ready(function () {
  $("#loading").fadeOut(2000, function () {
    $(document).css("overflow", "visible");
  });
});

/*Side Navbar Toggle */

$(".burger-menu").click(function () {
  $(".side-nav-dark").toggleClass("d-none");
  $(".openn").toggleClass("fa-close");
});

//-------------------------------------------------------------------------------
//-------------------------------------------------------------------------------
//-------------------------------------------------------------------------------

let meals = [];

/* Getting (Ingredient + Area + Category) from API */

async function getMainIngredient(mealName) {
  let response = await fetch(
    `https://www.themealdb.com/api/json/v1/1/filter.php?i=${mealName}`
  );
  meals = await response.json();
  console.log(meals);
  //   displayMeals(meals.meals);
}

// getMainIngredient("chicken%20breast");
//will be called in  (display Ingredient function)

async function filterCategory(category) {
  let response = await fetch(
    `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`
  );
  meals = await response.json();
  console.log(meals);
    displayMeals();
}

filterCategory('seafood');
//will be called in  (display Categories function)

async function filterArea(area) {
  let response = await fetch(
    `https://www.themealdb.com/api/json/v1/1/filter.php?a=${area}`
  );
  meals = await response.json();
  console.log(meals);
  //   displayMeals(meals.meals);
}

// filterArea('canadian');
//will be called in  (display Area function)

//-------------------------------------------------------------------------------
//-------------------------------------------------------------------------------
//-------------------------------------------------------------------------------

/* Getting FULL MEAL DETAILS BY ID from API */

async function getMealById(mealId) {
  let response = await fetch(
    `http://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`
  );
  meals = await response.json();
  console.log(meals);
    displayMeals();
}
getMealById('52772');
//will be called in while DISPLAYING ALL MEALS

//-------------------------------------------------------------------------------
//-------------------------------------------------------------------------------
//-------------------------------------------------------------------------------


/*Displaying Meals By (Ingredient + Area + Category) */
//Will be called in Navbar

function displayMealByArea() { 
    let x='';
    for (let i = 0; i < 20; i++) {
    x += `
      <div class="col-md-3 col-sm-12 my-2">
                <div class="parent w-100"  onclick="filterArea(${meals[i].strArea})">
                    <div class="child-img">
                    <i class="fa-solid fa-earth-americas"></i>
                    <div class="child w-100">
                            <h4>${meals[i].strArea}</h4>
                        </div>
                    </div>
                </div>
            </div>
    `;
        
    }
    document.getElementById("mealsByArea").innerHTML=x;
 }


 
function displayMealByIngredient() {
  let y = "";
  for (let i = 0; i < 20; i++) {
    y += `
    <div class="col-md-3 col-sm-12 my-2">
                <div class="parent w-100"  onclick="getMainIngredient(${meals[i].strIngredient})">
                    <div class="child-img">
                    <i class="fa-solid fa-plate-wheat"></i>
                    <div class="child w-100">
                            <h4>${meals[i].strIngredient}</h4>
                        </div>
                    </div>
                </div>
            </div>
    `;
  }
  document.getElementById("mealsByIngredient").innerHTML = y;
}




function displayMealByCategory() {
  let y = "";
  for (let i = 0; i < 20; i++) {
    y += `
    <div class="col-md-3 col-sm-12 my-2">
                <div class="parent w-100" onclick="filterCategory(${meals[i].strCategory})">
                    <div class="child-img" onclick="">
                    <i class="fa-solid fa-kitchen-set"></i>
                    <div class="child w-100">
                            <h4>${meals[i].strCategory}</h4>
                        </div>
                    </div>
                </div>
            </div>
    `;
  }
  document.getElementById("mealsByIngredient").innerHTML = y;
}




//-------------------------------------------------------------------------------
//-------------------------------------------------------------------------------
//-------------------------------------------------------------------------------






function displayMeals() { 
let meal='';
for (let i = 0; i < meals.length; i++) {
    meal += `

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
    
}
document.getElementById("allMeals").innerHTML=meal;
 }









// $("#mealsByArea").on(click, function(){
//     alert('area')
// });

// $(".nav-menu a").click(function () { 
// }
// );
// $("#mealsByArea").click(function () { 
//     alert('area')
// }
// );
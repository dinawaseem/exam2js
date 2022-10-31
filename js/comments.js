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

/*Getting Meals from API*/

//Area ----------------------------------------------------------------------------
let meals = [];

// let mealItem = document.getElementById("mealItem");

// async function getMealsByArea() {
//   let response = await fetch(
//     `https://www.themealdb.com/api/json/v1/1/list.php?a=list`
//   );
//   response = await response.json();
//   meals = response.meals;
//   console.log(response);
//   displayMealByArea();
// }

// function displayMealByArea() {
//   let x = "";
//   for (let i = 0; i < 20; i++) {
//     x += `
//             <div class="col-md-3 col-sm-12">
//                 <div id="mealItem" class="areas" onclick="alertClick()">
//                     <div>
//                     <i class="fa-solid fa-earth-americas"></i>
//                     </div>
//                     <h4 class="p-1">${meals[i].strArea}</h4>
//                 </div>
//             </div>
//         `;

//     document.getElementById("allMeals").innerHTML = x;
//   }
// }

// let areaNav = document.getElementById("area");
// areaNav.onclick = getMealsByArea();

// function alertClick() { alert('clicked') }

//Category ----------------------------------------------------------------------------

// async function getMealsByCategory() {
//   let response = await fetch(
//     `http://www.themealdb.com/api/json/v1/1/list.php?c=list`
//   );
//   response = await response.json();
//   meals = response.meals;
//   console.log(response);
//   displayMealByCategory();
// }

// function displayMealByCategory() {
//   let x = "";
//   for (let i = 0; i < 20; i++) {
//     x += `
//             <div class="col-md-3 col-sm-12">
//                 <div id="mealItem" class="category">
//                     <div>
//                     <i class="fa-solid fa-plate-wheat"></i>
//                     </div>
//                     <h4 class="p-1">${meals[i].strCategory}</h4>
//                 </div>
//             </div>
//         `;

//     document.getElementById("mealsByCategory").innerHTML = x;
//   }
// }

// let categoryNav = document.getElementById("categories");
// categoryNav.onclick = getMealsByCategory();

// //Ingredient ----------------------------------------------------------------------------

// async function getMealsByIngredient() {
//   let response = await fetch(
//     `http://www.themealdb.com/api/json/v1/1/list.php?i=list`
//   );
//   response = await response.json();
//   meals = response.meals;
//   console.log(response);
//   displayMealByCategory();
// }

// function displayMealByCategory() {
//   let x = "";
//   for (let i = 0; i < 20; i++) {
//     x += `
//             <div class="col-md-3 col-sm-12">
//                 <div id="mealItem" class="ingredients">
//                     <div>
//                     <i class="fa-solid fa-plate-wheat"></i>
//                     </div>
//                     <h4 class="p-1">${meals[i].strIngredient}</h4>
//                     <p>${meals[i].strDescription}</p>
//                 </div>
//             </div>
//         `;

//     document.getElementById("mealsByIngredient").innerHTML = x;
//   }
// }

// let ingredientNav = document.getElementById("ingredients");
// ingredientNav.onclick = getMealsByIngredient();

//Single Meal Display ----------------------------------------------------------------------------

// async function getMealsById() {
//   let response = await fetch(
//     `http://www.themealdb.com/api/json/v1/1/lookup.php?i=52772`
//   );
//   response = await response.json();
//   meals = response.meals;
//   console.log(meals);
//   // displaySingleMeal();
// }

// getMealsById()

// function displaySingleMeal() {

//  let rowData=  document.getElementById("rowData");

//  rowData.innerHTML = `

//   <div class="col-md-4 myM text-white">
//                 <img class="w-100" src="${strMealThumb}"><br>
//                 <h1>${strMeal}</h1>
//             </div>
//             <div class="col-md-8 myM text-white text-left">
//                 <h2>Instructions</h2>
//                 <p>${strInstructions}</p>
//                 <p><b class="fw-bolder">Area :</b>${strArea}</p>
//                 <p><b class="fw-bolder">Category :</b> ${strCategory}</p>
//                 <h3>Recipes :</h3>
//                 <ul class="d-flex " id="recipes">
//                     <li class="my-3 mx-1 p-1 alert-success rounded">${strIngredient[i]}</li>
//                 </ul>

//                 <h3 class="my-2 mx-1 p-1">Tags :</h3>
//                 <ul class="d-flex " id="tags">
//                     <li class="my-3 mx-1 p-1 alert-danger rounded">${strTags}</li>
//                 </ul>

//                 <a class="btn btn-success text-white" target="_blank" href="">Source</a>
//                 <a class="btn youtube btn-danger text-white" target="_blank" href="">Youtube</a>
//             </div>
//  `;
//  }

//  getMealsById('52772');

let categoryNav = document.getElementById("categories");

async function filterCategory() {
  let response = await fetch(
    `http://www.themealdb.com/api/json/v1/1/filter.php?c=seafood`
  );
  response = await response.json();
  meals = response.meals;
  console.log(meals);
  displayCategory();
}

function displayCategory() {
  let meal = "";
  for (let i = 0; i < 20; i++) {
    meal += `
 <div class="col-md-3 col-sm-12 my-2">
                <div class="parent w-100">
                    <div class="child-img" onclick="displayById()">
                        <img src="${meals[i].strMealThumb}" class="w-100">
                        <div class="child w-100">
                            <h4>${meals[i].strMeal}</h4>
                        </div>
                    </div>
                </div>
            </div>
`;
  }
  document.getElementById("myMeal").innerHTML = meal;
}

// onclick="filterCategory(${meals[i].meals})"

categoryNav.onclick = filterCategory();

async function getMealId() {
  let response = await fetch(
    `http://www.themealdb.com/api/json/v1/1/lookup.php?i=52772`
  );
  response = await response.json();
  meals = response.meals;
  console.log(meals);
  displayById();
}

function displayById() {
  let x = "";
  for (let i = 0; i < 20; i++) {
    x += `
<div class="col-md-4 myM text-white">
                <img class="w-100" src="${meals[i].strMealThumb}"><br>
                <h1>${meals[i].strMeal}</h1>
            </div>
            <div class="col-md-8 myM text-white text-left">
                <h2>Instructions</h2>
                <p>${meals[i].strInstructions}</p>
                <p><b class="fw-bolder">Area :</b>${meals[i].strArea}</p>
                <p><b class="fw-bolder">Category :</b> ${meals[i].strCategory}</p>
                <h3>Recipes :</h3>
                <ul class="d-flex " id="recipes">
                    <li class="my-3 mx-1 p-1 alert-success rounded">${meals[i].strIngredient}</li>
                </ul>

                <h3 class="my-2 mx-1 p-1">Tags :</h3>
                <ul class="d-flex " id="tags">
                    <li class="my-3 mx-1 p-1 alert-danger rounded">${meals[i].strTags}</li>
                </ul>


                <a class="btn btn-success text-white" target="_blank" href="">Source</a>
                <a class="btn youtube btn-danger text-white" target="_blank" href="">Youtube</a>
            </div> 

`;
  }
}

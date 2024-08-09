
/* This allows us to do our fade animations when the scroll bar reaches a certain area */
/* I learned how to do this from https://www.youtube.com/watch?v=19jD-DcOBtQ 
and then adapted it to have different animations for my site */

function animate() {
     //This piece of code animates the about us page
     const observer = new IntersectionObserver(entries => {
          entries.forEach(entry => {
               if (entry.isIntersecting) {
                    document.querySelectorAll(".animation")[0].classList.add("fadeInLeft");
                    document.querySelectorAll(".animation")[1].classList.add("fadeInLeft");
                    document.querySelectorAll(".animation")[2].classList.add("fadeInLeft");
                    document.querySelectorAll(".animation")[3].classList.add("fadeInLeft");
               }
          })
     })


     //This piece of code allows the javascript to observe when a user gets to a portion of the page
     // This is looking for when theuser scrolls to the photo gallery on the index page
     observer.observe(document.querySelector(".jumbotron_animate"));

     const observer2 = new IntersectionObserver(entries => {
          entries.forEach(entry => {
               if (entry.isIntersecting) {
                    document.querySelectorAll(".photo_animate")[0].classList.add("fadeInTop");
                    document.querySelectorAll(".photo_animate")[1].classList.add("fadeInTop");
                    document.querySelectorAll(".photo_animate")[2].classList.add("fadeInTop");
               }
          })
     })

     observer2.observe(document.querySelector(".gallery_animate"));

}

function singleRecipe(currentRecipe) {
     console.log("sucess");
     var recipe = currentRecipe;
     // Save which recipe was chosen in the local storage so it is saved between web pages
     localStorage.setItem("recipe", recipe);
}

function getRecipe() {
     //Get the locally stored recipe to dynamically change the web page
     var recipe = localStorage.getItem("recipe");

     //Grab the Id of where the food image must go
     var foodImage = document.querySelector("#recipe_img");
     // console.log(foodImage);

     var recipeChosen;


     //Here we assign the object to whichever recipe was chosen
     switch (recipe) {
          case 'Guacomole':
               recipeChosen = Guacamole;
               break;
          case 'Poke':
               recipeChosen = Poke;
               break;
          case 'Penne':
               recipeChosen = Penne;
               break;
          case 'Potstickers':
               recipeChosen = Potstickers;
               break;
     }


     // Set the image to the objects image source
     foodImage.src = recipeChosen.imageSRC;
     foodImage.alt = recipeChosen.alt;

     //find the recipe name id and insert the correct recipe name there
     var recipeName = document.querySelector("#RecipeName");
     recipeName.innerText = recipeChosen.name;

     //find the recipe prep id and insert the correct recipe prep time there
     var recipePrep = document.querySelector("#RecipePrep");
     recipePrep.innerText = recipeChosen.prep;

     //find the recipe cook id and insert the correct recipe cooking time there
     var recipeCook = document.querySelector("#RecipeCook");
     recipeCook.innerText = recipeChosen.cook;

     //find the recipe yield id and insert the correct recipe yield there
     var recipeYields = document.querySelector("#RecipeYields");
     recipeYields.innerText = recipeChosen.yields;

     //Set the date added at the top of the recipe
     var dateAdded = document.querySelector("#DateAdded");
     dateAdded.innerText = recipeChosen.date;

     //Set the about recipe information
     var aboutRecipe = document.querySelector("#AboutRecipe");
     aboutRecipe.innerText = recipeChosen.about;

     //Find where the recipe method must be inserted based on the id on the ordered list
     var method = document.querySelector(".RecipeMethod");
     //Dynamically add the recipe method
     for (var i = 0; i < recipeChosen.method.length; i++) {
          var li = document.createElement('li');     // create li element.
          li.innerHTML = recipeChosen.method[i];      // assigning text to li using array value.
          method.appendChild(li);     // append li to method.
     }

     //Find where the ingredients id must be placed from the html
     var ingredients = document.querySelector(".RecipeIngredients");
     //Dynamically add the ingredients
     for (var i = 0; i < recipeChosen.ingredients.length; i++) {
          var li = document.createElement('li');     // create li element.
          li.innerHTML = recipeChosen.ingredients[i];      // assigning text to li using array value.
          ingredients.appendChild(li);     // append li to ingredients.
     }


     //create a dynamic stars rating that changed the number of stars depending on the rating
     var ratings = document.querySelector(".ratings");

     //when the rating is 4 then there will be 4 star icons placed that are yellow
     for (var i = 0; i < recipeChosen.rating; i++) {
          var star = document.createElement('i'); //create an icon element
          star.setAttribute('class', "fa fa-star rating-color"); //setting the icons in the star  
          ratings.append(star);     // append li to star
     }

     //Now we create our unfilled stars based on the 5 star rating(which is full  marks) - the rating the recipe got
     for (var i = 0; i < (5 - recipeChosen.rating); i++) {
          var star = document.createElement('i'); //create an icon element
          star.setAttribute('class', "fa fa-star"); //create an icon of a star that is not yellow
          ratings.append(star);
     }

}


//Our guacomole object that holds all the data for the Guacomole recipe
//This is my own recipe
var Guacamole = {
     name: "Best Guacamole",
     yields: "Yields = 8 Servings",
     prep: "Preparation time = 20 minutes",
     cook: "Cooking Time = N/A",
     ingredients: ["Avocado", "Red Onion", "Garlic Powder", "Tomato", "Coriander"],
     method: ['Chop up the onion and tomato into very small pieces', 'Chop the coriander and garlic finely',
          'Add the ingredients to the Avocado while squashing the Avocado', ' Squeeze in the lime', 'Top with Feta'],
     // Photo by RODNAE from Pexels
     imageSRC: "assets/img/pexels-rodnae-productions-5737580.jpg",
     rating: 4,
     date: "15 March 2022",
     alt: "Photo of Guacomole by Rodnae from Pexels ",
     // Definition of Guacamole found on wikipedia: https://en.wikipedia.org/wiki/Guacamole
     about: "Guacamole is an avocado-based dip, spread, or salad first developed in Mexico."
}


//This recipe is from https://therecipecritic.com/poke-bowl-recipe/
var Poke = {
     name: "Perfect Poke Bowl",
     yields: "Yields = 1 Serving",
     prep: "Preparation time = 30 minutes",
     cook: "Cooking Time = N/A",
     ingredients: ["Ahi Tuna", "Tamari", "Sesame oil", "Honey", "Rice Vinegar", "Shredded Carrots",
          "Diced Cucumber", "Edamame", "Avocado", "Mayo", "Sriracha", "Green onion and black sesame seeds", "Brown rice"],
     method: ['Cook the rice. Brown rice takes a little longer to cook than white rice, so be aware of that. You can also do this step ahead of time.',
          "Marinate the tuna. Use a VERY sharp knife to cut the ahi tuna into a bite-size dice. Add to a medium bowl. Stir with soy sauce, rice vinegar, honey, and sesame oil. Let the ahi tuna marinate while you prep the rest of the ingredients.",
          "Make the spicy mayo. Add the mayo and sriracha to a small bowl. Stir to combine. Season with salt and pepper. Add the mayo to a small ziplock baggie. Cut a small piece of the corner off.",
          "Assemble the bowls. Spoon the cooked rice into a bowl. Spoon the marinated tuna over the rice. Arrange the cucumber, carrot, and edamame around it. Fan out the avocado on top. Sprinkle with sesame deeds and chopped green onion. Drizzle with spicy mayo."],
     // Photo by StockPhotos
     imageSRC: "assets/img/istockphoto-1072044110-612x612.jpg",
     rating: 4,
     date: "17 March 2022",
     alt: "Photo of a Poke Bowl by StockPhotos ",
     //Definition taken from Wikipedia: https://en.wikipedia.org/wiki/Poke_(Hawaiian_dish)
     about: "Poke is diced raw fish and is one of the main dishes of Native Hawaiian cuisine. It can be a starter or main."
}

//This recipe is by https://www.julieseatsandtreats.com/one-pot-ham-penne-skillet-recipe/
var Penne = {
     name: "Heavenly Ham Penne",
     yields: "Yields = 4 Servings",
     prep: "Preparation time = 20 minutes",
     cook: "Cooking Time = 30 Minutes",
     ingredients: ["Olive Oil", "Yellow Onion", "Garlic", "Ham", "Chicken Broth", "Milk",
          "Flour", "Penne Noodles", "Frozen Peas", "Parmesan Cheese", "Parsley", "Basil", "Oregano", "Pepper", "Red Pepper Flakes"],
     method: ['Place olive oil in a large skillet over medium heat until warm. Saute ham and onions until onions are translucent. Add garlic, parsley, basil, oregano, pepper and red pepper flakes; cook 1-2 minutes.',
          "Stir in broth, milk, flour and penne noodles, cook 10 minutes.",
          "Adds peas and cook five more minutes or until pasta is cooked through and peas are warm.",
          "Sprinkle Parmesan cheese on top of pasta."],
     //  <!-- Photo by Engin Akyurt from Pexels: https://images.pexels.com/photos/1487511/pexels-photo-1487511.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260 -->
     imageSRC: "assets/img/pexels-engin-akyurt-1487511.jpg",
     rating: 5,
     date: "1 March 2022",
     alt: "Photo of a Ham Penne by Engin Akyurt from Pexels",
     about: "Ham Penne Pasta is a family favorite for any night of the week."
}

var Potstickers = {
     name: "Juicy Potstickers",
     yields: "Yields = 4 Servings",
     prep: "Preparation time = 25 minutes",
     cook: "Cooking Time = 5 Minutes",
     ingredients: ["Ground Pork", "Napa Cabbage Leaves", "Green Onions", "Shiitake Mushrooms", "Bok Choy", "Bamboo Shoots",
          "Garlic Cloves", "Fresh Ginger", "Soy Sauce", "Corn Starch", "Sesame Oil", "Basil", "Oregano", "Pepper", "Red Pepper Flakes"],
     method: ['Make the potsticker filling: Just put all the filling ingredients in a large bowl and mix until combined.',
          "Form the dumplings: Fill each wrapper with about a tablespoon of pork filling. Wet your finger in water, then run it along the edges of the wrapper. This will help keep it closed.",
          "Pan fry the dumplings: Heat 2 tablespoons of oil in a large skillet. Lightly fry the dumplings until the bottoms are golden. ",
          "Steam the dumplings: Add 1/3 cup of water, cover with a tight fitting lid and steam the dumplings until the water has cooked away. Uncover and cook for another 2 minutes over medium-low heat.",
          "Serve: Remove from heat and serve your dumplings with soy sauce and thinly sliced green onions!"],
     // <!-- Photo by Anna Tarazevich from Pexels: https://images.pexels.com/photos/7287723/pexels-photo-7287723.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500-->
     imageSRC: "assets/img/pexels-anna-tarazevich-7287723.jpg",
     rating: 3,
     date: "1 March 2022",
     alt: "Photo of Potstickers by Anna Tarazevich from Pexels",
     // Definition of potstickers taken from: https://www.spoonforkbacon.com/pot-stickers/
     about: "Potstickers are a type of dumpling. Usually filled with pork and cabbage, or cabbage and vegetables"
}


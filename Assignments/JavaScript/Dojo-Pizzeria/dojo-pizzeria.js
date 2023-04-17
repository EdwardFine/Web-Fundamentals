function pizzaOven(crustType,sauceType,cheeses,toppings){
    var pizza={};
    pizza.crust = crustType;
    pizza.sauce = sauceType;
    pizza.cheese = cheeses;
    pizza.toppings = toppings;
    return pizza;
}

function randomPizza(){
    var pizza = {};
    for (var i=0;i<4;i++){
        if(i==0){
            switch(Math.floor(Math.random()*3)){
                case 0:
                    pizza.crust = "deep dish";
                    break;
                case 1:
                    pizza.crust = "hand tossed";
                    break;
                case 2:
                    pizza.crust = "stuffed";
                    break;
            }
        }else if (i==1){
            switch(Math.floor(Math.random()*3)){
                case 0:
                    pizza.sauce = "marinara";
                    break;
                case 1:
                    pizza.sauce = "white";
                    break;
                case 2:
                    pizza.sauce = "traditional";
                    break;
            }
        }else if (i==2){
            switch(Math.floor(Math.random()*3)){
                case 0:
                    pizza.cheese = ["mozzarella"];
                    break;
                case 1:
                    pizza.cheese = ["mozzarella", "feta"];
                    break;
                case 2:
                    pizza.cheese = ["mozzarella","chedder"];
                    break;
            }
        }else{
            switch(Math.floor(Math.random()*3)){
                case 0:
                    pizza.toppings = ["pepperoni","sausage","bacon","ham"];
                    break;
                case 1:
                    pizza.toppings = ["mushroom","peppers","olives","spinach"];
                    break;
                case 2:
                    pizza.toppings = ["ham","bacon","pineapple"];
                    break;
            }
        }
    }
    
    return pizza;
}

var pizza1 = pizzaOven("deep dish", "traditional", ["mozzarella"], ["pepperoni","sausage"]);
var pizza2 = pizzaOven("hand tossed","marinara",["mozzarella", "feta"], ["mushrooms","olives", "onions"]);
var pizza3 = pizzaOven("stuffed", "white", ["mozzarella, chedder"], ["chicken", "spinach", "onions"]);
var pizza4 = pizzaOven("gluten free", "bbq",["mozzarella","colby-jack"], ["pepperoni","bacon","sausage"]);
var pizza5 = randomPizza();

console.log(pizza1);
console.log(pizza2);
console.log(pizza3);
console.log(pizza4);
console.log(pizza5);
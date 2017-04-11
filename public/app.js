

var createUlist = function(){
  var ulist = document.createElement("ul");
  ulist.classList.add("cat");
  console.log(ulist);
  return ulist
}

var createLiForName = function(name){
  var li = document.createElement("li");
  li.innerText = "Name: " + name
  return li
}

var createLiForFood = function(food){
  var liFood = document.createElement("li");
  liFood.innerText = "Favourite Food: " + food
  return liFood
}

var createImg = function(image){
  var img = document.createElement("img");
  img.width = "500"
  img.src = image
  var imgInLi = document.createElement("li");
  imgInLi.appendChild(img)
  return imgInLi
}

var appendElements = function(ul,li,liFood,imgInLi){
 ul.appendChild(li)
 ul.appendChild(liFood)
 ul.appendChild(imgInLi)

 var cats = document.querySelector("#cats");
 cats.appendChild(ul);
}

var app = function(){

  addCat("Pedro", "Gin soaked raisons", "https://www.royalcanin.com/~/media/Royal-Canin/Product-Categories/cat-adult-landing-hero.ashx");

};

var addCat = function(name, food, image){
 var ulist = createUlist();
 var liName = createLiForName(name);
 var liFood = createLiForFood(food);
 var img = createImg(image);

 appendElements(ulist, liName, liFood, img);
}



window.onload = app;
var catsArray = [
{name: "Boba", food: "Sock Fluff", picture: "http://66.media.tumblr.com/d1f01bbe0150fda0c40d2151c5eaeac8/tumblr_odlqqskjj61v9cejwo1_400.jpg"},
{name: "Barnaby", food: "Tuna", picture: "https://d2wq73xazpk036.cloudfront.net/media/27FB7F0C-9885-42A6-9E0C19C35242B5AC/A7BC70EF-2E93-47DA-A355C4B22039324E/thul-6818f8f2-2711-5159-9648-cc23606b037c.jpg?response-content-disposition=inline"},
{name: "Max", food: "Whiskas Temptations", picture: "http://66.media.tumblr.com/7c5784ea89369c780e782bf10c60315a/tumblr_npb0hlYwhV1u63jaco1_1280.jpg"},]

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

  for (i = 0; i < catsArray.length; i++){
      addCat(catsArray[i].name, catsArray[i].food, catsArray[i].picture)
    }

};

var addCat = function(name, food, image){
 var ulist = createUlist();
 var liName = createLiForName(name);
 var liFood = createLiForFood(food);
 var img = createImg(image);

 appendElements(ulist, liName, liFood, img);
}



window.onload = app;
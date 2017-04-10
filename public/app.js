// var addCat = function(name, food, image){
//  var ul = createUl();
//  var li = createLi(name, food);
//  var img = createImg(image);

//  appendElements(name, food, image);
// }

var app = function(){

  var ul = document.createElement("ul");
  ul.classList.add("cat");

  var li = document.createElement("li");
  li.innerText = "Name: Fredo"

  var li2 = document.createElement("li2");
  li2.innerText = "Favourite Food: Fredos"



  var img = document.createElement("img");
  img.width = "500"
  img.src = "https://static.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg"
 
  li.appendChild(img);

  ul.appendChild(li);

  ul.appendChild(li2);

  

  var cats = document.querySelector("#cats");
  cats.appendChild(ul);

  // var article = document.createElement("article");
  // article.classList.add("quote");

  // var blockquote = document.createElement("blockquote");
  // blockquote.innerText = "Anyone want a Club? ";

  // var cite = document.createElement("cite");
  // cite.innerText = "Keith";

  // blockquote.appendChild(cite);

  // article.appendChild(blockquote);

  // var quotes = document.querySelector("#quotes");
  // quotes.appendChild(article);



}


window.onload = app;
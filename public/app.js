var addCat = function(name, food, image){
 var ul = createUl();
 var li = createLi(name, food, image);

 appendElements(name, food, image);
}

var app = function(){

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
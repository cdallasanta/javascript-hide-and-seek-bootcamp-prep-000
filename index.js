
function getFirstSelector(selector){
  return document.querySelector(selector);
}

function nestedTarget(nested, target){
  //debugger;
  let nest = document.querySelector(nested);
  return nest.querySelector(target);
}

function increaseRankBy(n){
  let li = document.querySelectorAll('.ranked-list li');
  
  for(var i =0; i<li.length;i++){
    li[i].innerHTML = parseInt(li[i].innerHTML) + n;
  }
}

function deepestChild(){
  var deepDiv = document.querySelector("div#grand-node");
  while(deepDiv.childElementCount !== 0){
    deepDiv = deepDiv.querySelector('div');
  }
  return deepDiv;
}
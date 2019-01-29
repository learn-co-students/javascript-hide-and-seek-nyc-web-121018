

function getFirstSelector(selector){
  return document.querySelector(selector);
}


function nestedTarget(id){
    return document.querySelector('#nested .target')

}

function increaseRankBy(n){
  const ranks = document.querySelectorAll('.ranked-list li')
  for(let i =0; i<ranks.length; i++){
    ranks[i].innerHTML = (parseInt(ranks[i].innerHTML)+n).toString();
  }
}

function deepestChild(){
    return document.querySelector('#grand-node div div div div')
}

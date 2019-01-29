function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget(){
  return document.getElementById("nested").getElementsByClassName("target")[0]
}

function deepestChild() {
  return document.getElementById("grand-node").querySelector('div').querySelector('div').querySelector('div').querySelector('div')
}

function increaseRankBy(n){
  const rankedLists = document.getElementsByClassName("ranked-list")
  for (let i = 0, l=rankedLists.length ; i<l ; i++) {
    let children = rankedLists[i].children;

    for (var i = 0; i < children.length; i++) {
      children[i].innerHTML = parseInt(children[i].innerHTML) + n
    }
  }
}


function increaseRankBy(n) {
  const rankedLists = document.querySelectorAll('.ranked-list');

  for (let i = 0, l = rankedLists.length; i < l; i++) {
    let children = rankedLists[i].children;

    for (let j = 0, k = children.length; j < k; j++) {
      children[j].innerHTML = parseInt(children[j].innerHTML) + n;
    }
  }
}

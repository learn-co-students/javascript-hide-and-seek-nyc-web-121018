function getFirstSelector(selector){
  return document.querySelector(selector)
}
//Define a function nestedTarget() that pulls
// a .target out of #nested (# is used for IDs
//   in selectors — but you knew that because
//   you read the docs, right? :) ). (Note that
//      in index.html #nested and .target just
//      happen to be divs. This method should
//      work with arbitrary elements.)
function nestedTarget(){
  return document.getElementById("nested").querySelector(".target");
}
function increaseRankBy(n) {
  const rankedLists = document.querySelectorAll('.ranked-list')

  for (let i = 0, l = rankedLists.length; i < l; i++) {
    let children = rankedLists[i].children

    for (let j = 0, k = children.length; j < k; j++) {
      children[j].innerHTML = parseInt(children[j].innerHTML) + n
    }
  }
}

function deepestChild(){
  var deep = document.getElementById('grand-node').querySelectorAll('div')
  return deep[deep.length-1]

 }

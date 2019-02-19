function getFirstSelector(p) {
  return document.querySelector(p)
}

function nestedTarget() {
  return document.querySelector('#nested.target')
}

function deepestChild() {
  let node = document.getElementById('grand-node')
  let nextNode = node.children[0]

  while (nextNode) {
   node = nextNode;
   nextNode = node.children[0];
 }

 return node;
}

function increaseRankBy(n) {
  const rankedLists = document.querySelectorAll('.ranked-list')
  for (let i = 0, l = children.length; i < l; i++) {
    let children = rankedLists[i].children

    for (let a = 0, b = children.length; a < b; a++) {
      children[a].innerHTML = parseInt(children[a].innerHTML) + n;
    }
  }
}

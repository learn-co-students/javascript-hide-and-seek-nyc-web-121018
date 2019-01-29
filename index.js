function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector('#nested .target')
}

function increaseRankBy(n) {
  const list = document.querySelectorAll('.ranked-list li')

  for (let i = 0; i < list.length; i++) {
    list[i].innerHTML = (parseInt(list[i].innerHTML) + n).toString();
  }
}

function deepestChild() {
  let div = document.getElementById('grand-node')
  let divChild = div.children[0]

  while (divChild) {
    div = divChild;
    divChild = div.children[0]
  }

  return div
}

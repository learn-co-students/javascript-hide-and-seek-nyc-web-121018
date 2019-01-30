function getFirstSelector(selector){
  return document.querySelector(selector)
}

function nestedTarget(){
  return document.querySelector("#nested .target")
}

function increaseRankBy(n){
   const listItems = document.querySelectorAll('ul.ranked-list li')
   for (let i = 0; i < listItems.length; i++){
     listItems[i].innerHTML = (parseInt(listItems[i].innerHTML) + n).toString();
   }
}



function checkChildren(child){
  if (child.children.length > 0){
    let arr = Array.from(child.children)
    return arr.map(function(element){
      //debugger
      //console.log(element.children)
      return checkChildren(element);
    });
  } else {
    //console.log(child)
    //debugger
    return child
  }
}

function deepestChild(){
  //let deepChild = checkChildren(document.querySelector('div#grand-node'))
  //let flattened = [].concat.apply([],deepChild)
  //return flattened
  return checkChildren(document.querySelector('div#grand-node'))[0][0][0][0]
  //I'm 100% sure there's a cleaner way to write the above line—
  // something with .concat or with .flat maybe
}

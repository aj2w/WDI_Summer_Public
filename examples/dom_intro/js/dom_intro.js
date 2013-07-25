// Traverse the DOM!

function traverse_dom (search_term) {
  // want to traverse all the div elements in the DOm and find one whose innerText
  // is equal to our search_term

  var elements = document.getElementsByTagName(search_term);
  for (var i=0;i<elements.length; i++){
    if (elements[i].innerText === search_term) {
      return elements[i];
    }
  }
  return null;
}

function feed_the_shark() {
  document.getElementsByTagName('img')[0].width *= 1.1;
}
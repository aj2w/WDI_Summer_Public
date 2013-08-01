// Traverse the DOM!

<<<<<<< HEAD
function traverse_dom (search_term) {
  // want to traverse all the div elements in the DOm and find one whose innerText
  // is equal to our search_term

  var elements = document.getElementsByTagName(search_term);
  for (var i=0;i<elements.length; i++){
=======
// document.getElementById()
// document.getElementsByClassName()
// document.getElementsByTagName()


function traverse_dom(search_term) {
  // I want to traverse all the div
  // elements in the DOM and find one whose 
  // innerText is equal to our search_term
  var elements = document.getElementsByTagName('div');
  for (var i=0; i < elements.length; i+=1) {
>>>>>>> upstream/master
    if (elements[i].innerText === search_term) {
      return elements[i];
    }
  }
<<<<<<< HEAD
  return null;
}

function feed_the_shark() {
  document.getElementsByTagName('img')[0].width *= 1.1;
}
=======
  return null; 
}

// we can drill down to the properties of individual HTML tags
// document.getElementsByTagName('img')[0].src
function feed_the_shark() {
  document.getElementById('myShark').width *= 1.1;
}

function animate_the_shark() {
  var timer = setInterval(feed_the_shark, 2000); 
  return timer;
}
>>>>>>> upstream/master

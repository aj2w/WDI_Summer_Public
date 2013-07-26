function handleStudents(){
  var i = 0;  // scope: local variable, type: number
  var students = ['Jim', 'Bob', 'Tracy', 'Justin', 'Emily'];  // s: local, t:???
<<<<<<< HEAD
  return function(){  // from SO: the inner function has access to the
    // environment it was created within
    // even after the code that created the environment has returned.
    var student =  students[i]; // s: ???, t: string
    i+=1;
    return student;// What type is this returning?
=======
  return function(){  // from SO: the inner function has access to the 
    // environment it was created within 
    // even after the code that created the environment has returned.
    var student =  students[i]; // s: ???, t: string
    i+=1; 
    return student;// What type is this returning? 
>>>>>>> upstream/master
  };
}

// What type of variable is nextStudent?
// t: ???
<<<<<<< HEAD
var nextStudent = handleStudents();
=======
var nextStudent = handleStudents(); 
var nextStudent1 = handleStudents();
>>>>>>> upstream/master

// onload
window.onload = function(){
  // Adding an event handler to our addStudent button
  document.getElementById("addStudent").onclick = function(){
    document.getElementById('students').innerHTML += nextStudent() + '<br/>\n';
  };

<<<<<<< HEAD
=======
    // Adding an event handler to our addStudent button
  document.getElementById("addStudent1").onclick = function(){
    document.getElementById('students').innerHTML += nextStudent1() + '<br/>\n';
  };

>>>>>>> upstream/master
  document.getElementById("clearStudents").onclick = function(){
    document.getElementById('students').innerHTML = '';
  };

  document.getElementById("resetClosure").onclick = function(){
<<<<<<< HEAD
    nextStudent = handleStudents();
=======
    nextStudent = handleStudents(); 
>>>>>>> upstream/master
  };
};

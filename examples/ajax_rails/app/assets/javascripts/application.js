// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// WARNING: THE FIRST BLANK LINE MARKS THE END OF WHAT'S TO BE PROCESSED, ANY BLANK LINE SHOULD
// GO AFTER THE REQUIRES BELOW.
//
//= require jquery
//= require jquery_ujs
//= require_tree .

<<<<<<< HEAD
=======
// STEP 11: Note this function that takes a task JavaScript object as an argument
// This function will generate a DOM version of the task javasctipt object it takes as an argument
>>>>>>> upstream/master
var appendTask = function(task){

	var completeButton = $('<button class="complete">complete</button>');
	var deleteButton = $('<button class="delete">delete</button>');
	var restoreButton = $('<button class="restore">restore</button>');
	var actions = $('<div class="actions"></div>').append(completeButton).append(deleteButton).append(restoreButton);

	var taskText = $('<div class="items">'+task.name+'</div>').append(actions);
	var htmlTask = $('<li data-id='+task.id+ '></li>').append(taskText);

	completeButton.click(function(){
		$.ajax({
<<<<<<< HEAD
			url:'/complete/' + task.id,
			dataType: 'script',
			type: 'put'
=======
			// STEP 24: Make the step 15 `.click()` make an ajax call to the `complete` action and set the `dataType` setting to `script`
>>>>>>> upstream/master
		})
	});

	deleteButton.click(function(){
		$.ajax({
<<<<<<< HEAD
			url:'/destroy/' + task.id,
			dataType: 'script',
			type: 'delete'
=======
			// Step 30: Make the step 15 `deleteButton.click()` make an ajax call to the `TasksController#destroy` action and set the `dataType` setting to `script`
>>>>>>> upstream/master
		})
	});

	restoreButton.click(function(){
		$.ajax({
			url:'/restore/' + task.id,
			dataType: 'script',
			type: 'put'
		})
	});


	if (task.completed === true) {
		$('#completed-items').append(htmlTask);
	} else {
		$('#todo-items').append(htmlTask);
	}
};

$(function(){
	$.ajax({
		url:'/',
		dataType: 'json',
		type: 'get'
	}).done(function(data){
		$.each(data, function(i, task){
			appendTask(task);
		});
	});

	$('#add-item').click(function(){
		var task = {
			'name': $('#new-task-field').val()
		}

		if (task.name.length!==0){
			$.ajax({
				type: 'post',
				url:'/create',
				dataType: 'json',
				data: task
			}).done(function(data){
				appendTask(data);
			});
		}
	});
});

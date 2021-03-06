AjaxTodo::Application.routes.draw do
	# STEP 4 - Create routes required for TasksController
  root :to => 'tasks#index'
  post '/create' => 'tasks#create'
  put '/complete/:id' => 'tasks#complete'
  put '/restore/:id' => 'tasks#restore'
  delete '/destroy/:id' => 'tasks#destroy'

end

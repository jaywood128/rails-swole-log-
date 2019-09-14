Rails.application.routes.draw do
  get 'charts/downloads_by_day'
  root 'application#index'
  resources :exercise_sets
  resources :workout_lifts do 
    resources :exercise_sets
  end
  resources :workouts do
    resources :workout_lifts, only:[:show, :index, :new, :update, :edit, :destroy]
  end
  resources :users
  resources :lifts 

  # get '/auth/facebook/callback' => 'sessions#create'
  match 'auth/:provider/callback', to: 'sessions#create', via: [:get, :post]
  match 'auth/failure', to: redirect('/'), via: [:get, :post]
  match 'signout', to: 'sessions#destroy', as: 'signout', via: [:get, :post]
  get 'charts/downloads_by_day'


  
  get    '/signup',  to: 'users#new'
  get    '/login',   to: 'sessions#new'
  post   '/login',   to: 'sessions#create'
  delete '/logout',  to: 'sessions#destroy', as: :logout
  
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end




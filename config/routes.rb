Rails.application.routes.draw do
  resources :workout_lifts
  resources :users do
    resources :lifts, only:[:show,:index,:new]
  end
  resources :workouts
  resources :lifts

  get '/login', to: 'users#login'
  post '/login', to: 'users#create'
  
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end

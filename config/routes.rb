Rails.application.routes.draw do
  resources :workout_lifts
  resources :users do
    resources :workouts, only:[:show,:index,:new]
  end
  resources :workouts
  resources :lifts


  
  get    '/signup',  to: 'users#new'
  get    '/login',   to: 'sessions#new'
  post   '/login',   to: 'sessions#create'
  delete '/logout',  to: 'sessions#destroy'
  
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end

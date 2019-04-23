Rails.application.routes.draw do
  resources :workout_lifts
  resources :users
  resources :workouts
  resources :lifts
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end

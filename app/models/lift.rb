class Lift < ApplicationRecord
    has_many :workout_lifts 
    has_many :workouts, through: :workout_lifts 
end

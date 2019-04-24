class User < ApplicationRecord
    has_many :workout_lifts 
    has_many :workouts, through: :workoutlifts 
end

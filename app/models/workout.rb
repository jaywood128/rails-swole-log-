class Workout < ApplicationRecord
    has_many :workout_lifts 
    has_many :lifts, through: :workout_lifts 
    belongs_to :user
end

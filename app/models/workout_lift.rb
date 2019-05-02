class WorkoutLift < ApplicationRecord
    belongs_to :workout 
    belongs_to :lift 
    belongs_to :user 
    has_many :exercise_sets 
    delegate :name, to: :lift
end

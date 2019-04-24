class WorkoutLift < ApplicationRecord
    belongs_to :workout 
    belongs_to :lift 
    belongs_to :user 
end

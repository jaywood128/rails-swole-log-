class ExerciseSet < ApplicationRecord
  belongs_to :user
  belongs_to :workout_lift 
  delegate :lift, to: :workout_lift
  delegate :workout, to: :workout_lift
  # delegate is calling :lift on the associated object => :workout_lift 
end



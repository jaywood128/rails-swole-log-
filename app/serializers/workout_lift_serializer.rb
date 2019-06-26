class WorkoutLiftSerializer < ActiveModel::Serializer
  attributes :id, :workout_id, :lift_id, :user_id 
  has_many :exercise_sets, serializer: WorkoutLiftExerciseSetSerializer 
end

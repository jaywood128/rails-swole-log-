class WorkoutLiftSerializer < ActiveModel::Serializer
  attributes :id, :name
  has_many :exercise_sets, serializer: WorkoutLiftExerciseSetSerializer 
end

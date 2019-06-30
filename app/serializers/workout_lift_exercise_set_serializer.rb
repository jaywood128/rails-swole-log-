class WorkoutLiftExerciseSetSerializer < ActiveModel::Serializer
  attributes :id, :weight, :reps, :workout_lift_id, :lift
end

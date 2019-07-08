class ExerciseSetSerializer < ActiveModel::Serializer
  attributes :id, :weight, :reps, :user_id, :workout_lift_id
end

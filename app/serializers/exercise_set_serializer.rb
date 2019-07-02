class ExerciseSetSerializer < ActiveModel::Serializer
  attributes :id, :weight, :reps, :user_id 
end

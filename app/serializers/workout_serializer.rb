class WorkoutSerializer < ActiveModel::Serializer
  attributes :id, :start_time, :end_time 
  has_many :workout_lifts 
end

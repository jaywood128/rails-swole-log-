class WorkoutSerializer < ActiveModel::Serializer
  attributes :id, :display_start_time, :end_time 
  has_many :workout_lifts 
end

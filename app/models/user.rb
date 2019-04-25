class User < ApplicationRecord
    has_many :workout_lifts 
    has_many :workouts, through: :workoutlifts 
    validates :name, presence: true 
    validates :username, presence: true, uniqueness: true 
    validates :email, presence: true
    has_secure_password
end

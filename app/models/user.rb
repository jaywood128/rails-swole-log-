class User < ApplicationRecord
    has_many :workout_lifts 
    has_many :exercise_sets 
    has_many :workouts, through: :workout_lifts
    validates :name, presence: true 
    validates :password, presence: true 
    validates :username, presence: true, uniqueness: true 
    validates :email, presence: true
    has_secure_password

end



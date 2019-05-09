class User < ApplicationRecord
    has_many :workout_lifts 
    has_many :exercise_sets 
    has_many :workouts, through: :workout_lifts
    validates :name, presence: true 
    validate :password
    validates :email, presence: true
    has_secure_password(validations: false)

end



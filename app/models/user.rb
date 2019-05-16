class User < ApplicationRecord
    has_many :workout_lifts 
    has_many :exercise_sets 
    has_many :workouts, through: :workout_lifts
    validates :name, presence: true 
    validates :email, presence: true, uniqueness: true 
    has_secure_password

    def self.high_reps 
      joins(:exercise_sets).where("exercise_sets.reps >= ?", 8 ) 
    end 
end



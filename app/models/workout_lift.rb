class WorkoutLift < ApplicationRecord
    belongs_to :workout 
    belongs_to :lift 
    belongs_to :user 
    has_many :exercise_sets, :dependent => :destroy
    delegate :name, to: :lift
    accepts_nested_attributes_for :exercise_sets

    def exercise_sets_attributes(hash)
        binding.pry
    end 
end

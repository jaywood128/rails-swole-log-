class WorkoutLift < ApplicationRecord
    belongs_to :workout 
    belongs_to :lift 
    belongs_to :user 
    has_many :exercise_sets, :dependent => :destroy
    delegate :name, to: :lift
    accepts_nested_attributes_for :exercise_sets
    validates :lift_id, uniqueness:{ scope: :workout_id }

    def exercise_sets_attributes=(hash)
        @exercise_set = self.exercise_sets.build(hash["0"]) 
        @exercise_set.user = self.user 
    end 

    def self.search(lift)
        binding.pry
    end 

end

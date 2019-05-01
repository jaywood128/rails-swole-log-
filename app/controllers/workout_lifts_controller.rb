class WorkoutLiftsController < ApplicationController
    def new
    end 

    def create
    end 

    def show 
    end 

    def index 
        binding.pry
        @workouts = Workout.all 
    end 
end

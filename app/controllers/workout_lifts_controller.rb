class WorkoutLiftsController < ApplicationController
    def new
    end 

    def create
    end 

    def show 
    end 

    def index 
        @workout = Workout.find(params[:workout_id])
        @workout_lifts = @workout.workout_lifts
    end 
end

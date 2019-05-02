class ExerciseSetsController < ApplicationController

    def create 
        @exercise_set = current_user.exercise_sets.create(exercise_set_params) 
       
        redirect_to workout_workout_lifts_path(@exercise_set.workout)
    end 
    def index 
    end 

    private 
    def exercise_set_params
        params.require(:exercise_set).permit(:reps, :weight, :workout_lift_id)
    end 
end

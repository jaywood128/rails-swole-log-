class WorkoutLiftsController < ApplicationController
    def new
        @workout_lift = WorkoutLift.new
    end 

    def create
        binding.pry
    end 

    def show 
    end 

    def index 
        @workout_lift = WorkoutLift.new
        @workout_lift.exercise_sets.build 
        @workout = Workout.find(params[:workout_id])
        @workout_lifts = @workout.workout_lifts
    end 

    def params_workout_lifts 
        params.require(:workout_lift).permit(:user_id, :lift_id, :workout_id, exercise_sets: [:weight, :reps])
    end 
end

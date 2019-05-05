class WorkoutLiftsController < ApplicationController
    def new
        @workout_lift = WorkoutLift.new
    end 

    def create
        @workout = Workout.find(params[:workout_lift][:workout_id]) 
        workout_lift = WorkoutLift.create(workout_id: @workout.id, lift_id: params[:workout_lift][:lift], user_id: current_user.id)
        redirect_to workout_workout_lifts_path(@workout)
    end 

    def show 

    end 

    def update 
        @workout_lift = WorkoutLift.find(params[:id])
    end 

    def edit 
        @workout = Workout.find(params[:workout_id])
        @workout_lift = WorkoutLift.find(params[:id])
    end 

    def index 
        @workout_lift = WorkoutLift.new
        @workout_lift.exercise_sets.build
        @workout_lift.exercise_sets.build
        @workout = Workout.find(params[:workout_id])
        @workout_lifts = @workout.workout_lifts
    end 

    def params_workout_lifts 
        params.require(:workout_lift).permit(:user_id, :lift_id, :workout_id, exercise_sets: [:weight, :reps])
    end 
end

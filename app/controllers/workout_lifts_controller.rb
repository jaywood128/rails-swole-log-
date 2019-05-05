class WorkoutLiftsController < ApplicationController
    def new
        @workout_lift = WorkoutLift.new
    end 

    def create
        #use params_workout_lifts 
        @workout = Workout.find(params[:workout_lift][:workout_id]) 
        workout_lift = WorkoutLift.create(workout_id: @workout.id, lift_id: params[:workout_lift][:lift], user_id: current_user.id)
        redirect_to workout_workout_lifts_path(@workout)
    end 

    def show 

    end 

    def edit
        @workout_lift = WorkoutLift.find(params[:id])
        @workout = Workout.find(params[:workout_id])
    end 

    def update 
        
        @workout = Workout.find(params[:workout_lift][:workout_id])
        @workout_lift = WorkoutLift.find(params[:id])
        
        @workout_lift.update(params_workout_lifts) 
    
        redirect_to workout_workout_lifts_path(@workout)
       
    end 

    def index 
        @workout_lift = WorkoutLift.new
        @workout_lift.exercise_sets.build
        @workout_lift.exercise_sets.build
        @workout = Workout.find(params[:workout_id])
        @workout_lifts = @workout.workout_lifts
    end 

    def params_workout_lifts 
        params.require(:workout_lift).permit(:user_id, :lift_id, :workout_id, exercise_sets_attributes: [:weight, :reps], exercise_sets_id)
    end 
end

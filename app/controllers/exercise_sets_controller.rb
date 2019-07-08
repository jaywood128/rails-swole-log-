class ExerciseSetsController < ApplicationController

    def create 
       
            @workout_lift = WorkoutLift.find(params[:workout_lift_id])
            # return unless @workout_lift 
            @exercise_set = @workout_lift.exercise_sets.build(exercise_set_params)
            @exercise_set.user_id = current_user.id 
           
            if @workout_lift.save 
                respond_to do |f| 
                  f.html { redirect_to workout_path(@workout_lift.workout) }
                  f.json { render json: @exercise_set}
                end
            end
        # redirect_to workout_workout_lifts_path(@exercise_set.workout)
    end 
    def show 
        @exercise_set = ExerciseSet.find(params[:id])
        respond_to do |f| 
            f.html { redirect_to workout_path(@exercise_set.workout_lift.workout)}
            f.json { render json: @exercise_set}
        end
    end 
    def index 
        binding.pry
        @workout_lift = WorkoutLift.find(params[:workout_lift_id])
        @workout_lift.exercise_sets 
        respond_to do |f| 
            f.html { redirect_to workout_path(@exercise_set.workout_lift.workout)}
            f.json { render json: @workout_lift}
        end
        
    end 

    private 
    def exercise_set_params
        params.require(:exercise_set).permit(:reps, :weight, :workout_lift_id, :user_id)
    end 
end

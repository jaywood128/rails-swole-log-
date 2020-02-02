class ExerciseSetsController < ApplicationController

    def create 
       
        @workout_lift = WorkoutLift.find(params[:workout_lift_id])
                
        @exercise_set = @workout_lift.exercise_sets.build(exercise_set_params)
        @exercise_set.user_id = current_user.id 
            
        if @workout_lift.save 
            respond_to do |f| 
                f.html { redirect_to workout_path(@workout_lift.workout) }
                f.json { render json: @workout_lift}
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
        
        @workout_lift = WorkoutLift.find(params[:workout_lift_id])
        @workout_lift.exercise_sets 
        respond_to do |f| 
            f.html { redirect_to workout_path(@exercise_set.workout_lift.workout)}
            f.json { render json: @workout_lift}
        end
        
    end
    
    def update
       
         @workoutlift = WorkoutLift.find(params[:workout_lift_id])
         @exercise_set = @workoutlift.exercise_sets.select{|x| x.id == params[:id].to_i}
         @weight = params[:exercise_set][:weight].to_i
         @reps = params[:exercise_set][:reps].to_i
         @exercise_set[0].update(weight: @weight, reps: @reps) 
            respond_to do |f| 
                f.json { render json: @exercise_set}
            end

    end 

    def edit
    end 

    def destroy 
    
        @exercise_set = ExerciseSet.find(params[:id])

        if @exercise_set.user_id == current_user.id 
            
            @exercise_set.delete 
            respond_to do |f| 
                f.html { }
                f.json { render json: @exercise_set}
            end
        else 
            #add a redirect if this is not their set (resp to JSON)
        end 
    end 

    private 
    def exercise_set_params
        params.require(:exercise_set).permit(:id, :reps, :weight, :workout_lift_id, :user_id)
    end 
end

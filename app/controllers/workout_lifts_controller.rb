class WorkoutLiftsController < ApplicationController

  def new
    @workout_lift = WorkoutLift.new
  end 

  def create
   
    @workout = Workout.find_or_create_by(params[:workout_id]) 
        
    if @workout.valid? 
      @workout_lift = current_user.workout_lifts.create(params_workout_lifts)
        
      redirect_to workout_workout_lifts_path(@workout)
    else 
      render :edit
    end 
  end 

  def show  
    @workout_lift = WorkoutLift.find(params[:id])
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
    if params["search"]
      # @lift = Lift.find_by(name: params["search"])
      # @workout_lifts = @workout.workout_lifts.where(lift_id: @lift.id) 
      @workout_lifts = @workout.workout_lifts.joins(:lift).where(lifts: { name: params["search"].titleize })

    else 
      @workout_lifts = @workout.workout_lifts
    end 

  end 

  def destroy
    @workout_lift = WorkoutLift.find(params[:id])
    @workout = Workout.find(params[:workout_id]) 
    @workout_lift.destroy 
    redirect_to workout_workout_lifts_path(@workout)
  end 

  def params_workout_lifts 
    params.require(:workout_lift).permit(:user_id, :lift_id, :lift, :workout_id, exercise_sets_attributes: [:id, :weight, :reps])
  end 
end

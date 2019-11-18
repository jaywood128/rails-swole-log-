class WorkoutsController < ApplicationController
  def new 
    @workout = Workout.new 
  end 

  def create 
   
    workout = current_user.workouts.build(start_time: DateTime.now, user_id: current_user.id)
    workout.save
   
    redirect_to workout_path(workout)
  end 

  def show 
    @workout = Workout.find(params[:id])
    
    respond_to do |f| 
      f.html { }
      f.json { render json: @workout, each_serializer: WorkoutLiftIndexSerializer }
    end
    
  end 

  def index 
  
    if logged_in? 
      @workouts = current_user.workouts
    else 
      redirect_to login_path
    end 
  end 

  def edit 
    @workout = Workout.find(params[:id])
  end 

  def update 
    @workout = Workout.find(params[:id])
    @workout.update(end_time: DateTime.now)
    redirect_to workouts_path
  end 

  def destroy
  end 
  end


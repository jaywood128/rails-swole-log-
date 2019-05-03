class WorkoutsController < ApplicationController
  def new 
    @workout = Workout.new 
  end 

  def create 
    workout = current_user.workouts.build(start_time: DateTime.now, user_id: current_user.id)
    workout.save
    redirect_to workout_workout_lifts_path(workout)
  end 

  def show 
  end 

  def index 
    @workouts = Workout.all 
  end 

  def edit 
  end 

  def update 
  end 

  def destroy
  end 
  end


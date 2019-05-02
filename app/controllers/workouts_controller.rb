class WorkoutsController < ApplicationController
   def new 
    @workout = Workout.new 
   end 
   
   def create 
       current_user.workouts.build:start_time) 
       redirect_to new_workout_workout_lift(@workout)
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


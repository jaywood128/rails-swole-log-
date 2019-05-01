class WorkoutsController < ApplicationController
   def new 
    @workout = Workout.new 
   end 
   
   def create 
    
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

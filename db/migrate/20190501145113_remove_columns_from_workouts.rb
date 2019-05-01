class RemoveColumnsFromWorkouts < ActiveRecord::Migration[5.2]
  def change
    remove_column :workouts, :set_1_reps
    remove_column :workouts, :set_1_weight 
    remove_column :workouts, :set_2_reps 
    remove_column :workouts, :set_2_weight 
    remove_column :workouts, :set_3_reps 
    remove_column :workouts, :set_3_weight
    remove_column :workouts, :set_4_reps 
    remove_column :workouts, :set_4_weight 


  end
end


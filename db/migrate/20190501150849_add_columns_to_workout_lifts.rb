class AddColumnsToWorkoutLifts < ActiveRecord::Migration[5.2]
  def change
    add_column :workout_lifts, :set_1_reps, :integer
    add_column :workout_lifts, :set_1_weight, :integer 
    add_column :workout_lifts, :set_2_reps, :integer 
    add_column :workout_lifts, :set_2_weight, :integer 
    add_column :workout_lifts, :set_3_reps, :integer 
    add_column :workout_lifts, :set_3_weight, :integer
    add_column :workout_lifts, :set_4_reps, :integer 
    add_column :workout_lifts, :set_4_weight, :integer 

  end
end


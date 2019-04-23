class CreateWorkouts < ActiveRecord::Migration[5.2]
  def change
    create_table :workouts do |t|
      t.datetime :start_time
      t.datetime :end_time
      t.integer :set_1_weight
      t.integer :set_1_reps
      t.integer :set_2_weight
      t.integer :set_2_reps
      t.integer :set_3_weight
      t.integer :set_3_reps
      t.integer :set_4_weight
      t.integer :set_4_reps

      t.timestamps
    end
  end
end

class CreateWorkoutLifts < ActiveRecord::Migration[5.2]
  def change
    create_table :workout_lifts do |t|
      t.belongs_to :workout 
      t.belongs_to :lift 
      t.timestamps
    end
  end
end

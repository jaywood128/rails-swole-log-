class CreateExerciseSets < ActiveRecord::Migration[5.2]
  def change
    create_table :exercise_sets do |t|
      t.integer :weight
      t.integer :reps
      t.references :user, foreign_key: true
      t.references :workout_lift, foreign_key: true

      t.timestamps
    end
  end
end

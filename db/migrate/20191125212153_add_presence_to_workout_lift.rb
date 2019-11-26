class AddPresenceToWorkoutLift < ActiveRecord::Migration[5.2]
  def change
    add_column :workout_lifts, :presence, :string
  end
end

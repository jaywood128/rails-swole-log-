class CreateLifts < ActiveRecord::Migration[5.2]
  def change
    create_table :lifts do |t|
      t.string :name

      t.timestamps
    end
  end
end

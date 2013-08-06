# Step 1.1: Review this file DONE
class CreateTasks < ActiveRecord::Migration
  def change
    create_table :tasks do |t|
      t.string :name
      t.boolean :completed, default: false
      t.timestamps
    end
  end
end

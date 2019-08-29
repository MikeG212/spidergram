class CreateUserModels < ActiveRecord::Migration[5.2]
  def change
    create_table :user_models do |t|

      t.timestamps
    end
  end
end

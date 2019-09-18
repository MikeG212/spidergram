class AddDatabaseLevelValidationsToFollows < ActiveRecord::Migration[5.2]
  def change
    add_index :follows, [:follower_id, :followed_id], unique: true
    change_column_null :follows, :follower_id, false
    change_column_null :follows, :followed_id, false
  end
end

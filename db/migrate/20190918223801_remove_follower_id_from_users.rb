class RemoveFollowerIdFromUsers < ActiveRecord::Migration[5.2]
  def change
    remove_column :users, :follower_id, :integer
  end
end

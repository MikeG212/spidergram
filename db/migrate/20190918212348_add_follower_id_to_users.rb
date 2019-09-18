class AddFollowerIdToUsers < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :follower_id, :integer
  end
end
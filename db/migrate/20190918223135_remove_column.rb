class RemoveColumn < ActiveRecord::Migration[5.2]
  def change
    rename_column :follows, :user_id, :followed_id
  end
end

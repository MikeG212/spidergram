class ChangePosts < ActiveRecord::Migration[5.2]
  def change
    rename_column :posts, :content, :caption
    rename_column :posts, :user_id, :author_id

    add_column :posts, :image_url, :string
  end
end

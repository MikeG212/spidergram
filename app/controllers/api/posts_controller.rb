class Api::PostsController < ApplicationController

  def show
    @post = Post.find_by_id(params[:id])
    render :show
  end

  def index
    @posts = Post.all
    render :index
  end

  def create
    @post = Post.new(post_params)
    @post.user_id = current_user.id
    if @post.save
      render :show
    else
      render ({ json: @post.errors.full_messages, status: 422 })
    end
  end

  def like
    @post = Post.find(params[:id])
    like = @post.likes.new(user_id: current_user.id)
    if like.save
      render :show
    else
      render({ json: ["You already liked this"], status: 422 })
    end
  end

  def unlike
    @post = Post.find(params[:id])
    like = Like.find_by(user_id: current_user.id, post_id: @post.id)
    if like.destroy
      render :show
    else
      render ({ json: ["You already don't like this"], status: 422 })
    end
  end

  def post_params
    params.require(:post).permit(:caption, :image_url, :photo, :id)
  end
end

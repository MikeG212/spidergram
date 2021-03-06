require 'open-uri'

class Api::UsersController < ApplicationController
  def create
    @user = User.new(user_params)
    image = open("https://s3-us-west-1.amazonaws.com/spidergram-dev/avatar/default-avatar.jpeg")
    @user.avatar.attach(io: image, filename: "temp.jpg")
    
    if @user.save
      login(@user)
      render :show
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def update
    @user = current_user

    if @user.update(user_params)
      render :show
    else
      render json: @user.errors.full_messages, status: 422
    end
  end


  def show
    @user = User.includes(:posts).find(params[:id])
  end

  def index
    if params[:username]
      search_username = params[:username]
      @users = User.where('lower(username) like ?', "%#{search_username.downcase}%").limit(5)
    else
      @users = User.all
    end
  end

  def search
  end

  private
  def user_params
    params.require(:user).permit(:password, :email, :username, :bio, :avatar)
  end
end
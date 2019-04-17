Rails.application.routes.draw do
  root "static_pages#root"
  
  namespace :api, defaults: {format: :json} do
    resources :users
    resource :session, only: [:create, :destroy]
    resources :posts
    resources :likes, only: [:create, :destroy]
    resources :comments, only: [:create, :destroy]
  end
end 
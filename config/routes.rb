Rails.application.routes.draw do
  root "static_pages#root"
  
  namespace :api, defaults: {format: :json} do
    resource :users
    resource :session, only: [:create, :destroy]
    resources :posts
    resources :comments
  end
end 
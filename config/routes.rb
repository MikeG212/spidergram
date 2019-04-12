Rails.application.routes.draw do
  root "static_pages#root"
  
  namespace :api, defaults: {format: :json} do
    resources :users
    resource :session, only: [:create, :destroy]
    resources :posts do
      resources :comments, only: [:index]
      resources :likes, only: [:create, :destroy]
    end
    resources :comments
  end
end 
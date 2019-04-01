Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do
    resources :posts, only: [:index, :show, :create]
    resources :comments, only: [:index, :create]
    resource :user
    resource :session, only: [:create, :destroy]
  end

  root "static_pages#root"
end 
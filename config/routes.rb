Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do
    resource :users, only: [:create]
    resource :session, only: [:create, :destroy]
    resources :posts, only: [:index, :new, :show, :create]
  end

  root "static_pages#root"
end
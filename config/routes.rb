Rails.application.routes.draw do
  root "static_pages#root"
  
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :update, :destroy, :show, :index] do
      collection do
        get :search
      end
    end
    resource :session, only: [:create, :destroy]
    resources :posts do
      resources :comments, only: :index
    end
    resources :likes, only: [:create, :destroy]
    resources :comments, only: [:create, :destroy]
    
  end
end 
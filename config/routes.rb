Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'static_pages#root'
  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create]
    resource :session, only: [:create, :destroy]
    resources :questions, only: [:index]
    resources :questions, only: [:update, :destroy, :create]
    resources :answers, only: [:show, :destroy, :update]
    # resources :questions, only: [:index, :show, :create, :update]

    #for the current user
    resources :questions, only: [:self] do
      collection do
        get :self
      end
    end

    #answers for a question
    resources :questions, only: [:show] do
      resource :downvotes, only: [:create, :destroy]
      resource :upvotes, only: [:create, :destroy]
      resources :answers, only: [:index, :create]
    end

  end
end

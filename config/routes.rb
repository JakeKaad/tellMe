Rails.application.routes.draw do

  root 'application#index'
  resources :users

  get '*paths', to: 'application#index'

end

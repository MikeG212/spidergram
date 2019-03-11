class Api::PhotosController < ApplicationController
  before_action :require_logged_in, only: [:create]
end
class WorkoutsController < ApplicationController
    belongs_to :user 
    has_many :lifts
end

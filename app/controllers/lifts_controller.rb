class LiftsController < ApplicationController
  def show 
    @lift = Lift.find(params[:id])
  end 
end

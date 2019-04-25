class UsersController < ApplicationController
    def new 
        @user = User.new 
    end 

    def create 
        @user = User.create(user_params)
        redirect_to user_path(@user)
    end 

    def show 
        binding.pry
        @user = User.find(params[:id])
    end 

    def index 
    end 

    def edit 
    end 

    def update 
    end 

    def destroy 
    end 
    private 
    def user_params
        params.require(:user).permit(:name, :username, :email, :password_digest)
    end 
end

class UsersController < ApplicationController
    def new 
        @user = User.new 
    end 
    def create 
        binding.pry
        @user = User.create(user_params)
        redirect_to user_show_path(@user)
    end 

    def show 
        @user = User.new 
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
        params.require(:user).permit(:name, :username, :email, :password_confirmation)
    end 
end

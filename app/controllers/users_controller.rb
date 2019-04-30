class UsersController < ApplicationController
    def new 
        @user = User.new 
    end 

    def create 
        @user = User.create(user_params)
        redirect_to user_path(@user)
    end 

    def show 
        @user = User.find(params[:id])
    end 

    def index 
    end 

    def edit 
    end 

    def update 
    end 

    def destroy 
        self.delete session[:user_id]
    end 
    private 
    def user_params
        params.require(:user).permit(:name, :username, :email, :password_digest)
    end 
end

class UsersController < ApplicationController
    def new 
        @user = User.new 
    end 

    def create 
       
        @user = User.new(user_params)
       
        if @user.valid?
            redirect_to workouts_path
        else 
            render action: :new
        end
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

class ApplicationController < ActionController::Base
    helper_method :current_user


    private 

    def current_user
        @current_user ||= User.find_by(id: params[:id])
    end

    def logged_in? 
        !!current_user 
    end 
end

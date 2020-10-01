class Api::QuestionsController < ApplicationController

    before_action :require_logged_in, only: [:create]

    def index
        @questions = Question.all
        render :index
    end

    def show
        @question = Question.find(params[:id])
        render :show
    end

    def create
        @question = Question.new(question_params)
        @question.author_id = current_user.id
        if @question.save
            render :show
        else
            render json: @question.errors.full_messages, status: 422
        end
    end

    private

    def question_params
        params.require(:question).permit(:title, :body)
    end

end
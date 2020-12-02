class Api::QuestionsController < ApplicationController

    before_action :require_logged_in, only: [:create, :update, :destroy]

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

    def self
        @questions = Question.where(author_id: current_user.id)
        render :self
    end

  def update
    @question = Question.find_by(id: params[:id])
    if @question.author_id == current_user.id && @question.update(question_params)
      render :show
    else
      render json: ['Cannot update question :('], status: 422
    end
  end

  def destroy
    @question = Question.find_by(id: params[:id])
    if @question.nil?
      render json: ['Cannot find question :('], status: 422
    else
      if current_user.id == @question.author_id
        @question.destroy
        render :show
      else
        render json: ['Cannot delete question :('], status: 422
      end
    end
  end

    private

    def question_params
        params.require(:question).permit(:title, :body)
    end

end
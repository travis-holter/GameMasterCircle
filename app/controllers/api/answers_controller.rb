class Api::AnswersController < ApplicationController

  def index
    @answers = Answer.where(question_id: params[:question_id])
    render :index
  end

  def show
    @answer = Answer.find(params[:id])
    render :show
  end

  def create
    @answer = Answer.new(answer_params)
    @answer.author_id = current_user.id
    @answer.question_id = params[:question_id]
    if @answer.save!
      render :show
    else
      render json: @answer.errors.full_messages, status: 422
    end
  end


  def update
    @answer = Answer.find_by(id: params[:id])
    if @answer.author_id == current_user.id && @answer.update(answer_params)
      render :show
    else
      render json: ['Answer cannot be updated'], status: 422
    end
  end

  def destroy
    @answer = Answer.find_by(id: params[:id])
    if @answer.nil?
      render json: ['Answer cannot be found'], status: 422
    else
      if current_user.id == @answer.author_id 
        @answer.destroy!
        render :show
      else
        render json: ['Answer cannot be deleted'], status: 422
      end
    end
  end

  private

  def answer_params
    params.require(:answer).permit(:body)
  end

end

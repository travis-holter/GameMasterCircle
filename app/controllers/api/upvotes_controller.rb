class Api::UpvotesController < ApplicationController

  def create
    if already_voted?
      render json: ['Already upvoted'], status: 422
    else
      if has_downvote?
        @downvote = Downvote.find_by(user_id: current_user.id, question_id: params[:question_id], answer_id: params[:upvote][:answer_id])
        @downvote = Downvote.delete(@downvote.id)
      end
      @upvote = Upvote.new(upvote_params)
      @upvote.user_id = current_user.id
      @upvote.question_id = params[:question_id]
      if @upvote.answer_id != 0
        if @upvote.save
          @answer = @upvote.answer
          render 'api/answers/show'
        else
          render json: ['Cannot upvote answer'], status: 422
        end
      else
        if @upvote.save
          @question = @upvote.question
          render 'api/questions/show'
        else
          render json: ['Cannot upvote question'], status: 422
        end
      end
    end

  end

  def destroy
    @upvote = Upvote.find_by(user_id: current_user.id, question_id: params[:question_id], answer_id: params[:upvote][:answer_id])
    if @upvote.nil?
      render json: ['Upvote cannot be found'], status: 422
    else
      @question = @upvote.question
      if @upvote.destroy
        render 'api/questions/show'
      else 
        render json: ['Upvote is not destroyed'], status: 422
      end
    end
  end

  private
  
  def already_voted?
    Upvote.where(user_id: current_user.id, question_id: params[:question_id], answer_id: params[:upvote][:answer_id]).exists?
  end

  def has_downvote?
    Downvote.where(user_id: current_user.id, question_id: params[:question_id], answer_id: params[:upvote][:answer_id]).exists?
  end
  
  def upvote_params
    params.require(:upvote).permit(:answer_id)
  end

end

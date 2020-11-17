class Api::DownvotesController < ApplicationController

  def create
    if already_voted?
      render json: ['Already downvoted'], status: 422
    else
      if has_upvote?
        @upvote = Upvote.find_by(user_id: current_user.id, question_id: params[:question_id], answer_id: params[:downvote][:answer_id])
        @upvote = Upvote.destroy(@upvote.id)
      end
      @downvote = Downvote.new(downvote_params)
      @downvote.user_id = current_user.id
      @downvote.question_id = params[:question_id]
      if @downvote.answer_id != 0
        if @downvote.save
          @answer = @downvote.answer
          render 'api/answers/show'
        else
          render json: ['Cannot downvote answer'], status: 422
        end
      else
        if @downvote.save
          @question = @downvote.question
          render 'api/questions/show'
        else
          render json: ['Cannot downvote question'], status: 422
        end
      end
    end

  end

  def destroy
    @downvote = Downvote.find_by(user_id: current_user.id, question_id: params[:question_id], answer_id: params[:downvote][:answer_id])
    if @downvote.nil?
      render json: ['Downvote cannot be found'], status: 422
    else
      @question = @downvote.question
      if @downvote.destroy
        render 'api/questions/show'
      else 
        render json: ['Downvote cannot be deleted'], status: 422
      end
    end
  end
  
  private

  def already_voted?
    Downvote.where(user_id: current_user.id, question_id: params[:question_id], answer_id: params[:downvote][:answer_id]).exists?
  end

  def has_upvote?
    Upvote.where(user_id: current_user.id, question_id: params[:question_id], answer_id: params[:downvote][:answer_id]).exists?
  end

  def downvote_params
    params.require(:downvote).permit(:answer_id)
  end

end

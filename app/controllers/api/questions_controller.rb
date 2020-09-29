class Api::QuestionsController < ApplicationController

    def index
        @questions = Question.all
        render :index
    end


    private

    def question_params
        params.require(:question).permit(:title, :body)
    end

end
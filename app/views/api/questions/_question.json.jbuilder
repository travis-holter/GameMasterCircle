json.extract! question, :id, :title, :author_id, :body, :created_at, :updated_at
json.upvotes question.upvotes.where(answer_id: 0).count
json.downvotes question.downvotes.where(answer_id: 0).count
json.answer_count question.answers.count
json.upvotes_user_id question.upvotes.where(answer_id: 0).pluck(:user_id)
json.downvotes_user_id question.downvotes.where(answer_id: 0).pluck(:user_id)
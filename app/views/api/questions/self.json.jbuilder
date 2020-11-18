@questions.each do |question|
  json.set! question.id do
    json.extract! question, :id, :title, :author_id, :body, :created_at, :updated_at
    json.upvotes question.upvotes.count
    json.downvotes question.downvotes.count
  end
end
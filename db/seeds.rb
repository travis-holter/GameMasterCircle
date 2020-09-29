# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Question.destroy_all

users = User.create!([
    {username: "dagobb", email: "email@email.com", password: 'hunter12'},
    {username: "bearman", email: "dude@dude.com", password: 'potato'},
    {username: "demo", email: "demo@demo.com", password: 'demo12'}
])

questions = Question.create!([
    {title: "Should I let my players have an 'alchemy jug'?", body: "I am worried that they will just use it to make a bunch of mayonaise.", author_id: 1},
])

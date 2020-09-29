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
    {title: "What should I do with my problem player?", body: "I have this guy who keeps a live chicken in his shirt, I've been thinking about kicking him out. What do my peeps think?", author_id: 2},
    {title: "What question should I ask as a demo user?", body: "I just clicked the green button and now I am in. I have always been currious about D&D, but truthfully I am just someone checking out this website. So far, I think it's pretty rad.", author_id: 3},
    {title: "My name is Nick and I like to ask questions.", body: "I know that wasn't a question, this is just the kind of person I am.", author_id: 2},
])

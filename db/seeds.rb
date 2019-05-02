# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

user = User.create(name: "woody", email: "tree@wood", password: "tree", username: "woodpecker") 

spig = User.create(name: "Piggy", email: "Bacon", password: "oink", username: "Spiderpig")

workout = Workout.create(start_time: DateTime.now, end_time: DateTime.now, user_id: user.id)

bench_press = Lift.create(name: "Bench Press")

squat = Lift.create(name: "Barebell Squat")

strict_press = Lift.create(name: "Barebell Strict Press")

dead_lift = Lift.create(name: "Deadlift")

barebell_row = Lift.create(name: "Barebell Row")





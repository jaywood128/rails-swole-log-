# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)



spig = User.find(2)

workout = Workout.create(start_time: DateTime.now, end_time: DateTime.now, user_id: spig.id)

bench_press = Lift.create(name: "Bench Press")

squat = Lift.create(name: "Barebell Squat")

strict_press = Lift.create(name: "Barebell Strict Press")

dead_lift = Lift.create(name: "Deadlift")

barebell_row = Lift.create(name: "Barebell Row")

# workout_lift = WorkoutLift.new 

# exercise_sets = workout_lift.exercise_sets.build(weight: 200, reps: 15)

# spig.exercise_sets = exercise_sets #exercise sets needs a user before you can save it because it's the child. 

# workout_lift.lift.id = squat.id 

# workout_lift.user.id = spig.id 

# workout_lift.save 





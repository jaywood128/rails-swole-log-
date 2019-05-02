# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2019_05_02_184523) do

  create_table "exercise_sets", force: :cascade do |t|
    t.integer "weight"
    t.integer "reps"
    t.integer "user_id"
    t.integer "workout_lift_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_id"], name: "index_exercise_sets_on_user_id"
    t.index ["workout_lift_id"], name: "index_exercise_sets_on_workout_lift_id"
  end

  create_table "lifts", force: :cascade do |t|
    t.string "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "users", force: :cascade do |t|
    t.string "name"
    t.string "username"
    t.string "email"
    t.string "password_digest"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "workout_lifts", force: :cascade do |t|
    t.integer "workout_id"
    t.integer "lift_id"
    t.integer "user_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["lift_id"], name: "index_workout_lifts_on_lift_id"
    t.index ["user_id"], name: "index_workout_lifts_on_user_id"
    t.index ["workout_id"], name: "index_workout_lifts_on_workout_id"
  end

  create_table "workouts", force: :cascade do |t|
    t.datetime "start_time"
    t.datetime "end_time"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "user_id"
  end

end

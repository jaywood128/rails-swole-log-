class ExerciseSet {
  constructor(attributes) {
    this.id = attributes.id 
    this.weight = attributes.weight
    this.reps = attributes.reps
    this.user_id = attributes.user_id 
    this.workout_lift_id = attributes.workout_lift_id 
  }

 set_weight_reps() {
   return `
      <li> <div> Weight: ${this.weight} </div> 
      <div> Reps: ${this.reps} </div> <button onclick="showEditForm(${this.id}, ${this.workout_lift_id})" data-workout_lift_id= "${this.workout_lift_id}"> Edit </button> </li>
      `
  }
}
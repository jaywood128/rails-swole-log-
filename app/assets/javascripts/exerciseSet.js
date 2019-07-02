class ExerciseSet {
  constructor(attributes) {
    this.id = attributes.id 
    this.weight = attributes.weight
    this.reps = attributes.reps
    this.user_id = attributes.user_id 
    this.workout_lift_id = attributes.workout_lift_id 
  }

 set_weight() {
   return `
      <div> Weight: ${this.weight} </div>
      <button type="button" data-user_id= "${this.user_id}" hidden="hidden"> </button> 
      `
  }
  set_reps() {
    return `
      <div> Reps: ${this.reps} </div>
      <button type="button" data-user_id= "${this.user_id}" hidden="hidden"> </button> 
      `
  }
}
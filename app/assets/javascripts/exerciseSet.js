
class ExerciseSet {
  constructor(attributes, i) {
    this.i = i 
    this.id = attributes.id 
    this.weight = attributes.weight
    this.reps = attributes.reps
    this.user_id = attributes.user_id 
    this.workout_lift_id = attributes.workout_lift_id 
  }

 set_weight_reps() {
   return `
      <!-- Sets and Reps Item -->
      <dt>Set ${this.i + 1} </dt>
      <dd id="set-${this.i + 1}">Weight: <span>${this.weight}</span> &bull; Reps: <span>${this.reps}</span></dd> 
      <a href="#">Edit </a> 
   `
  }
}

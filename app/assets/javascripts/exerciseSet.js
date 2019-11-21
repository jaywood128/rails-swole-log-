
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
      <!-- Sets and Reps Item -->
      <dt> Set ${this.id} </dt>
      <dd id="set-${this.id}">Weight: <span>100</span></dd> 
      <dd> Reps: ${this.reps} </dd> 
      <button onclick="showEditForm(${this.id}, ${this.workout_lift_id})" 
      data-workout_lift_id= "${this.workout_lift_id}"> Edit </button> 
   `
  }
}
// class="btn btn-primary" data-toggle="modal" data-target="#exampleModal"
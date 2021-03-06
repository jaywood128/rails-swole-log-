
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
    <div id="exercise-set-container-${this.i + 1}"> 
      <dt id="dd-${this.i + 1}">Set ${this.i + 1} </dt>
      <dd id="dd-${this.i + 1}">Weight: <span>${this.weight}</span> &bull; Reps: <span>${this.reps}</span></dd> 
      <button onclick="showEditForm(${this.id}, ${this.workout_lift_id}, ${this.i + 1})"> <i class="fa fa-pencil fa-3" aria-hidden="true"></i></button> 
    </div>
   `
  }
}

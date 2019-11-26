class WorkoutLift {
  constructor(attributes) {
    
    this.id = attributes.id 
    this.name = attributes.name
    // this.render = attributes.name 
  }

 render() { 
   return `
   <!-- WorkoutLift Item -->

   <li id="WorkoutLift_${this.id}" class="${this.name}"> 
    ${this.name}
    <button class="WorkoutLift-button-${this.id}" onclick="showExerciseSets(${this.id})" id ="ShowExerciseSets-${this.id}" data-workout_lift_id= "${this.id}"> <i class="fas fa-angle-down"></i> </button>
    <button onclick="addSet(${this.id})" id="add-set-${this.id}"> Add set(s) </button>
   </li> 
  `
  }
   
}
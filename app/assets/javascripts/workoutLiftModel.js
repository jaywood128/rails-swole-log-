class WorkoutLift {
  constructor(attributes) {
    
    this.id = attributes.id 
    this.name = attributes.name
    this.render = "true" 
  }

 render() { 
   return `
   <!-- WorkoutLift Item -->

   <li id="Workout_${this.id}" class="${this.name}"> 
    ${this.name} 
      <button onclick="showExerciseSets(${this.id})" id ="ShowExerciseSets-${this.id}" data-workout_lift_id= "${this.id}"> <i class="fas fa-angle-down"></i> </button>
      
   </li> 
  `
  }
   
}
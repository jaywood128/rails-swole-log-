class WorkoutLift {
  constructor(attributes) {
    
    this.id = attributes.id 
    this.name = attributes.name 
  }

 render() { 
   return `
      <div id="Workout_${this.id}"> ${this.name} </div>
      <button onclick="showExerciseSets(${this.id})" id ="ShowExerciseSets-${this.id}" data-workout_lift_id= "${this.id}"> Show sets </button> 
      `
  }
   
}

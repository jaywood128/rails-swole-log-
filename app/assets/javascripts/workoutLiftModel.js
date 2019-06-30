class WorkoutLift {
  constructor(attributes) {
    this.id = attributes.id 
    this.name = attributes.name 
  }

 render() {
   return `
      <div> ${this.name} </div>
      <button type="button" data-workout_lift_id= "${this.id}" hidden="hidden"> </button> 
      `
  }
}
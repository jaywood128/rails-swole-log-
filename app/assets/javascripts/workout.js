class Workout {
  constructor(attributes) {
    this.id = attributes.id 
    this.display_start_time= attributes.display_start_time 
    this.end_time = attributes.end_time 
    this.user_id = attributes.user_id 
  }
  render() { 
    return `
       <button onclick="addWorkoutLift(${this.id})" id ="AddWorkoutLift-${this.id}" > Add WorkoutLift </button>
       `
   } 

  
  

   
}
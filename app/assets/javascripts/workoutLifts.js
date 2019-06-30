console.log("Loading??")
  document.addEventListener('turbolinks:load', (e) => {

    document.getElementById("new_exercise_set").addEventListener('submit', e => {
      e.preventDefault()
      var workout_lift_id = document.querySelector("button").dataset.workout_lift_id 
      token = e.target.querySelector(['input[name=authenticity_token']).value 
      var data = {exercise_set: {}}; 
      
      data["exercise_set"]["weight"] = e.target.querySelector("#exercise_set_weight").value 
      data["exercise_set"]["reps"] = e.target.querySelector("#exercise_set_reps").value 
      debugger 
      fetch(`${e.target.action}.json`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json', 
          'X-CSRF-token':token
        }, 
        body: JSON.stringify(data)
      }).then(resp=> resp.json()).then(exercise_set => console.log(exercise_set))

      // e.preventDefault();
      // let prom = fetch(`${e.path[1].baseURI}/exercise_sets`)
    })
    // let workoutElement = document.getElementById("workoutLifts")
   const workoutShow = document.querySelector(".workouts.show")
    if (workoutShow) {
        
           getWorkoutLifts(e.data.url)
    } 
    function getWorkoutLifts(url) {
      
      let prom = myFetch(`${url}/workout_lifts.json`)
      prom.then(resp => resp.json()).then(workoutlifts => displayWorkoutLifts(workoutlifts))
      // .catch(err => displayResults("Workouts not found."))
      
  
    }
  }) 
  const displayWorkoutLifts = (workoutlifts) => {
  let html = workoutlifts.map(workoutliftData => new WorkoutLift(workoutliftData).render()).join('')
    document.getElementById("workoutLiftName").innerHTML = html 
   
  }

  
  
  // const displayResults = (error) => {
  //   document.getElementById("workoutliftName").innerText = error

  // }
   
    // let prom = fetch('workouts/17/workout_lifts.json') 
    // let answer = prom.then(resp => resp.json())
    // let result = answer.then(workoutlifts => console.log(workoutlifts))

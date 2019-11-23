
document.addEventListener('turbolinks:load', (e) => {

  var exerciseSetForm = document.getElementById('new_exercise_set');

  var workoutLiftForm = document.getElementById('new_workout_lift')
  
  if(exerciseSetForm){
    exerciseSetForm.addEventListener('submit', e => {
      e.preventDefault()
    
      var workout_lift_id = document.querySelector("form #exercise_set_workout_lift_id").value 
      var token = e.target.querySelector('input[name=authenticity_token]').value 
      var data = {exercise_set: {}}; 
      data["exercise_set"]["weight"] = e.target.querySelector("#exercise_set_weight").value 
      data["exercise_set"]["reps"] = e.target.querySelector("#exercise_set_reps").value 
      var exercise_set_url = `http://localhost:3000/workout_lifts/${workout_lift_id}/exercise_sets`
       
      fetch(`${exercise_set_url}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json', 
          'Accept' : 'application/json',
          'X-CSRF-token': token
        }, 
        body: JSON.stringify(data)
      })
      .then(resp=> resp.json())
      .then(workout_lift_data => {
        document.getElementById("exerciseset-modal").style.display = "none"
        // passing workout_lift_data so I can print the index of each exercise_set
        displayCreatedExerciseSets(workout_lift_data)
      })
      .catch(e => {
        console.log(e);
        return e;
      });

      })
  }

  if (workoutLiftForm){
    workoutLiftForm.addEventListener( 'submit', e => {

      var workout_lift_token = e.target.querySelector('input[name=authenticity_token]').value 
    })
  }

  const workoutShowLoaded = document.querySelector(".workouts.show")
    
  if (workoutShowLoaded) { 
    
    getWorkout(e.data.url)
  }
})

function getWorkout(url) {
      
  let prom = fetch(`${url}.json`)
  prom.then(resp => resp.json()).then(workoutData => displayWorkout(workoutData))
  .catch(err => console.log(err))

}

const displayWorkout = (workoutData) => {
 
      console.log(workoutData)
  let html = workoutData.workout_lifts.map(workoutliftData => new WorkoutLift(workoutliftData).render()).join('')
  let workout = new Workout(workoutData) 
  
  document.getElementById('add-workoutlift-button').innerHTML += workout.render() 
  let workoutStart = document.getElementById("workout-start-time")
  
  workoutStart.innerHTML = workout.display_start_time

  document.querySelector("ul").innerHTML = html 


}
const displayCreatedExerciseSets = (workout_lift_data) => {
  
  for (let i = 0; i < workout_lift_data.exercise_sets.length ; i++ ) {
   let js_exercise_set = new ExerciseSet(workout_lift_data.exercise_sets[i], i)
    document.getElementById(`Workout_${workout_lift_data.id}`).innerHTML += js_exercise_set.set_weight_reps()
  }
  document.getElementsByName("commit")[0].disabled = false 
  // document.querySelector(`div #Workout_${js_exercise_set.workout_lift_id} dl`).innerHTML += js_exercise_set.set_weight_reps()
}

function showExerciseSets(id) {
  console.log(id)

  fetch(`http:localhost:3000/workout_lifts/${id}.json`)
   .then( resp=> resp.json())
  .then( getExerciseSet => showExerciseSetIndex(getExerciseSet, id))
  .catch( err => console.log(err))
}
function showExerciseSetIndex(workoutLift, id) {
  let dtdd = document.getElementById(`dl-${workoutLift.id}`)
        //adding sets  and reps inside the workoutlift's <dl> element 
  if (workoutLift.exercise_sets.length === 0) {
    // if Add Set button with id of "add-set-${id}" is not loaded, add to dtdd element
    if (!document.getElementById(`add-set-${id}`)) {
      dtdd.innerHTML = `<button onclick="addSet(${workoutLift.id})" id="add-set-${id}"> Add set(s) </button>`
    }
  } else {

    let exercise_sets = workoutLift.exercise_sets 
    
    for (let i = 0; i < exercise_sets.length ; i++ ) {

      let js_exercise_sets = exercise_sets.map((exercise_set, i) =>  new ExerciseSet(exercise_set, i).set_weight_reps())
      dtdd.innerHTML = js_exercise_sets.join("")
      
    }
    
    
  }
  
  
  // let div = document.getElementById(`Workout_${workoutLift.id}`)
  // div.appendChild(listElement)

}

function deleteSet(exerciseSetId) { 
      
  var token = document.querySelector('input[name=authenticity_token').value 
  let url = `http://localhost:3000/exercise_sets/${exerciseSetId}.json`
  
  fetch(`${url}`, {

  method: 'DELETE',
  headers: {
    'Content-Type': 'application/json', 
    'Accept' : 'application/json',
    'X-CSRF-token': token
  }, 

  })
  .then(resp=> resp.json())
  .then(delete_resp => {
  console.log(delete_resp)

  let listItem = document.getElementById(`set-${delete_resp.id}`) 
  listItem.parentElement.removeChild(listItem)

  })
  .catch(e => {
  console.log(e);
  return e;
  });

}


  
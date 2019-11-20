
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
      .then(exercise_set => {
        document.getElementById("myModal").style.display = "none"
        displayCreatedExerciseSets(exercise_set)
      })
      .catch(e => {
        console.log(e);
        return e;
      });

      })
  }

  if (workoutLiftForm){
    workoutLiftForm.addEventListener( 'submit', e => {
      debugger 
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
  debugger 
  document.getElementById('add-workoutlift-button').innerHTML += workout.render() 
  let workoutStart = document.getElementById("workout-start-end-time")
  
  workoutStart.innerHTML = workout.display_start_time
  document.getElementById("workoutlift-name").innerHTML = html 


}

function showExerciseSets(id) {
  console.log(id)
  
  fetch(`http:localhost:3000/workout_lifts/${id}.json`)
   .then( resp=> resp.json())
  .then( getExerciseSet => showExerciseSetIndex(getExerciseSet, id))
  .catch( err => console.log(err))
}
function showExerciseSetIndex(workoutLift, id) {
  
  let listElement = document.createElement("ul")
  let r = workoutLift.exercise_sets.map(exerciseSet => new ExerciseSet(exerciseSet).set_weight_reps())

  if (!document.getElementById("add-set-${id}")) {
    listElement.innerHTML = r.join('') + `<button onclick="addSet(${workoutLift.id})" id="add-set-${id}"> Add set(s) </button>`
  }

  
  
  
  let div = document.getElementById(`Workout_${workoutLift.id}`)
  div.appendChild(listElement)

}

const displayCreatedExerciseSets = (exercise_set_data) => {
        
  let js_exercise_set = new ExerciseSet(exercise_set_data)
  
  document.querySelector(`div #Workout_${js_exercise_set.workout_lift_id} ul`).innerHTML += js_exercise_set.set_weight_reps()
          
  document.getElementsByName("commit")[0].disabled = false 
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


  
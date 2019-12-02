
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
      document.querySelector("#exercise_set_weight").value = ""
      document.querySelector("#exercise_set_reps").value = ""

       
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
  // set up the elements 
  let workoutStart = document.getElementById("workout-start-time")
  let workout = new Workout(workoutData)
  
  workoutStart.innerHTML = workout.display_start_time
  let add_workout_lifts_button = document.getElementById('add-workoutlift-button')
  let show_exercise_sets_button = `<button onclick="showExerciseSets(${workoutData.id})" id ="ShowExerciseSets-${workoutData.id}" data-workout_lift_id= "${workoutData.id}"> <i class="fas fa-angle-down"></i> </button>`
  let ul = document.querySelector("ul")
  // if workoutData.workout_lifts then display 
  
  if (workoutData.workout_lifts.length > 0) {
    let html = workoutData.workout_lifts.map(workoutliftData => new WorkoutLift(workoutliftData).render()).join('')
    ul.innerHTML += html 
  } 
  add_workout_lifts_button.innerHTML += `<button onclick="addWorkoutLift(${workoutData.id})" id ="AddWorkoutLift-${workoutData.id}" > Choose an exercise </button>`

//   add_workout_lifts_button.innerHTML += workout.render()  
}

const displayCreatedExerciseSets = (workout_lift_data) => {
  debugger
  var last = workout_lift_data.exercise_sets.length - 1
  var js_exercise_set = new ExerciseSet(workout_lift_data[last], last) 
  document.getElementById(`WorkoutLift_${workout_lift_data.id}`).innerHTML += js_exercise_set.set_weight_reps()
  // for (let i = 0; i < workout_lift_data.exercise_sets.length ; i++ ) {
  //  let js_exercise_set = new ExerciseSet(workout_lift_data.exercise_sets[i], i)
  //   debugger 
  //   document.getElementById(`WorkoutLift_${workout_lift_data.id}`).innerHTML += js_exercise_set.set_weight_reps()
  // }
  document.getElementsByName("commit")[0].disabled = false 
  toggleExerciseSetsDisplay(workout_lift_data.id)
  
  // document.querySelector(`div #Workout_${js_exercise_set.workout_lift_id} dl`).innerHTML += js_exercise_set.set_weight_reps()
}

function showExerciseSets(id) {
  
  fetch(`http:localhost:3000/workout_lifts/${id}.json`)
  .then( resp=> resp.json())
  .then( getExerciseSet => showExerciseSetIndex(getExerciseSet, id))
  .catch( err => console.log(err))
}

function showExerciseSetIndex(workoutLift, id) {
  
  let add_set_button = `<button onclick="addSet(${workoutLift.id})" id="add-set-${workoutLift.id}"> Add set(s) </button>`
  let li = document.getElementById(`WorkoutLift_${workoutLift.id}`)
  let exercise_sets = createExerciseSets(workoutLift)
  let hide_exercise_sets_button = `<button onclick="hideExerciseSets(${workoutLift.id})"><i class="fas fa-angle-up"></i> </button>`
        //adding sets  and reps inside the workoutlift's <dl> element 
        
  if (workoutLift.exercise_sets.length > 0) {
    // li.innerHTML += exercise_sets.toString()
    toggleExerciseSetsDisplay(workoutLift.id)
  } else { 
    alert(`Add a set for the ${workoutLift.name}`)
  }
  // document.getElementById(`ShowExerciseSets-${id}`).remove() 


}

function createExerciseSets(workoutLift) {
    
  if (!document.getElementById(`dl-${workoutLift.id}`)) {
  let exercise_sets = workoutLift.exercise_sets 
  // let dl = document.getElementById(`dl-${workoutLift.id}`)
  let li = document.getElementById(`WorkoutLift_${workoutLift.id}`)
  let dl = document.createElement("dl")
  dl.setAttribute("id", `dl-${workoutLift.id}`)
  li.appendChild(dl)
  let js_exercise_sets = exercise_sets.map((exercise_set, i) =>  new ExerciseSet(exercise_set, i).set_weight_reps()) 
   
  // debugger
  dl.innerHTML += js_exercise_sets.join("")
  debugger
  return dl.innerHTML.toString() 
  }

}

function toggleExerciseSetsDisplay(set_id){
  let icon = document.getElementById(`ShowExerciseSets-${set_id}`).querySelector(".fas"); 
  // hide or reveal exercise set data 
 debugger 
  if (icon.classList.contains('fa-angle-down')) {
    icon.classList.remove('fa-angle-down')
    icon.classList.add("fa-angle-up")
  } else {
    icon.classList.remove('fa-angle-up')
    icon.classList.add("fa-angle-down")
  } 

  document.getElementById(`dl-${set_id}`).classList.toggle("hide-me")

  // document.getElementById(`ShowExerciseSets-${set_id}`).querySelector(".fas").classList.toggle(".fa-angle-up")
  
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


  

console.log("Loading??")
  document.addEventListener('turbolinks:load', (e) => {
    
    
    var form = document.getElementById('new_exercise_set');

    if(form){
      form.addEventListener('submit', e => {
        form.preventDefault()
    
        var workout_lift_id = document.querySelector("form #exercise_set_workout_lift_id").value 
        var token = e.target.querySelector('input[name=authenticity_token').value 
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
          displayCreatedExerciseSets(exercise_set)
        })
        .catch(e => {
          console.log(e);
          return e;
        });

      })
    }

  const workoutShowLoaded = document.querySelector(".workouts.show")
    
  if (workoutShowLoaded) { 
    
    getWorkout(e.data.url)
  } 
})

function getWorkout(url) {
      
  let prom = myFetch(`${url}.json`)
  prom.then(resp => resp.json()).then(workoutData => displayWorkout(workoutData))
  // .catch(err => displayResults("Workouts not found."))

}

const displayWorkout = (workoutData) => {
  
  let html = workoutData.workout_lifts.map(workoutliftData => new WorkoutLift(workoutliftData).render())
  let workout = new Workout(workoutData) 
  let workoutStart = document.getElementById("workoutStartEnd")
  
  workoutStart.innerHTML = workout.display_start_time
  var today = new Date().toLocaleDateString('en-GB', {  
    day : 'numeric',
    month : 'short',
    year : 'numeric'
  })

document.getElementById("workoutLiftName").innerHTML = html 


}
function showExerciseSets(id) {
  console.log(id)
  
  fetch(`http:localhost:3000/workout_lifts/${id}.json`)
   .then( resp=> resp.json())
  .then( get_exercise_set => showExerciseSetIndex(get_exercise_set))
  .catch( err => console.log(err))
}
function showExerciseSetIndex(workout_lift) {
  
  let r = workout_lift.exercise_sets.map(exercise_set => new ExerciseSet(exercise_set).set_weight_reps()).join('')
  
  let orderedList = "<ol>" + r + "</ol>" + `<button onclick="addSet(${workout_lift.id})"> Add set(s) </button>`
  let div = document.getElementById(`Workout_${workout_lift.id}`)
  div.innerHTML += orderedList


}

    const displayCreatedExerciseSets = (exercise_set_data) => {
    
      let js_exercise_set = new ExerciseSet(exercise_set_data)
      document.querySelector(`div #Workout_${js_exercise_set.workout_lift_id} ol`).innerHTML += js_exercise_set.set_weight_reps()
      
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
        let listItem = document.getElementById(delete_resp.id) 
        listItem.parentElement.removeChild(listItem)
      })
      .catch(e => {
        console.log(e);
        return e;
      });

    }
   

  // const getSets = () => { 
    
    
     
  // }
  
  //  var showSetButtons = document.querySelectorAll("#exerciseSetsIndex")

//    window.onload = addEventListenerSetList(showSetButtons, 'click', getSets)
// })
// function areYouWorking() {
//   console.log("Loading")
// }
// window.onload = function addEventListenerSetList(sets, event, fn) {
  
//   for (var i = 0, len = sets.length; i < len; i ++) {
   
//     sets[i].addEventListener(event, fn);
//   }
// }

// function showExerciseSets() {
//   var showSetButtons = document.querySelectorAll("#exerciseSetIndex")
//   const getSets = () => { 
    
     
//   }
//   addEventListenerSetList(showSetButtons, 'click', getSets)
// }
//   }) 
  





  




  

  
  
  
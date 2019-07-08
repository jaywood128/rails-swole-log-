
console.log("Loading??")
  document.addEventListener('turbolinks:load', (e) => {
    
   
  document.getElementById("new_exercise_set").addEventListener('submit', e => {
      e.preventDefault()
   
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
    const displayCreatedExerciseSets = (exercise_set_data) => {
       
      let js_exercise_set = new ExerciseSet(exercise_set_data)
      document.querySelector(`div #Workout_${js_exercise_set.workout_lift_id} ol`).innerHTML += js_exercise_set.set_weight_reps()
      
      document.getElementsByName("commit")[0].disabled = false 
    }
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

  const displayWorkoutLifts = (workoutlifts) => {
       
  let html = workoutlifts.map(workoutliftData => new WorkoutLift(workoutliftData).render())
   
  //  let buttonDetails = workoutlifts.map(workoutliftData => new WorkoutLift(workoutliftData).show_workout_lifts()).join('')
  
  buttonDetails = document.getElementById("details").innerHTML
 
    document.getElementById("workoutLiftName").innerHTML = html 

   
  }
  const getSets = () => { 
    
    
     
  }
  
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
  })





  



//   {
  //     e.preventDefault()
  //     let w_l_id = document.querySelector("button").dataset.workout_lift_id 
  //     fetch(`http:localhost:3000/workout_lifts/${w_l_id}/exercise_sets`)
  //     .then( resp=> resp.json())
  //     .then( get_exercise_set =w
  // })
  
  // (butt => {
  //   debugger
  //   butt.addEventListener("click", function() {
      
  //     let w_l_id = document.querySelector("button").dataset.workout_lift_id 
  //     fetch(`http://localhost:3000/workout_lift/${w_l_id}/exercise_sets`)
  //     .then( resp=> resp.json )
  //     .then(e_s => console.log(e_s))
  //   })
  // }) 



  

  
  
  // const displayResults = (error) => {
  //   document.getElementById("workoutliftName").innerText = error

  // }
   
    // let prom = fetch('workouts/17/workout_lifts.json') 
    // let answer = prom.then(resp => resp.json())
    // let result = answer.then(workoutlifts => console.log(workoutlifts))

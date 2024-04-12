const displayStartMessage = function(exercise, reps) {
    return new Promise((resolve, reject) => {

    const startSection = document.getElementById("start-sect");
    startSection.innerHTML = '';

    const startMessage = document.createElement("p");
    startMessage.textContent = `Start ${exercise} Goal rep is ${reps}`;
    startSection.appendChild(startMessage);

    resolve();
    })
    
};


const displayStopMessage = function(exercise, reps, time) {
    return new Promise((resolve, reject) =>{

    const startSection = document.getElementById("start-sect");

    if(time !== ""){
    setTimeout(() => {
        const stopMessage = document.createElement("p");
        stopMessage.textContent = `Stop ${exercise}`;
        startSection.appendChild(stopMessage);

        setTimeout(()=> {
            const finsihedMessage = document.createElement("p");
            finsihedMessage.textContent = `Congrats, on finishing ${reps} ${exercise} `
            startSection.appendChild(finsihedMessage);

            resolve();
        
        },2000);
    }, time * 3000);
    }else{
        reject('Error on Time Section');
    }
    });
    
};

const displayingText = function() {
    return new Promise((resolve, reject) => {
        const exercise = document.getElementById("exercise").value;
        const reps = document.getElementById("reps").value;
        const time = document.getElementById("time").value;
        
        
            displayStartMessage(exercise, reps)
                .then(() => {
                    return displayStopMessage(exercise, reps, time);
                })
                .then(() => {
                    resolve();
                })
                .catch(error => reject(error));
    });
};

const onError = (error) => {
    const errorMessage = document.createElement("h2");
    errorMessage.textContent = error;
    const startSection = document.getElementById("start-sect");
    startSection.textContent = ''; 
    startSection.appendChild(errorMessage);
    
}
document.getElementById("submitBtn").addEventListener('click', function(e) {
    e.preventDefault(); 
    displayingText()
    .catch(onError);
})
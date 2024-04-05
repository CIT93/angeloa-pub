const displayStartMessage = function(exercise, reps) {
    const startSection = document.getElementById("start-sect");
    startSection.innerHTML = '';

    const startMessage = document.createElement("p");
    startMessage.textContent = `Start ${exercise} Goal rep is ${reps}`;
    startSection.appendChild(startMessage);
};


const displayStopMessage = function(exercise, reps, time, callback) {
    const startSection = document.getElementById("start-sect");

    setTimeout(() => {
        const stopMessage = document.createElement("p");
        stopMessage.textContent = `Stop ${exercise}`;
        startSection.appendChild(stopMessage);

        setTimeout(()=> {
            const finsihedMessage = document.createElement("p");
            finsihedMessage.textContent = `Congrats, on finishing ${reps} ${exercise} `
            startSection.appendChild(finsihedMessage);
        
        },2000);

        callback(exercise);
    }, time * 3000);
};

const displayingText = function(callback) {
    const exercise = document.getElementById("exercise").value;
    const reps = document.getElementById("reps").value;
    const time = document.getElementById("time").value;

    displayStartMessage(exercise, reps);
    displayStopMessage(exercise, reps, time, callback);
};


document.getElementById("submitBtn").addEventListener('click', function(e) {
    e.preventDefault(); 
    displayingText()
});
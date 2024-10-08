window.onload = function() {
    let currentRotation = 0;
    function rotateCircle(step) {
        const circle = document.getElementById("circle");
        if (step === 0) {
            currentRotation = 0;
            circle.style.transform = `rotate(${currentRotation}deg)`;
        } else {
            currentRotation += step;
            circle.style.transform = `rotate(${currentRotation}deg)`;
        }
    }
    document.querySelectorAll(".rotate-button").forEach(button => {
        button.addEventListener('click', function() {
            const step = parseInt(this.value);
            rotateCircle(step);
        });
    });
};

// Resets rotation if step is 0, otherwise adds step to currentRotation and applies it. 
// Button click gets step value and triggers the rotation function.

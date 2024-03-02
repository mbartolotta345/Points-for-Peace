document.addEventListener('DOMContentLoaded', function () {
    let points = parseInt(localStorage.getItem('points')) || 0;
    const pointsDisplay = document.getElementById('points');
    const addPointsBtn = document.getElementById('add-points-btn');
    const dropPointsBtn = document.getElementById('drop-points-btn');

    // Function to update points display
    function updatePoints() {
        pointsDisplay.textContent = points;
        localStorage.setItem('points', points.toString());
    
    }

    updatePoints();

    // Add points button click event
    addPointsBtn.addEventListener('click', function () {
        points += 10; // Change the amount as needed
        updatePoints();
    });

    // Drop points button click event
    dropPointsBtn.addEventListener('click', function () {
        if (points > 0) {
            points -= 5; // Change the amount as needed
        }
        updatePoints();
    });
});

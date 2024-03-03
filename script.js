document.addEventListener('DOMContentLoaded', function () {
    // Retrieve points from local storage or set default value
    let points = parseInt(localStorage.getItem('points')) || 0;

    const pointsDisplay = document.getElementById('points');

    // Function to update points display
    function updatePoints() {
        pointsDisplay.textContent = points;
        // Update points in local storage
        localStorage.setItem('points', points.toString());
    }

    // Initialize points display
    updatePoints();

    // Attach click event listeners to each button
    function attachButtonClickEvent(buttonId, pointsChange) {
        const button = document.getElementById(buttonId);
        button.addEventListener('click', function () {
            points += pointsChange; // Change the amount as needed
            updatePoints();
        });
    }

    // Example: Add points button click event
    attachButtonClickEvent('add-points-btn-1', 10);

    // Example: Another add points button click event
    attachButtonClickEvent('add-points-btn-2', 5);

    // Example: Add points button click event
    attachButtonClickEvent('add-points-btn-3', 10);

    // Example: Add points button click event
    attachButtonClickEvent('add-points-btn-4', 10);

    // Example: Add points button click event
    attachButtonClickEvent('add-points-btn-5', 10);

    // Example: Add points button click event
    attachButtonClickEvent('add-points-btn-6', 10);
    attachButtonClickEvent('add-points-btn-7', 10);

    // Example: Drop points button click event
    attachButtonClickEvent('drop-points-btn', -5);

    // Example: Drop points button click event
    attachButtonClickEvent('drop-points-btn-1', -5);

    // Example: Drop points button click event
    attachButtonClickEvent('drop-points-btn-2', -5);

    // Example: Drop points button click event
    attachButtonClickEvent('drop-points-btn-3', -5);

    // Example: Drop points button click event
    attachButtonClickEvent('drop-points-btn-4', -5);

    // Example: Drop points button click event
    attachButtonClickEvent('drop-points-btn-5', -5);

    // Example: Drop points button click event
    attachButtonClickEvent('drop-points-btn-6', -5);
});

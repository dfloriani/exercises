let close = document.getElementById("close");
let container = document.getElementById("container");
// To access the stars
let stars = document.getElementsByClassName("star");
let clickedRating = 0;

close.addEventListener('click', () => {
    container.remove();
});

// Function to update rating
function rating(n) {
    clickedRating = n;
    updateStars(n);
}

// Function to update stars
function updateStars(n) {
    for (let i = 0; i < stars.length; i++) {
        stars[i].className = "star";
    }
    for (let i = 0; i < n; i++) {
        if (n == 1) cls = "one";
        else if (n == 2) cls = "two";
        else if (n == 3) cls = "three";
        else if (n == 4) cls = "four";
        else if (n == 5) cls = "five";
        stars[i].className = "star " + cls;
    }
}

// Function for hover effect
function hoverRating(n) {
    if (clickedRating === 0) {
        updateStars(n);
    } else {
        for (let i = 0; i < stars.length; i++) {
            stars[i].className = "star";
        }
        for (let i = 0; i < n; i++) {
            if (n == 1) cls = "hover-one";
            else if (n == 2) cls = "hover-two";
            else if (n == 3) cls = "hover-three";
            else if (n == 4) cls = "hover-four";
            else if (n == 5) cls = "hover-five";
            stars[i].className = "star " + cls;
        }
    }
}

// Function to remove hover effect
function hoverRemove() {
    if (clickedRating === 0) {
        updateStars(0);
    } else {
        updateStars(clickedRating);
    }
}
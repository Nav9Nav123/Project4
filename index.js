const ratingEls = document.querySelectorAll(".rating");
const btnEl = document.getElementById("btn");
const containerEl = document.getElementById("container");

let selectedRating = "";

ratingEls.forEach((ratingEl) => {
    ratingEl.addEventListener("click", () => {
        removeActive();
        selectedRating = ratingEl.getAttribute("data-rating");
        ratingEl.classList.add("active");
    });
});

btnEl.addEventListener("click", () => {
    if (selectedRating !== "") {
        containerEl.innerHTML = `
            <strong>Thank you!</strong>
            <br>
            <br>
            <strong>Feedback: ${selectedRating}</strong>
            <p>We'll use your feedback to improve our customer support.</p>
        `;
    } else {
        alert("Please select a rating before submitting.");
    }
});

function removeActive() {
    ratingEls.forEach((ratingEl) => {
        ratingEl.classList.remove("active");
    });
}

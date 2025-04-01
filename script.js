document.addEventListener("DOMContentLoaded", () => {
    const projectButton = document.getElementById("btn-proposal");
    const midtermButton = document.getElementById("btn-midterm");

    projectButton.addEventListener("click", () => {
        window.location.href = "index.html";  // Adjust if needed
    });

    midtermButton.addEventListener("click", () => {
        window.location.href = "midterm.html";  // Replace with actual file path
    });
});
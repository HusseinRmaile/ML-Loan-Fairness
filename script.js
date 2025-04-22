document.addEventListener("DOMContentLoaded", () => {
    const proposalButton = document.getElementById("btn-proposal");
    const midtermButton = document.getElementById("btn-midterm");
    const finalButton = document.getElementById("btn-final");

    proposalButton.addEventListener("click", () => {
        window.location.href = "index.html";  // proposal button
    });

    midtermButton.addEventListener("click", () => {
        window.location.href = "midterm.html";  // midterm checkpoint button
    });

    finalButton.addEventListener("click", () => {
        window.location.href = "final.html"; // final checkpoint button
    });
});
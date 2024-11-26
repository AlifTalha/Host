let intro_main_location = document.getElementById("intro-section-main-content");

function backToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

function createBackToTopButton() {
    let btn = document.createElement("button");
    btn.type = "button"
    btn.id = "back-to-top";
    btn.className = "btn btn-warning btn-lg btn-floating";
    btn.style.position = "fixed";
    btn.style.bottom = "20px";
    btn.style.right = "20px";
    btn.style.display = "none";
    btn.style.borderRadius = "50%";
    btn.ariaLabel = "back-to-top";
    btn.innerHTML += `
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-up" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5z"/>
        </svg>`;
    document.body.appendChild(btn);
}

function displayBackToTopButton() {
    if (intro_main_location.offsetTop <= document.documentElement.scrollTop) {
        document.getElementById("back-to-top").style.display = "block";
    } else {
        document.getElementById("back-to-top").style.display = "none";
    }
}

// Create back-to-top button
createBackToTopButton();

// Scroll to display the back-to-top
window.onscroll = () => {
    displayBackToTopButton();
}

// Click the back-to-top button to go to the top page
document.getElementById("back-to-top").addEventListener("click", () => {
    backToTop();
});
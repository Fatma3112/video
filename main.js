const preload = document.querySelector(".preload")
const video = document.querySelector(".video-container")
const btn = document.querySelector(".btn-container")





window.addEventListener("load", function() {
    preload.classList.add("hidden")
})


btn.addEventListener("click", function() {
    if (!btn.classList.contains("right-switch")) {
        btn.classList.add("right-switch");
        video.pause();
    } else {
        btn.classList.remove("right-switch");
        video.play();
    }
});
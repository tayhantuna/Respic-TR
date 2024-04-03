var videoPlayer = document.getElementById("videoPlayer");
function showSection(sectionId) {
    var sections = document.getElementsByTagName("section");
    for (var i = 0; i < sections.length; i++) {
        sections[i].style.display = "none";
    }
    document.getElementById(sectionId).style.display = "block";
videoPlayer.pause();
}

function changeVideo(videoSrc,tn) {
    videoPlayer.src = videoSrc;
  videoPlayer.poster = tn;
    videoPlayer.load();
  videoPlayer.play();
}
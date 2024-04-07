var videoPlayer = document.getElementById("videoPlayer");
var all = document.getElementById('podcasts');

function showSection(sectionId) {
    var sections = document.getElementsByTagName("section");
    for (var i = 0; i < sections.length; i++) {
        sections[i].style.display = "none";
    }
    document.getElementById(sectionId).style.display = "block";
    videoPlayer.pause();
}

function changeVideo(videoSrc, tn) {
    videoPlayer.src = videoSrc;
    videoPlayer.poster = tn;
    videoPlayer.load();
    videoPlayer.play();
  var sectio = document.getElementsByTagName("section");
    for (var i = 0; i < sectio.length; i++) {
        sectio[i].style.display = "none";
    }
    all.style.display = "block";
}
//hawli

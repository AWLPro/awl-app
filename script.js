// Telifsiz / Ücretsiz Relax Çalışma Müzikleri (Internet Archive & Royalty-Free)
const playlist = [
  {
    title: "Lo-Fi Study",
    url: "https://cdn.pixabay.com/download/audio/2022/05/27/audio_1808fbf07a.mp3?filename=lofi-study-112191.mp3"
  },
  {
    title: "Chill Relax",
    url: "https://cdn.pixabay.com/download/audio/2022/01/18/audio_d0a13f69d2.mp3?filename=chill-abstract-intention-12099.mp3"
  },
  {
    title: "Relaxing Piano",
    url: "https://cdn.pixabay.com/download/audio/2022/03/15/audio_c8c8a73467.mp3?filename=relaxing-piano-10266.mp3"
  }
];

let currentSongIndex = 0;
const audio = new Audio(playlist[currentSongIndex].url);
audio.loop = true; // Şarkı bitince otomatik tekrar çalar

const playBtn = document.getElementById("playBtn");
const nextBtn = document.getElementById("nextBtn");
const volumeSlider = document.getElementById("volumeSlider");
const songTitle = document.getElementById("songTitle");

// Oynat / Durdur Mantığı
playBtn.addEventListener("click", () => {
  if (audio.paused) {
    audio.play();
    playBtn.innerText = "⏸️";
  } else {
    audio.pause();
    playBtn.innerText = "🎵";
  }
});

// Sonraki Şarkıya Geçiş
nextBtn.addEventListener("click", () => {
  currentSongIndex = (currentSongIndex + 1) % playlist.length;
  audio.src = playlist[currentSongIndex].url;
  songTitle.innerText = playlist[currentSongIndex].title;
  audio.play();
  playBtn.innerText = "⏸️";
});

// Ses Seviyesi Ayarı
volumeSlider.addEventListener("input", (e) => {
  audio.volume = e.target.value;
});

// Tema Değiştirme Fonksiyonu
function changeTheme(themeName) {
  document.body.className = ""; // Eski temayı temizle
  if (themeName !== "default") {
    document.body.classList.add("theme-" + themeName);
  }
}
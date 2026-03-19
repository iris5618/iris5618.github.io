// 歌曲資料
const songs = [
    {
      title: "周杰倫 - 反方向的鐘",
      cover: "songs/晴天.jpg",
      audio: "songs/晴天.mp3"
    },
    {
      title: "陳奕迅 - 十年",
      cover: "songs/十年.jpg",
      audio: "songs/十年.mp3"
    },
    {
      title: "田馥甄 - 小幸運",
      cover: "songs/小幸運.jpg",
      audio: "songs/小幸運.mp3"
    }
  ];
  
  // 動態更新每日推薦
  if (document.title === "每日推薦歌曲") {
    const today = new Date();
    const index = today.getDate() % songs.length;
    const selectedSong = songs[index];
  
    document.getElementById("song-cover").src = selectedSong.cover;
    document.getElementById("song-title").textContent = `今日推薦歌曲：${selectedSong.title}`;
    document.getElementById("audio-source").src = selectedSong.audio;
    document.getElementById("audio-player").load();
  }  
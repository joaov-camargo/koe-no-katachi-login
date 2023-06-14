let sound = false;
let audio = new Audio("./asset/sound/koe.mp3");

function playMusic() {
  audio.play();
}
function pauseMusic() {
  audio.pause();
}

function tocar() {
  const span = document.querySelector(".material-symbols-outlined");
  if (!sound) {
    span.innerHTML = "volume_up";
    sound = true;
    playMusic();
    return;
  }
  span.innerHTML = "volume_off";
  sound = false;
  pauseMusic();
}

/*setInterval(function trocarFundo()
{
    var randomImg = Math.floor(Math.random()*4);
    if(randomImg ==0){randomImg=1}
    var coverIMG = document.getElementById("image-cover");
    var downloadImg = document.getElementById('downloadImg');

    // Imagem dinâmica
    coverIMG.style.background = "url('./asset/imgs/cover/wallpaper-0"+randomImg+".jpg') no-repeat center"
    coverIMG.style.backgroundSize = "cover"
    coverIMG.style.transition = "1.5s"

    // Download dinâmico
    downloadImg.setAttribute('href',"./asset/imgs/cover/wallpaper-0"+randomImg+".jpg")
},5000)*/

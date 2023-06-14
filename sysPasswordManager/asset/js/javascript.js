let sound = false;
        var audio = new Audio('./asset/sound/koe.mp3');

        function playMusic() {audio.play();}
        function pauseMusic(){audio.pause();}

        function tocar()
        {
            if(sound == false)
            {
                sound = true
                playMusic()
            }
            else
            {
                sound = false
                pauseMusic()            
            }
        }

        setInterval(function trocarFundo()
        {
            var randomImg = Math.floor(Math.random()*4);
            if(randomImg ==0)
            {
                randomImg=1
            }
            console.log(randomImg)
            var coverIMG = document.getElementById("image-cover");
            coverIMG.style.background = "url('./asset/imgs/cover/wallpaper-0"+randomImg+".jpg') no-repeat center"
            coverIMG.style.backgroundSize = "cover"
        },2000)
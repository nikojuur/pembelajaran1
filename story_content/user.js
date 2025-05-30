function ExecuteScript(strId)
{
  switch (strId)
  {
      case "68yoSIiIdF7":
        Script1();
        break;
  }
}

function Script1()
{
  (!window.backgroundMusic) {
   
 var audio = new Audio('musikku.mp3');   
audio.loop = true;  
audio.volume = 0.3; 
audio.play();

 
window.backgroundMusic = audio;

}
}


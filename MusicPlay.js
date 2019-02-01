var repet=false;
var mySongsList=["song1.mp3","song2.mp3","song3.mp3","song4.mp3","song5.mp3"];
var shuffeldarr;
var notshuffelflag=true;
var myaudio=document.getElementById("audio");
var repetbtn=document.getElementById("repet");
var mysrc=document.getElementById("mysrc");
var mylist=document.getElementsByTagName("li");
var playbtn=document.getElementById("play");
var shufflebtn=document.getElementById("shuffle");
var mycuurentsong=0;
var songsNames =document.getElementById("songs");
var songsNamesList=songsNames.children;
function playing()
{
  myaudio.load();
  myaudio.play();
}

myaudio.addEventListener('ended',function(){
     mycuurentsong++;
    
  
     if(mycuurentsong<mySongsList.length)

     {   if(notshuffelflag)
       {
        mysrc.src=mySongsList[mycuurentsong];
       }
       else
       {mysrc.src=shuffeldarr[mycuurentsong];}
       playing();
     }
    else if(mycuurentsong==mySongsList.length)
     {
      if(repet)
      {
         mycuurentsong=0;
         if(notshuffelflag)
         {
          mysrc.src=mySongsList[mycuurentsong];
         }
         else
         {mysrc.src=shuffeldarr[mycuurentsong];}
         playing();
      }
     }
  
 
});

playbtn.addEventListener('click',function(){
  mysrc.src=mySongsList[mycuurentsong];
       playing();
});

repetbtn.addEventListener('click',function(){
    repet=!repet;
});

shufflebtn.addEventListener('click',function(){
        notshuffelflag=!notshuffelflag ;
        shuffeldarr=shuffling();
       

});
function shuffling()
{
  var arr=[];
  var index=0;
   while(index<mySongsList.length)
   {   
       var notfounded=true;
       var currentIndex;
       currentIndex=Math.floor(Math.random()*10);
       if(currentIndex<mySongsList.length)
       {
        for(k=0;k<arr.length;k++)
        {
             if(arr[k]==mySongsList[currentIndex])
                   notfounded=false;
        }
        if(notfounded)
       {
            arr[index]=mySongsList[currentIndex];
            index++;
       }
      }     
     }
    return arr;
}

for(var i=0;i<mySongsList.length;i++)
{
  songsNamesList[i].addEventListener('click',function(event){
       mysrc.src=event.target.textContent+".mp3";
       mycuurentsong=event.target.id;
       playing();
  });
}

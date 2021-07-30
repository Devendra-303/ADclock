setInterval (function() {
    d = new Date();
    hours = d.getHours();
    mints = d.getMinutes();
    secs =  d.getSeconds();
   hrotation =  30*hours + mints/2;
   mrotation =  6*mints;
   srotation =  6*secs;

   hour.style.transform = `rotate(${hrotation}deg)`;
   mint.style.transform = `rotate(${mrotation}deg)`;
   sec.style.transform = `rotate(${srotation}deg)`;
  
},1000);

setInterval(() => {
  let d = new Date();
  let h = d.getHours()
  let m = d.getMinutes();
  let s = d.getSeconds();
   
  let day = `AM`;
  if(h > 12){
      day = `PM`;
  }
//    when 12+ then h=13-12 =1 
  if (h > 12){
      h = h - 12;
  }
// Add 0 when value less than 10
  if(m<10){
     m = `0`+ m;
  }
  if(s<10){
      s = `0`+ s;
  }

  if(h<10){
      h = `0`+ h;
  }
 
  let time = h + ":" + m + ":" + s + " " + day ; 
 
  document.getElementsByTagName(`h1`)[0].innerText = time;
  
}, 1000);


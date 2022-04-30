var today = new Date();
document.getElementById("currentDate").innerHTML = today;


  //Change project title
  var bangs = document.getElementById("bangs");
  bangs.addEventListener("mouseover", changeText, true);
  
  function changeText() {
    bangs.innerHTML = 'Yes, I created a website for them';
  }
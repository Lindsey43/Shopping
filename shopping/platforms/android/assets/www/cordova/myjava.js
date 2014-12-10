var stepCounter = 1;

$(document).on("mobileinit", function(){
  //settings and stuff
});

$(document).on("ready", function(ev){
  //page is ready to do stuff like have event listeners on buttons
    
    $("#tut").on("click", function(ev){
    ev.preventDefault();
        
        if (localStorage.getItem("step") ){
            stepCounter = localStorage.getItem("step");
        }
        
        var returnTo = "#dlg_" + stepCounter;
        $.mobile.pageContainer.pagecontainer("change", returnTo, {changeHash:false, role:"dialog"});
        
    });
    
    
    
    
  $(".next").click(function(ev) {
        ev.preventDefault();
      
     stepCounter++; 
      localStorage.setItem("step", stepCounter);
      
        $.mobile.pageContainer.pagecontainer("change", $(this).attr("href"), {changeHash:false, role:"dialog"});
    });
  
  $(".prev").click( function(ev) {
        ev.preventDefault();

      stepCounter--;      
      localStorage.setItem("step", stepCounter);
      
        $.mobile.pageContainer.pagecontainer("change", $(this).attr("href"), {changeHash:false, role:"dialog"});
    });
});
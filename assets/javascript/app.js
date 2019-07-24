$(document).ready(function(){
    $("#quiz").hide();

    $("#start").click(function(){
        $("#quiz").show();
        

        var time = 10;   
        setInterval(decrement, 1000);
        
        function decrement() { 
            time--; 
            $("#time").text(time);
            if(time==0) { 
                result()
            };
       
        }       
    });
     
  

  $("#submit").click(function(event){
      event.preventDefault()
    
        result()
   
    })


    function result(ansValue=0,ansValue2=0,ans=0){
        var answer=$(".q1");
        for(var i = 0; i < answer.length; i++){
            if(answer[i].checked){
                ansValue=answer[i].value;   
            }       
        }   
                if(ansValue=="5"){
                    ans++
                }
          
          var answer2=$(".q2");
          for(var i = 0; i < answer2.length; i++){
              if(answer2[i].checked){
                  ansValue2=answer2[i].value;
                }
         }
        
         if(ansValue2=="10"){ 
            ans++} 
            else{ans
        }
        console.log(ans)
        $("#start").hide();
        $("#time").hide();

        $("#quiz").text("your results are: "+ans+" out of 2")
   
    }
})   

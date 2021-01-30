$(document).ready(function(){
   $("[type=submit]").click(function(e){
            e.preventDefault()
         let name =   $("[type=text]").val()
         let pass =   $("[type=password]").val()
         
            if(name == "vinod" && pass == "hello"){

               window.open("./vinod.html", "_self")
            }else{

               alert("Password and Username Wrong")
               $("[type]").css("border", "2px solid red")
            }
   })
})
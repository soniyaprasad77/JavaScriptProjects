const btns = document.querySelectorAll(".btn");
        const body = document.querySelector("body");

         btns.forEach(function(button){
         console.log(button);
         button.addEventListener("click", function(e){
            console.log(e.target);
            if(e.target.id==='yellow'){
                body.style.backgroundColor=e.target.id;
            }
            else if(e.target.id==='red'){
                body.style.backgroundColor=e.target.id;
            }
            else if(e.target.id==="lightblue"){
                body.style.backgroundColor=e.target.id;
            }
            else if(e.target.id==="green"){
                body.style.backgroundColor=e.target.id;
            }
            else if(e.target.id==="purple"){
                body.style.backgroundColor=e.target.id;
            }
            else if(e.target.id==="white"){
                body.style.backgroundColor=e.target.id;
            }
         })

         })

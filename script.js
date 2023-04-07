
window.onload = page;
window.onresize = page;

 function page(){
 myWidth = window.innerWidth;//the width of the page
}


const pages = document.querySelectorAll(".page");
    const translateAmount = 100; 
    let translate = 0;

    slide = (direction) => {

      direction === "next" ? translate -= translateAmount : translate += translateAmount;

      pages.forEach(
        pages => (pages.style.transform = `translateX(${translate}%)`)
      );
    }


    
     const para = document.querySelector("#para");
    const apiBtn = document.querySelector("#api");
    const imgg = document.querySelector("#imgs");
     

             async function getCat(){
              try {
                const imagee = "/cats/cat3.jpeg";// change the image when the button is clicked
                imgg.src = imagee;
                para.innerText = "Getting Facts...";
              apiBtn.disabled = true;// disable button while api loading
              apiBtn.innerText = "Please wait a sec.."
              const response =  await  fetch('https://meowfacts.herokuapp.com/?count=1');
              const datta = await response.json();
              

              apiBtn.disabled = false;//enable the button again and cjange back the text
              apiBtn.innerText = "See facts"
              const data = datta.data
              para.innerText = data;
              const imaggg = "/cats/cat5.jpeg"; //change the cat image
              imgg.src = imaggg;

              } catch (error) {// catch network errors
                para.innerText = "NETWORK ERROR, check your internet connection"
                apiBtn.disabled = false;
              apiBtn.innerText = "See facts"
              }
       
              const images = "/cats/cat4.jpeg"//change the image again
              imgg.src = images;       
            }

               apiBtn.addEventListener("click", getCat)



      
                  


       



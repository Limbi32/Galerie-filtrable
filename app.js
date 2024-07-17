const box=document.querySelectorAll('.img');
const titre=document.querySelectorAll('.box h2');
const input=document.querySelector('#search');



function clavier(){
    box.forEach((item)=>{
        const filter=item.children[1].textContent.toLowerCase();
        if (filter.toLowerCase().includes(input.value.toLowerCase())) {
            item.style.display="block";
        }else{
            item.style.display="none";
        }
        
    })
    }
 

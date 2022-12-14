var elements = document.getElementsByClassName(".navbar");
for(var i = 0; i < elements.length; i++){
    elements[i].onclick = function(){
        this.classList.add("active");
    };        
}

const observer= new IntersectionObserverEntry((entries) =>{
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntreating){
            entry.target.classList.add('show');
        } else{
            entry.target.classList.remoe('show');
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));

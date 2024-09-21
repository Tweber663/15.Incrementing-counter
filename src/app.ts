const counter = document.querySelectorAll('.counter') as NodeListOf<HTMLDivElement>;

counter.forEach((counter) => {
    counter.innerText = "0";

    const updateCounter = () => {
        const targetAmount = Number(counter.getAttribute('data-target')); 
        let currentAmount = Number(counter.innerText); 
        const increasedBy = targetAmount / 100;
        if (currentAmount < targetAmount) {
             counter.innerText = `${Math.ceil(currentAmount + increasedBy)}`
             setTimeout(updateCounter, 10);
            }
    }
    updateCounter(); 
})

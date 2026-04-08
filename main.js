const rating_button = document.querySelectorAll('input'); 
const submit_button = document.getElementById('submitBtn'); 
const rating_value = document.getElementById('rating-value');
const rating_state_container = document.getElementById('Rating-state-container');
const thanks_container = document.getElementById('Thank-you-container'); 

rating_state_container.style.display="block";
thanks_container.style.display = "none"; 
let selectedRating = null ; 

for (const key in rating_button) {
    const buttons = rating_button[key];
    let button = buttons.value;
    if (button) {
        buttons.addEventListener('click',()=>{
            selectedRating = button;
            console.log(button);
        })
    }
}    

submit_button.addEventListener('click', ()=>{
    if (!selectedRating) {
        alert("Please select a rating before submitting.");
        return;
    }
    rating_value.innerHTML = selectedRating;
    rating_state_container.style.display="none";
    thanks_container.style.display="block";
})



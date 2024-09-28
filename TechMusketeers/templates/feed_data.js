const body = document.querySelector('body'),
      sidebar = body.querySelector('nav'),
      toggle = body.querySelector(".toggle"),
      searchBtn = body.querySelector(".search-box"),
      modeSwitch = body.querySelector(".toggle-switch"),
      modeText = body.querySelector(".mode-text");


toggle.addEventListener("click" , () =>{
    sidebar.classList.toggle("close");
})

searchBtn.addEventListener("click" , () =>{
    sidebar.classList.remove("close");
})

modeSwitch.addEventListener("click" , () =>{
    body.classList.toggle("dark");
    
    if(body.classList.contains("dark")){
        modeText.innerText = "Light mode";
    }else{
        modeText.innerText = "Dark mode";
        
    }
});
window.onload = loadCsv;

// Function to handle form submission
function handleSubmit() {
    // Retrieve values from inputs
    const sensor1 = document.getElementById('sensor1').value;
    const sensor2 = document.getElementById('sensor2').value;
    const sensor3 = document.getElementById('sensor3').value;
    const operationHours = document.getElementById('operationHours').value;

    // Simple validation to ensure all fields are filled
    if (!sensor1 || !sensor2 || !sensor3 || !operationHours) {
        alert('Please fill out all fields.');
        return;
    }

    // Process the data (e.g., send it to a server, display it, etc.)
    // For demonstration, we'll just log the values to the console
    console.log('Sensor 1:', sensor1);
    console.log('Sensor 2:', sensor2);
    console.log('Sensor 3:', sensor3);
    console.log('Operation hours:', operationHours);

    // Optionally, you could show a success message
    alert('Form submitted successfully!');
}

// Function to handle form reset
function handleReset() {
    // Select all number inputs and reset their values
    document.querySelectorAll('input[type="number"]').forEach(input => input.value = '');

    // Optionally, you could show a message to indicate the form has been reset
    alert('Form reset successfully!');
}

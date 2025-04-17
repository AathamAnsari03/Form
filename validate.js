const form = document.getElementById('userform');
const nameInput = document.getElementById('nameInput');
const Number1= document.getElementById('Number1');
const Number2= document.getElementById('Number2');
const address = document.getElementById('Address');
const details= document.getElementById('Details');

form.addEventListener('submit', async function(e) {
    e.preventDefault();

    
    const name = nameInput.value;
    const number1 = Number1.value;
    const number2 = Number2.value;     
    const addressValue = address.value;
    const detailsValue = details.value;

    if (!/^\d+$/.test(number1)) {
        alert("Number field should contain only digits!");
        return;
    }

    if (!/^\d+$/.test(number2)) {
        alert("Number field should contain only digits!");
        return;
    }

    if (number1 === number2) {
        alert('Phone numbers should not be the same');
        return;
    }
    if (number1.length < 10 || number2.length < 10) {
        alert('Phone numbers should be at least 10 digits long');
        return;
    }
    if (number1.length > 15 || number2.length > 15) {
        alert('Phone numbers should not exceed 15 digits');
        return;
    }

    const proceed = confirm("Please check all the details before submitting");
    if (!proceed) {
      return;
    }

    console.log("User Submitted Data:");
    console.log("Name:", name);
    console.log("Phone 1:", number1);
    console.log("Phone 2:", number2);
    console.log("Address:", addressValue);
    console.log("Parcel Details:", detailsValue);

    window.location.href = "thankyou.html";

});

form.addEventListener('reset', function(event) {
    const proceed = confirm("Are you sure you want to reset?");
    if (!proceed) {
        event.preventDefault();
        return;
    }
    console.log("Form has been reset.");
    alert("Form has been reset.");      
}
);
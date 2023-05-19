const cantitateInput = document.getElementById("cantitate");
const numeInput = document.getElementById("nume");
const livrareRadio = document.getElementById("livrare");
const ridicareRadio = document.getElementById("ridicare");
const adresaInput = document.getElementById("adresa");
const comandaButton = document.querySelector(".button-comanda");
const telefonInput = document.getElementById("telefon");

livrareRadio.addEventListener("change", function () {
  if (livrareRadio.checked) {
    adresaInput.style.display = "block";
  } else {
    adresaInput.style.display = "none";
  }
});

ridicareRadio.addEventListener("change", function () {
  if (ridicareRadio.checked) {
    adresaInput.style.display = "none";
  }
});

// Remove the event listener from the comandaButton
function handleFormSubmission(event) {
  event.preventDefault();

  const cantitate = cantitateInput.value;
  const nume = numeInput.value;
  const produs = document.querySelector(".titlu-produs").textContent.trim();
  const telefon = telefonInput.value;
  const livrareSelected = livrareRadio.checked;
  const adresa = adresaInput.value;

  // Validate form fields
  if (
    cantitate === "" ||
    nume === "" ||
    telefon === "" ||
    (livrareSelected && adresa === "") ||
    !/^[0-9+]+$/.test(telefon)
  ) {
    alert("Completati toate campurile corespunzator!");
    return;
  }

  // Determine the delivery method
  let deliveryMethod = "Livrare la adresa";
  if (!livrareSelected) {
    deliveryMethod = "Ridicare la showroom";
  }

  // Construct the order details message
  let orderDetailsMessage = `Detalii comanda: Produs - ${produs}, Cantitate - ${cantitate}, Nume - ${nume}, Telefon - ${telefon},`;

  // Add the delivery method or showroom information to the message
  if (livrareSelected) {
    orderDetailsMessage += ` Adresa - ${adresa}`;
  } else {
    orderDetailsMessage += " Va rugam sa veniti la showroom pentru ridicare.";
  }

  // Display the order details message
  alert(orderDetailsMessage);

  // Submit the form programmatically
  event.target.form.submit();
}

// Add the event listener to the comandaButton
comandaButton.addEventListener("click", handleFormSubmission);

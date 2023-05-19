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

function handleFormSubmission(event) {
  event.preventDefault();

  const cantitate = cantitateInput.value;
  const nume = numeInput.value;
  const produs = document.querySelector(".titlu-produs").textContent.trim();
  const telefon = telefonInput.value;
  const livrareSelected = livrareRadio.checked;
  const adresa = adresaInput.value;

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

  let deliveryMethod = "Livrare la adresa";
  if (!livrareSelected) {
    deliveryMethod = "Ridicare la showroom";
  }

  let orderDetailsMessage = `Detalii comanda: Produs - ${produs}, Cantitate - ${cantitate}, Nume - ${nume}, Telefon - ${telefon},`;

  if (livrareSelected) {
    orderDetailsMessage += ` Adresa - ${adresa}`;
  } else {
    orderDetailsMessage += " Va rugam sa veniti la showroom pentru ridicare.";
  }

  alert(orderDetailsMessage);

  event.target.form.submit();
}

comandaButton.addEventListener("click", handleFormSubmission);

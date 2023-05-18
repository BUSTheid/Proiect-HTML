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

// Event listener for the comandaButton
comandaButton.addEventListener("click", function (event) {
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

  let message = `Multumim, ${nume}! Ati comandat ${cantitate}x ${produs}.`;

  if (livrareSelected) {
    message += ` Comanda va fi livrata la ${adresa} in cel mai scurt timp posibil.`;
  } else {
    message +=
      " Puteti ridica comanda din showroom odata cu inceperea programului de lucru al urmatoarei zi lucratoare.";
  }

  alert(message);
});

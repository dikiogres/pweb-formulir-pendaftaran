const name = document.getElementById('nama');
const ttl = document.getElementById('ttl');
const desa = document.getElementById('desa');
const kecamatan = document.getElementById('kecamatan');
const telp = document.getElementById('telp');
const jenisLombaSelect = document.getElementById("jenis-lomba");

const jenisLombaSelection = [
    { value: 1, text: "Islam" },
    { value: 2, text: "Kristen" },
    { value: 3, text: "Hindu" },
    { value: 4, text: "Budha" },
    { value: 5, text: "Konghucu" },
  ];

function letters (name) {
    return /^[a-zA-Z ]+$/.test(name);
}

function numbers (telp) {
    return /^[0-9+]+$/.test(telp);
}

name.addEventListener ('blur', function (e) {
    let name_value = name.value ;
    if (!letters(name_value) && name_value.length > 0) {
        alert( 'Please enter your name in letters' );
        event.target.style.background = 'pink';
    } else {
        event.target.style.background = '';
    }
});

telp.addEventListener ('blur', function (e) {
    let telp_value = telp.value ;
    if (!numbers(telp_value) && telp_value.length > 0) {
        alert( 'Please enter your phone number in numbers' );
        event.target.style.background = 'pink';
    } else {
        event.target.style.background = '';
    }
});

const displayJenisLomba = (options) => {
    options.forEach((element) => {
      const newOption = document.createElement("option");
      newOption.value = element.value;
      newOption.text = element.text;
      jenisLombaSelect.appendChild(newOption);
    });
  };

  displayJenisLomba(jenisLombaSelection);

document.getElementById("form").addEventListener("submit", function (event) {
    event.preventDefault();
  });
  
  function onSubmit() {
    alert("Pendaftaran Berhasil");
    document.getElementById("form").reset();
  }



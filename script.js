const name = document.getElementById('nama');
const tempat_lahir = document.getElementById('tempat-lahir');
const tanggal_lahir = document.getElementById('tanggal-lahir');
const jenis_kelamin = document.getElementById('jenis-kelamin');
const alamat = document.getElementById('alamat');
const provinsi = document.getElementById('provinsi');
const kabupaten = document.getElementById('kabupaten');
const kecamatan = document.getElementById('kecamatan');
const kelurahan = document.getElementById('kelurahan');
const telp = document.getElementById('telp');
const kode_pos = document.getElementById('kode-pos');
const jenisLombaSelect = document.getElementById("jenis-lomba");
const pendidikan = document.getElementById('pendidikan');
const pekerjaan = document.getElementById('pekerjaan');

const jenisLombaSelection = [
    { value: 1, text: "Islam" },
    { value: 2, text: "Kristen" },
    { value: 3, text: "Hindu" },
    { value: 4, text: "Budha" },
    { value: 5, text: "Konghucu" },
  ];

  const getProvinsi = async () => {
    const response = await fetch(
      "https://ibnux.github.io/data-indonesia/provinsi.json"
    );
    const data = await response.json();
    return data;
  };
  
  const getKabupaten = async (id) => {
    const response = await fetch(
      `https://ibnux.github.io/data-indonesia/kabupaten/${id}.json`
    );
    const data = await response.json();
    return data;
  };
  
  const getKecamatan = async (id) => {
    const response = await fetch(
      `https://ibnux.github.io/data-indonesia/kecamatan/${id}.json`
    );
    const data = await response.json();
    return data;
  };
  
  const getKelurahan = async (id) => {
    const response = await fetch(
      `https://ibnux.github.io/data-indonesia/kelurahan/${id}.json`
    );
    const data = await response.json();
    return data;
  };
  
  const getResult = async (key) => {
    const response = await fetch(`https://kodepos.vercel.app/search?q=${key}`);
    const data = await response.json();
    return data;
  };

  const removeData = (e) => {
    while (e.hasChildNodes()) {
      e.removeChild(e.firstChild);
    }
  };

  const displayProvinsi = async () => {
    const options = await getProvinsi();
    provinsi.value = options[0];
    options.forEach((element) => {
      const newOption = document.createElement("option");
      newOption.value = element.id;
      newOption.text = element.nama;
      provinsi.appendChild(newOption);
    });
    displayKabupaten();
  };
  
  
  const displayKabupaten = async () => {
    removeData(kabupaten);
    const options = await getKabupaten(provinsi.value);
    kabupaten.value = options[0];
    options.forEach((element) => {
      const newOption = document.createElement("option");
      newOption.value = element.id;
      newOption.text = element.nama;
      kabupaten.appendChild(newOption);
    });
    displayKecamatan();
  };
  
  const displayKecamatan = async () => {
    removeData(kecamatan);
    const options = await getKecamatan(kabupaten.value);
    kecamatan.value = options[0];
    options.forEach((element) => {
      const newOption = document.createElement("option");
      newOption.value = element.id;
      newOption.text = element.nama;
      kecamatan.appendChild(newOption);
    });
    displayKelurahan();
  };
  
  const displayKelurahan = async () => {
    removeData(kelurahan);
    const options = await getKelurahan(kecamatan.value);
    kelurahan.value = options[0];
    options.forEach((element) => {
      const newOption = document.createElement("option");
      newOption.value = element.id;
      newOption.text = element.nama;
      kelurahan.appendChild(newOption);
    });
    displayResult();
  };

  const displayResult = async () => {
    resultElement.innerHTML = "memuat...";
  
    const results = await getResult(
      kelurahan.options[kelurahan.selectedIndex].text
    );
    if (results.data.length <= 0) {
      resultElement.innerHTML = "tidak ditemukan data";
    } else {
      resultElement.innerHTML = results.data[0].postalcode;
    }
  };
  
  displayProvinsi();

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



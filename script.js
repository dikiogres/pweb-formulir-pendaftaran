const name = document.getElementById('nama');
const ttl = document.getElementById('ttl');
const desa = document.getElementById('desa');
const kecamatan = document.getElementById('kecamatan');
const telp = document.getElementById('telp');

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



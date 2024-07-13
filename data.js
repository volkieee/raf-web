const nama = "Joshua Rafael";
let usia =20;

let biodata=document.getElementById('biodata');


function generateBiodata() {
    let generasi;

    if (usia > 10 && usia < 20) {
        generasi = "generasi remaja";
    }
    else if (usia >= 20 && usia < 50) {
        generasi = "generasi dewasa";
    }
    else if (usia >= 50) {
        generasi = "generasi lansia";
    }
    else if (usia > 1 && usia < 8) {
        generasi = "generasi anak anak";
    }
    else {
        generasi = "bayi";
    }
    return biodata.innerHTML=generasi;
}
console.log(nama);
console.log(usia);

generateBiodata()
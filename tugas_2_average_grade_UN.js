const mtk = 80;
const bahasaIndonesia = 90;
const bahasaInggris = 89;
const ipa = 69;

function average_grade_UN() {
    let sum_nilai = (mtk + bahasaIndonesia + bahasaIndonesia + ipa);
    let average_nilai_hasil = sum_nilai / 4;
    console.log(`Rata-rata ${average_nilai_hasil}`);

    if (average_nilai_hasil >= 90 && average_nilai_hasil <= 100) {
        console.log("Grade = A");
    } else if (average_nilai_hasil >= 80 && average_nilai_hasil <= 89) {
        console.log("Grade = B");
    } else if (average_nilai_hasil >= 70 && average_nilai_hasil <= 70) {
        console.log("Grade = C");
    } else if (average_nilai_hasil >= 60 && average_nilai_hasil <= 69) {
        console.log("Grade = D");
    } else if (average_nilai_hasil >= 0 && average_nilai_hasil <= 59) {
        console.log("Grade = E");
    };

    return
}


average_grade_UN();
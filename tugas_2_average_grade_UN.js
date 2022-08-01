function average_grade_UN(mtk, bhsindo, bhsing, ipa) {
    try {
        if (mtk > 100) throw "Nilai Matematika lebih dari 100 mohon input yang benar";
        if (bhsindo > 100) throw "Nilai Bahasa Indonesia lebih dari 100 mohon input yang benar";
        if (bhsing > 100) throw "Nilai Bahasa Inggris lebih dari 100 mohon input yang benar";
        if (ipa > 100) throw "Nilai IPA lebih dari 100 mohon input yang benar";

        if (mtk <= 0) throw "Nilai Matematika tidak boleh atau kurang dari 0 mohon input yang benar";
        if (bhsindo <= 0) throw "Nilai Bahasa Indonesia tidak boleh atau kurang dari 0 mohon input yang benar";
        if (bhsing <= 0) throw "Nilai Bahasa Inggris tidak boleh atau kurang dari 0 mohon input yang benar";
        if (ipa <= 0) throw "Nilai IPA tidak boleh kurang dari 0 atau mohon input yang benar";

        if (mtk == "") throw "Nilai Matematika kosong mohon diisi";
        if (bhsindo == "") throw "Nilai Bahasa Indonesia kosong mohon diisi";
        if (bhsing == "") throw "Nilai Bahasa Inggris kosong mohon diisi";
        if (ipa == "") throw "Nilai IPA kosong mohon diisi";

        if (isNaN(mtk)) throw "Mohon Input Nilai Matematika dengan Angka";
        if (isNaN(bhsindo)) throw "Mohon Input Nilai Bahasa Indonesia dengan Angka";
        if (isNaN(bhsing)) throw "Mohon Input Nilai Bahasa Inggris dengan Angka";
        if (isNaN(ipa)) throw "Mohon Input Nilai IPA dengan Angka";

        mtk = Number(mtk);
        bhsindo = Number(bhsindo);
        bhsing = Number(bhsing);
        ipa = Number(ipa);

        callback_average_nilai(mtk, bhsindo, bhsing, ipa);

    } catch (error) {
        console.log(error)
    }
};

function callback_average_nilai(mtk, bhsindo, bhsing, ipa) {

    let sum_nilai = (mtk + bhsindo + bhsing + ipa);
    var average_nilai_hasil = sum_nilai / 4;

    console.log(`Rata-rata ${average_nilai_hasil}`);

    callback_average_grade(average_nilai_hasil);
};

function callback_average_grade(average_nilai_hasil) {

    if (average_nilai_hasil <= 100 && average_nilai_hasil >= 90) {
        console.log("Grade = A");
    } else if (average_nilai_hasil <= 89 && average_nilai_hasil >= 80) {
        console.log("Grade = B");
    } else if (average_nilai_hasil <= 79 && average_nilai_hasil >= 70) {
        console.log("Grade = C");
    } else if (average_nilai_hasil <= 69 && average_nilai_hasil >= 60) {
        console.log("Grade = D");
    } else if (average_nilai_hasil <= 59 && average_nilai_hasil >= 0) {
        console.log("Grade = E");
    };

};


average_grade_UN(89, "89", 99, "90");
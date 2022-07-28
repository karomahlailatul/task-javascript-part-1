function average_grade_UN(mtk, bhsindo, bhsing, ipa) {
    try {
        if (mtk == "") throw "Nilai Matematika Kosong Mohon diisi";
        if (bhsindo == "") throw "Nilai Bahasa Indonesia Kosong Mohon diisi";
        if (bhsing == "") throw "Nilai Bahasa Inggris Kosong Mohon diisi";
        if (ipa == "") throw "Nilai IPA Kosong Mohon diisi";

        if (isNaN(mtk)) throw "Mohon Input Nilai Matematika dengan Angka";
        if (isNaN(bhsindo)) throw "Mohon Input Nilai Bahasa Indonesia dengan Angka";
        if (isNaN(bhsing)) throw "Mohon Input Nilai Bahasa Inggris dengan Angka";
        if (isNaN(ipa)) throw "Mohon Input Nilai IPA dengan Angka";

        mtk = Number(mtk);
        bhsindo = Number(bhsindo);
        bhsing = Number(bhsing);
        ipa = Number(ipa);

        let sum_nilai = (mtk + bhsindo + bhsing + ipa);
        let average_nilai_hasil = sum_nilai / 4;

        console.log(`Rata-rata ${average_nilai_hasil}`);

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


    } catch (error) {
        console.log(error)
    }
};

average_grade_UN(80, "78", 75, "91");
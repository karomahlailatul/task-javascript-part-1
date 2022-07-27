function printSegitiga(num) {
    let str = '';
    try {
        if (num == "") throw "Data Kosong";
        if (isNaN(num)) throw "Data Harus Number";
        num = Number(num);
        for (let i = num; i >= 1; i--) {
            for (let j = 1; j <= i; j++) {
                str += `${j} `;
            }
            str += '\n';
        }
        return console.log(str);
    } catch (error) {
        console.log(error)
    }

};

printSegitiga("5");
printSegitiga("enam");
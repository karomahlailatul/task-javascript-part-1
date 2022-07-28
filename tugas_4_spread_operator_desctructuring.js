//task 4
let data = {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    address: {
        street: "Kulas Light",
        suite: "Apt. 556",
        city: "Gwenborough",
        zipcode: "92998-3874",
    },
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org",
}


// Metode per nomer soal
let dataBaru = {
    ...data,
    name: "Lailatul Karomah",
    email: "karomahlailatul@gmail.com",
};

let hobby = ["Fishing", "Watching Movie", "Jogging"];
let dataAkhir = {
    ...dataBaru,
    ...{
        hobby
    }
}
console.log(dataAkhir);

// // Metode Langsung
// let hobby2 = ["Fishing", "Watching Movie", "Jogging"];
// let dataBaru2 = {
//     ...data,
//     name: "Lailatul Karomah",
//     email: "karomahlailatul@gmail.com",
//     ...{
//         hobby
//     }
// };

// console.log(dataBaru2);



const {
    address: {
        street,
        city
    }
} = data;
console.log(`Street: ${street}` + ` ` + `City : ${city}`);
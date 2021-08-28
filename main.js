let consol = new Consol('console')
let data = [15, {
    "title": "Bugungi ishlarmas",
    "colors": { "c1": "#D5F1E5", "c2": "#1E704D" },
    "icon": "&#127929;",
    "id": "G3490.2650747349029219",
    "subTasks": [{
        "title": "Aytilgan ishlar",
        "complete": true,
        "id": "S2780.991937861046434",
        "steps": [{
            "title": "Bazani tuzatish",
            "complete": true,
            "id": "SSID2060.5592966308360912"
        }, { "title": "Test tayyorlash", "complete": true, "id": "SSID4780.7970626050623764" }],
        "sana": "2021- yil 27- avgust",
        "vaqt": "15 : 19"
    }, {
        "title": "tushdan keyingi ishlar",
        "complete": true,
        "id": "S9260.6222230030261571",
        "steps": [{ "title": "Nima qwilish", "complete": true, "id": "SSID2700.5684820128634183" }],
        "sana": "2021- yil 27- avgust",
        "vaqt": "15 : 19"
    }]
}, {
    "title": "Taqiqlangan ishlar",
    "colors": { "c1": "#FFE4E9", "c2": "#AC395D" },
    "icon": "&#9940;",
    "id": "G8980.8086892076613521",
    "subTasks": [{
        "title": "Qilmashlik",
        "complete": true,
        "id": "S6710.7373518805496864",
        "steps": [],
        "sana": "2021- yil 27- avgust",
        "vaqt": "15 : 20"
    }]
}]

// consol.log(["data", "Salom", "Nimadur", 17, true, {
//     task1: "Salom",
//     task2: "Nimadur",
//     task3: "qayergadur",
//     task4: {
//         Nechi: 'besh'
//     }
// }])
let data1 = ["Salom", 15, {
    item: "Klaviatura",
    item1: ["Salom", { a: 0 }],
    item2: 'Quvondiqov',
    item3: "Allayor"
}, "Videokarta", [1, 4, 7, 8]]


let malumot = [1, 47, {
    item: 'Salom',
    item1: function() {
        return
    }
}, 15, [
    1974, 1965
]]
consol.log(malumot)
console.log(malumot)
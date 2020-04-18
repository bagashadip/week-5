function meleeRangedGrouping(str) {
    var arrTemp = [];
    var temp = '';

    // penanganan jika kosong
    if (str.length === 0) {
        return [];
    }

    // konversi string to array.
    for (i = 0; i < str.length; i++) {
        if (str[i] !== ',') {
            temp += str[i];
        } else {
            arrTemp.push(temp);
            temp = '';
        }
    }
    arrTemp.push(temp); // push temp yang tertinggal.

    var indikator = 0; // variable untuk mengetahui batas
    var ranged = [];
    var melee = [];

    for (i = 0; i < arrTemp.length; i++) {
        temp = '';

        for (j = 0; j < arrTemp[i].length; j++) {

            // mencari ranged dan melee berdasarkan setelah '-'.
            if (arrTemp[i][j] === '-') {
                indikator = j;

                for (k = indikator; k < arrTemp[i].length; k++) {
                    temp += arrTemp[i][k]; // menjadikan temp menjadi '-Ranged' atau '-Melee'.

                    if (temp === '-Ranged') {
                        temp = '';
                        for (l = 0; l < indikator; l++) {
                            temp += arrTemp[i][l];
                        }
                        ranged.push(temp);
                    } else if (temp === '-Melee') {
                        temp = '';
                        for (l = 0; l < indikator; l++) {
                            temp += arrTemp[i][l];
                        }
                        melee.push(temp);
                    }
                }
                // console.log(temp);
            }
        }
    }

    return [ranged, melee];
}

// TEST CASE

console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
// [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]

console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
// // [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]

console.log(meleeRangedGrouping('')); // []
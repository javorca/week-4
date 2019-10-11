function naikAngkot(arrPenumpang) {
    rute = ['A', 'B', 'C', 'D', 'E', 'F'];
    var angkot = [{},{}];
    var i=0;
    var asal = '';
    var tujuan = '';
  
    for (i; i<arrPenumpang.length; i++) {
        var j = 0;
  
        // mengambil value array pada level 1
        for (j; j<arrPenumpang[i].length; j++) {

            switch (j) {
                case 0: {
                    angkot[i].penumpang = arrPenumpang[i][j];
                    break;
                } case 1: {
                    angkot[i].naikDari = arrPenumpang[i][j];
                    angkot[i].tujuan = arrPenumpang[i][j+1];
                    break;
                } case 2: {
                    // menghitung biaya angkot
                    asal = arrPenumpang[i][j-1];
                    tujuan = arrPenumpang[i][j];
                    var jarak = 0;
                    for (var k=0; k<rute.length; k++) {
                        if (rute[k] === asal) {
                            for (var l=k+1; l<rute.length; l++) {
                                jarak += 1;
                                if (rute[l] === tujuan) {
                                    var bayar = jarak * 2000;
                                    angkot[i].bayar = bayar;
                                }
                            }
                        }
                    }
                    break;
                }
            }
        }
    }
  // mengembalikan hasil melalui variabel angkot
  return angkot;
  }
  //TEST CASE
  console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
  // [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
  //   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]
  
  // console.log(naikAngkot([])); //[]
  
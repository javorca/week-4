function tukarBesarKecil(kalimat) {
    var splitKalimat = kalimat.split('');
    var jumlahArr = kalimat.length;
    var tampungKalimat = [];
  
    for (var i = 0; i < jumlahArr; i++) {
      if (splitKalimat[i] === splitKalimat[i].toUpperCase()) {
          tampungKalimat[i] = splitKalimat[i].toLowerCase(); 
      }
      if (splitKalimat[i] === splitKalimat[i].toLowerCase()) {
          tampungKalimat[i] = splitKalimat[i].toUpperCase(); 
      }
    }
    return tampungKalimat.join('');
  }
  
  // TEST CASES
  console.log(tukarBesarKecil('Hello World')); // "hELLO wORLD"
  console.log(tukarBesarKecil('I aM aLAY')); // "i Am Alay"
  console.log(tukarBesarKecil('My Name is Bond!!')); // "mY nAME IS bOND!!"
  console.log(tukarBesarKecil('IT sHOULD bE me')); // "it Should Be ME"
  console.log(tukarBesarKecil('001-A-3-5TrdYW')); // "001-a-3-5tRDyw"
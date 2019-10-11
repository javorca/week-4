function graduates (students) {

    let listClass = [];
    let school = {};
    
    for (let i=0; i<students.length; i++) { // get list of class
        let studentClass = students[i].class;
        if (listClass.includes(studentClass)) {
            // do nothing
        } else {
            listClass.push(studentClass);
        }
    }

    for (let j=0; j<listClass.length; j++) {
        
        let schoolKey = listClass[j];
        school[schoolKey] = [];
    }

    // seperating student
    for (let key in school) {
        for (let k=0; k<students.length; k++) {
            let studentClass = students[k].class;
            let studentScore = students[k].score;
            if (studentScore > 75) {
                if (studentClass === key) {
                    school[key].push(students[k]);
                }
            }
        }
    }
    
    //delete key class from object
    for (let key in school) {
        for (let l=0; l<school[key].length; l++) {
            delete school[key][l].class;
        }
    }
    
    return school;
    
}

console.log(graduates([
  {
    name: 'Dimitri',
    score: 90,
    class: 'foxes'
  },
  {
    name: 'Alexei',
    score: 85,
    class: 'wolves'
  },
  {
    name: 'Sergei',
    score: 74,
    class: 'foxes'
  },
  {
    name: 'Anastasia',
    score: 78,
    class: 'wolves'
  }
]));

// {
//   foxes: [
//     { name: 'Dimitri', score: 90 }
//   ],
//   wolves: [
//     { name: 'Alexei' , score: 85 },
//     { name: 'Anastasia', score: 78 }
//   ]
// }

console.log(graduates([
  {
    name: 'Alexander',
    score: 100,
    class: 'foxes'
  },
  {
    name: 'Alisa',
    score: 76,
    class: 'wolves'
  },
  {
    name: 'Vladimir',
    score: 92,
    class: 'foxes'
  },
  {
    name: 'Albert',
    score: 71,
    class: 'wolves'
  },
  {
    name: 'Viktor',
    score: 80,
    class: 'tigers'
  }
]));

// // {
// //   foxes: [
// //     { name: 'Alexander', score: 100 },
// //     { name: 'Vladimir', score: 92 }
// //   ],
// //   wolves: [
// //     { name: 'Alisa', score: 76 },
// //   ],
// //   tigers: [
// //     { name: 'Viktor', score: 80 }
// //   ]
// // }


console.log(graduates([])); //{}
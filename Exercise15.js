// function to short two array.
function sortArraysInSync (x, y) {  
    let arr = [];
    
    let l1 = Math.min(y.length, x.length);
    let l2 = Math.min(y.length, x.length);
    
    while (l1--) arr.push({ name: x[l1], score: y[l1]});  
    
    arr.sort(function(a, b) {
        return a.score - b.score; });  
    
    while (l2--)
    {  
        x[l2] = arr[l2].name;  
        y[l2] = arr[l2].score;  
    }
}

function highestScore (students) {
    let listClass = [];
    let i=0;
    let school = {};
    let classKey;
    let findHighestStudent = {};

    for (i; i<students.length; i++) { // get list of class
        let studentClass = students[i].class;
        if (listClass.includes(studentClass)) {
            // do nothing
        } else {
            listClass.push(studentClass);
        }
    }

    for (let j=0; j<listClass.length; j++) {
        
        let schoolKey = listClass[j];
        school[schoolKey] = { name: [], score: []};
    }
    

    for (let k=0; k<students.length; k++) {
        for (l=0; l<listClass.length; l++) {
            if (students[k].class === 'foxes') {
                school.foxes.name.push(students[k].name);
                school.foxes.score.push(students[k].score);
                  break;
            } else if (students[k].class === 'wolves') {
                 school.wolves.name.push(students[k].name);
                school.wolves.score.push(students[k].score);
                  break;
            } else {
                if ((listClass).includes(students[k].class) === false ) {
                    listClass.push(students[k].class);
                }
                school.tigers.name.push(students[k].name);
                school.tigers.score.push(students[k].score);
                break;
            }
            
        }
    }
    
    // sorting the class from the score
    for (let m=0; m<listClass.length; m++) {
        let classKey = listClass[m];
        let array1 = school[classKey].score;
        let array2 = school[classKey].name;
        
        sortArraysInSync(array1,array2);
    }
    
    //create object to find the highest
    for (let n=0; n<listClass.length; n++) {
        
        let schoolKey = listClass[n];
        findHighestStudent[schoolKey] = {};
        
        findHighestStudent[schoolKey].name = school[schoolKey].name[school[schoolKey].name.length-1];
        findHighestStudent[schoolKey].score = school[schoolKey].score[school[schoolKey].score.length-1]
        
    }
    
    // return student with highest score
    return findHighestStudent;
}


// TEST CASE
console.log(highestScore([
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
//   foxes: { name: 'Dimitri', score: 90 },
//   wolves: { name: 'Alexei', score: 85 }
// }


console.log(highestScore([
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

// {
//   foxes: { name: 'Alexander', score: 100 },
//   wolves: { name: 'Alisa', score: 76 },
//   tigers: { name: 'Viktor', score: 80 }
// }


console.log(highestScore([])); //{}
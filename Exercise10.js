function changeMe(arr) {

	//convert array to object
	let person = {};
	let dataPerson = '';

	for (var i = 0; i < arr.length; i++) {
		console.log(i + 1 + '.' + arr[i][0] + ' ' + arr[i][1] + ' :');
		person.firstName = arr[i][0];
		person.lastName = arr[i][1];
		person.gender = arr[i][2];
		if (arr[i][3] === undefined || arr[i][3] > 2018) {
			person.age = 'Invalid Birth Year';
		} else {
			person.age = 2018 - arr[i][3];
		}
		console.log(person);
	}

	if (arr[0] === undefined) {
		console.log('');
	}

}

// TEST CASES
changeMe([['Christ', 'Evans', 'Male', 1982], ['Robert', 'Downey', 'Male']]); // 1. Christ Evans:
// { firstName: 'Christ',
//   lastName: 'Evans',
//   gender: 'Male',
//   age: 36 }
// 2. Robert Downey:
// { firstName: 'Robert',
//   lastName: 'Downey',
//   gender: 'Male',
//   age: 'Invalid Birth Year' }
changeMe([]); // ""
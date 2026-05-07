'use strict';

function isCorrectName(arr) {
	const regExp = /^(fd|fm|fe|FD|FM|FE)20\d{2}(-\d+)?$/;
	arr.forEach((group) => {
		if (regExp.test(group)) {
			console.log(`${group} - Success`);
		} else {
			console.log(`${group} - Error`);
		}
	});
}


const arrGroups = [
	'FE2021-5', // Success
	'Fe2020-2', // Error
	'FD2021', // Success
	'fD2022-1', // Error
	'FE2020-3', // Success
	'FD2020/2', // Error
	'fe2021-3', // Success
	'FD2020$5', // Error
	'FE2008-52', // Success
	'FU2008-3', // Error
	'Fm2008-23', // Error
	'FM2022-1', // Success
];

isCorrectName(arrGroups);

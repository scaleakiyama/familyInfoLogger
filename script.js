const userInformation = {
	name: 'Иван',
	surname: 'Иванов',
	age: 15,
	family: {
		dad: {
			name: 'Александр',
			surname: 'Иванов',
			age: undefined,
		},
		mom: {
			name: 'Наталья',
			surname: 'Иванова',
		},
		brother: {
			name: 'Константин',
			surname: 'Иванов',
			age: '10',
		},
		sister: {
			name: 'Наталья',
			surname: 'Иванова',
			age: '10',
		},
		sister1: {
			name: 'Наталья',
			surname: 'Иванова',
			age: '10',
		},
	},
}

function getInfo(info) {
	let strCount = 0
	for (let countFamily in info.family) {
		strCount += 1
	}
	if (strCount < 5) {
		strCount += ' члена'
	} else {
		strCount += ' членов'
	}
	console.log(`У ${info.name} ${info.surname}, ${strCount}`)

	const userArr = Object.entries(info.family)

	for (let i = 0; i < userArr.length; i++) {
		const entry = userArr[i]
		const key = entry[0]
		const value = entry[1]
		if (value.age) {
			console.log(`${key} ${value.name} ${value.surname} ${value.age} лет`)
		} else {
			console.log(`${key} ${value.name} ${value.surname} (возраст не известен)`)
		}
	}
	
}
getInfo(userInformation)


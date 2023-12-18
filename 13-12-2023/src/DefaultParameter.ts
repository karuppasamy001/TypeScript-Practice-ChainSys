function FindAge(birthDate: number, currentDate: number = new Date().getFullYear()){
    return currentDate - birthDate
}

console.log(FindAge(2004))


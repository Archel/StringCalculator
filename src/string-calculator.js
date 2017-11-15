module.exports.add = (numbers) => {
    if (numbers.length > 1) {
        let aNumbersList = getNumbersFromString(numbers)
        
        return aNumbersList.reduce((sum, aNumber) => {
            return sum + aNumber
        }, 0)
    }

    return numbers !== "" ? parseInt(numbers) : 0

    function getNumbersFromString(numbers) {
        return numbers.split(',').map((aStringNumber) => {
            return parseInt(aStringNumber)
        })
    }
}
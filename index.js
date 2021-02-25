function returnFirstTwoDrivers(array){
    return array.slice(0, 2)
}

function returnLastTwoDrivers(array){
    return array.slice(-2)
}

const selectingDrivers = [
    returnFirstTwoDrivers,
    returnLastTwoDrivers
]

function createFareMultiplier(fare){
    const myFunc = function(num){
        return (fare * num)
    }
    return myFunc
}

function fareDoubler(fare){
    const myVar = createFareMultiplier(fare)
    return myVar(2)
}

function fareTripler(fare){
    const myVar = createFareMultiplier(fare)
    return myVar(3)
}

function selectDifferentDrivers(drivers, aFunc){
    return aFunc(drivers)
}
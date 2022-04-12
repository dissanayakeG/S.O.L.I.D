//single responsible principle
//can have only one reason to change the class/modue/function

class CalorieTracker{
    constructor(maxCalories){
        this.maxCalories = maxCalories
        this.currentCalories = 0
    }

    trackCalories(calorieCount){
        this.currentCalories += calorieCount
        if(this.currentCalories > this.maxCalories)
        {
            this.logCalorieSurplu()
        }
    }

    logCalorieSurplu(){
        console.log('Max calories exceeded')
    }

}

const calorieTracker = new CalorieTracker(2000)
calorieTracker.trackCalories(500)
calorieTracker.trackCalories(1000)
calorieTracker.trackCalories(700)

//CalorieTracker class has two reason to change
//1)way of calculation
//2way of notification(log/email/alert...)

// SOLUTION
//move logger into seoparete module
import logMessage from './logger.js'
class CalorieTrackerSolution{
    constructor(maxCalories){
        this.maxCalories = maxCalories
        this.currentCalories = 0
    }

    trackCalories(calorieCount){
        this.currentCalories += calorieCount
        if(this.currentCalories > this.maxCalories)
        {
            logMessage('Max calories exceeded')
        }
    }

}

const calorieTrackerSolution = new CalorieTrackerSolution(2000)
calorieTrackerSolution.trackCalories(500)
calorieTrackerSolution.trackCalories(1000)
calorieTrackerSolution.trackCalories(700)


/**
 * Principle: Single Responsiblity Principle.
 * Class should have only one single responsiblity.
 * It means There should always be one reason to change the class. 
 * Class/function should not be overloaded with muliptle responsiblities.
 */

class CalorieTracker {
    constructor(maxCalories) {
        this.maxCalories = maxCalories;
        this.currentCalories = 0;
    }

    trackCalories(calorieCount) {
        this.currentCalories += calorieCount;
        if (this.currentCalories > this.maxCalories) {
            this.logCaloriesSurplus();
        }
    }

    logCaloriesSurplus() {
        console.log('Max calories exceeded');
    }
}

const calorieTracker = new CalorieTracker(2000);
calorieTracker.trackCalories(500);
calorieTracker.trackCalories(1000);
calorieTracker.trackCalories(700);


/**
 * Per SRP there should be only one reason to change the class.
 * But above class has two reason for change.
 * 1. logic to calculate the calories
 * 2. Way to notify to user about calories change. (how we log our calories)
 * 
 * So need to pull out logging logic/user notify responsiblity seperately in different module.
 * And let that handle by consumer of both classes
 * 
 * Below both classes will go in seperate files.
 */

import { logMessage } from "./user-notification_service";

//Only contains calorie tracking logic
class CalorieTracker_SRP {
    constructor(maxCalories) {
        this.maxCalories = maxCalories;
        this.currentCalories = 0;
        this.isMaxCaloriesExceeded = false;
    }

    trackCalories(calorieCount) {
        this.currentCalories += calorieCount;
        if (this.currentCalories > this.maxCalories) {
            this.isMaxCaloriesExceeded = true;
        }
    }
}

const calorieTracker = new CalorieTracker_SRP(2000);

function addCalories(calories) {
    if (calorieTracker.isMaxCaloriesExceeded) {
        logMessage("Max Calories exceeeded");
        return;
    }
    calorieTracker.trackCalories(calories);
}

addCalories(1000);
addCalories(500);
no
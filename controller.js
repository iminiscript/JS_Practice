import './styles/index.scss'
import * as model from './model.js'

import { redirectToStep } from './redirect';
import StepZero from './views/stepZero';
import StepOne from './views/stepOne';
import ClickToNext from './clickToNext';
import  Tabs  from './tabs';
import StepTwo from './views/stepTwo';
import Back from './backStep';
import DataTypes from './checkDataTypes';
import { defaultClick } from "./defaultSelected";

const app = async function () {
    try {
        // 1) Recived the data 
        await model.getData();

        const step_0 = model.state;

        console.log(step_0);
        // 2) Insert the data for  first impression - Ref './views/stepZero'
        await StepZero.startTheApp(step_0);

        // 3) Declare the Variables for various events.

        const startBtn = document.querySelector(".js-startApp");
        const countStep = document.querySelector(".js-count");
        const countStepNumber = document.querySelectorAll(".js-count li");
        const backStep = document.querySelector(".js-back");
        const stageMiddle = document.querySelector(".js-nextOne");
        const stageFinal = document.querySelector(".js-nextTwo");
        const firstElement = document.querySelector("#step_1");
        const finalElement = document.querySelector("#step_2");
        const parentBody = document.querySelector(".c-modal");

        // 4) Perform first click action to start the app - Ref - './clickToNext'

        await ClickToNext.nextStepClick(
            startBtn,
            countStep,
            countStepNumber,
            backStep,
            parentBody
        );
        
        // 5) - Insert data for step 1 - Ref - './views/stepOne'
        await StepOne.startStepOne(step_0.data.step0Items, "#step_1");
        const tabElement = document.querySelectorAll("[data-value]");
        const tabInfos = document.querySelectorAll("[data-info]");
        
        // 6) - Choose the product typs by click the tabs. Ref - './tabs'
        // @TODO - Find the other alternative for this function. 

        tabElement.forEach((tab) => {
            tab.addEventListener("click", function (e) {
                Tabs.toggleTabs(tabInfos, tab);

                // 7) - Select the product types for step-2 Ref - './checkDataTypes'
                let selectedDataType = DataTypes.checkData(step_0);

                document.querySelector("#step_2").innerHTML = "";

                // 8) - Insert the data based on the USER selecton - './views/stepTwo'
                StepTwo.startStepTwo(selectedDataType, "#step_2");

                finalElement.children[0].classList.add("active");

                const tabElementChild =
                    document.querySelectorAll("[data-value-child]");
                const tabInfosChild =
                    document.querySelectorAll("[data-infos-child]");
                
                // 9) - Show the product details based on the selection 
                // @TODO - Find the other version for this. 
                
                tabElementChild.forEach((tab) => {
                    tab.addEventListener("click", function (e) {
                        Tabs.toggleTabs(tabInfosChild, tab);
                    });
                });
            });
        });

        // 10) - Go to next step based on the selection.
        ClickToNext.nextStepClick(
            stageMiddle,
            countStep,
            countStepNumber,
            backStep
        );

        // 11) - Show the product details data for checkout. 
        ClickToNext.finalStepClick(
            stageFinal,
            parentBody, 
            countStepNumber
        );
        
        // 12) - Go to previous step at any point.  Ref - './backStep'
        Back.backClick(
            backStep,
            countStep,
            countStepNumber,
            finalElement,
            stageFinal,
            parentBody
        );
        
        // 13) - Select the first default verison of Product. 
        // @TODO - There could be better version for this function. 
        defaultClick(".c-tile");
     
    } catch (error) {
        console.log(error);
    }
};

// Setup the initialization of the app.
function init() {
    redirectToStep();
    app();
}
// Init the app.
// author = @iminiscript

init();
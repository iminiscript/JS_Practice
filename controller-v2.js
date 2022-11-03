import './styles/index.scss'
import * as model from './model.js'

import StepZero from './views/stepZero';
import StepOne from './views/stepOne';
import { navigateToFormStep }  from './prevNext';
import ClickToNext from './click';
import { tabs } from './tabs';
import StepTwo from './views/stepTwo';
//import Back from './back';


// click.startClick(btnFirst, steps, back);

const stepZero = async function() {
  try {
    await model.getData();
    const step_0 = model.state;
    console.log(step_0);
    await StepZero.startingPoint(step_0);

    // const btnFirst = document.querySelector('.js-next');
    // const steps = document.querySelector('.js-count');
    // const back = document.querySelector('.c-back');
    // const btnSec = document.querySelector('.c-stepOne');
    // // this.startClick(btnFirst, steps, back)
    // // btnFirst.addEventListener("click", function() {
    // //   this.parentElement.classList.add('hide');
    // //   btnSec.classList.remove('hide');
    // //   steps.classList.remove('hide');
    // //   back.classList.remove('hide');
    // // })
    document.querySelectorAll(".js-start").forEach((formNavigationBtn) => {
      /**
       * Add a click event listener to the button.
       */
      formNavigationBtn.addEventListener("click", () => {
          /**
           * Get the value of the step.
           */
          const stepNumber = parseInt(formNavigationBtn.getAttribute("step_number"));
          /**
           * Call the function to navigate to the target form step.
           */
          navigateToFormStep(stepNumber);
      });
    });
  

    await StepOne.startStepOne(step_0.data.step0Items, '#step_1');

    const tabElement = document.querySelectorAll('[data-value]');
    const tabInfos = document.querySelectorAll('[data-info]')
    
    tabElement.forEach( tab => {
        tab.addEventListener("click", function(e) {
            e.stopPropagation();
            console.log('tab', tab);
            tabs(tabInfos, tab);
            const type = sessionStorage.getItem("type");
            let stepTwoData;

            if (type === 'pouch') {
              stepTwoData = step_0.data.step1View0Items;
            } else if( type === 'travelPacks') {
              stepTwoData = step_0.data.step1View1Items;
            }

            //console.log(stepTwoData)
            // const et = document.querySelector('.c-stepOne');
            document.querySelector('#step_2').innerHTML = '';
            StepTwo.startStepTwo(stepTwoData, '#step_2');
            //ClickToNext.startClick(btnSec, steps, back);
            

            //console.log(step_0.data.step1View1Items);

            console.log(et);
            
        })
    });


  

  

    //await Back.backClick(back, steps);
    
  } catch (error) {
    console.log(error)
  }
}


function init() {
  sessionStorage.removeItem("type");
  stepZero();
}

init();
import './styles/index.scss'
import * as model from './model.js'

import StepZero from './views/stepZero';
import StepOne from './views/stepOne';
import ClickToNext from './click';
import { tabs } from './tabs';
import StepTwo from './views/stepTwo';
import Back from './back';


// click.startClick(btnFirst, steps, back);

const stepZero = async function() {
  try {
    await model.getData();
    const step_0 = model.state;
    console.log(step_0);
    await StepZero.startingPoint(step_0);

    const btnFirst = document.querySelector('.js-nextZero');
    const steps = document.querySelector('.js-count');
    const back = document.querySelector('.js-back');
    const btnSec = document.querySelector('.js-nextOne');
    const btnTer = document.querySelector('.js-nextTwo');
    const finalElement = document.querySelector('#step_2');
    // this.startClick(btnFirst, steps, back)
        
    ClickToNext.startClick(btnFirst, steps, back);
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
            document.querySelector('#step_2').innerHTML = '';
            StepTwo.startStepTwo(stepTwoData, '#step_2');

            const tabElements = document.querySelectorAll('[data-values]');
            const tabInfoss = document.querySelectorAll('[data-infos]');

            tabElements.forEach( tab => {
              tab.addEventListener("click", function(e) {
                  e.stopPropagation();
                  tabs(tabInfoss, tab);
              });
            });
            

            //console.log(step_0.data.step1View1Items);

            const et = document.querySelectorAll('.c-stepOne');

            console.log(et);
            
        })
    });

    ClickToNext.startClick(btnSec, steps, back);

    ClickToNext.finalStepClick(btnTer)

    Back.backClick(back, steps, finalElement, btnTer);
    
  } catch (error) {
    console.log(error)
  }
}


function init() {
  sessionStorage.removeItem("type");
  stepZero();
}

init();
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


const app = async function() {
	try {
    
    	await model.getData();
    
    	const step_0 = model.state;
    
    	console.log(step_0);
    
    	await StepZero.startTheApp(step_0);

		const startBtn = document.querySelector('.js-startApp');
		const countStep = document.querySelector('.js-count');
		const countStepNumber = document.querySelectorAll('.js-count li');
		const backStep = document.querySelector('.js-back');
		const stageMiddle = document.querySelector('.js-nextOne');
		const stageFinal = document.querySelector('.js-nextTwo');
		const firstElement = document.querySelector('#step_1');
		const finalElement = document.querySelector('#step_2');
		const parentBody = document.querySelector('.c-modal');
    
		await ClickToNext.nextStepClick(startBtn, countStep, countStepNumber, backStep, parentBody);
		
		await StepOne.startStepOne(step_0.data.step0Items, '#step_1');
		
		await firstElement.children[0].classList.add('active');

		const tabElement = document.querySelectorAll('[data-value]');
		const tabInfos = document.querySelectorAll('[data-info]');
    
		tabElement.forEach( tab => {
			tab.addEventListener("click", function(e) {
			
				Tabs.toggleTabs(tabInfos, tab);

				let selectedDataType = DataTypes.checkData(step_0);
	
				document.querySelector('#step_2').innerHTML = '';
				
				StepTwo.startStepTwo(selectedDataType, '#step_2');
				
				finalElement.children[0].classList.add('active');
				
				const tabElementChild = document.querySelectorAll('[data-value-child]');
				const tabInfosChild = document.querySelectorAll('[data-infos-child]');

				tabElementChild.forEach( tab => {
				tab.addEventListener("click", function(e) {
					Tabs.toggleTabs(tabInfosChild, tab);
				});
				});
				
			})
		});

		ClickToNext.nextStepClick(stageMiddle, countStep, countStepNumber, backStep);

		ClickToNext.finalStepClick(stageFinal, parentBody, countStepNumber);

		Back.backClick(backStep, countStep, countStepNumber, finalElement, stageFinal, parentBody);
    
  	} catch (error) {
    	console.log(error)
  	}
}

function init() {
	redirectToStep();
  	app();
}

init();
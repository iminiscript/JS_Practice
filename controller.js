import './styles/index.scss'
import * as model from './model.js'

import StepZero from './views/stepZero';
import StepOne from './views/stepOne';
import click from './click';

StepZero.startingPoint('#app');
const startBtn = document.querySelectorAll('.js-start');
const steps = document.querySelector('.js-count');
const back = document.querySelector('.js-back');
const stepOne = async function() {
  try {
    await model.getData();
    const step_1 = model.state;
    console.log(step_1.data.step0Items);
    StepOne.startStepOne(step_1.data.step0Items, '#step_1');
    click.startClick(startBtn, steps, back);
  } catch (error) {
    console.log(error)
  }
}

function init() {
  stepOne();
}

init();
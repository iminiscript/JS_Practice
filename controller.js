import './styles/index.scss'
import * as model from './model.js'

import StepZero from './views/stepZero';
import StepOne from './views/stepOne';

StepZero.startingPoint('#app');

const stepOne = async function() {
  try {
    await model.getData();
    const step_1 = model.state;
    console.log(step_1.data.step0Items);
    StepOne.startStepOne(step_1.data.step0Items, '#step_1')
  } catch (error) {
    console.log(error)
  }
}

stepOne();
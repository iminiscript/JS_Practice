import json from '../product.json';

class StepZero {
    
    startingPoint(element) {
        const html = `
            <div class="c-header">
                <div class="c-back hide js-back">
                    ${json.backIcon}
                </div>
                <div class="c-logo">
                    ${json.logo}
                </div>
                <div class="c-title">
                    <h1 class="c-titleMain">${json.topText}</h1>
                </div>
            </div>
            <div class="c-steps hide js-count">
                <ul class="c-stepsList">
                    <li data-step="1" class="c-stepsItem">1</li>
                    <li data-step="2" class="c-stepsItem">2</li>
                    <li data-step="3" class="c-stepsItem">3</li>
                </ul>
            </div>
            <div class="c-stepZero c-stepOne--start" data-url="?step-0">
                <h1 class="c-stepZero__title">${json.bodyText}</h1>
            <a class="c-btn js-start" data-step="start">${json.buttonLabelStep0}</a>
            </div>
            <div class="c-stepOne hide" data-url="?step-1">
                <div class="c-stepBlock" id="step_1">
                </div>
                <div class="c-checkout js-start">
                    <a  class="c-btn">Next</a>
                </div>
            </div>
            <div class="c-stepTwo hide" data-url="?step-2">
                <div class="c-stepBlock" id="step_2">
                </div>
                <div class="c-checkout js-start">
                    <a  class="c-btn">Next</a>
                </div>
            </div>`
            
        document.querySelector(element).insertAdjacentHTML('afterbegin', html);
    }
}

export default new StepZero();
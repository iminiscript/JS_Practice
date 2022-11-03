import View from '../view';

class StepZero extends View {
    parentElement = document.querySelector('#app');

    startingPoint(data) {

        this.data = data;
		//console.log(data);
        const html = this.genrateMarkup();   
        this.parentElement.insertAdjacentHTML('afterbegin', html);
        // const btnFirst = document.querySelector('.js-nextZero');
        // const steps = document.querySelector('.js-count');
        // const back = document.querySelector('.js-back');
        // this.startClick(btnFirst, steps, back)
    }



    genrateMarkup() {
        return `<div class="c-header">
        <div class="c-logo">
            ${this.data.data.logo}
        </div>
        <div class="c-title">
            <h1 class="c-titleMain">${this.data.data.topText}</h1>
        </div>
    </div>
    <div class="c-steps js-count">
        <ul class="c-stepsList">
            <li step="0" class="c-stepsItem is_active" style="visibilty:hidden">0</li>
            <li step="1" class="c-stepsItem ">1</li>
            <li step="2" class="c-stepsItem ">2</li>
            <li step="3" class="c-stepsItem ">3</li>
        </ul>
    </div>
    <div class="c-stepParent">
        <div class="c-stepZero c-stepOne--start form-step" id="step-0" data-url="?step-0">
            <h1 class="c-stepZero__title">${this.data.data.bodyText}</h1>
            <div class="c-checkout js-start" step_number="1">
                <a  class="c-btn">${this.data.data.buttonLabelStep0}</a>
        </div>
        </div>
    
        <div class="c-stepOne hide form-step" id="step-1" data-url="?step-1">
            <div class="c-stepBlock" id="step_1">
            </div>
            <div class="c-checkout js-start" step_number="2">
                <a  class="c-btn">${this.data.data.buttonLabelStep0}</a>
            </div>
            <div class="c-back js-start" step_number="0">
                ${this.data.data.backIcon}
            </div>
        </div>
        <div class="c-stepTwo hide form-step" id="step-2" data-url="?step-2">
            <div class="c-stepBlock" id="step_2">
            </div>
            <div class="c-checkout js-start"
            step_number="3">
                <a  class="c-btn">${this.data.data.buttonLabelStep0}</a>
            </div>
            <div class="c-back  js-start" step_number="1">
                ${this.data.data.backIcon}
            </div>
            
        </div>
        <div class="c-stepThree hide form-step" id="step-3" data-url="?step-3">
            <div class="c-stepBlock" id="step_3">
            </div>
            <div class="c-checkout js-start"
            step_number="2">
                <a  class="c-btn">${this.data.data.buttonLabelStep0}</a>
            </div>
            <div class="c-back  js-start" step_number="2">
                ${this.data.data.backIcon}
            </div>
            
        </div>
    </div>
    `
    }
}

export default new StepZero();
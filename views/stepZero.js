class StepZero  {
    parentElement = document.querySelector('#app');

    startTheApp(data) {
        
        this.data = data;
        
        const html = this.genrateIntialMarkup();   
        
        this.parentElement.insertAdjacentHTML('afterbegin', html);
    }
    
    genrateIntialMarkup() {
        return `
            <div class="c-header">
                <div class="c-back hide js-back">
                    ${this.data.data.backIcon}
                </div>
                <div class="c-logo">
                    ${this.data.data.logo}
                </div>
                <div class="c-title">
                    <h1 class="c-titleMain">${this.data.data.topText}</h1>
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
                <h1 class="c-stepZero__title">${this.data.data.bodyText}</h1>
                <div class="c-btn js-start js-startApp"> ${this.data.data.buttonLabelStep0}</div>
            </div>
            <div class="c-stepOne hide" data-url="?step-1">
                <div class="c-stepBlock" id="step_1">
                </div>
                <div class="c-checkout js-start js-nextOne c-btn">
                    Next
                </div>
            </div>
            <div class="c-stepTwo hide" data-url="?step-2">
                <div class="c-stepBlock" id="step_2">
                </div>
                <div class="c-checkout js-start js-nextTwo c-btn">
                    Next
                </div>
            </div>`
    }
}

export default new StepZero();
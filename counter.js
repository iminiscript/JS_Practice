class counter {
  count() {
    const stepCount = document.querySelectorAll('.js-count li');
    const currentStep = window.location.search;

    
    const stepNum = currentStep.substring(6);
    

    stepCount.forEach( step => {
        const curreActive = step.dataset.step;
  
        if (curreActive === stepNum ) {
          step.classList.add('is-active');
          if (currentStep !== '?step-3') {
            step.nextElementSibling.classList.remove('is-active');
          }
        } 
    })
  }
}

export default new counter();
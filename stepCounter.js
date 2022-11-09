class Counter {
	
	stepCount(stepCount) {
    	
		const currentStep = window.location.search;
    	
		const stepNum = currentStep.substring(6);
		console.log(stepCount);

		stepCount.forEach( step => {
        	const curreActive = step.dataset.step;
			step.classList.remove('currentActive')
        	if (curreActive === stepNum ) {
          		step.classList.add('is-active');
          		if (currentStep !== '?step-3') {
            		step.nextElementSibling.classList.remove('is-active');
          		}
        	}
			switch (Number(stepNum)) {
				case 1:
					stepCount[0].classList.add('currentActive');
					break;
				case 2:
					stepCount[1].classList.add('currentActive');
					break;

				case 3:
					stepCount[2].classList.add('currentActive');
					break;
				default:
					break;
			}
    	})
  	}
}

export default new Counter();
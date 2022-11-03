import counter from "./counter";

class Back {
    
    backClick(element, step) {
        element.addEventListener("click", function() {
            //console.log(element, step)
            const currentStep = window.location.search;
            //console.log(currentStep);
            const stepNum = Number(currentStep.substring(6));
            //console.log(stepNum);
        
            const prevStep = stepNum - 1;
        
            //console.log(prevStep);
            window.history.pushState("", "", `/?step-${prevStep}`);
        
            const updateState = window.location.search;
        
            //console.log(updateState)
        
            const elements = document.querySelectorAll('[data-url]');
        
            elements.forEach( val => {
                const dataURL = val.dataset.url;
                if (dataURL === updateState) {
                val.classList.remove('hide');
                } else {
                val.classList.add('hide');
                }
        
            });

            if (updateState === '?step-0') {
                element.classList.add('hide');
                step.classList.add('hide');
            }

            counter.count();
        })
    }
}

export default new Back();
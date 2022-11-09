import Counter from "./stepCounter";

class Back {
    
    backClick(element, step,stepCount, finalStep, btn, parent) {
        element.addEventListener("click", function() {
 
            const currentStep = window.location.search;
 
            const stepNum = Number(currentStep.substring(6));
        
            const prevStep = stepNum - 1;

            window.history.pushState("", "", `/?step-${prevStep}`);
        
            const updateState = window.location.search;
        
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
                parent.classList.remove('background');
            } 

            if (updateState === '?step-2') {
                
                parent.classList.remove('final-step');

                for (const iterator of finalStep.children) {
                    if(iterator.classList.contains('hide') ) {
                        iterator.classList.remove('hide');
                    } else {
                        iterator.children[1].classList.remove('hide');
                        iterator.children[2].classList.remove('hide');
                        iterator.children[3].classList.add('hide');
                    }
                }

                btn.innerHTML = 'Next';               
            }
            Counter.stepCount(stepCount);
        })
    }
}

export default new Back();
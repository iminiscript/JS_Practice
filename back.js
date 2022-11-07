import counter from "./counter";

class Back {
    
    backClick(element, step, finalStep, btn, parent) {
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
                parent.classList.remove('background');
            } 

            console.log(updateState)

            if (updateState === '?step-2') {
                parent.classList.remove('final-step');

                for (const iterator of finalStep.children) {
                    if(iterator.classList.contains('hide') ) {
                        iterator.classList.remove('hide');
                    } else {
                        console.log(iterator.children)
                        iterator.children[1].classList.remove('hide');
                        iterator.children[2].classList.remove('hide');
                        iterator.children[3].classList.add('hide');
                    }
                }

                btn.innerHTML = 'Next';
                
            }

            counter.count();
        })
    }
}

export default new Back();
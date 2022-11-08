import Counter from "./stepCounter";
class ClickToNext   {
    
    nextStepClick(element, step, stepCount, backs, parent) {
       
        element.addEventListener("click", function() {
            
            const stepName = this.parentElement.nextElementSibling.dataset.url;
            
            step.classList.remove('hide');
            
            backs.classList.remove('hide');
            
            this.parentElement.nextElementSibling.classList.remove('hide');
            
            this.parentElement.classList.add('hide');
            
            window.history.pushState("", "", stepName);
            
            Counter.stepCount(stepCount);
            
            parent = parent || 0;
            
            if (parent && !parent.classList.contains('background')) {
                parent.classList.add('background');
            }
        })
    }

    finalStepClick(element, parent, stepCount) {
        
        element.addEventListener("click", function() {
            
            const stepName = this.parentElement.dataset.url;

            const stepNum = Number(stepName.substring(6));
            
            const finalStep = stepNum + 1;
            
            const targetEle = this.previousElementSibling.children;

            for (const item of targetEle) {
                if(item.classList.contains('active')) {
                    item.children[1].classList.add('hide');
                    item.children[2].classList.add('hide');
                    item.children[3].classList.remove('hide');
                } else {
                    item.classList.add('hide');
                }
            }

            window.history.pushState("", "", `/?step-${finalStep}`);

            element.innerHTML = 'checkout';
            parent.classList.add('final-step');
            Counter.stepCount(stepCount);

        })
    }
}

export default new ClickToNext();
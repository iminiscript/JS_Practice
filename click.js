import counter from "./counter";
class ClickToNext   {
    
    startClick(element, step, backs) {
       
        element.addEventListener("click", function(e) {
                e.preventDefault();
                const stepName = this.parentElement.nextElementSibling.dataset.url;
                console.log(stepName)
                step.classList.remove('hide');
                backs.classList.remove('hide');
                this.parentElement.nextElementSibling.classList.remove('hide');
                this.parentElement.classList.add('hide');
                window.history.pushState("", "", stepName);
                //console.log(window.history);
                // countUpdate('.js-count li');
                counter.count();
            })
    }

    finalStepClick(element) {
        element.addEventListener("click", function(e) {
            e.preventDefault();
            const stepName = this.parentElement.dataset.url;
            console.log(stepName);
            const stepNum = Number(stepName.substring(6));
            //console.log(stepNum);
        
            const finalStep = stepNum + 1;

            const targetEle = this.previousElementSibling.children;
            

            // console.log(targetEle);
            // console.log(typeof targetEle);

            for (const item of targetEle) {
                if(item.classList.contains('active')) {
                    console.log( item.children);
                    console.log(item.children[1], item.children[2])
                    item.children[1].classList.add('hide');
                    item.children[2].classList.remove('hide');
                } else {
                    item.classList.add('hide');
                }
            }

            window.history.pushState("", "", `/?step-${finalStep}`);

            element.innerHTML = 'checkout';

            // targetEle.forEach(element => {
            //     if(element.classList.contains('active')) {
            //         element.children;
            //         console.log(element.children)
            //     }
            // });
            counter.count();

        })
    }
}

export default new ClickToNext();
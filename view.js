export default class View {

    startClick(element, step, backs) {
       
        element.addEventListener("click", function(e) {
            e.preventDefault();
            const stepName = this.parentElement.nextElementSibling.dataset.url;
            //console.log(stepName)
            step.classList.remove('hide');
            backs.classList.remove('hide');
            this.parentElement.nextElementSibling.classList.remove('hide');
            this.parentElement.classList.add('hide');
            window.history.pushState("", "", stepName);
            //console.log(window.history);
            // countUpdate('.js-count li');
            //countUpdate();
        })
    }
}

class StepTwo {

    startStepTwo(data, element) {
      this.data = data;
      console.log(element);

      this.data.forEach((item) => {
        console.log(item.Id);
        const markup = `
        <div class="c-stepInside" data-infos id="${item.Id}">
          <div class="c-product">
            <img src="${item.imageMobile.url}" />
          </div>
          <div class="c-stepProduct ${item.viewId}" data-values="#${item.Id}">
            <div class="c-plan">
              <div class="c-planTile">
                <fieldset>
                  <div>
                    <label  class="c-planTile__label" for="${item.viewId}">
                      
                      <p class="c-planType">${item.productName}</p>
                      <hr class="c-planDivder" />
                      <p class="c-planDesc">${item.productDescription}</p>
                    </label>
                  </div>
                </fieldset>
              </div>
            </div>
          </div>
          <div class="c-planDetails">
            <p><b>${item.subheading}</b></p>
            <p>${item.description}</p>
          </div>
        </div>
        `;
        document.querySelector(element).insertAdjacentHTML('beforeend', markup);
      });
    }

    
    
} 

export default new StepTwo();
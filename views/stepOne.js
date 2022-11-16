class StepOne {
    /**
     * Render the recived object to the DOM.
     * This is Step one  of the APP
     * @param {Object || Object[]} The Product data to be rendered (e.g - Pouch || Travel Pack )
     * @param {HTML Target} element where we want to insert the data.
     */
    startStepOne(data, element) {
        data.forEach((item) => {
            const html = `
			<div class="c-stepInside" data-info id="${item.Id}">
				<div class="c-product">
					<img src="${item.imageMobile.url}" />
				</div>
				<div class="c-tile" data-type="${item.viewId}" data-value="#${item.Id}">
					<div  class="c-tileLabel" data-view-id="${item.viewId}">
						<span class="c-tileIcon"><svg clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" width="16" height="16" xmlns="http://www.w3.org/2000/svg"><path d="m2.25 12.321 7.27 6.491c.143.127.321.19.499.19.206 0 .41-.084.559-.249l11.23-12.501c.129-.143.192-.321.192-.5 0-.419-.338-.75-.749-.75-.206 0-.411.084-.559.249l-10.731 11.945-6.711-5.994c-.144-.127-.322-.19-.5-.19-.417 0-.75.336-.75.749 0 .206.084.412.25.56" fill-rule="nonzero"/></svg></span>
						<p class="c-tileType">${item.productName}</p>
						<hr class="c-tileDivder" />
						<p class="c-tileDesc">${item.productDescription}</p>
					</div>
					
				</div>
				<div class="c-planDetails">
					<div class="c-planDetails__subHead"> ${item.subheading}</div>
					<div class="c-planDetails__para"> ${item.description}</div>
				</div>
			</div>
			`;
            document
                .querySelector(element)
                .insertAdjacentHTML("beforeend", html);
        });
    }
}

export default new StepOne();

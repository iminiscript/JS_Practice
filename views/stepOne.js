class StepOne {
	
    startStepOne(data, element) {
		this.data = data;
		console.log(this.data);

		this.data.forEach((item) => {
			const html = `
			<div class="c-stepInside" data-info id="${item.Id}">
				<div class="c-product">
					<img src="${item.imageMobile.url}" />
				</div>
				<div class="c-stepProduct" data-type="${item.viewId}" data-value="#${item.Id}">
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
			document
				.querySelector(element)
				.insertAdjacentHTML("beforeend", html);
		});
	}
}

export default new StepOne();

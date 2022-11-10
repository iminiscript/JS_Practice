
class StepTwo {
	/**
	 * 
	 * @param {Object || Object[]} The data of what type of product pack we choose. 
	 * @param {HTML Element} The element where we want to render this markup.  
	 */
    startStepTwo(data, element) {
        data.forEach((item) => {
            const markup = `
				<div class="c-stepInside" data-infos-child id="${item.Id}">
					<div class="c-product">
					<img src="${item.imageMobile.url}" />
					</div>
					<div class="c-tile ${item.viewId}" data-value-child="#${item.Id}">
					<div class="c-tileHead ${item.banner}">
						<span>${item.banner}</span>
					</div>
					<div class="c-tileLabel">
						<span class="c-tileIcon"><svg clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" width="16" height="16" xmlns="http://www.w3.org/2000/svg"><path d="m2.25 12.321 7.27 6.491c.143.127.321.19.499.19.206 0 .41-.084.559-.249l11.23-12.501c.129-.143.192-.321.192-.5 0-.419-.338-.75-.749-.75-.206 0-.411.084-.559.249l-10.731 11.945-6.711-5.994c-.144-.127-.322-.19-.5-.19-.417 0-.75.336-.75.749 0 .206.084.412.25.56" fill-rule="nonzero"/></svg></span>        
						<p class="c-tileType">$${item.price}<br/>${item.productName}</p>
						<hr class="c-tileDivder" />
						<p class="c-tileDesc">${item.productDescription}</p>
					</div>
					</div>
					<div class="c-planDetails">
					<div class="c-planDetails__subHead">${item.subheading}</div>
					<div class="c-planDetails__para">${item.description}</div>
					</div>
					<div class="c-tileList hide">
					<div class="c-tileList__head">
						<div class="c-tileList__headPara"><b>${item.productName} </b></div>
						<div class="c-tileList__headPara">${item.description}</div>
					</div>
					<ul class="c-tileListItem">
						<li><span>${item.productName}</span>   <span>$${item.price}</span> </li>
						<li><span>Bonus Gifts</span>   <span>$${item.giftsValueUs}</span> </li>
						<li><span>${item.shippingLabel}</span>  <span>$${
                item.shippingValueUs
            } </span></li>
						<li><b><span>Subtotal</span></b>  <b><span>$${
                            item.price +
                            item.shippingValueUs +
                            item.giftsValueUs
                        }</span></b> </li>
					</ul>
					<p class="c-tileDes"><span class="c-tileDesc__icon">
					<svg width="17" height="17" fill="none">
						<path d="M17 8.5C16.757 19.817.243 19.817 0 8.549.194-2.817 16.757-2.866 17 8.5Zm-10.929.971c-2.72-.194-1.651.729-1.214 2.526.146.972.194 1.992.097 2.963-.048.68-.34.729.486 1.02 1.409.68 3.06.777 4.614.486.146-.049.486-.097.34-.292-.194-.437-.34-.922-.485-1.408-.292-1.166-.34-2.429.194-3.497 1.02-1.895 1.797-.146 2.283 1.02.291.291.388-1.117.485-1.263.146-.583.389-1.215.729-1.7.146-.243.486-.437.534-.777 0-.389-.68-1.069-.923-1.409-.874-1.069-1.942-2.137-2.137-3.546-.048-.583 0-1.165.195-1.7.048-.243.485-.777.291-.874-1.991-.826-4.323-.826-6.314.097-.34.146-.68.34-.972.486-.145.048-.145.194-.048.291C5.197 3.011 6.363 4.663 7.77 5.1c.535.194 1.118.146 1.652.291.971.243.583 1.215.34 1.846C8.986 9.23 7.966 9.423 6.07 9.471Zm-.145-.485c1.117.048 2.574-.049 3.108-1.263.243-.486.486-.972.583-1.457.049-.535-.68-.437-1.02-.535-1.214-.048-2.137-.728-2.963-1.554-.388-.388-.825-.826-1.165-1.263-.146-.194-.34-.388-.486-.583-.097-.097-.243-.388-.437-.194-1.02.826-1.895 1.894-2.38 3.109C-.34 8.403.63 12.434 3.254 14.669c.292.242.583.485.923.68.194.097.243.097.243-.146.097-1.117.146-2.234-.146-3.303-.145-.583-.437-1.117-.485-1.7-.146-1.311 1.262-1.263 2.137-1.214Zm4.177 4.128c0 .875.243 1.749.583 2.575.097.242.145.68.485.485 2.769-.971 4.955-3.594 5.295-6.557.485-2.963-.923-6.12-3.4-7.82-.195-.097-.875-.68-1.02-.486-.437.729-.68 1.603-.486 2.429.437 1.797 2.234 2.866 2.963 4.517.291.486-.437.972-.68 1.409-.437.631-.583 1.408-.729 2.185-.097.292-.145.535-.291.826-.194.389-.68.34-.874-.048-.098-.195-.292-.389-.292-.632-.048-.146-.194-.243-.243-.388-.485-1.166-.874-.583-1.165.242a5.93 5.93 0 0 0-.146 1.263Z" fill="#002F30"/>
					</svg>
					</span>*We offset carbon emissions on every shipment.</p>
					</div>
				</div>
				`;

            document
                .querySelector(element)
                .insertAdjacentHTML("beforeend", markup);
        });
    }
} 

export default new StepTwo();
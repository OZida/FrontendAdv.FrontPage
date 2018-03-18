export default {
	render: function(data) {
		var body_first = document.getElementsByClassName('currency')[0];
		var body_second = document.getElementsByClassName('curr_radio')[0];

		data.map(el => {
			let label = document.createElement('label'),
				input = document.createElement('input');

			input.setAttribute('value', el.sale);
			input.setAttribute('type', 'radio');
			input.setAttribute('name', 'currency');
			input.setAttribute('id', el.ccy);
			label.innerHTML = el.ccy;

			label.appendChild(input);
			return label; 

		}).forEach(function(el){
				body_second.appendChild(el);
		});
		let usd = document.getElementById('USD');
			usd.setAttribute('checked', 'checked');
		let	btc = document.getElementById('BTC');
		btc.value = btc.value * usd.value;


		data.map(el => {
			let div = document.createElement('div'),
				h3 = document.createElement('h4'),
				p_buy = document.createElement('p'),
				p_sale = document.createElement('p');

			h3.innerHTML = el.ccy;
			p_buy.innerHTML = 'Курс покупки - ' + el.buy;
			p_sale.innerHTML = 'Курс продажи - ' + el.sale;

			div.appendChild(h3);
			div.appendChild(p_buy);
			div.appendChild(p_sale);
			div.classList.add('currency_block');
			return div; 

		}).forEach(function(el){
				body_first.appendChild(el);
		});
	}
}

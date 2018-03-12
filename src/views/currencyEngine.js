export default {
	render: function(data) {
		var body = document.getElementsByClassName('currency')[0];

		data.map(el => {
			let div = document.createElement('div'),
				h3 = document.createElement('h3'),
				p = document.createElement('p');
			h3.innerHTML = el.txt + ' (' +el.cc + ')';
			p.innerHTML = el.rate;
			div.appendChild(h3);
			div.appendChild(p);
			div.classList.add('currency_block');
			return div;
		}).forEach(function(el){
				body.appendChild(el);
		})

	}
}
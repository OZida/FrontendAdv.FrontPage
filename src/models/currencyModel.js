let store = {
	data: [],
	init: function(url){
		return fetch('https://api.privatbank.ua/p24api/pubinfo?exchange&json&coursid=11').then((r)=>r.json()).then(json => store.data = json);
	}
}
export default store;

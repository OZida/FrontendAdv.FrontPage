let store = {
	data: [],
	init: function(url){
		return fetch('https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json').then((r)=>r.json()).then(json => store.data = json);
	}
}
export default store;
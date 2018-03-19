describe('Test group for front-app', function(){

	it('should return a second pow', function(){
		expect(Math.pow(2,2)).toBe(4);
	})
	it('should return a third pow', function(){
		expect(Math.pow(2,3)).toBe(8);
	})
	it('will display an integer', function() {
		expect(Math.trunc(4.5)).toBe(4);
		expect(Math.trunc(5.99)).toBe(5);
	})
	it('will show a rounded number', function(){
		expect(Math.round(3.2)).toBe(3);
		expect(Math.round(3.9)).toBe(4);
	})
})
describe('Test group for string', function(){

	it('show the word with a replacement', function(){
		expect('Vlad'.replace( /a/g, "o" )).toBe('Vlod');
	})
	it('will show the word index', function(){
		expect('Iteaw'.indexOf("w")).not.toBe(-1);
	})
})	
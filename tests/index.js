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
describe('Test group of other comparisons', function(){

	it('will find the matched substring', function(){
		expect('I can play this game').toMatch('play');
	})
	it('value must be greater than', function(){
		expect(100 + 50).toBeGreaterThan(10);
	})
	it('value must be wrong', function(){
		expect(5 < 0).toBeFalsy(5);
	})
	it('value must not be null', function(){
		expect(10).not.toBeNull();
	})
	it('value must contain', function(){
		expect([10, -5, 0]).toContain(-5);
   		expect("I can play this game").not.toContain(0);
	})
})	
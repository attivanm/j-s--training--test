//-
 var GetBio = require('./GetBio.js');

 describe('test cases about information', function (){
		
		var information;
        information = new GetBio();	

		it('evaluated the final message when are entered correct values' , function(){

        var actRes = information.getBio('ivan',24)
        var expRes = 'Hi, my name is ivan, I am 24 years old and I am a nice guy.'; 
		expect(actRes).toEqual(expRes);
		});



		it('evaluated the final message when does not entered any values' , function(){
			  expect(function(){information.getBio()}).toThrow('Need name and age to provide a biography.');
			});	


		it('evaluated the final message when entered a invalid age ' , function(){
			  expect(function(){information.getBio('ivan',-20)}).toThrow('Invalid age.');
			});	


	});

  
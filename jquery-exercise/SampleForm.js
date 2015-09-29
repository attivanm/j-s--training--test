
var SampleForm = function(){


   this.setInfo = function(name,email,gender){
     
     $('input.form-control:first').val(name)
     $($('input.form-control')[1]).val(email)
     if(gender == 'g')
     $('input#genderM').click()
     else
     $('input#genderF').click()
	};

   this.setHobbies = function(hobby1,hobby2,hobby3,hobby4,hobby5){
   	if(hobby1 == 'y')
     $('input#hobby1').click()
    if(hobby2 == 'y')
     $('input#hobby2').click()
    if(hobby3 == 'y')
     $('input#hobby3').click()
    if(hobby4 == 'y')
     $('input#hobby4').click()
    if(hobby5 == 'y')
     $('input#hobby5').click()
    if(hobby6 == 'y')
     $('input#hobby6').click()
     

 
	};

   this.heardVia = function(num){
    switch (num){
        case '1': $('select#heard option:selected').text('Choose..');
            break;
        case '2': $('select#heard option:selected').text('Press');
            break
        case '3': $('select#heard option:selected').text('Internet');
            break
        case '4': $('select#heard option:selected').text('Word of mouth');
            break
        default : $('select#heard option:selected').text('Other..');

    }

  };

   this.message = function(messg){

      $('textarea#message').val(messg)

  };

};

 var forms = new SampleForm();
forms.setInfo('ivan morales camacho','attivanm@hotmail.com','g');
forms.setHobbies('y','n','n','y','n','y');
forms.heardVia(3);
forms.message('this is a message test about the form')
$(document).ready(function(){
   $('span#fontsize').click(function(){
        var currentFontSize = $('body').css('font-size');
    var currentFontSizeNum = parseFloat(currentFontSize, 10);
  var newFontSize = '0.8em' /*rrentFontSizeNum + currentFontSizeNum*0.*/;
    
    $('body').css('font-size', newFontSize);
   });
    
   $('span#fontnormal').click(function(){
		$('body').css('font-size','0.718em');
   });

   $('span#fontsmall').click(function(){
      var currentFontSize = $('body').css('font-size');
    var currentFontSizeNum = parseFloat(currentFontSize, 10);
    var newFontSize = '0.7em' /*currentFontSizeNum - currentFontSizeNum*0.2*/;
    $('body').css('font-size', newFontSize);
   }); 

   $('span#fontsized').click(function(){
        var currentFontSize = $('body').css('font-size');
    var currentFontSizeNum = parseFloat(currentFontSize, 10);
  var newFontSize = '0.8em' /*rrentFontSizeNum + currentFontSizeNum*0.*/;
    
    $('body').css('font-size', newFontSize);
   });

   $('span#fontnormald').click(function(){
		$('body').css('font-size','0.718em');
   });

 /* contrat */
    $('span#cbig').click(function(){
        var currentFontSize = $('body').css('color');
  	var newFontSize = 'black' /*rrentFontSizeNum + currentFontSizeNum*0.*/;

    $('body').css('color', newFontSize);
   });

   $('span#cnormal').click(function(){
                $('body').css('color','dimgray');
   });

   $('span#csmall').click(function(){
      var currentFontSize = $('body').css('color');
    var currentFontSizeNum = parseFloat(currentFontSize, 10);
    var newFontSize = 'gray' /*currentFontSizeNum - currentFontSizeNum*0.2*/;
    $('body').css('color',newFontSize);
   });

   
});   

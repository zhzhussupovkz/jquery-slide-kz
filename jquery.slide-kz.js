/*
* jQuery Simple Gallery Plugin
* @author Zhussupov Zhassulan <zhzhussupovkz@gmail.com>
* @version: 1.0
* MADE IN KAZAKHSTAN
*/
(function ($){
	jQuery.fn.slideKz= function (options){

		var options = $.extend({
			control : 'manual',
			timer: 2000,
		},options);

		//begin make
		var make = function(){

			switch (options.control){

				//case auto
				case 'auto':{
					slide = $(this).find('a');
					var length = slide.length;

					first = $('#picture:first');
					for(var i = 1; i < length; i++)
					{
						first.append('<img src ="'+slide[i].href+'" width = "425" height = "202">');
					}
					$(this).find('a').remove();
					$(this).after('<div id ="start"><a href = "#">start</div>');

					$('#picture img').hide();
					$('#picture img:first').show();
					
					$('#start').click(function(){
						$('#picture img:gt(0)').hide();
						setInterval(function(){
							$('#picture :first-child').hide()
							.next('img').show()
							.end().appendTo('#picture');
						}, options.timer);
					});
				}//case auto

				//default
				default:{
					slide = $(this).find('a');
					slide.mouseover(function(){$(this).css('color', 'red')});
					slide.mouseout(function(){$(this).css('color', 'blue')});
					slide.click(function(event){
						$(this).css('color', 'red');
						$('#picture img').hide();
						$('#picture img').attr('src', $(this).attr('href'));
						$('#picture img').fadeIn(500);
						event.preventDefault();
					});
				}
			}//default
		};//end make

		return this.each(make);
	};
})(jQuery)
"use strict";
(function($){
	$.fn.UItoTop = function(options) {

 		var defaults = {
			text: '',
			min: 500,			
			scrollSpeed: 800,
  			containerID: 'toTop',
			containerHoverID: 'toTopHover',
			easingType: 'linear',
			min_width:parseInt($('body').css("min-width"),10),
			main_width:parseInt($('body').css("min-width"),10)/2
					
 		};

 		var settings = $.extend(defaults, options);
		var containerIDhash = '#' + settings.containerID;
		var containerHoverIDHash = '#'+settings.containerHoverID;
			
		$('body').append('<a href="#" id="'+settings.containerID+'">'+settings.text+'</a>');
		
		var button_width = parseInt($(containerIDhash).css("width"))+90;
		var button_width_1 = parseInt($(containerIDhash).css("width"))+20;
		var max_width = defaults.min_width+button_width;
		var margin_right_1 = -(defaults.main_width+button_width_1);
		var margin_right_2 = -(defaults.main_width-20);
		
		function top(){
			if(($(window).width()<=max_width)&&($(window).width()>=defaults.min_width))$(containerIDhash).stop().animate({marginRight:margin_right_2,right:'50%'})
			else if($(window).width()<=defaults.min_width)$(containerIDhash).stop().css({marginRight:0,right:10})
			else $(containerIDhash).stop().animate({marginRight:margin_right_1,right:'50%'})
		}
		top();
		$(containerIDhash).hide().click(function(){			
			$('html, body').stop().animate({scrollTop:0}, settings.scrollSpeed, settings.easingType);
			$('#'+settings.containerHoverID, this).stop().animate({'opacity': 0 }, settings.inDelay, settings.easingType);
			return false;
		})
		
		.prepend('<span id="'+settings.containerHoverID+'"></span>')
		.hover(function() {
				$(containerHoverIDHash, this).stop().animate({
					'opacity': 1
				}, 600, 'linear');
			}, function() { 
				$(containerHoverIDHash, this).stop().animate({
					'opacity': 0
				}, 700, 'linear');
			});
								
		$(window).scroll(function() {
			var sd = $(window).scrollTop();
			if(typeof document.body.style.maxHeight === "undefined") {
				$(containerIDhash).css({
					'position': 'absolute',
					'top': $(window).scrollTop() + $(window).height() - 50
				});
			}
			if ( sd > settings.min ) 
			{$(containerIDhash).css({display: 'block'});}
			else 
			{$(containerIDhash).css({display: 'none'});}
		});
		$(window).resize(function(){top();});
		$(document).ready(function () {

		$("a_abstract").hide();

		$("#btn1").click(function(){
			 $("#x1").toggle();
		});

		$("#btn2").click(function(){
			 $("#x2").toggle();
		});

		$("#btn3").click(function(){
			 $("#x3").toggle();
		});

		  $("#btn4").click(function(){
			 $("#x4").toggle();
		});

		$("#btn5").click(function(){
			 $("#x5").toggle();
		});

		  $("#btn6").click(function(){
			 $("#x6").toggle();
		});

		  $("#btn7").click(function(){
			 $("#x7").toggle();
		});

		$("#btn8").click(function(){
			 $("#x8").toggle();
		});
		$("#btn9").click(function(){
			 $("#x9").toggle();
		});
		$("#btn10").click(function(){
			 $("#x10").toggle();
		});
		 $("#btn11").click(function(){
			 $("#x11").toggle();
		});
		 $("#btn12").click(function(){
			 $("#x12").toggle();
		});
		 $("#btn13").click(function(){
			 $("#x13").toggle();
		});
			 $("#btn14").click(function(){
			 $("#x14").toggle();
		});
			 $("#btn15").click(function(){
			 $("#x15").toggle();
		});
			 $("#btn16").click(function(){
			 $("#x16").toggle();
		});
			 $("#btn17").click(function(){
			 $("#x17").toggle();
		});
			 $("#btn18").click(function(){
			 $("#x18").toggle();
		});
			 $("#btn19").click(function(){
			 $("#x19").toggle();
		});
			 $("#btn20").click(function(){
			 $("#x20").toggle();
		});
			 $("#btn21").click(function(){
			 $("#x21").toggle();
		});
			 $("#btn22").click(function(){
			 $("#x22").toggle();
		});
			 $("#btn23").click(function(){
			 $("#x23").toggle();
		});
			 $("#btn24").click(function(){
			 $("#x24").toggle();
		});
			 $("#btn25").click(function(){
			 $("#x25").toggle();
		});
			$("#btn26").click(function(){
			 $("#x26").toggle();
		});
			$("#btn27").click(function(){
			 $("#x27").toggle();
		});
			$("#btn28").click(function(){
			 $("#x28").toggle();
		});
			$("#btn29").click(function(){
			 $("#x29").toggle();
		});
			
			$("#l1").click(function(){
			 $("#t1").toggle();
		});
				$("#l2").click(function(){
			 $("#t2").toggle();
		});
				$("#l3").click(function(){
			 $("#t3").toggle();
		});
				$("#l4").click(function(){
			 $("#t4").toggle();
		});
				$("#l5").click(function(){
			 $("#t5").toggle();
		});
			$("#l6").click(function(){
			 $("#t6").toggle();
		});
				$("#l7").click(function(){
			 $("#t7").toggle();
		});
				$("#l8").click(function(){
			 $("#t8").toggle();
		});
				$("#l9").click(function(){
			 $("#t9").toggle();
		});
				$("#l10").click(function(){
			 $("#t10").toggle();
		});
			$("#l11").click(function(){
			 $("#t11").toggle();
		});
				$("#l12").click(function(){
			 $("#t12").toggle();
		});
				$("#l13").click(function(){
			 $("#t13").toggle();
		});
				$("#l14").click(function(){
			 $("#t14").toggle();
		});
				$("#l15").click(function(){
			 $("#t15").toggle();
		});
			$("#l16").click(function(){
			 $("#t16").toggle();
		});
				$("#l17").click(function(){
			 $("#t17").toggle();
		});
				$("#l18").click(function(){
			 $("#t18").toggle();
		});
				$("#l19").click(function(){
			 $("#t19").toggle();
		});
				$("#l20").click(function(){
			 $("#t20").toggle();
		});
			$("#l21").click(function(){
			 $("#t21").toggle();
		});
				$("#l22").click(function(){
			 $("#t22").toggle();
		});
				$("#l23").click(function(){
			 $("#t23").toggle();
		});
				$("#l24").click(function(){
			 $("#t24").toggle();
		});
				$("#l25").click(function(){
			 $("#t25").toggle();
		});
			$("#a1").click(function(){
			 $("#b1").toggle();
		});
			$("#a2").click(function(){
			 $("#b2").toggle();
		});
			$("#a3").click(function(){
			 $("#b3").toggle();
		});
			$("#a4").click(function(){
			 $("#b4").toggle();
		});
			$("#a5").click(function(){
			 $("#b5").toggle();
		});
			$("#a6").click(function(){
			 $("#b6").toggle();
		});
			$("#a7").click(function(){
			 $("#b7").toggle();
		});
			$("#a8").click(function(){
			 $("#b8").toggle();
		});
			$("#a9").click(function(){
			 $("#b9").toggle();
		});
			$("#a10").click(function(){
			 $("#b10").toggle();
		});
			$("#a11").click(function(){
			 $("#b11").toggle();
		});
			$("#a12").click(function(){
			 $("#b12").toggle();
		});
			$("#a13").click(function(){
			 $("#b13").toggle();
		});
			$("#a14").click(function(){
			 $("#b14").toggle();
		});
			$("#a15").click(function(){
			 $("#b15").toggle();
		});
			$("#a16").click(function(){
			 $("#b16").toggle();
		});
			$("#a17").click(function(){
			 $("#b17").toggle();
		});	
			
});
};
})(jQuery);

$(window).load(function(){$().UItoTop({easingType: 'easeOutQuart'});});




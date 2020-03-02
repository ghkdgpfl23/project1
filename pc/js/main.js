$(function(){
	$("#GNB").hover(
		function(){
			$("#header .menu").addClass("over");
		},
		function(){
			$("#header .menu").removeClass("over");
		}
	);

	$("#GNB > ul > li:first-child > a").focusin(function(){
		$(this).parents(".menu").addClass("over");
	});
	$("nav li:last-child li:last-child").focusout(function(){
		$(this).parents(".menu").removeClass("over");
	});

	$("#GNB > ul > li > a").focusin(function(){
		$(this).addClass("over");
	});
	$("#GNB li li:last-child").focusout(function(){
		$(this).parent().prev("a").removeClass("over");
	});


	$(".main_notice .main_tab li a").eq(0).addClass("active");
	$(".main_notice .desc_group div").eq(0).addClass("active");

	var n=0;

	$(".main_notice .main_tab li a").click(function(e){
		e.preventDefault();
		n=$(this).parent().index();
		$(".main_notice .main_tab li a").removeClass("active");
		$(this).addClass("active");
		$(".main_notice .desc_group div").removeClass("active");
		$(".main_notice .desc_group div").eq(n).addClass("active");
	});


	var n1=0;
	var listName="";
	var titleName="";

	$(".select dl dt a").click(function(e){
		e.preventDefault();
		$(this).parent().next("dd").slideToggle(300);
	});
	$(".select dl dd a").click(function(e){
		e.preventDefault();
		var $parentDl=$(this).parents("dl");
		listName=$(this).text();

		$parentDl.find("dd a").removeClass("on");
		$(this).addClass("on");

		$parentDl.find("dt a").html(listName+"<span></span>");
		$parentDl.find("dd").slideUp(300);

		titleName=$parentDl.attr("class");
		var strArray=titleName.split("_"); // ["sel", "local"]
		var $currentSelect=$("."+strArray[1]);

		n1=$(this).parent().index();
		$currentSelect.find("option").prop("selected", false);
		$currentSelect.find("option").eq(n1+1).prop("selected", true);
	});



	$(".main_center .select .sel_local li:last-child > a").focusout(function(){
		$(this).parent().parent().parent().slideUp(300);
	});

	$(".main_center .select .sel_center li:last-child > a").focusout(function(){
		$(this).parent().parent().parent().slideUp(300);
	});



	//bottom_slider
	var n2=0;
	var pos=0;

	$(".controlls_1 li").click(function(e){
		e.preventDefault();

		n2=$(this).index();
		pos=n2 * -1 * 368;

		$(".promotion_wrap ul").css({"left" : pos});


		$(".controlls_1 li a").removeClass("active");
		$(this).find("a").addClass("active");
	});


	var w=180;
	var amount=0;

	$(".prev").click(function(e){
		e.preventDefault();
		leftMoving();
	});
	$(".next").click(function(e){
		e.preventDefault();
		rightMoving();
	});

	function leftMoving(){
		amount-=w;
		$(".site_wrapper ul").animate({left:amount}, 500, function(){
			$(this).append($(".site_wrapper ul li:first-child"));
			amount+=w;
			$(this).css({left:amount});
		});
	}
	function rightMoving(){
		$(".site_wrapper ul").prepend($(".site_wrapper ul li:last-child"));
		amount-=w;
		$(".site_wrapper ul").css({left:amount});
		amount+=w;
		$(".site_wrapper ul").animate({left:amount}, 500);
	}

});

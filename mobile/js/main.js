$(function(){
	$(".close").click(function(e){
		e.preventDefault();
		if($("input[name=todayClose]").is(":checked")){
			setCookie("close", "yes", 1);
		}
		$(".popup").fadeOut(200);
		$(".pop_dim").removeClass("active");
		$("body").removeClass("fixed");
	});

	if(GetCookie("close") == "yes"){
	}
	else{
		$(".popup").fadeIn(200);
		$(".pop_dim").addClass("active");
		$("body").addClass("fixed");
	}

	function setCookie(name, value, expiredays){
		var days=expiredays;
		if(days){
			var date=new Date();
			date.setTime(date.getTime()+(days*24*60*60*1000));
			var expires="; expires="+date.toGMTString();
		}
		else{
			var expires="";
		}
		document.cookie=name+"="+value+expires+"; path=/";
	}
	function GetCookie(name){
		var value=null, search=name+"=";
		if(document.cookie.length > 0){
			var offset=document.cookie.indexOf(search);
			if(offset != -1){
				offset+=search.length;
				var end=document.cookie.indexOf(";", offset);
				if(end == -1) end=document.cookie.length;
				value=unescape(document.cookie.substring(offset, end));
			}
		} return value;
	}
	


	$("#header .upper .tab").click(function(e){
		e.preventDefault();
		$(".dim").addClass("active");
		$("#GNB").addClass("active");
		$("body").addClass("fixed");
	});
	$("#GNB .tab_1").click(function(e){
		e.preventDefault();
		$(".dim").removeClass("active");
		$("#GNB").removeClass("active");
		$("#GNB > ul > li").removeClass("active");
		$("#GNB > ul > li").find("ul").slideUp(300);
		$("body").removeClass("fixed");
	});
	$("#GNB > ul > li").click(function(e){
		e.preventDefault();
		if($(this).hasClass("active") == false){
			$("#GNB > ul > li").removeClass("active");
			$(this).addClass("active");
			$("#GNB ul ul").slideUp(300);
			$(this).find("ul").slideDown(300);
		}
		else{
			$(this).removeClass("active");
			$(this).find("ul").slideUp(300);
		}
	});	
});

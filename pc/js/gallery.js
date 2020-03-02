$(function(){
	//var n=0;
	//var targetx=0;

	//$(".controlls li").click(function(e){
		//e.preventDefault();
		//n=$(this).index();
		//targetx=n * -1 * 100;
		//$(".gallery ul").css({"left" : targetx+"%"});

		//$(".controlls li").removeClass("active");
		//$(this).addClass("active");
	//});

	var n=0;
	var pos=0;

	$(".controlls li").eq(0).find("a").addClass("active");
	$(".gallery_moving li").eq(0).addClass("active");

	$(".controlls li").click(function(e){
		e.preventDefault();
		n=$(this).index();
		// console.log(n);

		$(".controlls li a").removeClass("active");
		$(".controlls li").eq(n).find("a").addClass("active");

		$(".gallery_moving li").removeClass("active");
		$(".gallery_moving li").eq(n).addClass("active");
	});

	setInterval(function(){
		if(n < 4){ // if(n < �ִ���){ n++; }
			n=n+1;
		}
		else{ // else{ n=�ּڰ�; }
			n=0;
		}
		//console.log(n);

		$(".controlls li a").removeClass("active");
		$(".controlls li").eq(n).find("a").addClass("active");
		$(".gallery_moving li").removeClass("active");
		$(".gallery_moving li").eq(n).addClass("active");
	}, 4000);
});

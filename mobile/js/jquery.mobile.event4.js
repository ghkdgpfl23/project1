(function($){
	$.fn.mobileDragEvent4=function(options){
		options=$.extend({
			total: 10,
			bannerw: 300
		}, options);

		return this.each(function(){
			var $keyvisual=$(this); // 이벤트 대상입니다.
			var $total=$(options.total)[0]; // 갤러리의 개수를 지정할 변수입니다.
			var $bannerw=$(options.bannerw)[0]; // 배너 가로 크기 변수입니다.
			var w; // 윈도우의 가로 크기를 지정하는 변수입니다.
			var amount=0; // 배너 위치 변수입니다.
			var canmove=0; // 움직임이 가능한 회수를 점검하는 변수입니다.
			var moving=false; // 움직이고 있는 상황을 점검하는 변수입니다.
			var edge=0; // 여백 크기 변수입니다.
			var xDown=null; // x 좌표의 클릭 위치 변수입니다.
			var yDown=null; // y 좌표의 클릭 위치 변수입니다.

			$(window).resize(function(){
				$keyvisual.css({width:$bannerw*$total});
				var initw=$keyvisual.width(); // 배너 공간의 가로 크기 지역변수입니다.
				var marginw=initw-$(this).width(); // 배너 공간의 크기와 윈도우 크기의 차이 지역변수입니다.

				if(marginw >= 0){ // 윈도우의 크기보다 배너 공간의 크기가 클 경우입니다.
					if(marginw >= $bannerw){ // 하나 이상의 이동이 가능할 경우입니다.
						canmove=Math.ceil(marginw/$bannerw);
						edge=initw-$bannerw*(canmove-1);
						edge=edge%$(this).width();
					}
					else{
						canmove=1;
						edge=initw%$(this).width();
					}
				}
				// console.log("slide width : "+initw+", window width : "+$(this).width());
				// console.log("canmove : "+canmove+", edge : "+edge);
			});
			$(window).trigger("resize");

			mobileDrag($keyvisual, amount, $bannerw, edge);

			function mobileDrag(target, amt, x1, x2){
				target.on("touchstart", function(e){
					var evt=e.originalEvent;
					xDown=evt.touches[0].clientX;
					yDown=evt.touches[0].clientY;
				});
				target.on("touchmove", function(e){
					var evt=e.originalEvent;
					e.stopPropagation();
					$target=$(this);

					if(!xDown || !yDown || moving){
						return;
					}

					var xUp=evt.touches[0].clientX;
					var yUp=evt.touches[0].clientY;
					var xDiff=xDown-xUp;
					var yDiff=yDown-yUp;

					if(Math.abs(xDiff) > Math.abs(yDiff)){
						if(xDiff > 0){
							// left swipe
							if(amt < canmove){
								moving=true;
								amt++;

								if(amt != canmove){
									$(this).css({left:amt*x1*(-1)});
								}else{
									$(this).css({left:"-="+x2+"px"});
								}
							}
						}else{
							// right swipe
							if(amt > 0){
								moving=true;
								amt--;

								if(amt != 0){
									$(this).css({left:amt*x1*(-1)});
								}else{
									$(this).css({left:0});
								}
							}
						}
					}else{
						if(yDiff > 0){
							// up swipe
						}else{
							// down swipe
						}
					}

					// reset values
					xDown=null;
					yDown=null;
				});
				target.on("transitionend", function(){
					moving=false;
				});
			}
		});
	}
})(jQuery);
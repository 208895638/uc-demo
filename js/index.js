$(function(){
	var index={
		i:4,
		init:function(){
			this.bindEvent();
		},
		bindEvent:function(){
			var that=this;
			$(".page h3").on("click",function(){
				var left=$('.hehe').offset().left;
				var w=130.5;
				var ulL=$("ul").offset().left;
				
				console.log(ulL,that.i);
				if(left>=654.5){
					that.i++;
					$("ul").stop().animate({"left":ulL-179.5})
				}else{
					$('.hehe').stop().animate({"left":left + w})
				}
				
			})
			$(".page h2").hover(function(){
				var left=$('.hehe').offset().left;
				var ulL=$("ul").offset().left;
				console.log(ulL)
			})
			$(".page h2").on("click",function(){
				var left=$('.hehe').offset().left;
				var w=179.5;
				var ulL=$("ul").offset().left;
				console.log(left);
				if(left<=34.5){
					if(ulL<34.5){
						$("ul").stop().animate({"left":ulL+130.5})
					}else{
						
					}
					
				}else{
					$('.hehe').stop().animate({"left":left - w})
				}
				
			})
		},
		render:function(){
			var that=this;
			
		}
	};
	index.init();
})
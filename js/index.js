// 鼠标滚动，导航栏固定在顶部
	$(window).scroll(function () {
      var pos = $(window).scrollTop();
    if (pos > 0) {
        $('.nav-menu').addClass('navbar-fixed-top');
    }else{
     $('.nav-menu').removeClass('navbar-fixed-top');
    }
});

   // 选项卡
		$('[data-submenu]').submenupicker();
		$(function() {
		  // Dropdown fix
		  $('.dropdown > a[tabindex]').keydown(function(event) {
		    // 13: Return

		    if (event.keyCode == 13) {
		      $(this).dropdown('toggle');
		    }
		  });
		  $('.dropdown-submenu > a').submenupicker();
		});
//	
   // 轮播图
var counttime = 0;
setInterval(function(){
var time = new Date(); 
var seconds = parseInt(time / 1000 % 60);
//显示出时间秒数-seconds
console.log(seconds);
//每20秒自动换一次图 
if(seconds==0 || seconds==5 || seconds==10){
counttime++;
/*            
 * 当图片切换至最后一张图的时候，调回至最后一张            * */
if($(".active").index() == $(".slider li").length-1){ 
counttime = 0;
$(".slider li").eq(counttime).fadeIn().siblings("li").fadeOut();
$(".slider .slider-dot .slider-i").eq(counttime).addClass("active").siblings().removeClass("active");
} else {
$(".slider li").eq(counttime).fadeIn().siblings("li").fadeOut();
$(".slider .slider-dot .slider-i").eq(counttime).addClass("active").siblings().removeClass("active");
} 
}        
console.log(":" + $(".active").index());    }, 1000);
$(function(){
	var count = 0;
	$(".arrow-right").click(function(){
		count++;
/* 如果图片到头了,返回第一张图片  */         
if(count == $(".slider li").length) {
	count = 0;
}
console.log(count);
/* 让count渐渐的显示，其他兄弟渐渐的隐藏         * */
$(".slider li").eq(count).fadeIn().siblings("li").fadeOut();
/*         * 让i图标随着右slider切换键而切换         *         * */
$(".slider .slider-dot .slider-i").eq(count).addClass("active").siblings().removeClass("active");        });
$(".arrow-left").click(function () { 
count--;   
/*            * 如果是在第一张图片左翻，则count = length - 1            * */ 
if(count == -1){                count = $(".slider li").length - 1;            } 
console.log(count); 
//让count渐渐的显示，其他兄弟渐渐的隐藏
$(".slider li").eq(count).fadeIn().siblings("li").fadeOut();
/*             * 让i图标随着左slider切换键而切换             *             * */
$(".slider .slider-dot .slider-i").eq(count).addClass("active").siblings().removeClass("active");         });
$(".slider .slider-dot .slider-i").click(function(){ 
//打印出点击的i的索引
//console.log($(this).index());
var id = $(this).index();
$(".slider li").eq(id).fadeIn().siblings("li").fadeOut();
$(".slider .slider-dot .slider-i").eq(id).addClass("active").siblings().removeClass("active");
});
});

// 选项卡《高考说周刊》
  $(function(e){
	$(".select-card ul li").click(function(){
	 var i = $(this).index();
	 $(this).addClass("li").siblings().removeClass("li");
	 $(".image .main>li").eq(i).fadeIn(200).addClass("first").siblings().fadeOut(0).removeClass("first");
	});
});
 
// 高考报考
  $(function(e){
    $(".Tools-cabinet .middle li").click(function(){
      var i = $(this).index();
      $(this).addClass("li").siblings().removeClass("li");
      $(".right>ul>li").eq(i).addClass("first").siblings().removeClass("first");
    });
});

// 高考备考
  $(function(e){
  	$(".For-reference .topic .ON1 ul>li").click(function(){
  	  var i = $(this).index();
  	  $(this).addClass("li").animate().siblings().removeClass("li");
  	  $(".second>ul>li").eq(i).addClass("first").siblings().removeClass("first");
  	});
});

// 友情链接推荐
  $(function(e){
  	$(".Firendship-connection .nav ul li").click(function(){
  	  var i = $(this).index();
  	  $(this).addClass("li").siblings().removeClass("li");
  	  $(".Firendship-connection .second .main>ul>li").eq(i).addClass("tou").siblings().removeClass("tou");
  	});
  });

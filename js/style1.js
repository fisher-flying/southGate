/*
* @Author: pc
* @Date:   2019-12-26 14:44:21
* @Last Modified by:   pc
* @Last Modified time: 2019-12-26 14:53:08
*/
//站点自定义javascript放到本文件
$(document).ready(function($) {
    var wWidth = $(document).width();
    var wHeight = $(document).height();
	// mobile导航
    $('.menuBtn').click(function(e) {
        $(this).toggleClass('on');
        $('.nav').stop().slideToggle();
        e.stopPropagation();
    });
    if(wWidth < 959){
        $(document).on('click',function (event) {
            var theEvent  =   event || window.event;
            var srcElement  = theEvent.target || theEvent.srcElement;
            if (!$(srcElement).hasClass('.nav') && !$(srcElement).parents().is('.nav')) {
                $('.menuBtn').removeClass('on');
                $('.nav').stop().slideUp();
            }
        });
    }
    
})
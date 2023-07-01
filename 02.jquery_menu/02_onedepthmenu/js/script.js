const menu=$('#nav>li');

menu.hover(function(){
    let tg=$(this);
    let onImg=tg.find('.text-imgae>.on');
    let offImg=tg.find('.text-imgae>.off');
    let menuImage=tg.find('.menu-image');
    let imageHeight=tg.find('.menu-image img').innerHeight();
    //console.log(imageHeight)

    onImg.css('display','block');
    offImg.css('display','none');
    menuImage.stop().animate({height: imageHeight},500)

},function(){

    let tg=$(this);
    let onImg=tg.find('.text-imgae>.on');
    let offImg=tg.find('.text-imgae>.off');
    let menuImage=tg.find('.menu-image');
    let imageHeight=0;
    //console.log(imageHeight)

    onImg.css('display','none');
    offImg.css('display','block');
    menuImage.stop().animate({height: imageHeight},500)
})


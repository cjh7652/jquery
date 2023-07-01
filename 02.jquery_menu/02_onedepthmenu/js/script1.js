const menu=$('#nav>li');

menu.hover(function(){
    close();
    let tg=$(this);
    let onImg=tg.find('.text-imgae>.on');
    let offImg=tg.find('.text-imgae>.off');
    let menuImage=tg.find('.menu-image');
    let imageWidth=tg.find('.menu-image img').innerWidth();
  console.log(imageWidth)

    onImg.css('display','block');
    offImg.css('display','none');
    menuImage.stop().animate({width: imageWidth},500)

},function(){

    let tg=$(this);
    let onImg=tg.find('.text-imgae>.on');
    let offImg=tg.find('.text-imgae>.off');
    let menuImage=tg.find('.menu-image');
    let imageWidth=0;
    //console.log(imageHeight)

    onImg.css('display','none');
    offImg.css('display','block');
    menuImage.stop().animate({width: imageWidth},500)
    open();

})

open();
function open(){
    let tg=$('#nav > li').eq(2);
    let onImg=tg.find('.text-imgae>.on');
    let offImg=tg.find('.text-imgae>.off');
    let menuImage=tg.find('.menu-image');
    let imageWidth=tg.find('.menu-image img').innerWidth();
    onImg.css('display','block');
    offImg.css('display','none');
    menuImage.stop().animate({width: imageWidth},500)
}

function close(){
    let tg=$('#nav > li').eq(2);
    let onImg=tg.find('.text-imgae>.on');
    let offImg=tg.find('.text-imgae>.off');
    let menuImage=tg.find('.menu-image');
    let imageWidth=0;
    //console.log(imageHeight)

    onImg.css('display','none');
    offImg.css('display','block');
    menuImage.stop().animate({width: imageWidth},500)
}


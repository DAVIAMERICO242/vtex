$(document).ready(function(){
    const widths = []
    $('.discount').each((i,e)=>{
        widths.push($(e).width())
    });

    const Max = Math.max(...widths)

    $('.discount.current').css('opacity',1)


    $('.discount').each((i,e)=>{
        $(e).width(Max+30) 
    });

    var int = setInterval(() => {
        $('.Arrow.right').click()
        
    }, 3000);

    $(document).on('click','.Arrow.right',()=>{
        var current = $('.discount.current');
        var next = current.next('.discount');
        if(next.length){
            current.css('transform', 'translateX(-30px)');
            setTimeout(function() {
                current.removeClass('current');
                next.addClass('current');
                current.css('transform', 'translateX(0px)');
            }, 300); // T
        }else{
            var first = $('.discount').eq(0);
            current.css('transform', 'translateX(-30px)');
            setTimeout(() => {
                current.removeClass('current');
                first.addClass('current');
                current.css('transform', 'translateX(0px)');
            }, 300);
        }
    })

    $(document).on('click','.Arrow.left',()=>{
        var current = $('.discount.current');
        var prev = current.prev('.discount');
        if(prev.length){
            current.css('transform', 'translateX(30px)');
            setTimeout(function(){
                current.removeClass('current')
                prev.addClass('current')
                current.css('transform', 'translateX(0px)');
            },300)
        }else{
            var last = $('.discount').eq($('.discount').length-1)
            current.css('transform', 'translateX(-30px)');
            setTimeout(() => {
                current.removeClass('current')
                last.addClass('current')
                current.css('transform', 'translateX(0px)');
            },300);
        }
    })
}
)



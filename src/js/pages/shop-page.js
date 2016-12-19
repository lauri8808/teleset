$(document).ready(function(){
    $loadmoreBtn = $('.load-more-shop-items');
    $shopCol = $('.shop-item-column');
    $showPopupBtn = $('.show-all-info');
    $shopPageWrap = $('.shop-page');

    $loadmoreBtn.on('click', function() {
        if ($shopCol.find('.shop-item.hidden').length > 1) {
            $shopCol.find('.shop-item.hidden').eq(0).removeClass('hidden');
        } else if ($shopCol.find('.shop-item.hidden').length === 1) {
            $shopCol.find('.shop-item.hidden').eq(0).removeClass('hidden');
            $(this).remove();
        }
    });

    $showPopupBtn.on('click', function() {
        $(this).next().next().addClass('show');
        $shopPageWrap.addClass('show-shop-popup');
    })

    $('.close-popup').on('click', function(){
        $(this).closest('.shop-item-popup').removeClass('show');
        $shopPageWrap.removeClass('show-shop-popup');
    })
});
$('.slider').each(function() {
    var $this = $(this);
    var $group = $this.find('.slideGroup');
    var $slides = $('.slide');
    var buttonArray = [];
    var currentIndex = 0;
    var timeout;

    function move(newIndex) {
        console.log(newIndex);
        var animateLeft, slideLeft;

        advance();

        if($group.is(':animated') || currentIndex  === newIndex) {
            return;
        }

        buttonArray[currentIndex].removeClass('active');
        buttonArray[newIndex].addClass('active');

        if(newIndex > currentIndex) {
            slideLeft = '100%';
            animateLeft = '-100%';
        } else {
            slideLeft = '-100%';
            animateleft = '100%';
        }

        $slides.eq(newIndex).css({left: slideLeft, display: 'block'});
        $group.animate({left: animateLeft}, function() {
            $slides.eq(currentIndex).css({display: 'none'});
            $slides.eq(newIndex).css({left: 0});
            $group.css({left: 0});
            currentIndex = newIndex;
        });
    } 

    function advance() {
        console.log($slides.length);
        clearTimeout(timeout);
        timeout = setTimeout(function() {
            if(currentIndex < ($slides.length - 1)) {
                move(currentIndex + 1);
            } else {
                move(0);
            }
        }, 5000);
    }

    $.each($slides, function(index) {
        var $button  = $('<button type="button" class="slide-btn">&bull;</button>');
        if(index === currentIndex) {
            $button.addClass('active');
        }
        $button.on('click', function() {
            move(index);
        }).appendTo($this.find('.slideButtons'));
        buttonArray.push($button);
    });

    advance();
});

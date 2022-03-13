$(document).ready(function () {

    // Typed.js Start
    let typed = new Typed(".typed-text", {
      strings: [" Wai Phyo Aung", "a Web Developer"],
      typeSpeed: 80,
      backSpeed: 80,
      loop: true,
    });

    $(window).scroll(function (){
        let currentPosition = $(this).scrollTop();
        if (currentPosition < 245){
            $(".site-nav").removeClass("site-nav-scroll")
        }else {
            $(".site-nav").addClass("site-nav-scroll")
        }
    })

    $(".menu-btn").click(function (){
        console.log("hi")
        $(".sidemenu").animate({right:0})
    })

    $(".close-icon").click(function () {
        $(".sidemenu").animate({right: "-100%"})
    })

    $('.sidemenu-item').click(function(){
        $(".sidemenu").animate({right: "-100%"})
    })

    //progress bar animate//
    let ProWey = $('.skill-progress');
    if (ProWey.length > 0) {
        ProWey.waypoint(function () {
            // element
            $('.skill-bar').each(function() {
                $(this).find('.progress-content').animate({
                    width:$(this).attr('data-percentage')
                },2000);

                $(this).find('.progress-mark').animate(
                    {left:$(this).attr('data-percentage')},
                    {
                        duration: 2000,
                        step: function(now) {
                            let data = Math.round(now);
                            $(this).find('.percent').html(data + '%');
                        }
                    });

            });
        }, {offset: '90%'});
    }

    
    // init Isotope
    let iso = new Isotope( '.grid', {
        itemSelector: '.element-item',
        layoutMode: 'fitRows'
    });
    
    // filter functions
    let filterFns = {
      // show if name ends with -ium
      ium: function( itemElem ) {
        let name = itemElem.querySelector('.name').textContent;
        return name.match( /ium$/ );
      }
    };
    
    // bind filter button click
    let filtersElem = document.querySelector('.filters-button-group');
    filtersElem.addEventListener( 'click', function( event ) {
      // only work with buttons
      if ( !matchesSelector( event.target, '.button' ) ) {
        return;
      }
      let filterValue = event.target.getAttribute('data-filter');
      // use matching filter function
      filterValue = filterFns[ filterValue ] || filterValue;
      iso.arrange({ filter: filterValue });
    });
    
    // change is-checked class on buttons
    let buttonGroups = document.querySelectorAll('.button-group');
    for ( let i=0, len = buttonGroups.length; i < len; i++ ) {
      let buttonGroup = buttonGroups[i];
      radioButtonGroup( buttonGroup );
    }
    function radioButtonGroup( buttonGroup ) {
      buttonGroup.addEventListener( 'click', function( event ) {
        // only work with buttons
      //   if ( !matchesSelector( event.target, '.button' ) ) {
      //     return;
      //   }
      //   buttonGroup.querySelector('.is-checked').classList.remove('is-checked');
      //   event.target.classList.add('is-checked');

      });
    }

    // isotope menu
    let ProjMli = $('.portfolio-nav a');
    ProjMli.on('click', function(){
    ProjMli.removeClass("is-checked");
      $(this).addClass("is-checked");        
    });
    
    

    /*
      ONE PAGE NAVIGATE
    ================================== */
    let OnePNav = $('.onepage-nev');
    let top_offset = OnePNav.height();
    OnePNav.onePageNav({
      scrollOffset: top_offset,
      currentClass: 'active',
      scrollSpeed: 100,
    });

    /* blog image hover */
    $(".hover").mouseleave(
      function () {
        $(this).removeClass("hover");
      }
    );

    new WOW().init();


});

$(window).on("load",function (){
  $(".loader-container").fadeOut(500,function (){
      $(this).remove()
  })
});


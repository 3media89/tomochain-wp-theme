'use strict'

var tomochain

(
    function() {
        tomochain = (
            function () {
                return {
                    init: function () {
                        this.blog();
                        this.blog_filter();
                        this.header();
                        this.imageCarousel();
                        this.langSwitcher();
                        this.mainMenu();
                        this.mobileMenu();
                        this.roadmap();
                        this.sendgrid();
                        this.team();
                        this.testnet();
                        this.tomo_lottie();
                        this.video();
                        this.event();
                        this.tab_active();
                    }
                }
            }()
        )
    }
)(jQuery);
//@include('blog.js')
//@include('event.js')
//@include('header.js')
//@include('image-carousel.js')
//@include('lang-switcher.js')
//@include('main-menu.js')
//@include('roadmap.js')
//@include('mobile-menu.js')
//@include('sendgrid.js')
//@include('team.js')
//@include('testnet.js')
//@include('tomo_lottie.js')
//@include('video.js')
jQuery (document).ready(function() {
    tomochain.init()
})

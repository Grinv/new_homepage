import $ from 'jquery';
import 'fullpage.js/dist/jquery.fullPage.js';
// import 'fullpage.js';
// export for others scripts to use
// window.$ = $;
// window.jQuery = jQuery;

$("#preload-box i").delay(10).fadeIn(2000);
$('#fullpage').fullpage({
  anchors: ['main', 'about', 'portfolio', 'contacts'],
  menu: "#menu",
  loopBottom: true,
  afterLoad: function(link, index) {
    if ($(".section.active .wrapper").hasClass('novisible') && index !== 1) {
      $(".section.active .wrapper").delay(2000).removeClass("novisible").addClass('visible animate__animated animate__fadeIn');
      $(".section.active .scrollDown").fadeIn(2000);
      if (index === 4) {
        return $("#links").removeClass("novisible").addClass('visible animate__animated animate__fadeIn');
      }
    }
  },
  afterRender: function() {
    $(".wrapper, #links").addClass('novisible');
    $(".section.active .wrapper, .section.active .scrollDown").fadeOut();
    return $(window).ready(function() {
      $("#preload-box").delay(1000).fadeOut('slow');
      $(".section.active .wrapper").delay(1500).removeClass("novisible").fadeIn(3000);
      return $(".section.active .scrollDown").delay(1000).fadeIn(6000);
    });
  }
});
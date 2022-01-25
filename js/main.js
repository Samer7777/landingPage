let section = document.querySelector(".icon_counter");
let started = false; // Function Started ? No
window.onscroll = function () {
  if (window.scrollY >= section.offsetTop - 250) {
    if (!started) {
      $(".num").each(function () {
        var $this = $(this),
          countTo = $this.attr("data-goal");

        $({
          countNum: $this.text(),
        }).animate(
          {
            countNum: countTo,
          },

          {
            duration: 2000,
            easing: "linear",
            step: function () {
              $this.text(commaSeparateNumber(Math.floor(this.countNum)));
            },
            complete: function () {
              $this.text(commaSeparateNumber(this.countNum));
              //alert('finished');
            },
          }
        );
      });

      function commaSeparateNumber(val) {
        while (/(\d+)(\d{3})/.test(val.toString())) {
          val = val.toString().replace(/(\d+)(\d{3})/, "$1" + "," + "$2");
        }
        return val;
      }
    }
    started = true;
  }
};

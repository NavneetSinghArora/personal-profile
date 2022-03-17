$(document).on('click', function (e) {
     if ($("div").hasClass("navbar-collapse collapse show") == true) {
        $('.navbar-collapse').collapse('hide');
     }
 });
$(document).ready(function () {
    $("button#toggle_button_overlap.navbar-toggler.btn-sm").hide()
})

$(document).click(function(event) {
    var text = $(event.target).text();
    console.log(event.target.readyState)
});

function toggle() {
    $("button#toggle_button_overlap.navbar-toggler.btn-sm").show()
    $("button#toggle_button.navbar-toggler.btn-sm").hide()

    let element = document.querySelector("button#toggle_button_overlap.navbar-toggler.btn-sm");
    let hidden = element.getAttribute("hidden");

    if (hidden) {
       element.removeAttribute("hidden");
    }

}

function retoggle() {
    $('.navbar-collapse').collapse('hide');
    $("button#toggle_button.navbar-toggler.btn-sm").show()
    $("button#toggle_button_overlap.navbar-toggler.btn-sm").hide()

    let element = document.querySelector("button#toggle_button_overlap.navbar-toggler.btn-sm");
    let hidden = element.getAttribute("hidden");

    if (!hidden) {
       element.setAttribute("hidden", "hidden");
    }
}

$(document).ready(function() {
  $('#mailbutton').click(function(event) {
    window.location = "mailto:navneetsingharora@web.de";
  });
});

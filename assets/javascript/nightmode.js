if (localStorage.getItem("preferences") != null) {
  getPreferences = localStorage.preferences;
  $("html, body, a").addClass('nightmode');
}
$(document).ready(function() {
  $("i.toggle-light").click(function(){
    getPreferences = localStorage.preferences;
    $("html, body, a").toggleClass('nightmode');
    if ($("html, body, a").hasClass('nightmode')) {
      localStorage.setItem('preferences', 'nightmode');
    }
    else {
      localStorage.removeItem('preferences');
    }
  });
});

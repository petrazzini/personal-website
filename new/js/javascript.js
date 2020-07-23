$(document).ready(function () {
  $("a[href^=mailto]").addClass("mailto-link");
  var mailto = $(".mailto-link");
  var messageCopy = "Copy to clipboard";
  var messageSuccess = "Email copied!";
  mailto.append(
    '<span class="mailto-message" style="transition: ease 0.4s;"></span>'
  );
  $(".mailto-message").append(messageCopy);
  $("a[href^=mailto]").click(function () {
    return false;
  });
  mailto.click(function () {
    var href = $(this).attr("href");
    var email = href.replace("mailto:", "");
    copyToClipboard(email);
    $(".mailto-message").empty().append(messageSuccess);
    setTimeout(function () {
      $(".mailto-message").empty().append(messageCopy);
    }, 2e3);
  });
});

function copyToClipboard(text) {
  var dummy = document.createElement("input");
  document.body.appendChild(dummy);
  dummy.setAttribute("value", text);
  dummy.select();
  document.execCommand("copy");
  document.body.removeChild(dummy);
}

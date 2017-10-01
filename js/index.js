function runSearch() {
  event.preventDefault();
  var wikiData = document.getElementsByName("wiki-search")[0].value;

  var wikiURL =
    "https://en.wikipedia.org/w/api.php?action=opensearch&search=" +
    wikiData +
    "&format=json&origin=*";

  $.ajax({
    type: "GET",
    url: wikiURL,
    async: false,
    dataType: "json",
    success: function(data) {
      console.log(data);
      $("#search-text").html("");
      for (i = 0; i < data[1].length; i++) {
        $("#search-text").append(
          '<a target="blank" href=' +
            data[3][i] +
            ">" +
            '<div class="temp"><h2>' +
            data[1][i] +
            "</h2>" +
            "<p>" +
            data[2][i] +
            "</p></div></a>"
        );
      }
    }
  });
}
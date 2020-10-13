// // Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
  $(".change-devoured").on("click", function(event) {
    var id = $(this).data("id");
    var devouredId = $(this).data("newdevoured");
console.log(devouredId)
    var newBurgerId = {
      devoured: devouredId
    };

    // Send the PUT request.
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: newBurgerId
    }).then(
      function() {
        console.log("changed devoured to", newBurgerId);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });
});

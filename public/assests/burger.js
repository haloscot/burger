$(function () {
  $(".createBurger-Form").on("submit", function (event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();

      var newBurger = {
          burger_name: $("#newBurger").val().trim(),
          devoured: 0
      };
      $.ajax("/api/burger", {
          type: "POST",
          data: newBurger
      }).then(
          function () {
              console.log("created new Burger");
              // Reload the page to get the updated list
              location.reload();
          }
      );
  })

  $(".eatBurger").on("click", function (event) {
      event.preventDefault();
      var id = $(this).data("id");
      var devouredStat = {
          devoured: 1
      }
      $.ajax("/api/burger/" + id, {
          type: "Put",
          data: devouredStat
      }).then(
          function () {
              console.log(" Burger devoured");
              // Reload the page to get the updated list
              location.reload();
          }
      );
  })

})

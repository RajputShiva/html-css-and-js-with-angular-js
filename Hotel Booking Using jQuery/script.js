$(document).ready(function () {
  
  // Heart logic
  $("#heart1").on("click", function () {
      $(this).css("color", "red");
  });

  $("#heart1").on("dblclick", function () {
      $(this).css("color", "white");
  });

  // Room count logic
  let roomCount = 9;

  function incrementRoom() {
      if (roomCount < 9) {
          roomCount++;
      }
      $('#p2').text(roomCount + " rooms left");
  }

  function decrementRoom() {
      if (roomCount > 0) {
          roomCount--;
      }
      $('#p2').text(roomCount + " rooms left");
  }

  $(".increment-button").on("click", function () {
      let value = parseInt($(this).closest("div").find('.counter').text());
      if (value < 3) {
          $(this).closest("div").find('.counter').text(value + 1);
          decrementRoom();
      }
  });

  $(".decrement-button").on("click", function () {
      let value = parseInt($(this).closest("div").find('.counter').text());
      if (value > 0) {
          $(this).closest("div").find('.counter').text(value - 1);
          incrementRoom();
      }
  });

  // Discount logic
  $("#discount").on("click", function () {
      $(".top, .bottom").addClass("hidden"); // Hide top and bottom
      $("h5").removeClass("price"); // remove price class
      updatePrice("#price1", "10,500");
      updatePrice("#price2", "11,250");
      updatePrice("#price3", "12,750");
  });

  $("#discount").on("dblclick", function () {
      $(".top, .bottom").removeClass("hidden"); // Unhide top and bottom
      $("h5").addClass("price"); // add price class
      updatePrice("#price1", "14,000");
      updatePrice("#price2", "15,000");
      updatePrice("#price3", "17,000");
  });

  // Price update logic
  function updatePrice(id, val) {
      $(id).text("₹ " + val + "/night");
  }

  $("#price1, #price2, #price3").on("click", function () {
      updatePrice(this, "10,500");
  });

  $("#price1, #price2, #price3").on("dblclick", function () {
      updatePrice(this, "14,000");
  });
});
// JavaScript Document
let timero = 1;
let timerx = 1;
let tO;
let tX;

$(document).ready(function() {
  $("#btn-start").click(function() {
    $(this).hide();
    $("#show-game").show();
    tO = setInterval(() => {
      document.getElementById("pro").innerHTML = timero++;
    }, 1000);
  });
});

// game 3x3
$(document).ready(function() {
  var x = "x";
  var o = "o";
  var count = 0;
  var o_win = 0;
  var x_win = 0;
  $("#game li").click(function() {
    if (
      ($("#one").hasClass("o") &&
        $("#two").hasClass("o") &&
        $("#three").hasClass("o")) ||
      ($("#four").hasClass("o") &&
        $("#five").hasClass("o") &&
        $("#six").hasClass("o")) ||
      ($("#seven").hasClass("o") &&
        $("#eight").hasClass("o") &&
        $("#nine").hasClass("o")) ||
      ($("#one").hasClass("o") &&
        $("#four").hasClass("o") &&
        $("#seven").hasClass("o")) ||
      ($("#two").hasClass("o") &&
        $("#five").hasClass("o") &&
        $("#eight").hasClass("o")) ||
      ($("#three").hasClass("o") &&
        $("#six").hasClass("o") &&
        $("#nine").hasClass("o")) ||
      ($("#one").hasClass("o") &&
        $("#five").hasClass("o") &&
        $("#nine").hasClass("o")) ||
      ($("#three").hasClass("o") &&
        $("#five").hasClass("o") &&
        $("#seven").hasClass("o"))
    ) {
      alert("O has won the game. Start a new game");
      $("#game li").text("+");
      $("#game li").removeClass("disable");
      $("#game li").removeClass("o");
      $("#game li").removeClass("x");
      $("#game li").removeClass("btn-primary");
      $("#game li").removeClass("btn-info");
      // reset
      clearInterval(tO);
      clearInterval(tX);
      document.getElementById("pro").innerHTML = 0;
      document.getElementById("prx").innerHTML = 0;
      timero = 1;
      timerx = 1;
      count = 0;
      // start counting time for O
      tO = setInterval(() => {
        document.getElementById("pro").innerHTML = timero++;
      }, 1000);
    } else if (
      ($("#one").hasClass("x") &&
        $("#two").hasClass("x") &&
        $("#three").hasClass("x")) ||
      ($("#four").hasClass("x") &&
        $("#five").hasClass("x") &&
        $("#six").hasClass("x")) ||
      ($("#seven").hasClass("x") &&
        $("#eight").hasClass("x") &&
        $("#nine").hasClass("x")) ||
      ($("#one").hasClass("x") &&
        $("#four").hasClass("x") &&
        $("#seven").hasClass("x")) ||
      ($("#two").hasClass("x") &&
        $("#five").hasClass("x") &&
        $("#eight").hasClass("x")) ||
      ($("#three").hasClass("x") &&
        $("#six").hasClass("x") &&
        $("#nine").hasClass("x")) ||
      ($("#one").hasClass("x") &&
        $("#five").hasClass("x") &&
        $("#nine").hasClass("x")) ||
      ($("#three").hasClass("x") &&
        $("#five").hasClass("x") &&
        $("#seven").hasClass("x"))
    ) {
      alert("X wins has won the game. Start a new game");
      $("#game li").text("+");
      $("#game li").removeClass("disable");
      $("#game li").removeClass("o");
      $("#game li").removeClass("x");
      $("#game li").removeClass("btn-primary");
      $("#game li").removeClass("btn-info");
      // reset
      clearInterval(tO);
      clearInterval(tX);
      document.getElementById("pro").innerHTML = 0;
      document.getElementById("prx").innerHTML = 0;
      timero = 1;
      timerx = 1;
      count = 0;
      // start counting time for O
      tO = setInterval(() => {
        document.getElementById("pro").innerHTML = timero++;
      }, 1000);
    } else if (count == 9) {
      alert("Its a tie. It will restart.");
      $("#game li").text("+");
      $("#game li").removeClass("disable");
      $("#game li").removeClass("o");
      $("#game li").removeClass("x");
      $("#game li").removeClass("btn-primary");
      $("#game li").removeClass("btn-info");
      // count = 0;
      // reset
      clearInterval(tO);
      clearInterval(tX);
      document.getElementById("pro").innerHTML = 0;
      document.getElementById("prx").innerHTML = 0;
      timero = 1;
      timerx = 1;
      count = 0;
      // start counting time for O
      tO = setInterval(() => {
        document.getElementById("pro").innerHTML = timero++;
      }, 1000);
    } else if ($(this).hasClass("disable")) {
      alert("Already selected");
    } else if (count % 2 == 0) {
      // stop time O
      clearInterval(tO);

      // start time X
      console.log("start time X");
      tX = setInterval(() => {
        document.getElementById("prx").innerHTML = timerx++;
      }, 1000);

      count++;

      $(this).text(o);
      $(this).addClass("disable o btn-primary");
      if (
        ($("#one").hasClass("o") &&
          $("#two").hasClass("o") &&
          $("#three").hasClass("o")) ||
        ($("#four").hasClass("o") &&
          $("#five").hasClass("o") &&
          $("#six").hasClass("o")) ||
        ($("#seven").hasClass("o") &&
          $("#eight").hasClass("o") &&
          $("#nine").hasClass("o")) ||
        ($("#one").hasClass("o") &&
          $("#four").hasClass("o") &&
          $("#seven").hasClass("o")) ||
        ($("#two").hasClass("o") &&
          $("#five").hasClass("o") &&
          $("#eight").hasClass("o")) ||
        ($("#three").hasClass("o") &&
          $("#six").hasClass("o") &&
          $("#nine").hasClass("o")) ||
        ($("#one").hasClass("o") &&
          $("#five").hasClass("o") &&
          $("#nine").hasClass("o")) ||
        ($("#three").hasClass("o") &&
          $("#five").hasClass("o") &&
          $("#seven").hasClass("o"))
      ) {
        // reset all timer
        clearInterval(tO);
        clearInterval(tX);
        document.getElementById("pro").innerHTML = 0;
        document.getElementById("prx").innerHTML = 0;
        timero = 1;
        timerx = 1;

        $("#game li").text("+");
        $("#game li").removeClass("disable");
        $("#game li").removeClass("o");
        $("#game li").removeClass("x");
        $("#game li").removeClass("btn-primary");
        $("#game li").removeClass("btn-info");
        alert("O wins");
        count = 0;
        o_win++;
        $("#o_win").text(o_win);
        // start counting time for O
        tO = setInterval(() => {
          document.getElementById("pro").innerHTML = timero++;
        }, 1000);
      }
    } else {
      // stop time X
      clearInterval(tX);

      // continue time O
      tO = setInterval(() => {
        document.getElementById("pro").innerHTML = timero++;
      }, 1000);

      count++;
      // clearInterval(tO);
      $(this).text(x);
      $(this).addClass("disable x btn-info");
      if (
        ($("#one").hasClass("x") &&
          $("#two").hasClass("x") &&
          $("#three").hasClass("x")) ||
        ($("#four").hasClass("x") &&
          $("#five").hasClass("x") &&
          $("#six").hasClass("x")) ||
        ($("#seven").hasClass("x") &&
          $("#eight").hasClass("x") &&
          $("#nine").hasClass("x")) ||
        ($("#one").hasClass("x") &&
          $("#four").hasClass("x") &&
          $("#seven").hasClass("x")) ||
        ($("#two").hasClass("x") &&
          $("#five").hasClass("x") &&
          $("#eight").hasClass("x")) ||
        ($("#three").hasClass("x") &&
          $("#six").hasClass("x") &&
          $("#nine").hasClass("x")) ||
        ($("#one").hasClass("x") &&
          $("#five").hasClass("x") &&
          $("#nine").hasClass("x")) ||
        ($("#three").hasClass("x") &&
          $("#five").hasClass("x") &&
          $("#seven").hasClass("x"))
      ) {
        // reset all time
        clearInterval(tO);
        clearInterval(tX);
        document.getElementById("pro").innerHTML = 0;
        document.getElementById("prx").innerHTML = 0;
        timero = 1;
        timerx = 1;

        $("#game li").text("+");
        $("#game li").removeClass("disable");
        $("#game li").removeClass("o");
        $("#game li").removeClass("x");
        $("#game li").removeClass("btn-primary");
        $("#game li").removeClass("btn-info");
        alert("X wins");
        count = 0;
        x_win++;
        $("#x_win").text(x_win);
        // start counting time for O
        tO = setInterval(() => {
          document.getElementById("pro").innerHTML = timero++;
        }, 1000);
      }
    }
  });

  $("#reset").click(function() {
    clearInterval(tO);
    clearInterval(tX);
    document.getElementById("pro").innerHTML = 0;
    document.getElementById("prx").innerHTML = 0;
    timero = 1;
    timerx = 1;
    o_win = 0;
    x_win = 0;
    $("#x_win").text(x_win);
    $("#o_win").text(o_win);
    $("#game li").text("+");
    $("#game li").removeClass("disable");
    $("#game li").removeClass("o");
    $("#game li").removeClass("x");
    $("#game li").removeClass("btn-primary");
    $("#game li").removeClass("btn-info");
    count = 0;
    // start counting time for O
    tO = setInterval(() => {
      document.getElementById("pro").innerHTML = timero++;
    }, 1000);
  });
});

// start 5x5
let timero5 = 1;
let timerx5 = 1;
let tO5;
let tX5;

$(document).ready(function() {
  $("#btn-start-5").click(function() {
    $(this).hide();
    $("#show-game-5").show();
    // tO = setInterval(() => {
    //   document.getElementById("pro").innerHTML = timero++;
    // }, 1000);

    // let scaleGame5 = [
    //   "one5",
    //   "two5",
    //   "three5",
    //   "four5",
    //   "five5",
    //   "six5",
    //   "seven5",
    //   "eight5",
    //   "nine5",
    //   "ten5",
    //   "eleven5",
    //   "twelve5",
    //   "thirteen5",
    //   "fourteen5",
    //   "fifteen5",
    //   "sixteen5",
    //   "seventeen5",
    //   "eighteen5",
    //   "nineteen5",
    //   "twenty5",
    //   "twentyone5",
    //   "twentytwo5",
    //   "twentythree",
    //   "twentyfour5",
    //   "twentyfive5"
    // ];
    // for (appendList5 of scaleGame5) {
    //   $("ul.r-5").append(
    //     "<li id='" + appendList5 + "'" + " class='btn span1'>+</li>"
    //   );
    // }

    tO5 = setInterval(() => {
      document.getElementById("pro-5").innerHTML = timero5++;
    }, 1000);
  });
});

// $(document).ready(function() {
//   $("#btn-start5").click(function() {
//     $(this).hide();
//     $("#show-game5").show();

//     let scaleGame5 = [
//       "one5",
//       "two5",
//       "three5",
//       "four5",
//       "five5",
//       "six5",
//       "seven5",
//       "eight5",
//       "nine5",
//       "ten5",
//       "eleven5",
//       "twelve5",
//       "thirteen5",
//       "fourteen5",
//       "fifteen5",
//       "sixteen5",
//       "seventeen5",
//       "eighteen5",
//       "nineteen5",
//       "twenty5",
//       "twentyone5",
//       "twentytwo5",
//       "twentythree",
//       "twentyfour5",
//       "twentyfive5"
//     ];
//     for (appendList5 of scaleGame5) {
//       $("ul.row").append(
//         "<li id='" + appendList5 + "'" + " class='btn span3'>+</li>"
//       );
//     }
//     tO5 = setInterval(() => {
//       document.getElementById("pro5").innerHTML = timero5++;
//     }, 1000);
//   });
// });

$(document).ready(function() {
  var x5 = "x5";
  var o5 = "o5";
  var count5 = 0;
  var o_win5 = 0;
  var x_win5 = 0;
  $("#game-5 li").click(function() {
    console.log("click");
    if (
      ($("#one5").hasClass("o5") &&
        $("#two5").hasClass("o5") &&
        $("#three5").hasClass("o5") &&
        $("#four5").hasClass("o5") &&
        $("#five5").hasClass("o5")) ||
      ($("#six5").hasClass("o5") &&
        $("#seven5").hasClass("o5") &&
        $("#eight5").hasClass("o5") &&
        $("#nine5").hasClass("o5") &&
        $("#ten5").hasClass("o5")) ||
      ($("#eleven5").hasClass("o5") &&
        $("#twelve5").hasClass("o5") &&
        $("#thirteen5").hasClass("o5") &&
        $("#fourteen5").hasClass("o5") &&
        $("#fifteen5").hasClass("o5")) ||
      ($("#sixteen5").hasClass("o5") &&
        $("#seventeen5").hasClass("o5") &&
        $("#eighteen5").hasClass("o5") &&
        $("#nineteen5").hasClass("o5") &&
        $("#twenty5").hasClass("o5")) ||
      ($("#twentyone5").hasClass("o5") &&
        $("#twentytwo5").hasClass("o5") &&
        $("#twentythree5").hasClass("o5") &&
        $("#twentyfour5").hasClass("o5") &&
        $("#twentyfive5").hasClass("o5")) ||
      ($("#one5").hasClass("o5") &&
        $("#six5").hasClass("o5") &&
        $("#eleven5").hasClass("o5") &&
        $("#sixteen5").hasClass("o5") &&
        $("#twentyone5").hasClass("o5")) ||
      ($("#two5").hasClass("o5") &&
        $("#seven5").hasClass("o5") &&
        $("#twelve5").hasClass("o5") &&
        $("#seventeen5").hasClass("o5") &&
        $("#twentytwo5").hasClass("o5")) ||
      ($("#three5").hasClass("o5") &&
        $("#eight5").hasClass("o5") &&
        $("#thirteen5").hasClass("o5") &&
        $("#eighteen5").hasClass("o5") &&
        $("#twentythree5").hasClass("o5")) ||
      ($("#four5").hasClass("o5") &&
        $("#nine5").hasClass("o5") &&
        $("#fourteen5").hasClass("o5") &&
        $("#nineteen5").hasClass("o5") &&
        $("#twentyfour5").hasClass("o5")) ||
      ($("#five5").hasClass("o5") &&
        $("#ten5").hasClass("o5") &&
        $("#fifteen5").hasClass("o5") &&
        $("#twenty5").hasClass("o5") &&
        $("#twentyfive5").hasClass("o5")) ||
      ($("#one5").hasClass("o5") &&
        $("#seven5").hasClass("o5") &&
        $("#thirteen5").hasClass("o5") &&
        $("#nineteen5").hasClass("o5") &&
        $("#twentyfive5").hasClass("o5")) ||
      ($("#five5").hasClass("o5") &&
        $("#nine5").hasClass("o5") &&
        $("#thirteen5").hasClass("o5") &&
        $("#seventeen5").hasClass("o5") &&
        $("#twentyone5").hasClass("o5"))
    ) {
      alert("O has won the game. Start a new game");
      $("#game-5 li").text("+");
      $("#game-5 li").removeClass("disable");
      $("#game-5 li").removeClass("o5");
      $("#game-5 li").removeClass("x5");
      $("#game-5 li").removeClass("btn-primary");
      $("#game-5 li").removeClass("btn-info");
      // reset
      clearInterval(tO5);
      clearInterval(tX5);
      document.getElementById("pro-5").innerHTML = 0;
      document.getElementById("prx-5").innerHTML = 0;
      timero5 = 1;
      timerx5 = 1;
      count5 = 0;
      // start counting time for O
      tO5 = setInterval(() => {
        document.getElementById("pro-5").innerHTML = timero5++;
      }, 1000);
    } else if (
      ($("#one5").hasClass("x5") &&
        $("#two5").hasClass("x5") &&
        $("#three5").hasClass("x5") &&
        $("#four5").hasClass("x5") &&
        $("#five5").hasClass("x5")) ||
      ($("#six5").hasClass("x5") &&
        $("#seven5").hasClass("x5") &&
        $("#eight5").hasClass("x5") &&
        $("#nine5").hasClass("x5") &&
        $("#ten5").hasClass("x5")) ||
      ($("#eleven5").hasClass("x5") &&
        $("#twelve5").hasClass("x5") &&
        $("#thirteen5").hasClass("x5") &&
        $("#fourteen5").hasClass("x5") &&
        $("#fifteen5").hasClass("x5")) ||
      ($("#sixteen5").hasClass("x5") &&
        $("#seventeen5").hasClass("x5") &&
        $("#eighteen5").hasClass("x5") &&
        $("#nineteen5").hasClass("x5") &&
        $("#twenty5").hasClass("x5")) ||
      ($("#twentyone5").hasClass("x5") &&
        $("#twentytwo5").hasClass("x5") &&
        $("#twentythree5").hasClass("x5") &&
        $("#twentyfour5").hasClass("x5") &&
        $("#twentyfive5").hasClass("x5")) ||
      ($("#one5").hasClass("x5") &&
        $("#six5").hasClass("x5") &&
        $("#eleven5").hasClass("x5") &&
        $("#sixteen5").hasClass("x5") &&
        $("#twentyone5").hasClass("x5")) ||
      ($("#two5").hasClass("x5") &&
        $("#seven5").hasClass("x5") &&
        $("#twelve5").hasClass("x5") &&
        $("#seventeen5").hasClass("x5") &&
        $("#twentytwo5").hasClass("x5")) ||
      ($("#three5").hasClass("x5") &&
        $("#eight5").hasClass("x5") &&
        $("#thirteen5").hasClass("x5") &&
        $("#eighteen5").hasClass("x5") &&
        $("#twentythree5").hasClass("x5")) ||
      ($("#four5").hasClass("x5") &&
        $("#nine5").hasClass("x5") &&
        $("#fourteen5").hasClass("x5") &&
        $("#nineteen5").hasClass("x5") &&
        $("#twentyfour5").hasClass("x5")) ||
      ($("#five5").hasClass("x5") &&
        $("#ten5").hasClass("x5") &&
        $("#fifteen5").hasClass("x5") &&
        $("#twenty5").hasClass("x5") &&
        $("#twentyfive5").hasClass("x5")) ||
      ($("#one5").hasClass("x5") &&
        $("#seven5").hasClass("x5") &&
        $("#thirteen5").hasClass("x5") &&
        $("#nineteen5").hasClass("x5") &&
        $("#twentyfive5").hasClass("x5")) ||
      ($("#five5").hasClass("x5") &&
        $("#nine5").hasClass("x5") &&
        $("#thirteen5").hasClass("x5") &&
        $("#seventeen5").hasClass("x5") &&
        $("#twentyone5").hasClass("x5"))
    ) {
      alert("X wins has won the game. Start a new game");
      $("#game-5 li").text("+");
      $("#game-5 li").removeClass("disable");
      $("#game-5 li").removeClass("o5");
      $("#game-5 li").removeClass("x5");
      $("#game-5 li").removeClass("btn-primary");
      $("#game-5 li").removeClass("btn-info");
      // reset
      clearInterval(tO5);
      clearInterval(tX5);
      document.getElementById("pro-5").innerHTML = 0;
      document.getElementById("prx-5").innerHTML = 0;
      timero5 = 1;
      timerx5 = 1;
      count5 = 0;
      // start counting time for O
      tO5 = setInterval(() => {
        document.getElementById("pro-5").innerHTML = timero5++;
      }, 1000);
    } else if (count5 == 25) {
      alert("Its a tie. It will restart.");
      $("#game-5 li").text("+");
      $("#game-5 li").removeClass("disable");
      $("#game-5 li").removeClass("o5");
      $("#game-5 li").removeClass("x5");
      $("#game-5 li").removeClass("btn-primary");
      $("#game-5 li").removeClass("btn-info");
      // reset
      clearInterval(tO5);
      clearInterval(tX5);
      document.getElementById("pro-5").innerHTML = 0;
      document.getElementById("prx-5").innerHTML = 0;
      timero5 = 1;
      timerx5 = 1;
      count5 = 0;
      // start counting time for O
      tO5 = setInterval(() => {
        document.getElementById("pro-5").innerHTML = timero5++;
      }, 1000);
    } else if ($(this).hasClass("disable")) {
      alert("Already selected");
    } else if (count5 % 2 == 0) {
      // stop time O
      clearInterval(tO5);

      // start time X
      // console.log("start time X");
      tX5 = setInterval(() => {
        document.getElementById("prx-5").innerHTML = timerx5++;
      }, 1000);

      count5++;

      $(this).text(o5);
      $(this).addClass("disable o5 btn-primary");
      if (
        ($("#one5").hasClass("o5") &&
          $("#two5").hasClass("o5") &&
          $("#three5").hasClass("o5") &&
          $("#four5").hasClass("o5") &&
          $("#five5").hasClass("o5")) ||
        ($("#six5").hasClass("o5") &&
          $("#seven5").hasClass("o5") &&
          $("#eight5").hasClass("o5") &&
          $("#nine5").hasClass("o5") &&
          $("#ten5").hasClass("o5")) ||
        ($("#eleven5").hasClass("o5") &&
          $("#twelve5").hasClass("o5") &&
          $("#thirteen5").hasClass("o5") &&
          $("#fourteen5").hasClass("o5") &&
          $("#fifteen5").hasClass("o5")) ||
        ($("#sixteen5").hasClass("o5") &&
          $("#seventeen5").hasClass("o5") &&
          $("#eighteen5").hasClass("o5") &&
          $("#nineteen5").hasClass("o5") &&
          $("#twenty5").hasClass("o5")) ||
        ($("#twentyone5").hasClass("o5") &&
          $("#twentytwo5").hasClass("o5") &&
          $("#twentythree5").hasClass("o5") &&
          $("#twentyfour5").hasClass("o5") &&
          $("#twentyfive5").hasClass("o5")) ||
        ($("#one5").hasClass("o5") &&
          $("#six5").hasClass("o5") &&
          $("#eleven5").hasClass("o5") &&
          $("#sixteen5").hasClass("o5") &&
          $("#twentyone5").hasClass("o5")) ||
        ($("#two5").hasClass("o5") &&
          $("#seven5").hasClass("o5") &&
          $("#twelve5").hasClass("o5") &&
          $("#seventeen5").hasClass("o5") &&
          $("#twentytwo5").hasClass("o5")) ||
        ($("#three5").hasClass("o5") &&
          $("#eight5").hasClass("o5") &&
          $("#thirteen5").hasClass("o5") &&
          $("#eighteen5").hasClass("o5") &&
          $("#twentythree5").hasClass("o5")) ||
        ($("#four5").hasClass("o5") &&
          $("#nine5").hasClass("o5") &&
          $("#fourteen5").hasClass("o5") &&
          $("#nineteen5").hasClass("o5") &&
          $("#twentyfour5").hasClass("o5")) ||
        ($("#five5").hasClass("o5") &&
          $("#ten5").hasClass("o5") &&
          $("#fifteen5").hasClass("o5") &&
          $("#twenty5").hasClass("o5") &&
          $("#twentyfive5").hasClass("o5")) ||
        ($("#one5").hasClass("o5") &&
          $("#seven5").hasClass("o5") &&
          $("#thirteen5").hasClass("o5") &&
          $("#nineteen5").hasClass("o5") &&
          $("#twentyfive5").hasClass("o5")) ||
        ($("#five5").hasClass("o5") &&
          $("#nine5").hasClass("o5") &&
          $("#thirteen5").hasClass("o5") &&
          $("#seventeen5").hasClass("o5") &&
          $("#twentyone5").hasClass("o5"))
      ) {
        // reset all timer
        clearInterval(tO5);
        clearInterval(tX5);
        document.getElementById("pro-5").innerHTML = 0;
        document.getElementById("prx-5").innerHTML = 0;
        timero5 = 1;
        timerx5 = 1;

        $("#game-5 li").text("+");
        $("#game-5 li").removeClass("disable");
        $("#game-5 li").removeClass("o5");
        $("#game-5 li").removeClass("x5");
        $("#game-5 li").removeClass("btn-primary");
        $("#game-5 li").removeClass("btn-info");
        alert("O wins");
        count5 = 0;
        o_win5++;
        $("#o_win5").text(o_win5);
        // start counting time for O
        tO5 = setInterval(() => {
          document.getElementById("pro-5").innerHTML = timero5++;
        }, 1000);
      }
    } else {
      // stop time X
      clearInterval(tX5);

      // continue time O
      tO5 = setInterval(() => {
        document.getElementById("pro-5").innerHTML = timero5++;
      }, 1000);

      count5++;
      // clearInterval(tO);
      $(this).text(x5);
      $(this).addClass("disable x5 btn-info");
      if (
        ($("#one5").hasClass("x5") &&
          $("#two5").hasClass("x5") &&
          $("#three5").hasClass("x5") &&
          $("#four5").hasClass("x5") &&
          $("#five5").hasClass("x5")) ||
        ($("#six5").hasClass("x5") &&
          $("#seven5").hasClass("x5") &&
          $("#eight5").hasClass("x5") &&
          $("#nine5").hasClass("x5") &&
          $("#ten5").hasClass("x5")) ||
        ($("#eleven5").hasClass("x5") &&
          $("#twelve5").hasClass("x5") &&
          $("#thirteen5").hasClass("x5") &&
          $("#fourteen5").hasClass("x5") &&
          $("#fifteen5").hasClass("x5")) ||
        ($("#sixteen5").hasClass("x5") &&
          $("#seventeen5").hasClass("x5") &&
          $("#eighteen5").hasClass("x5") &&
          $("#nineteen5").hasClass("x5") &&
          $("#twenty5").hasClass("x5")) ||
        ($("#twentyone5").hasClass("x5") &&
          $("#twentytwo5").hasClass("x5") &&
          $("#twentythree5").hasClass("x5") &&
          $("#twentyfour5").hasClass("x5") &&
          $("#twentyfive5").hasClass("x5")) ||
        ($("#one5").hasClass("x5") &&
          $("#six5").hasClass("x5") &&
          $("#eleven5").hasClass("x5") &&
          $("#sixteen5").hasClass("x5") &&
          $("#twentyone5").hasClass("x5")) ||
        ($("#two5").hasClass("x5") &&
          $("#seven5").hasClass("x5") &&
          $("#twelve5").hasClass("x5") &&
          $("#seventeen5").hasClass("x5") &&
          $("#twentytwo5").hasClass("x5")) ||
        ($("#three5").hasClass("x5") &&
          $("#eight5").hasClass("x5") &&
          $("#thirteen5").hasClass("x5") &&
          $("#eighteen5").hasClass("x5") &&
          $("#twentythree5").hasClass("x5")) ||
        ($("#four5").hasClass("x5") &&
          $("#nine5").hasClass("x5") &&
          $("#fourteen5").hasClass("x5") &&
          $("#nineteen5").hasClass("x5") &&
          $("#twentyfour5").hasClass("x5")) ||
        ($("#five5").hasClass("x5") &&
          $("#ten5").hasClass("x5") &&
          $("#fifteen5").hasClass("x5") &&
          $("#twenty5").hasClass("x5") &&
          $("#twentyfive5").hasClass("x5")) ||
        ($("#one5").hasClass("x5") &&
          $("#seven5").hasClass("x5") &&
          $("#thirteen5").hasClass("x5") &&
          $("#nineteen5").hasClass("x5") &&
          $("#twentyfive5").hasClass("x5")) ||
        ($("#five5").hasClass("x5") &&
          $("#nine5").hasClass("x5") &&
          $("#thirteen5").hasClass("x5") &&
          $("#seventeen5").hasClass("x5") &&
          $("#twentyone5").hasClass("x5"))
      ) {
        // reset all time
        clearInterval(tO5);
        clearInterval(tX5);
        document.getElementById("pro-5").innerHTML = 0;
        document.getElementById("prx-5").innerHTML = 0;
        timero5 = 1;
        timerx5 = 1;

        $("#game-5 li").text("+");
        $("#game-5 li").removeClass("disable");
        $("#game-5 li").removeClass("o5");
        $("#game-5 li").removeClass("x5");
        $("#game-5 li").removeClass("btn-primary");
        $("#game-5 li").removeClass("btn-info");
        alert("X wins");
        count5 = 0;
        x_win5++;
        $("#x_win5").text(x_win5);
        // start counting time for O
        tO5 = setInterval(() => {
          document.getElementById("pro-5").innerHTML = timero5++;
        }, 1000);
      }
    }
  });

  $("#reset-5").click(function() {
    clearInterval(tO5);
    clearInterval(tX5);
    document.getElementById("pro-5").innerHTML = 0;
    document.getElementById("prx-5").innerHTML = 0;
    timero5 = 1;
    timerx5 = 1;
    o_win5 = 0;
    x_win5 = 0;
    $("#x_win5").text(x_win5);
    $("#o_win5").text(o_win5);
    $("#game-5 li").text("+");
    $("#game-5 li").removeClass("disable");
    $("#game-5 li").removeClass("o5");
    $("#game-5 li").removeClass("x5");
    $("#game-5 li").removeClass("btn-primary");
    $("#game-5 li").removeClass("btn-info");
    count5 = 0;
    // start counting time for O
    tO5 = setInterval(() => {
      document.getElementById("pro-5").innerHTML = timero5++;
    }, 1000);
  });
});

// start 7x7
let timero7 = 1;
let timerx7 = 1;
let tO7;
let tX7;

$(document).ready(function() {
  $("#btn-start-7").click(function() {
    $(this).hide();
    $("#show-game-7").show();

    tO7 = setInterval(() => {
      document.getElementById("pro-7").innerHTML = timero7++;
    }, 1000);
  });
});

$(document).ready(function() {
  var x7 = "x7";
  var o7 = "o7";
  var count7 = 0;
  var o_win7 = 0;
  var x_win7 = 0;
  $("#game-7 li").click(function() {
    console.log("click");
    if (
      ($("#one7").hasClass("o7") &&
        $("#two7").hasClass("o7") &&
        $("#three7").hasClass("o7") &&
        $("#four7").hasClass("o7") &&
        $("#five7").hasClass("o7") &&
        $("#six7").hasClass("o7") &&
        $("#seven7").hasClass("o7")) ||
      ($("#eight7").hasClass("o7") &&
        $("#nine7").hasClass("o7") &&
        $("#ten7").hasClass("o7") &&
        $("#eleven7").hasClass("o7") &&
        $("#twelve7").hasClass("o7") &&
        $("#thirteen7").hasClass("o7") &&
        $("#fourteen7").hasClass("o7")) ||
      ($("#fifteen7").hasClass("o7") &&
        $("#sixteen7").hasClass("o7") &&
        $("#seventeen7").hasClass("o7") &&
        $("#eighteen7").hasClass("o7") &&
        $("#nineteen7").hasClass("o7") &&
        $("#twenty7").hasClass("o7") &&
        $("#twentyone7").hasClass("o7")) ||
      ($("#twentytwo7").hasClass("o7") &&
        $("#twentythree7").hasClass("o7") &&
        $("#twentyfour7").hasClass("o7") &&
        $("#twentyfive7").hasClass("o7") &&
        $("#twentysix7").hasClass("o7") &&
        $("#twentyseven7").hasClass("o7") &&
        $("#twentyeight7").hasClass("o7")) ||
      ($("#twentynine7").hasClass("o7") &&
        $("#thirty7").hasClass("o7") &&
        $("#thirtyone7").hasClass("o7") &&
        $("#thirtytwo7").hasClass("o7") &&
        $("#thirtythree7").hasClass("o7") &&
        $("#thirtyfour7").hasClass("o7") &&
        $("#thirtytfive7").hasClass("o7")) ||
      ($("#thirtysix7").hasClass("o7") &&
        $("#thirtyseven7").hasClass("o7") &&
        $("#thirtyeight7").hasClass("o7") &&
        $("#thirtynine7").hasClass("o7") &&
        $("#fourty7").hasClass("o7") &&
        $("#fourtyone7").hasClass("o7") &&
        $("#fourtytwo7").hasClass("o7")) ||
      ($("#fourtythree7").hasClass("o7") &&
        $("#fourtyfour7").hasClass("o7") &&
        $("#fourtyfive7").hasClass("o7") &&
        $("#fourtysix7").hasClass("o7") &&
        $("#fourtyseven7").hasClass("o7") &&
        $("#fourtyeight7").hasClass("o7") &&
        $("#fourtynine7").hasClass("o7")) ||
      ($("#one7").hasClass("o7") &&
        $("#eight7").hasClass("o7") &&
        $("#fifteen7").hasClass("o7") &&
        $("#twentytwo7").hasClass("o7") &&
        $("#twentynine7").hasClass("o7") &&
        $("#thirtysix7").hasClass("o7") &&
        $("#fourtythree7").hasClass("o7")) ||
      ($("#two7").hasClass("o7") &&
        $("#nine7").hasClass("o7") &&
        $("#sixteen7").hasClass("o7") &&
        $("#twentythree7").hasClass("o7") &&
        $("#thirty7").hasClass("o7") &&
        $("#thirtyseven7").hasClass("o7") &&
        $("#fourtyfour7").hasClass("o7")) ||
      ($("#three7").hasClass("o7") &&
        $("#ten7").hasClass("o7") &&
        $("#seventeen7").hasClass("o7") &&
        $("#twentyfour7").hasClass("o7") &&
        $("#thirtyone7").hasClass("o7") &&
        $("#thirtyeight7").hasClass("o7") &&
        $("#fourtyfive7").hasClass("o7")) ||
      ($("#four7").hasClass("o7") &&
        $("#eleven7").hasClass("o7") &&
        $("#eighteen7").hasClass("o7") &&
        $("#twentyfive7").hasClass("o7") &&
        $("#thirtytwo7").hasClass("o7") &&
        $("#thirtynine7").hasClass("o7") &&
        $("#fourtysix7").hasClass("o7")) ||
      ($("#five7").hasClass("o7") &&
        $("#twelve7").hasClass("o7") &&
        $("#nineteen7").hasClass("o7") &&
        $("#twentysix7").hasClass("o7") &&
        $("#thirtythree7").hasClass("o7") &&
        $("#fourty7").hasClass("o7") &&
        $("#fourtyseven7").hasClass("o7")) ||
      ($("#six7").hasClass("o7") &&
        $("#thirteen7").hasClass("o7") &&
        $("#twenty7").hasClass("o7") &&
        $("#twentyseven7").hasClass("o7") &&
        $("#thirtyfour7").hasClass("o7") &&
        $("#fourtyone7").hasClass("o7") &&
        $("#fourtyeight7").hasClass("o7")) ||
      ($("#seven7").hasClass("o7") &&
        $("#fourteen7").hasClass("o7") &&
        $("#twentyone7").hasClass("o7") &&
        $("#twentyeight7").hasClass("o7") &&
        $("#thirtyfive7").hasClass("o7") &&
        $("#fourtytwo7").hasClass("o7") &&
        $("#fourtynine").hasClass("o7")) ||
      ($("#one7").hasClass("o7") &&
        $("#nine7").hasClass("o7") &&
        $("#seventeen7").hasClass("o7") &&
        $("#twentyfive7").hasClass("o7") &&
        $("#thirtythree7").hasClass("o7") &&
        $("#fourtyone7").hasClass("o7") &&
        $("#fourtynine7").hasClass("o7")) ||
      ($("#seven7").hasClass("o7") &&
        $("#thirteen7").hasClass("o7") &&
        $("#nineteen7").hasClass("o7") &&
        $("#twentyfive7").hasClass("o7") &&
        $("#thirtyone7").hasClass("o7") &&
        $("#thirtyseven7").hasClass("o7") &&
        $("#fourtythree7").hasClass("o7"))
    ) {
      alert("O has won the game. Start a new game");
      $("#game-7 li").text("+");
      $("#game-7 li").removeClass("disable");
      $("#game-7 li").removeClass("o7");
      $("#game-7 li").removeClass("x7");
      $("#game-7 li").removeClass("btn-primary");
      $("#game-7 li").removeClass("btn-info");
      // reset
      clearInterval(tO7);
      clearInterval(tX7);
      document.getElementById("pro-7").innerHTML = 0;
      document.getElementById("prx-7").innerHTML = 0;
      timero7 = 1;
      timerx7 = 1;
      count7 = 0;
      // start counting time for O
      tO7 = setInterval(() => {
        document.getElementById("pro-7").innerHTML = timero7++;
      }, 1000);
    } else if (
      ($("#one7").hasClass("x7") &&
        $("#two7").hasClass("x7") &&
        $("#three7").hasClass("x7") &&
        $("#four7").hasClass("x7") &&
        $("#five7").hasClass("x7") &&
        $("#six7").hasClass("x7") &&
        $("#seven7").hasClass("x7")) ||
      ($("#eight7").hasClass("x7") &&
        $("#nine7").hasClass("x7") &&
        $("#ten7").hasClass("x7") &&
        $("#eleven7").hasClass("x7") &&
        $("#twelve7").hasClass("x7") &&
        $("#thirteen7").hasClass("x7") &&
        $("#fourteen7").hasClass("x7")) ||
      ($("#fifteen7").hasClass("x7") &&
        $("#sixteen7").hasClass("x7") &&
        $("#seventeen7").hasClass("x7") &&
        $("#eighteen7").hasClass("x7") &&
        $("#nineteen7").hasClass("x7") &&
        $("#twenty7").hasClass("x7") &&
        $("#twentyone7").hasClass("x7")) ||
      ($("#twentytwo7").hasClass("x7") &&
        $("#twentythree7").hasClass("x7") &&
        $("#twentyfour7").hasClass("x7") &&
        $("#twentyfive7").hasClass("x7") &&
        $("#twentysix7").hasClass("x7") &&
        $("#twentyseven7").hasClass("x7") &&
        $("#twentyeight7").hasClass("x7")) ||
      ($("#twentynine7").hasClass("x7") &&
        $("#thirty7").hasClass("x7") &&
        $("#thirtyone7").hasClass("x7") &&
        $("#thirtytwo7").hasClass("x7") &&
        $("#thirtythree7").hasClass("x7") &&
        $("#thirtyfour7").hasClass("x7") &&
        $("#thirtytfive7").hasClass("x7")) ||
      ($("#thirtysix7").hasClass("x7") &&
        $("#thirtyseven7").hasClass("x7") &&
        $("#thirtyeight7").hasClass("x7") &&
        $("#thirtynine7").hasClass("x7") &&
        $("#fourty7").hasClass("x7") &&
        $("#fourtyone7").hasClass("x7") &&
        $("#fourtytwo7").hasClass("x7")) ||
      ($("#fourtythree7").hasClass("x7") &&
        $("#fourtyfour7").hasClass("x7") &&
        $("#fourtyfive7").hasClass("x7") &&
        $("#fourtysix7").hasClass("x7") &&
        $("#fourtyseven7").hasClass("x7") &&
        $("#fourtyeight7").hasClass("x7") &&
        $("#fourtynine7").hasClass("x7")) ||
      ($("#one7").hasClass("x7") &&
        $("#eight7").hasClass("x7") &&
        $("#fifteen7").hasClass("x7") &&
        $("#twentytwo7").hasClass("x7") &&
        $("#twentynine7").hasClass("x7") &&
        $("#thirtysix7").hasClass("x7") &&
        $("#fourtythree7").hasClass("x7")) ||
      ($("#two7").hasClass("x7") &&
        $("#nine7").hasClass("x7") &&
        $("#sixteen7").hasClass("x7") &&
        $("#twentythree7").hasClass("x7") &&
        $("#thirty7").hasClass("x7") &&
        $("#thirtyseven7").hasClass("x7") &&
        $("#fourtyfour7").hasClass("x7")) ||
      ($("#three7").hasClass("x7") &&
        $("#ten7").hasClass("x7") &&
        $("#seventeen7").hasClass("x7") &&
        $("#twentyfour7").hasClass("x7") &&
        $("#thirtyone7").hasClass("x7") &&
        $("#thirtyeight7").hasClass("x7") &&
        $("#fourtyfive7").hasClass("x7")) ||
      ($("#four7").hasClass("x7") &&
        $("#eleven7").hasClass("x7") &&
        $("#eighteen7").hasClass("x7") &&
        $("#twentyfive7").hasClass("x7") &&
        $("#thirtytwo7").hasClass("x7") &&
        $("#thirtynine7").hasClass("x7") &&
        $("#fourtysix7").hasClass("x7")) ||
      ($("#five7").hasClass("x7") &&
        $("#twelve7").hasClass("x7") &&
        $("#nineteen7").hasClass("x7") &&
        $("#twentysix7").hasClass("x7") &&
        $("#thirtythree7").hasClass("x7") &&
        $("#fourty7").hasClass("x7") &&
        $("#fourtyseven7").hasClass("x7")) ||
      ($("#six7").hasClass("x7") &&
        $("#thirteen7").hasClass("x7") &&
        $("#twenty7").hasClass("x7") &&
        $("#twentyseven7").hasClass("x7") &&
        $("#thirtyfour7").hasClass("x7") &&
        $("#fourtyone7").hasClass("x7") &&
        $("#fourtyeight7").hasClass("x7")) ||
      ($("#seven7").hasClass("x7") &&
        $("#fourteen7").hasClass("x7") &&
        $("#twentyone7").hasClass("x7") &&
        $("#twentyeight7").hasClass("x7") &&
        $("#thirtyfive7").hasClass("x7") &&
        $("#fourtytwo7").hasClass("x7") &&
        $("#fourtynine").hasClass("x7")) ||
      ($("#one7").hasClass("x7") &&
        $("#nine7").hasClass("x7") &&
        $("#seventeen7").hasClass("x7") &&
        $("#twentyfive7").hasClass("x7") &&
        $("#thirtythree7").hasClass("x7") &&
        $("#fourtyone7").hasClass("x7") &&
        $("#fourtynine7").hasClass("x7")) ||
      ($("#seven7").hasClass("x7") &&
        $("#thirteen7").hasClass("x7") &&
        $("#nineteen7").hasClass("x7") &&
        $("#twentyfive7").hasClass("x7") &&
        $("#thirtyone7").hasClass("x7") &&
        $("#thirtyseven7").hasClass("x7") &&
        $("#fourtythree7").hasClass("x7"))
    ) {
      alert("X wins has won the game. Start a new game");
      $("#game-7 li").text("+");
      $("#game-7 li").removeClass("disable");
      $("#game-7 li").removeClass("o7");
      $("#game-7 li").removeClass("x7");
      $("#game-7 li").removeClass("btn-primary");
      $("#game-7 li").removeClass("btn-info");
      // reset
      clearInterval(tO7);
      clearInterval(tX7);
      document.getElementById("pro-7").innerHTML = 0;
      document.getElementById("prx-7").innerHTML = 0;
      timero7 = 1;
      timerx7 = 1;
      count7 = 0;
      // start counting time for O
      tO7 = setInterval(() => {
        document.getElementById("pro-7").innerHTML = timero7++;
      }, 1000);
    } else if (count7 == 49) {
      alert("Its a tie. It will restart.");
      $("#game-7 li").text("+");
      $("#game-7 li").removeClass("disable");
      $("#game-7 li").removeClass("o7");
      $("#game-7 li").removeClass("x7");
      $("#game-7 li").removeClass("btn-primary");
      $("#game-7 li").removeClass("btn-info");
      // reset
      clearInterval(tO7);
      clearInterval(tX7);
      document.getElementById("pro-7").innerHTML = 0;
      document.getElementById("prx-7").innerHTML = 0;
      timero7 = 1;
      timerx7 = 1;
      count7 = 0;
      // start counting time for O
      tO7 = setInterval(() => {
        document.getElementById("pro-7").innerHTML = timero7++;
      }, 1000);
    } else if ($(this).hasClass("disable")) {
      alert("Already selected");
    } else if (count7 % 2 == 0) {
      // stop time O
      clearInterval(tO7);

      // start time X
      // console.log("start time X");
      tX7 = setInterval(() => {
        document.getElementById("prx-7").innerHTML = timerx7++;
      }, 1000);

      count7++;

      $(this).text(o7);
      $(this).addClass("disable o7 btn-primary");
      if (
        ($("#one7").hasClass("o7") &&
          $("#two7").hasClass("o7") &&
          $("#three7").hasClass("o7") &&
          $("#four7").hasClass("o7") &&
          $("#five7").hasClass("o7") &&
          $("#six7").hasClass("o7") &&
          $("#seven7").hasClass("o7")) ||
        ($("#eight7").hasClass("o7") &&
          $("#nine7").hasClass("o7") &&
          $("#ten7").hasClass("o7") &&
          $("#eleven7").hasClass("o7") &&
          $("#twelve7").hasClass("o7") &&
          $("#thirteen7").hasClass("o7") &&
          $("#fourteen7").hasClass("o7")) ||
        ($("#fifteen7").hasClass("o7") &&
          $("#sixteen7").hasClass("o7") &&
          $("#seventeen7").hasClass("o7") &&
          $("#eighteen7").hasClass("o7") &&
          $("#nineteen7").hasClass("o7") &&
          $("#twenty7").hasClass("o7") &&
          $("#twentyone7").hasClass("o7")) ||
        ($("#twentytwo7").hasClass("o7") &&
          $("#twentythree7").hasClass("o7") &&
          $("#twentyfour7").hasClass("o7") &&
          $("#twentyfive7").hasClass("o7") &&
          $("#twentysix7").hasClass("o7") &&
          $("#twentyseven7").hasClass("o7") &&
          $("#twentyeight7").hasClass("o7")) ||
        ($("#twentynine7").hasClass("o7") &&
          $("#thirty7").hasClass("o7") &&
          $("#thirtyone7").hasClass("o7") &&
          $("#thirtytwo7").hasClass("o7") &&
          $("#thirtythree7").hasClass("o7") &&
          $("#thirtyfour7").hasClass("o7") &&
          $("#thirtytfive7").hasClass("o7")) ||
        ($("#thirtysix7").hasClass("o7") &&
          $("#thirtyseven7").hasClass("o7") &&
          $("#thirtyeight7").hasClass("o7") &&
          $("#thirtynine7").hasClass("o7") &&
          $("#fourty7").hasClass("o7") &&
          $("#fourtyone7").hasClass("o7") &&
          $("#fourtytwo7").hasClass("o7")) ||
        ($("#fourtythree7").hasClass("o7") &&
          $("#fourtyfour7").hasClass("o7") &&
          $("#fourtyfive7").hasClass("o7") &&
          $("#fourtysix7").hasClass("o7") &&
          $("#fourtyseven7").hasClass("o7") &&
          $("#fourtyeight7").hasClass("o7") &&
          $("#fourtynine7").hasClass("o7")) ||
        ($("#one7").hasClass("o7") &&
          $("#eight7").hasClass("o7") &&
          $("#fifteen7").hasClass("o7") &&
          $("#twentytwo7").hasClass("o7") &&
          $("#twentynine7").hasClass("o7") &&
          $("#thirtysix7").hasClass("o7") &&
          $("#fourtythree7").hasClass("o7")) ||
        ($("#two7").hasClass("o7") &&
          $("#nine7").hasClass("o7") &&
          $("#sixteen7").hasClass("o7") &&
          $("#twentythree7").hasClass("o7") &&
          $("#thirty7").hasClass("o7") &&
          $("#thirtyseven7").hasClass("o7") &&
          $("#fourtyfour7").hasClass("o7")) ||
        ($("#three7").hasClass("o7") &&
          $("#ten7").hasClass("o7") &&
          $("#seventeen7").hasClass("o7") &&
          $("#twentyfour7").hasClass("o7") &&
          $("#thirtyone7").hasClass("o7") &&
          $("#thirtyeight7").hasClass("o7") &&
          $("#fourtyfive7").hasClass("o7")) ||
        ($("#four7").hasClass("o7") &&
          $("#eleven7").hasClass("o7") &&
          $("#eighteen7").hasClass("o7") &&
          $("#twentyfive7").hasClass("o7") &&
          $("#thirtytwo7").hasClass("o7") &&
          $("#thirtynine7").hasClass("o7") &&
          $("#fourtysix7").hasClass("o7")) ||
        ($("#five7").hasClass("o7") &&
          $("#twelve7").hasClass("o7") &&
          $("#nineteen7").hasClass("o7") &&
          $("#twentysix7").hasClass("o7") &&
          $("#thirtythree7").hasClass("o7") &&
          $("#fourty7").hasClass("o7") &&
          $("#fourtyseven7").hasClass("o7")) ||
        ($("#six7").hasClass("o7") &&
          $("#thirteen7").hasClass("o7") &&
          $("#twenty7").hasClass("o7") &&
          $("#twentyseven7").hasClass("o7") &&
          $("#thirtyfour7").hasClass("o7") &&
          $("#fourtyone7").hasClass("o7") &&
          $("#fourtyeight7").hasClass("o7")) ||
        ($("#seven7").hasClass("o7") &&
          $("#fourteen7").hasClass("o7") &&
          $("#twentyone7").hasClass("o7") &&
          $("#twentyeight7").hasClass("o7") &&
          $("#thirtyfive7").hasClass("o7") &&
          $("#fourtytwo7").hasClass("o7") &&
          $("#fourtynine").hasClass("o7")) ||
        ($("#one7").hasClass("o7") &&
          $("#nine7").hasClass("o7") &&
          $("#seventeen7").hasClass("o7") &&
          $("#twentyfive7").hasClass("o7") &&
          $("#thirtythree7").hasClass("o7") &&
          $("#fourtyone7").hasClass("o7") &&
          $("#fourtynine7").hasClass("o7")) ||
        ($("#seven7").hasClass("o7") &&
          $("#thirteen7").hasClass("o7") &&
          $("#nineteen7").hasClass("o7") &&
          $("#twentyfive7").hasClass("o7") &&
          $("#thirtyone7").hasClass("o7") &&
          $("#thirtyseven7").hasClass("o7") &&
          $("#fourtythree7").hasClass("o7"))
      ) {
        // reset all timer
        clearInterval(tO7);
        clearInterval(tX7);
        document.getElementById("pro-7").innerHTML = 0;
        document.getElementById("prx-7").innerHTML = 0;
        timero7 = 1;
        timerx7 = 1;

        $("#game-7 li").text("+");
        $("#game-7 li").removeClass("disable");
        $("#game-7 li").removeClass("o7");
        $("#game-7 li").removeClass("x7");
        $("#game-7 li").removeClass("btn-primary");
        $("#game-7 li").removeClass("btn-info");
        alert("O wins");
        count7 = 0;
        o_win7++;
        $("#o_win7").text(o_win7);
        // start counting time for O
        tO7 = setInterval(() => {
          document.getElementById("pro-7").innerHTML = timero7++;
        }, 1000);
      }
    } else {
      // stop time X
      clearInterval(tX7);

      // continue time O
      tO7 = setInterval(() => {
        document.getElementById("pro-7").innerHTML = timero7++;
      }, 1000);

      count7++;
      // clearInterval(tO);
      $(this).text(x7);
      $(this).addClass("disable x7 btn-info");
      if (
        ($("#one7").hasClass("x7") &&
          $("#two7").hasClass("x7") &&
          $("#three7").hasClass("x7") &&
          $("#four7").hasClass("x7") &&
          $("#five7").hasClass("x7") &&
          $("#six7").hasClass("x7") &&
          $("#seven7").hasClass("x7")) ||
        ($("#eight7").hasClass("x7") &&
          $("#nine7").hasClass("x7") &&
          $("#ten7").hasClass("x7") &&
          $("#eleven7").hasClass("x7") &&
          $("#twelve7").hasClass("x7") &&
          $("#thirteen7").hasClass("x7") &&
          $("#fourteen7").hasClass("x7")) ||
        ($("#fifteen7").hasClass("x7") &&
          $("#sixteen7").hasClass("x7") &&
          $("#seventeen7").hasClass("x7") &&
          $("#eighteen7").hasClass("x7") &&
          $("#nineteen7").hasClass("x7") &&
          $("#twenty7").hasClass("x7") &&
          $("#twentyone7").hasClass("x7")) ||
        ($("#twentytwo7").hasClass("x7") &&
          $("#twentythree7").hasClass("x7") &&
          $("#twentyfour7").hasClass("x7") &&
          $("#twentyfive7").hasClass("x7") &&
          $("#twentysix7").hasClass("x7") &&
          $("#twentyseven7").hasClass("x7") &&
          $("#twentyeight7").hasClass("x7")) ||
        ($("#twentynine7").hasClass("x7") &&
          $("#thirty7").hasClass("x7") &&
          $("#thirtyone7").hasClass("x7") &&
          $("#thirtytwo7").hasClass("x7") &&
          $("#thirtythree7").hasClass("x7") &&
          $("#thirtyfour7").hasClass("x7") &&
          $("#thirtytfive7").hasClass("x7")) ||
        ($("#thirtysix7").hasClass("x7") &&
          $("#thirtyseven7").hasClass("x7") &&
          $("#thirtyeight7").hasClass("x7") &&
          $("#thirtynine7").hasClass("x7") &&
          $("#fourty7").hasClass("x7") &&
          $("#fourtyone7").hasClass("x7") &&
          $("#fourtytwo7").hasClass("x7")) ||
        ($("#fourtythree7").hasClass("x7") &&
          $("#fourtyfour7").hasClass("x7") &&
          $("#fourtyfive7").hasClass("x7") &&
          $("#fourtysix7").hasClass("x7") &&
          $("#fourtyseven7").hasClass("x7") &&
          $("#fourtyeight7").hasClass("x7") &&
          $("#fourtynine7").hasClass("x7")) ||
        ($("#one7").hasClass("x7") &&
          $("#eight7").hasClass("x7") &&
          $("#fifteen7").hasClass("x7") &&
          $("#twentytwo7").hasClass("x7") &&
          $("#twentynine7").hasClass("x7") &&
          $("#thirtysix7").hasClass("x7") &&
          $("#fourtythree7").hasClass("x7")) ||
        ($("#two7").hasClass("x7") &&
          $("#nine7").hasClass("x7") &&
          $("#sixteen7").hasClass("x7") &&
          $("#twentythree7").hasClass("x7") &&
          $("#thirty7").hasClass("x7") &&
          $("#thirtyseven7").hasClass("x7") &&
          $("#fourtyfour7").hasClass("x7")) ||
        ($("#three7").hasClass("x7") &&
          $("#ten7").hasClass("x7") &&
          $("#seventeen7").hasClass("x7") &&
          $("#twentyfour7").hasClass("x7") &&
          $("#thirtyone7").hasClass("x7") &&
          $("#thirtyeight7").hasClass("x7") &&
          $("#fourtyfive7").hasClass("x7")) ||
        ($("#four7").hasClass("x7") &&
          $("#eleven7").hasClass("x7") &&
          $("#eighteen7").hasClass("x7") &&
          $("#twentyfive7").hasClass("x7") &&
          $("#thirtytwo7").hasClass("x7") &&
          $("#thirtynine7").hasClass("x7") &&
          $("#fourtysix7").hasClass("x7")) ||
        ($("#five7").hasClass("x7") &&
          $("#twelve7").hasClass("x7") &&
          $("#nineteen7").hasClass("x7") &&
          $("#twentysix7").hasClass("x7") &&
          $("#thirtythree7").hasClass("x7") &&
          $("#fourty7").hasClass("x7") &&
          $("#fourtyseven7").hasClass("x7")) ||
        ($("#six7").hasClass("x7") &&
          $("#thirteen7").hasClass("x7") &&
          $("#twenty7").hasClass("x7") &&
          $("#twentyseven7").hasClass("x7") &&
          $("#thirtyfour7").hasClass("x7") &&
          $("#fourtyone7").hasClass("x7") &&
          $("#fourtyeight7").hasClass("x7")) ||
        ($("#seven7").hasClass("x7") &&
          $("#fourteen7").hasClass("x7") &&
          $("#twentyone7").hasClass("x7") &&
          $("#twentyeight7").hasClass("x7") &&
          $("#thirtyfive7").hasClass("x7") &&
          $("#fourtytwo7").hasClass("x7") &&
          $("#fourtynine").hasClass("x7")) ||
        ($("#one7").hasClass("x7") &&
          $("#nine7").hasClass("x7") &&
          $("#seventeen7").hasClass("x7") &&
          $("#twentyfive7").hasClass("x7") &&
          $("#thirtythree7").hasClass("x7") &&
          $("#fourtyone7").hasClass("x7") &&
          $("#fourtynine7").hasClass("x7")) ||
        ($("#seven7").hasClass("x7") &&
          $("#thirteen7").hasClass("x7") &&
          $("#nineteen7").hasClass("x7") &&
          $("#twentyfive7").hasClass("x7") &&
          $("#thirtyone7").hasClass("x7") &&
          $("#thirtyseven7").hasClass("x7") &&
          $("#fourtythree7").hasClass("x7"))
      ) {
        // reset all time
        clearInterval(tO7);
        clearInterval(tX7);
        document.getElementById("pro-7").innerHTML = 0;
        document.getElementById("prx-7").innerHTML = 0;
        timero7 = 1;
        timerx7 = 1;

        $("#game-7 li").text("+");
        $("#game-7 li").removeClass("disable");
        $("#game-7 li").removeClass("o7");
        $("#game-7 li").removeClass("x7");
        $("#game-7 li").removeClass("btn-primary");
        $("#game-7 li").removeClass("btn-info");
        alert("X wins");
        count7 = 0;
        x_win7++;
        $("#x_win7").text(x_win7);
        // start counting time for O
        tO7 = setInterval(() => {
          document.getElementById("pro-7").innerHTML = timero7++;
        }, 1000);
      }
    }
  });

  $("#reset-7").click(function() {
    clearInterval(tO7);
    clearInterval(tX7);
    document.getElementById("pro-7").innerHTML = 0;
    document.getElementById("prx-7").innerHTML = 0;
    timero7 = 1;
    timerx7 = 1;
    o_win7 = 0;
    x_win7 = 0;
    $("#x_win7").text(x_win7);
    $("#o_win7").text(o_win7);
    $("#game-7 li").text("+");
    $("#game-7 li").removeClass("disable");
    $("#game-7 li").removeClass("o7");
    $("#game-7 li").removeClass("x7");
    $("#game-7 li").removeClass("btn-primary");
    $("#game-7 li").removeClass("btn-info");
    count7 = 0;
    // start counting time for O
    tO7 = setInterval(() => {
      document.getElementById("pro-7").innerHTML = timero7++;
    }, 1000);
  });
});

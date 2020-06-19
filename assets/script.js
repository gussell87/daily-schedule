$('#test').html("Test");
localStorage.content = $('#test').html();
$('#test').html(localStorage.content);
console.log(localStorage)

$(document).ready(function () {
    //date
    date = moment().format("dddd,MMM Do");

    //time
    hour = parseInt(moment().format("HH"));
    hour = 24;

    //day
    currentDay = $("#currentDay")

    //set date
    currentDay.text(date);




    for (let i = 9; i < (17); i++) {
        //gets div with time
        var div = $("div").find(`[data-time="${i}"]`);
        //gets text out of local storage
        var savedText = localStorage.getItem(i);
        //sets text area
        var textArea = $("textarea#" + i + "-text");
        //saves text in text area
        textArea.val(savedText);

        //check if text is saving
        //console.log(savedText);

        var btn = $(`button#${i}-saveBtn`);

        //btn click
        btn.click(function () {
            //finds text area (needs to happen again?)
            var textArea = $("textarea#" + i + "-text");

            //check text in text area
            console.log(textArea.val());

            //saves the text from textarea to local storage
            localStorage.setItem(i, textArea.val());
        })

        //set classes based on past present & future
        if (i < hour) {
            $(".row").addClass("past")
            console.log("past");
        }

        else if (i = hour) {
            $(".row").addClass("present")
            console.log("present");
        }

        else {
            $(".row").addClass("future")
            console.log("future");
        }
    }
})
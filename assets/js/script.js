
// Create a variable that sets to moment(); 
var today = moment();
console.log(today);

// Create an event handler for the saveBtn to save info 
$(".saveBtn").click(saveClick); 

// Save the user input 
function saveClick(event){
    // alert(event.target.value);
    var input = $(`#text${event.target.value}`).val();
    localStorage.setItem(event.target.value, input);
}

//Show the current day, date, time using Moment
$("#currentDay").text(today.format("ddd, MMMM, YYY, h:mm:ss"));

// use $ to alias and call the hours in text area based in id in html
$("#text9").val(localStorage.getItem("9"))
$("#text10").val(localStorage.getItem("10"))
$("#text11").val(localStorage.getItem("11"))
$("#text12").val(localStorage.getItem("12"))
$("#text13").val(localStorage.getItem("13"))
$("#text14").val(localStorage.getItem("14"))
$("#text15").val(localStorage.getItem("15"))
$("#text16").val(localStorage.getItem("16"))
$("#text17").val(localStorage.getItem("17"))

// create a varible (present) for the for loop to determine if we are in the past, present, future part of the work schedule

var present = moment().hours(); 

for (let i = 0; i < 9; i++) {
  
    
    if (present > $(`#text${i+9}`).attr("data-hour"))
    {
        $(`#text${i+9}`).addClass("past");
        //alert("greater than");
    }
    else if (present < $(`#text${i+9}`).data("data-hour"))
    {
        $(`#text${i+9}`).addClass("present");
    }
    else 
    {
        $(`#text${i+9}`).addClass("future");
    }

}

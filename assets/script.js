// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

// var saveBlock = document.getElementById("save").parentElement.nodeName
$(()=> {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  $("button").click(function(){
    console.log($(this).closest("div").attr("id"));
    console.log($(this).closest("div").children("textarea").val());
    localStorage.setItem($(this).closest("div").attr("id"), $(this).closest("div").children("textarea").val());
  });

  var currentDAY = dayjs().format('dddd, MMMM D YYYY');
  $('#currentDay').text(currentDAY);

  //make get 24 hour from day js 
  var timeID = (dayjs().format('h'))
  var AMPM = dayjs().format("A")
  if(AMPM == "PM"){
    timePull=timeID+12
    console.log(timePull)
  }
  else{
    timePull=timeID
  }
    
  //get ALL ID values undr timeblock class
  var list =document.querySelectorAll("div.time-block[id]")
  
  //run through list from querySelectorAll
  for (let i = 0; i < list.length; i++) {
    //splitID to compare with time js not hours -
    var listEdit = list[i].id
    var listSlice = listEdit.slice(5);

    //if based on time for css
    if(timePull < Number(listSlice)){
      console.log(Number(listSlice), timeID ,"less")
      document.getElementById(listEdit).style.backgroundColor = "#d3d3d3";
      document.getElementById(listEdit).style.color = "white";
    }
    else if (timePull > Number(listSlice)){
      console.log(Number(listSlice), timeID, "more")
      document.getElementById(listEdit).style.backgroundColor = "#77dd77";
      document.getElementById(listEdit).style.color = "white";
    }
    else if (timePull == Number(listSlice)){
      console.log(Number(listSlice), timeID, "equal")
      document.getElementById(listEdit).style.backgroundColor = "#ff6961";
      document.getElementById(listEdit).style.color = "white";
    }
  }
  
  for (let i = 0; i < list.length; i++) {
    console.log(document.getElementsByTagName("textarea")[i].textContent)
    document.getElementsByTagName("textarea")[i].textContent = localStorage.getItem(list[i].id)
    // console.log(localStorage.getItem(list[i].id))
  }
});


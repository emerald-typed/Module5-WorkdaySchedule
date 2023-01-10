
$(()=> {
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
  console.log(AMPM)
  if(AMPM == "PM"){
    timePull=Number(timeID)+12;
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
    if(timePull > Number(listSlice)){
      console.log(Number(listSlice), timeID ,"less")
      document.getElementById(listEdit).style.backgroundColor = "#d3d3d3";
      document.getElementById(listEdit).style.color = "white";
    }
    else if (timePull < Number(listSlice)){
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
    document.getElementsByTagName("textarea")[i].textContent = localStorage.getItem(list[i].id)
  }
});


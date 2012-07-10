$(document).ready(function(){
  $("#todo").focus()
  $("form").submit(function(e){
    e.preventDefault()
    var todo="<tr id=\""
    todo += $("#todo").val()

    todo += "\"><td>"
    todo += "<input type=\"checkbox\" name=\""
    todo += $("#todo").val()

    todo += "\" value=\"todo\"></td><td>"
    todo += "<p id = \""
    todo += $("#todo").val()+"text"
    todo += "\">"
    todo += $("#todo").val()
    todo += "</p></td></tr>"
    $("#table1").append(todo)
    $("#todo").val("")
    $("#todo").focus()
  })

  $("#todo").keypress(function(){
     if ($("#todo").val().length == 0 )
     {
     $("#todo").animate({
            width: "500px"
     });
     }
  })
  $('[type=checkbox]').live("change",function(){
      if ($(this).attr("value") == "todo")
      {

        $(this).attr("value","done")
        $("#"+$(this).attr("name")+"text").removeClass("nonstrike")
        $("#"+$(this).attr("name")+"text").addClass("strike")
        $(this).attr("checked", true)
        var todo = "<tr id=\""
        todo += $(this).attr("name")
        todo += "\">"
        todo += $("#"+$(this).attr("name")).html()
        todo += "</tr>"
        $("#table2").append(todo)
        $("#table1 #"+$(this).attr("name")).remove()
        $("#todo").val("")
        $("#todo").focus()
      }
      else
      {
        $(this).attr("value","todo")
        $("#"+$(this).attr("name")+"text").removeClass("strike")
        $("#"+$(this).attr("name")+"text").addClass("nonstrike")

        $(this).attr("checked", false)
        var to = "<tr id=\""
        to += $(this).attr("name")
        to += "\">"
        to += $("#"+$(this).attr("name")).html()
        to += "</tr>"
        $("#table2 #"+$(this).attr("name")).remove()
        $("#table1").append(to)
      }
  })
})

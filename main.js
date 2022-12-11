$(document).ready(function()
{
    $("#searsh").keyup(function(){
        var text = $("#searsh").val();
        if(text == ""){
            $("").html("");
        }
        else{
            $.ajax({
                type: "POST",
                url: "handler.php",
                data: {
                    search: text
                },
                success: function(response) {
                    $("#display").html(response).show();
                }
            });
        }
    });
});

function fill(Value){
    $('#search').val(Value);

    $('#display').hide();
}
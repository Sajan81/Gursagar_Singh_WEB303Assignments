 $(document).ready(function(){
    $("#prospect").click(function(event){
        event.preventDefault();
        loadContent("prospect.html")
    });
    $("#convert").click(function(event){
        event.preventDefault();
        loadContent("prospect.html")
    });
    $("#retain").click(function(event){
        event.preventDefault();
        loadContent("prospect.html")
    });
 })
 function loadContent(page){
    $("#content").fadeOut(400, function(){
        $.ajax({
            url: page,
            type: "GET",
            DataType: "html",
            success: function(data){
                $("#content").html(data);
                $("#content").fadeIn(400);
            },
            error: function(){
                console.error("Error loading content");
            },
        });
    })
 }
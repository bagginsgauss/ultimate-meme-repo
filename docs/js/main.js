function errorHandler(e) {
    var msg = 'CU';
    // switch (e.code) {
    //     case FileError.QUOTA_EXCEEDED_ERR:
    //         msg = 'QUOTA_EXCEEDED_ERR';
    //         break;
    //     case FileError.NOT_FOUND_ERR:
    //         msg = 'NOT_FOUND_ERR';
    //         break;
    //     case FileError.SECURITY_ERR:
    //         msg = 'SECURITY_ERR';
    //         break;
    //     case FileError.INVALID_MODIFICATION_ERR:
    //         msg = 'INVALID_MODIFICATION_ERR';
    //         break;
    //     case FileError.INVALID_STATE_ERR:
    //         msg = 'INVALID_STATE_ERR';
    //         break;
    //     default:
    //         msg = 'Unknown Error';
    //         break;
    // };

    console.log('Error: ' + msg);
}

function createImages() {
    let html = "";
    let src = "";

    for (i=1; i < 28; i++) {
        src = "../Memes/other/" + i + ".jpg";
        html += "<img class='card materialboxed' width='90%' src='" + src + "'></img>"

    }

    $("#imgContainer").append(html);
}

$(document).ready(function (){
    //createImages();
    $(".materialboxed").materialbox();

    $.ajax({
        url:"http://0.0.0.0:8080/",
        type: "GET",
        headers: {
            "Access-Control-Allow-Origin": "*",
        //     "Access-Control-Allow-Methods": "POST, GET, OPTIONS",
        //     "Access-Control-Allow-Headers": "X-PINGOTHER, Content-Type",
        //     "Access-Control-Max-Age": "86400"
        },

        beforeSend: function( xhr ) {
            xhr.overrideMimeType( "text/plain; charset=x-user-defined" );
        }

    }).done(function(data) {
        $(data).find("td > a").each(function(){
            // will loop through
            alert("Found a file: " + $(this).attr("href"));
         });

    }).fail(function(data) {
        console.log("ERROR");
        console.log(data);
    });

});

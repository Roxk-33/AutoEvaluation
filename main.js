/**
 * Created by hao on 2017/5/24.
 */
function autoEva(upper,lower) {

    var table1 = $("#table1").find("td");
    table1.each(function (index,elem) {
        if(elem.children.length >= 2){
            var oInput = elem.getElementsByTagName("input");
            var r = Math.floor(Math.random()*(upper - lower)) + lower;
            while(oInput[r].type !== "radio"){
                r = Math.floor(Math.random()*(upper - lower)) + lower;
            }
            oInput[r].checked = "true";
        }
    })

}



chrome.extension.onRequest.addListener(
    function(request, sender, sendResponse) {
        autoEva(request.upper_val,request.lower_val);

        sendResponse({farewell: "goodbye"});

            // sendResponse({});

    }
);
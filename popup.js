/**
 * Created by hao on 2017/5/24.
 */
$().ready(function () {

    var upper = $(".upper"),
        lower = $(".lower"),
        upper_val = 6,
        lower_val = 1;

    lower.change(function(){
        console.log(lower.val())
        if( lower.val() > upper_val){
            $(".lower_warm").html("下限分数应该比上限分数低");
            lower.val(lower_val)
        }else {
            $(".lower_warm").html("");
            lower_val = lower.val();
        }
    });
    upper.change(function(){

        if(upper.val() < lower_val){
            $(".upper_warm").html("上限分数应该比下限分数高");
            upper.val(upper_val)
        }else {
            $(".upper_warm").html("");
            upper_val = upper.val();
        }
    });

    $(".sub").click(function () {

        chrome.tabs.getSelected(null, function(tab) {
            chrome.tabs.sendRequest(tab.id, {lower_val : lower_val,upper_val:upper_val}, function(response) {
                console.log(response.farewell)
            });
        });
    })
})




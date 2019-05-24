$(document).ready(function () {
    if(localStorage.hasOwnProperty("counter"))
    {
        var counter =localStorage.getItem("counter");
        for(var i=0;i<counter;i++)
        {
            $(".todo").append(localStorage.getItem("key"+i));
        }
    }
    else
    {
        counter=0;
    }


    $("#add").click(function () {
        var data = $("#name").val();
        var key = "key"+counter;

        data = "<li id='"+key+"' class='item'>"+data+"<button >"+"删除"+"</button>"+"</li>";
        //data = "<li id='"+key+"' class='item'>"+data+"</li>";
        console.log(data);
        $(".todo").append(data);



         counter++;
        console.log(key);
        localStorage.setItem("counter",counter);
        localStorage.setItem(key,data);
        location.reload();
    })

    $(".item").click(function (e) {
         var athis=e.currentTarget.attributes[0].value;
        $("#"+athis).remove();
        localStorage.removeItem(athis);
    })



});
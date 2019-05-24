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
        // var btn="<span id=''>"+ "<button>"+"删除"+"</button>"+"</span>";
        var btn= "<button>"+"删除"+"</button>";


        data = "<li id='"+key+"' class='item'>"+data+btn+"</li>";
        //data = "<li id='"+key+"' class='item'>"+data+"</li>";
        // console.log(item);

        console.log(data);
        $(".todo").append(data);
        counter++;
        localStorage.setItem("counter",counter);
        localStorage.setItem(key,data);
        location.reload();
    })



    // $(".item").click(function (e) {
    //         counter--;
    //         localStorage.setItem("counter",counter);
    //         console.log(e);
    //         var athis=e.currentTarget.attributes[0].value;
    //         $("#"+athis).remove();
    //         localStorage.removeItem(athis);
    //
    // })
    $("button").click(function (e) {
        counter--;
        localStorage.setItem("counter",counter);
        console.log(e);
        var athis=e.currentTarget.parentElement.attributes[0].value;
        console.log(athis);
        $("#"+athis).remove();
        localStorage.removeItem(athis);

    })










})
$(document).ready(function(){
    /* edu_01 */
    // data() 메서드 : 태그 내부에 데이터 값을 저장하여 불러오는 역할을 담당, 노출 없음
    // #1 셋팅(저장하기)
    // $("#edu_01 span").attr("name_01", "홍영만");     /* 개발자 모드에서 노출 */
    // $("#edu_01 span").attr({"name_01":"홍영만", "region":"경기"});
    $("#edu_01 span").data("name", "홍길동");           /* 개발자 모드에서 노출 안됨 */
    $("#edu_01 span").data({"age":"20세", "location":"서울"});

    // #2 불러오기
    var $dataName=$("#edu_01 span").data("name");
    console.log($dataName); // 내부 데이터의 name 항목값인 홍길동 불러오기
    var $dataAge=$("#edu_01 span").data("age");
    console.log($dataAge); // 내부 데이터의 age 항목값인 홍길동 불러오기
    var $dataLocation=$("#edu_01 span").data("location");
    console.log($dataLocation); // 내부 데이터의 location 항목값인 홍길동 불러오기

    /* ex_01 */
    $("#ex_01 p").data({"id":"gtx", "name":"train", "location":"Seoul"});
    var $dataId=$("#ex_01 p").data("id");
    var $dataName=$("#ex_01 p").data("name");
    var $dataLocation=$("#ex_01 p").data("location");
    $("#ex_01 .data-id").text($dataId);
    $("#ex_01 .data-name").text($dataName);
    $("#ex_01 .data-location").text($dataLocation);

    /* edu_02 */
    // removedata() 메서드 : 기존의 저장된 데이터를 삭제하는 역할을 담당
    // #1 셋팅(저장하기)
    $("#edu_02 span").data({"name":"강하늘", "age":"32", "location":"Seoul"});
    
    // #2 불러오기
    var $dataName=$("#edu_02 span").data("name");
    var $dataAge=$("#edu_02 span").data("age");
    var $dataLocation=$("#edu_02 span").data("location");

    // #03 출력하기
    console.log($dataName);
    console.log($dataAge);
    console.log($dataLocation);

    // #03 일부 제거하기
    $("#edu_02 span").removeData("age");
    var $result_dataAge=$("#edu_02 span").data("age");
    console.log($result_dataAge);

    /* ex_02 */
    // 사용자의 행동에 의한 이미지 불러오기
    var $brand_arr=[
        {img:"logo-01.jpg", name:"Pixar"},
        {img:"logo-02.jpg", name:"Disney"}
    ];

    var $p_arr=[
        {img:"anmation-01.jpg", name:"Car"},
        {img:"anmation-02.jpg", name:"Toy Story"}, 
        {img:"anmation-03.jpg", name:"Guitar Boy"}
    ];

    var $d_arr=[
        {img:"d-ani-01.jpg", name:"Cow"},
        {img:"d-ani-02.jpg", name:"Destiny"}, 
        {img:"d-ani-03.jpg", name:"Tinker Bell"}
    ];

    $("#ex_02 .logo li").each(function(index){
        $(this).css("background-image", "url(img/"+$brand_arr[index].img+")"); // 순차적 접근 과정상 이미지 스타일 적용
        $(this).data("name", $brand_arr[index].name); // 순차적 접근 과정상 data의 속성으로 각각의 문자형 데이터를 저장        
    });

    $("#ex_02 .sub-box .animation-p li").each(function(index){
        $(this).css("background-image", "url(img/"+$p_arr[index].img+")");
        $(this).data("name", $p_arr[index].name);
    });

    $("#ex_02 .sub-box .animation-d li").each(function(index){
        $(this).css("background-image", "url(img/"+$d_arr[index].img+")");
        $(this).data("name", $d_arr[index].name);
    });

    $("#ex_02 .logo li").click(function(){
        var $brand=$(this).data("name");
        $("#ex_02 p .brand").text($brand);
        var $index=$(this).index();
        $("#ex_02 .sub-box ul").removeClass("active");
        $("#ex_02 .sub-box ul").eq($index).addClass("active");
        $("#ex_02 p .detail").text("000"); // 상위항목을 변경시 서브항목을 초기화시키는 역할
    });

    $("#ex_02 .sub-box ul li").click(function(){
        var $animation=$(this).data("name");
        $("#ex_02 p .detail").text($animation);
    });

    /* 
    var $logo_arr=[
        ["logo-01.jpg", "Pixar"], 
        ["logo-02.jpg", "Disney"]
    ];

    var $animation_p_arr=[
        ["anmation-01.jpg", "Car"], 
        ["anmation-02.jpg", "Toy Story"], 
        ["anmation-03.jpg", "Guitar Boy"]
    ];

    var $animation_d_arr=[
        ["d-ani-01.jpg", "Cow"],
        ["d-ani-02.jpg", "Destiny"],
        ["d-ani-03.jpg", "Tinker Bell"]
    ];

    $("#ex_02 .logo li").each(function(num){
        $(this).css("background", "url(img/"+$logo_arr[num][0]+")");
        $(this).data("name", $logo_arr[num][1]);
        var $dataName=$(this).data("name");
        // $("#ex_02 p .brand").text($dataName);
    });

    $("#ex_02 .sub-box .animation-p li").each(function(num){
        $(this).css("background", "url(img/"+$animation_p_arr[num][0]+")");
        $(this).data("name", $animation_p_arr[num][1]);
        var $dataName=$(this).data("name");
        // $("#ex_02 p .detail").text($dataName);
    });

    $("#ex_02 .sub-box .animation-d li").each(function(num){
        $(this).css("background", "url(img/"+$animation_d_arr[num][0]+")");
        $(this).data("name", $animation_d_arr[num][1]);
        var $dataName=$(this).data("name");
        // $("#ex_02 p .detail").text($dataName);
    });

    $("#ex_02 .logo li").click(function(){
        var $index=$("#ex_02 .logo li").index();
    });
     */
});
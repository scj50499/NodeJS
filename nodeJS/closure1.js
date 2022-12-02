function outer() {
    var cnt = 0;
    var str1 = "";
    function outer1() {
        var str2 = "";
        cnt += 1;
        str1 = "outercounter = " + cnt + "from outer1 " ;
        console.log(str1);
        function inner() {
            cnt += 1;
            str2= "innercounter = " + cnt + "from inner ";
            console.log(str2);
        };
        inner();
    };
    outer1();
};
outer();
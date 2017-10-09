Zepto(function ($) {
    var week = ['周日', '周一', '周二', '周三', '周四', '周五', '周六'];
    var getWeek = function (date) {
        var i = date.getDay()
        return week[i];
    }
    var getDateDiff = function (sDate1, sDate2) {
        var aDate, oDate1, oDate2, iDays
        oDate1 = new Date((sDate1.getMonth() + 1) + '/' + sDate1.getDate() + '/' + sDate1.getFullYear())    //转换为12-18-2002格式  
        oDate2 = new Date((sDate2.getMonth() + 1) + '/' + sDate2.getDate() + '/' + sDate2.getFullYear())
        iDays = parseInt(Math.abs(oDate1 - oDate2) / 1000 / 60 / 60 / 24)    //把相差的毫秒数转换为天数  
        return iDays
    }
    var GetDateStr = function (AddDayCount) {
        var dd = new Date();
        dd.setDate(dd.getDate() + AddDayCount);//获取AddDayCount天后的日期 
        var y = dd.getFullYear();
        var m = dd.getMonth() + 1;//获取当前月份的日期 
        var d = dd.getDate();
        return y + '/' + m + '/' + d;
    }
    var dateNow = new Date(); //转换成时间对象，这就简单了
    var year = dateNow.getFullYear();  //获取年
    var mouth = dateNow.getMonth() + 1;
    var data = dateNow.getDate();
    if (mouth < 10) { mouth = '0' + (dateNow.getMonth() + 1); } else { data = dateNow.getDate(); }
    if (dateNow.getDate() < 10) { data = '0' + dateNow.getDate(); } else { data = dateNow.getDate(); }
    var endDate = new Date(GetDateStr(1));
    var eyear = endDate.getFullYear();  //获取年
    var emouth = endDate.getMonth() + 1;
    var edata = endDate.getDate();
    if (emouth < 10) { emouth = '0' + (endDate.getMonth() + 1); } else { edata = endDate.getDate(); }
    if (endDate.getDate() < 10) { edata = '0' + endDate.getDate(); } else { edata = endDate.getDate(); }

    var start = year + '-' + mouth + '-' + data;
    var end = eyear + '-' + emouth + '-' + edata;
    $("#startTime").val(mouth + '月' + data + '日');
    $("#startWeek").text(getWeek(dateNow));
    $("#endTime").val(emouth + '月' + edata + '日');
    $("#endWeek").text(getWeek(endDate));
    var enterDate = new Date();
    var liveDate = new Date((enterDate / 1000 + 86400) * 1000);
    $("#startTime").attr("currentData", enterDate);
    $("#endTime").attr("currentData", liveDate);
    $("#startTime").calendar({
        minDate: GetDateStr(0),
        value: [start],
        dateFormat: "mm月dd日",
        onChange: function (p, values, displayValues) {
            var currentDate = new Date(values[0]);
            endDate.setFullYear(currentDate.getFullYear());
            endDate.setMonth(currentDate.getMonth());
            endDate.setDate(currentDate.getDate() + 1);
            eyear = endDate.getFullYear();  //获取年
            emouth = endDate.getMonth() + 1;
            edata = endDate.getDate();
            if (emouth < 10) { emouth = '0' + (endDate.getMonth() + 1); } else { edata = endDate.getDate(); }
            if (endDate.getDate() < 10) { edata = '0' + endDate.getDate(); } else { edata = endDate.getDate(); }
            end = eyear + '-' + emouth + '-' + edata;
            $("#endTime").val(emouth + '月' + edata + '日');
            $("#endWeek").text(getWeek(endDate));
            $("#endTime").attr("currentData", endDate);
            $("#nightCount").text("共1晚");
            $("#endTime").unbind();
            $("#endTime").calendar({
                minDate: endDate,
                value: [end],
                dateFormat: "mm月dd日",
                onChange: function (p, values, displayValues) {
                    var currentDate = new Date(values[0]);
                    $("#endTime").attr("currentData", currentDate);
                    $("#endWeek").text(getWeek(currentDate));
                    if ($("#startTime").attr("currentData") && $("#startTime").attr("currentData").length > 0) {
                        $("#nightCount").text("共" + getDateDiff(new Date($("#startTime").attr("currentData")), currentDate) + "晚")
                    }
                }
            });
            $("#startTime").attr("currentData", currentDate);
            $("#startWeek").text(getWeek(currentDate));
        }
    });
    $("#endTime").calendar({
        minDate:endDate,
        value: [end],
        dateFormat: "mm月dd日",
        onChange: function (p, values, displayValues) {
            var currentDate = new Date(values[0]);
            $("#endTime").attr("currentData", currentDate);
            $("#endWeek").text(getWeek(currentDate));
            if ($("#startTime").attr("currentData") && $("#startTime").attr("currentData").length > 0) {
                $("#nightCount").text("共" + getDateDiff(new Date($("#startTime").attr("currentData")), currentDate) + "晚")
            }
        }
    });
});
//If there is nothing in 'LocalStorage', sets the 'list' to an empty array
var tasks =JSON.parse(localStorage.getItem ("tasks")) || [];

//color-flag the tasks based on the timestamp (past, present, future)
var auditTasks = function () {
    $(".hour").each(function (index) {
        var taskTimestampHr = moment($(this).text(), "h A");
        var nowTimestampHr = moment().hour("h A");
        var taskRowEl = $(this).parent().children(".description");

        // remove all classes
        taskRowEl.removeClass("future past present");

        if (taskTimestampHr.isAfter(nowTimestampHr)) {
            taskRowEl.addClass("future");
        } else if (taskTimestampHr.isSame(nowTimestampHr, "hour")) {
            taskRowEl.addClass("present");
        } else {
            taskRowEl.addClass("past");
        }
    });
};
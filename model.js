var model = (function () {
    var students = [];

    var autoCompleteList = new Array();

    var getAll = function () {
        $.getJSON("students.json", function (data) {
            $.each(data, function (i, v) {
                if ($.inArray(v.LastName, autoCompleteList) == -1) {
                    autoCompleteList.push(v.LastName);
                }
                students.push(v);
            })
        });
    }

    return {
        getAll: getAll,
        students: students,
        autoCompleteList: autoCompleteList
    }
})();

model.getAll();
var controller = (function () {
    var counter = 0;

    var searchListener = function () {
        $('#search').click(function () {
            if ($('#searchBox').is(':invalid')) {
                return;
            }
            var data = $('#searchBox').val();
            counter = 0;
            if (data !== "") {
                view.clearStudents();
                view.clearGrades();
                view.noGrades();
                search(data);
                if (counter === 0) {
                    view.noStudents();
                }
            } else {
                view.clearStudents();
                view.clearGrades();
                view.noGrades();
                view.noStudents();
            }
            this.blur();
        });

        $('#searchBox').keyup(function (event) {
            if (event.keyCode === 13) {
                $('#search').click();
                this.blur();
            }            
        });
    }

    var search = function (data) {
        $.each(model.students, function (i, v) {
            if (v.LastName.toLowerCase() === data.toLowerCase()) {
                view.displayStudent(v, i);
                counter++;
            }
        })

        listListener();
    }

    var listListener = function () {
        $('#student-list li').click(function () {
            if (counter > 0) {
                selectStudent(this.id);
            } else {
                return;
            }
        });
    }

    var selectStudent = function (id) {
        view.clearGrades();
        view.displayGrades(id);
    }

    return {
        searchListener: searchListener,
        listListener: listListener
    }
})();

controller.searchListener();
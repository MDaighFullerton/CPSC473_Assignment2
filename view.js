var view = (function () {
    var clearStudents = function () {
        $('.students li').remove();
    }

    var displayStudent = function (data, id) {
        $('.students').append(
            $('<li>').append(
                data.FirstName + " " + data.LastName
            ).addClass('student-select')
            .attr('id', id)
        );        
    }

    var noStudents = function () {
        $('.students').append(
            $('<li>').append(
                "No students found"
            )
        );
    }

    var clearGrades = function () {
        $('.grades-table tbody tr').remove();

        $('.student-grades .header').text("Grades for {{studentName}}:");
    }

    var displayGrades = function (id) {
        var data = model.students[id];

        var header = $('.student-grades .header').text().replace('{{studentName}}', data.FirstName + ' ' + data.LastName);
        $('.student-grades .header').text(header);

        $.each(data.Classes, function (i, v) {
            $('.grades-table tbody').append(
                $('<tr>').append(
                    $('<td>').append(
                        v.Course
                    ),
                    $('<td>').append(
                        v.Grade
                    )
                )
            );
        }); 
    }

    var autoComplete = function () {
        $('#searchBox').autocomplete({
            source: model.autoCompleteList,
            minLength: 2
        })
    }

    var noGrades = function () {
        $('.grades-table tbody').append(
            $('<tr>').append(
                $('<td>').append(
                    "No student selected"
                ).attr('colspan', 2)
            )
        );
    }

    return {
        displayStudent: displayStudent,
        displayGrades: displayGrades,
        clearStudents: clearStudents,
        clearGrades: clearGrades,
        noStudents: noStudents,
        noGrades: noGrades,
        autoComplete: autoComplete
    }
})();

view.autoComplete();
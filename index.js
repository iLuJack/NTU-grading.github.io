// Grade order mapping for sorting
const gradeOrder = {
    'A+': 1, 'A': 2, 'A-': 3,
    'B+': 4, 'B': 5, 'B-': 6,
    'C+': 7, 'C': 8, 'C-': 9,
    'D+': 10, 'D': 11, 'D-': 12,
    'F': 13
};

// Custom sorting function for grades
$.fn.dataTable.ext.type.order['grade-pre'] = function(data) {
    return gradeOrder[data] || 999; // Unknown grades go to the end
};

// Function to get grade CSS class
function getGradeClass(grade) {
    return 'grade-' + grade.replace('+', '-plus').replace('-', '-minus');
}

// Load and parse CSV data
Papa.parse('data.csv', {
    download: true,
    header: true,
    complete: function(results) {
        $('#gradeTable').DataTable({
            data: results.data,
            columns: [
                { data: 'StudentID' },
                { data: 'Name' },
                { 
                    data: 'Grade',
                    type: 'grade',
                    render: function(data, type, row) {
                        if (type === 'display') {
                            return `<span class="grade-cell ${getGradeClass(data)}">${data}</span>`;
                        }
                        return data;
                    }
                },
                { 
                    data: 'Score',
                    type: 'num'
                },
                { data: 'Status' }
            ],
            responsive: true,
            pageLength: 25,
            order: [[2, 'asc']], // Default sort by grade
            dom: 'Bfrtip',
            buttons: [
                'copy', 'csv', 'excel', 'pdf'
            ]
        });
    }
});

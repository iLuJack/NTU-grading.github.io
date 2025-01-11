Papa.parse('data.csv', {
    download: true,  // Automatically download the CSV file
    header: true,    // First row contains headers
    complete: function(results) {  // Called when parsing is complete
        $('#gradeTable').DataTable({
            data: results.data,    // The parsed CSV data
            columns: [
                { data: '課程名稱' },  // Maps column to 'StudentID' field in CSV
                { data: '班次' },       // Maps column to 'Name' field
                { data: '授課教師'},
                { data: '學期'},
                { data: 'A+比例'},
                { data: 'A比例'},
                { data: 'A-比例'},
                { data: 'B+比例'},
                { data: 'B比例'},
                { data: 'B-比例'},
                { data: 'C+比例'},
                { data: 'C比例'},
                { data: 'C-比例'},
                { data: 'F比例'}
            ],
            responsive: true,           // Makes table responsive on mobile
            pageLength: 25,            // Shows 25 rows per page
            order: [[2, 'asc']],       // Default sort by grade column (index 2) ascending
            dom: 'Bfrtip',             // DataTables layout elements
            buttons: [
                'copy',                 // Adds button to copy data
                'csv',                  // Adds button to export as CSV
                'excel',                // Adds button to export as Excel
                'pdf'                   // Adds button to export as PDF
            ]
        });
    }
});
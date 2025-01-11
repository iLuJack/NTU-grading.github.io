Papa.parse('data-simplified-with-percentage.csv', {
    download: true,
    header: true,
    complete: function(results) {
        $('#gradeTable').DataTable({
            scrollX: true,
            data: results.data,
            columns: [
                { data: '課程名稱' },
                { data: '授課教師' },
                { data: '學期' },
                { data: 'A+' },
                { data: 'A' },
                { data: 'A-' },
                { data: 'B+' },
                { data: 'B' },
                { data: 'B-' },
                { data: 'C+' },
                { data: 'C' },
                { data: 'C-' },
                { data: 'F' }
            ],
            columnDefs: [
                {
                    targets: '_all',
                    className: 'nowrap'
                }
            ],
            language: {
                url: 'https://cdn.datatables.net/plug-ins/1.13.7/i18n/zh-HANT.json'
            },
            order: [[0, 'asc']],
            pageLength: 25
        });
    },
    error: function(error) {
        console.error('Error parsing CSV:', error);
    }
});
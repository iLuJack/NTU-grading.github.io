Papa.parse('data.csv', {
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
                { data: 'A以下' },
                { data: 'A-以上' },
                { data: 'A-' },
                { data: 'A-以下' },
                { data: 'B+以上' },
                { data: 'B+' },
                { data: 'B+以下' },
                { data: 'B以上' },
                { data: 'B' },
                { data: 'B以下' },
                { data: 'B-以上' },
                { data: 'B-' },
                { data: 'B-以下' },
                { data: 'C+以上' },
                { data: 'C+' },
                { data: 'C+以下' },
                { data: 'C以上' },
                { data: 'C' },
                { data: 'C以下' },
                { data: 'C-以上' },
                { data: 'C-' },
                { data: 'F' }
            ],
            language: {
                url: '//cdn.datatables.net/plug-ins/1.13.7/i18n/zh-HANT.json'
            }
        });
    }
});
Papa.parse('data.csv', {
    download: true,
    header: true,
    complete: function(results) {
        $('#gradeTable').DataTable({
            data: results.data,
            columns: [
                { data: '課程名稱' },
                { data: '授課教師' },
                { data: '學期' },
                { data: 'A+比例' },
                { data: 'A比例' },
                { data: 'A-比例' },
                { data: 'B+比例' },
                { data: 'B比例' },
                { data: 'B-比例' },
                { data: 'C+比例' },
                { data: 'C比例' },
                { data: 'C-比例' },
                { data: 'F比例' }
            ],
            language: {
                url: '//cdn.datatables.net/plug-ins/1.13.7/i18n/zh-HANT.json'
            }
        });
    }
});
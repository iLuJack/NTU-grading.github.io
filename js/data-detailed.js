Papa.parse('/NTU-grading.github.io/assets/grade-data/data-expanded.csv', {
    download: true,
    header: true,
    complete: function(results) {
        $('#gradeTable').DataTable({
            scrollX: true,
            data: results.data,
            dom: 'Bfrtip',
            buttons: [
                'copy',
                'csv',
                'excel',
                {
                    text: '簡易版',
                    className: 'dt-button',
                    action: function ( e, dt, node, config ) {
                        window.location.href = '/NTU-grading.github.io/';
                    }
                }
            ],
            columns: [
                { data: '課程名稱' },
                { data: '授課教師' },
                { data: '學期' },
                { 
                    data: 'A+',
                    render: function(data) {
                        return data ? data + '%' : '';
                    }
                },
                { 
                    data: 'A',
                    render: function(data) {
                        return data ? data + '%' : '';
                    }
                },
                { 
                    data: 'A以下',
                    render: function(data) {
                        return data ? data + '%' : '';
                    }
                },
                { 
                    data: 'A-以上',
                    render: function(data) {
                        return data ? data + '%' : '';
                    }
                },
                { 
                    data: 'A-',
                    render: function(data) {
                        return data ? data + '%' : '';
                    }
                },
                { 
                    data: 'A-以下',
                    render: function(data) {
                        return data ? data + '%' : '';
                    }
                },
                { 
                    data: 'B+以上',
                    render: function(data) {
                        return data ? data + '%' : '';
                    }
                },
                { 
                    data: 'B+',
                    render: function(data) {
                        return data ? data + '%' : '';
                    }
                },
                { 
                    data: 'B+以下',
                    render: function(data) {
                        return data ? data + '%' : '';
                    }
                },
                { 
                    data: 'B以上',
                    render: function(data) {
                        return data ? data + '%' : '';
                    }
                },
                { 
                    data: 'B',
                    render: function(data) {
                        return data ? data + '%' : '';
                    }
                },
                { 
                    data: 'B以下',
                    render: function(data) {
                        return data ? data + '%' : '';
                    }
                },
                { 
                    data: 'B-以上',
                    render: function(data) {
                        return data ? data + '%' : '';
                    }
                },
                { 
                    data: 'B-',
                    render: function(data) {
                        return data ? data + '%' : '';
                    }
                },
                { 
                    data: 'B-以下',
                    render: function(data) {
                        return data ? data + '%' : '';
                    }
                },
                { 
                    data: 'C+以上',
                    render: function(data) {
                        return data ? data + '%' : '';
                    }
                },
                { 
                    data: 'C+',
                    render: function(data) {
                        return data ? data + '%' : '';
                    }
                },
                { 
                    data: 'C+以下',
                    render: function(data) {
                        return data ? data + '%' : '';
                    }
                },
                { 
                    data: 'C以上',
                    render: function(data) {
                        return data ? data + '%' : '';
                    }
                },
                { 
                    data: 'C',
                    render: function(data) {
                        return data ? data + '%' : '';
                    }
                },
                { 
                    data: 'C以下',
                    render: function(data) {
                        return data ? data + '%' : '';
                    }
                },
                { 
                    data: 'C-以上',
                    render: function(data) {
                        return data ? data + '%' : '';
                    }
                },
                { 
                    data: 'C-',
                    render: function(data) {
                        return data ? data + '%' : '';
                    }
                },
                { 
                    data: 'F',
                    render: function(data) {
                        return data ? data + '%' : '';
                    }
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
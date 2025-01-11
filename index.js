Papa.parse('data.csv', {
    download: true,
    header: true,
    complete: function(results) {
        $('#gradeTable').DataTable({
            data: results.data,
            columns: [
                { 
                    data: '課程名稱',
                    title: '課程名稱'
                },
                { 
                    data: '班次',
                    title: '班次'
                },
                { 
                    data: '授課教師',
                    title: '授課教師'
                },
                { 
                    data: '學期',
                    title: '學期'
                },
                { 
                    data: 'A+比例',
                    title: 'A+',
                    type: 'num',
                    render: function(data) {
                        return data ? data : '0%';
                    }
                },
                { 
                    data: 'A比例',
                    title: 'A',
                    type: 'num',
                    render: function(data) {
                        return data ? data : '0%';
                    }
                },
                { 
                    data: 'A-比例',
                    title: 'A-',
                    type: 'num',
                    render: function(data) {
                        return data ? data : '0%';
                    }
                },
                { 
                    data: 'B+比例',
                    title: 'B+',
                    type: 'num',
                    render: function(data) {
                        return data ? data : '0%';
                    }
                },
                { 
                    data: 'B比例',
                    title: 'B',
                    type: 'num',
                    render: function(data) {
                        return data ? data : '0%';
                    }
                },
                { 
                    data: 'B-比例',
                    title: 'B-',
                    type: 'num',
                    render: function(data) {
                        return data ? data : '0%';
                    }
                },
                { 
                    data: 'C+比例',
                    title: 'C+',
                    type: 'num',
                    render: function(data) {
                        return data ? data : '0%';
                    }
                },
                { 
                    data: 'C比例',
                    title: 'C',
                    type: 'num',
                    render: function(data) {
                        return data ? data : '0%';
                    }
                },
                { 
                    data: 'C-比例',
                    title: 'C-',
                    type: 'num',
                    render: function(data) {
                        return data ? data : '0%';
                    }
                },
                { 
                    data: 'F比例',
                    title: 'F',
                    type: 'num',
                    render: function(data) {
                        return data ? data : '0%';
                    }
                }
            ],
            responsive: true,
            pageLength: 25,
            order: [[0, 'asc']],
            dom: 'Bfrtip',
            buttons: ['copy', 'csv', 'excel', 'pdf'],
            language: {
                search: "搜尋:",
                lengthMenu: "顯示 _MENU_ 筆資料",
                info: "顯示第 _START_ 至 _END_ 筆資料，共 _TOTAL_ 筆",
                paginate: {
                    first: "第一頁",
                    previous: "上一頁",
                    next: "下一頁",
                    last: "最後一頁"
                }
            }
        });
    }
});
let prefers = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
let html = document.querySelector('html');
 
html.classList.add(prefers);
html.setAttribute('data-bs-theme', prefers);

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
            },
            responsive: true,
            order: [[0, 'asc']],
            pageLength: 25
        });
    },
    dom: 'Bfrtip',
    buttons: [
        'copy',
        'csv',
        'excel'
    ],
    error: function(error) {
        console.error('Error parsing CSV:', error);
    }
});
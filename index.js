let table;
let isDetailedMode = false;

const simpleColumns = [
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
];

const detailedColumns = [
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
];

function initTable(data) {
    if (table) {
        table.destroy();
    }

    table = $('#gradeTable').DataTable({
        scrollX: true,
        data: data,
        columns: isDetailedMode ? detailedColumns : simpleColumns,
        columnDefs: [
            {
                targets: '_all',
                className: 'nowrap'
            }
        ],
        language: {
            url: '//cdn.datatables.net/plug-ins/1.13.7/i18n/zh-HANT.json'
        }
    });
}

Papa.parse('data.csv', {
    download: true,
    header: true,
    complete: function(results) {
        const data = results.data;
        initTable(data);

        $('#toggleMode').click(function() {
            isDetailedMode = !isDetailedMode;
            $(this).text(isDetailedMode ? '切換簡易模式' : '切換詳細模式');
            initTable(data);
        });
    }
});
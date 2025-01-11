Papa.parse('data.csv', {
    download: true,
    header: true,
    complete: function(results) {
        $('#gradeTable').DataTable({
            data: results.data,
            columns: [
                {
                    className: 'dt-control',
                    orderable: false,
                    data: null,
                    defaultContent: '<button class="expand-button">詳細資訊</button>'
                },
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
                }
            ],
            responsive: true,
            pageLength: 25,
            order: [[1, 'asc']],
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

        // Add event listener for opening and closing details
        $('#gradeTable tbody').on('click', 'td.dt-control button', function() {
            var tr = $(this).closest('tr');
            var row = table.row(tr);

            if (row.child.isShown()) {
                // This row is already open - close it
                row.child.hide();
                tr.removeClass('shown');
                $(this).text('詳細資訊');
            } else {
                // Open this row
                row.child(format(row.data())).show();
                tr.addClass('shown');
                $(this).text('收起');
            }
        });
    }
});

// Function to format the expanded row content
function format(d) {
    // Create grade distribution table
    return `
        <div class="expanded-content">
            <table class="grade-distribution">
                <tr>
                    <th>成績</th>
                    <th>A+</th>
                    <th>A</th>
                    <th>A-</th>
                    <th>B+</th>
                    <th>B</th>
                    <th>B-</th>
                    <th>C+</th>
                    <th>C</th>
                    <th>C-</th>
                    <th>F</th>
                </tr>
                <tr>
                    <td>比例</td>
                    <td>${d['A+比例'] || '0%'}</td>
                    <td>${d['A比例'] || '0%'}</td>
                    <td>${d['A-比例'] || '0%'}</td>
                    <td>${d['B+比例'] || '0%'}</td>
                    <td>${d['B比例'] || '0%'}</td>
                    <td>${d['B-比例'] || '0%'}</td>
                    <td>${d['C+比例'] || '0%'}</td>
                    <td>${d['C比例'] || '0%'}</td>
                    <td>${d['C-比例'] || '0%'}</td>
                    <td>${d['F比例'] || '0%'}</td>
                </tr>
            </table>
        </div>
    `;
}
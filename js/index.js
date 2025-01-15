/* user-preferred theme but not tested and well-maintained
let prefers = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
let html = document.querySelector('html');
 
html.classList.add(prefers);
html.setAttribute('data-bs-theme', prefers);
*/

Papa.parse('../assets/grade-data/data-simplified-with-percentage.csv', {
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
                'excel'
            ],
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
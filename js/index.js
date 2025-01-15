// Get base URL from current page URL
const getBaseUrl = () => {
    const paths = window.location.pathname.split('/');
    const repoName = 'NTU-grading.github.io';
    const repoIndex = paths.findIndex(p => p === repoName);
    return repoIndex !== -1 ? '/' + paths.slice(1, repoIndex + 1).join('/') : '';
};

Papa.parse(getBaseUrl() + '/assets/grade-data/data-simplified-with-percentage.csv', {
    download: true,
    header: true,
    complete: function(results) {
        if (results.errors.length > 0) {
            console.error('CSV parsing errors:', results.errors);
            return;
        }
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
        console.error('Error loading CSV:', error);
        document.querySelector('.container').innerHTML = 
            '<p class="error">抱歉，資料載入失敗。請稍後再試。</p>';
    }
});
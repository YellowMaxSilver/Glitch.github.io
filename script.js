
let data = "export.txt";
let blob = new Blob([data], { type: 'text/plain;charset=utf-8;' });
const link= window.document.createElement('a');
link.href = window.URL.createObjectURL(blob);
link.download = 'export.txt';
link.click();
window.URL.revokeObjectURL(link.href);
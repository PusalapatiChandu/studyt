const ExcelJS = require('exceljs');
const fs = require('fs');

async function generateProfessionalReport(platform, testData) {
    const workbook = new ExcelJS.Workbook();
    const sheet = workbook.addWorksheet(`${platform} Analysis`);

    sheet.columns = [
        { header: 'Test ID', key: 'id', width: 15 },
        { header: 'Description', key: 'desc', width: 45 },
        { header: 'Category', key: 'cat', width: 20 },
        { header: 'Result', key: 'res', width: 15 },
        { header: 'Error Log', key: 'err', width: 40 }
    ];

    testData.forEach(data => {
        const row = sheet.addRow(data);
        const resCell = row.getCell('res');
        if (data.res === 'PASS') {
            resCell.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FFC8E6C9' } };
        } else {
            resCell.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FFFFCDD2' } };
        }
    });

    if (!fs.existsSync('./reports')) fs.mkdirSync('./reports');
    const path = `./reports/${platform}_Master_Report.xlsx`;
    await workbook.xlsx.writeFile(path);
    console.log(`Report generated successfully at: ${path}`);
}

module.exports = generateProfessionalReport;

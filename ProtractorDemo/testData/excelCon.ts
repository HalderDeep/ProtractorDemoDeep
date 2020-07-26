import { WSAEFAULT } from "constants";
import {Cell, Row, Workbook, Worksheet} from "exceljs";
import { browser, by, element, ExpectedConditions, protractor} from "protractor";
import { Alert, WebElement } from "selenium-webdriver";
import * as XLSX from "xlsx";

export class ExcelCon {
    public sDataArray: string[] = [];

    public constructor(ColName) {
    let stringDataArray: string[] = [];
    this.sDataArray = stringDataArray;

    const wb = new Workbook();
    wb.xlsx.readFile("/Users/scorpio/Documents/Syntel Doc/Book1.xlsx").then(function() {
        const sheet = wb.getWorksheet("Sheet1");
        const RowCount = sheet.rowCount;
        const ColCount = sheet.columnCount;
        let j: number;

        for (j = 1; j <= ColCount; j++) {
            if (ColName === sheet.getRow(1).getCell(j).toString()) {
                break;
            }
        }

        for (let i = 2; i <= RowCount; i++) {
            const cellValue = sheet.getRow(i).getCell(j).toString();
            if (cellValue === "") {
                break;
            }
            stringDataArray.push(cellValue);
        }
        return this;
    });
}
}

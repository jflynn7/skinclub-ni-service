import { Injectable } from '@nestjs/common';
import * as PDFDocument from 'pdfkit';
import * as puppeteer from 'puppeteer';
import * as ejs from 'ejs';
import { readFileSync } from 'fs';
import * as path from 'path';

@Injectable()
export class InvoiceService {
  async generateInvoice(templateData: any): Promise<Buffer> {
    return await new Promise((resolve) => {
      const doc = new PDFDocument({
        size: 'LETTER',
        bufferPages: true,
      });

      // customize your PDF document
      doc.text('hello world', 100, 50);
      doc.end();

      const buffer = [];
      doc.on('data', buffer.push.bind(buffer));
      doc.on('end', () => {
        const data = Buffer.concat(buffer);
        resolve(data);
      });
    });
  }

  async generateInvoiceFromTemplate(
    templateData: any,
    templateName: string,
  ): Promise<Buffer> {
    // Load the EJS template
    const templatePath = path.join(__dirname, '..', 'templates', templateName);
    const template = readFileSync(templatePath, 'utf-8');

    // Render the template with the provided data
    const htmlContent = ejs.render(template, templateData);

    // Use Puppeteer to create a PDF from the HTML
    const browser = await puppeteer.launch({
      headless: true, // ensure it's in headless mode
      args: [
        '--no-sandbox', // necessary for Heroku
        '--disable-setuid-sandbox', // necessary for Heroku
        '--disable-gpu', // applicable for some environments
        '--disable-dev-shm-usage', // applicable for some environments
      ],
    });
    const page = await browser.newPage();
    await page.setContent(htmlContent, { waitUntil: 'networkidle0' });
    const pdfBufferUint8Array = await page.pdf({ format: 'A4' });
    await browser.close();

    // Convert the Uint8Array to Buffer
    return Buffer.from(pdfBufferUint8Array); // Now this is a Buffer
  }
}

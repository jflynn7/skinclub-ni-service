import { Controller, Get, Res } from '@nestjs/common';
import { InvoiceService } from '../service/invoice.service';
import { Response } from 'express';

@Controller('invoice')
export class InvoiceController {
  constructor(private readonly invoiceService: InvoiceService) {}

  @Get()
  async getPdf(@Res() res: Response) {
    const templateData = {
      logo: 'path/to/logo.png', // Adjust this path as necessary
      customerName: 'John Doe',
      invoiceNumber: '12345',
      date: new Date().toLocaleDateString(),
      workItems: ['Item 1', 'Item 2', 'Item 3'],
    }; // Sample data to be used in PDF
    const buffer = await this.invoiceService.generateInvoiceFromTemplate(
      templateData,
      'worklist.template.ejs',
    );

    res.set({
      'Content-Type': 'application/pdf',
      'Content-Disposition': 'attachment; filename=example.pdf',
      'Content-Length': buffer.length,
    });

    res.end(buffer);
  }
}

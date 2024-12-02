import { Transform } from 'class-transformer';
import { parse } from 'date-fns';
import { toZonedTime } from 'date-fns-tz';

export function TransformDate() {
  return Transform(({ value }) => {
    let parsedDate: any;

    if (typeof value === 'string') {
      parsedDate = parse(value, 'MM-dd-yyyy', new Date());
    } else {
      parsedDate = value;
    }
    return toZonedTime(parsedDate, 'Europe/Paris');
  });
}

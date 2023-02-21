import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nameAppender'
})
export class NameAppenderPipe implements PipeTransform {

  transform(value: unknown, appender: string): unknown {
    const finalValue = `${value} - ${appender}`
    return finalValue;
  }

}

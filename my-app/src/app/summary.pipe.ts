import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'summary'
})
export class SummaryPipe implements PipeTransform {

    transform(value: string, limit?: number) {
        if (!value)
            return null;
        // if limit is provided use that, otherwise go for
        // default limit of 50
        let actualLimit=(limit) ? limit : 50
        return value.substring(0, actualLimit) + "..."
    }
}
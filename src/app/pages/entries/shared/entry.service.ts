import { CategoryService } from './../../categories/shared/category.service';
import { Entry } from './entry.model';
import { Injectable, Injector } from '@angular/core';
import { BaseResourceService } from 'src/app/shared/models/base-resource.service';
import { flatMap} from 'rxjs/operators'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EntryService extends BaseResourceService<Entry> {

  constructor(protected injector: Injector, private categoryService: CategoryService) {
    super("api/entries", injector)
   }

  create(entry: Entry): Observable<Entry>{
    return this.categoryService.getById(entry.categoryId).pipe(
      flatMap(category =>{
        entry.category = category
        return super.create(entry)
      })
    )
  }

  update(entry: Entry):Observable<Entry>{
    return this.categoryService.getById(entry.categoryId).pipe(
      flatMap(category=> {
        entry.category = category
        return super.update(entry)
      })
    )
   
  }

  protected jsonDataToResources(jsonData: any[]):Entry[] {
    const entries: Entry[] = []
    jsonData.forEach(element => entries.push(Object.assign(new Entry(), element)))
    return entries
  }

  protected jsonDataToResource(jsonData:any): Entry{
    return Object.assign(new Entry(), jsonData)
  }
}
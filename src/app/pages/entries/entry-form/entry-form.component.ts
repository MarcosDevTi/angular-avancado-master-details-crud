import { BaseResourceFormComponent } from 'src/app/shared/components/base-resource-form/base-resource-form.component';
import { CategoryService } from './../../categories/shared/category.service';
import { EntryService } from './../shared/entry.service';
import { Entry } from './../shared/entry.model';
import { Component, OnInit, Injector } from '@angular/core';
import{Validators} from "@angular/forms"
import { Category } from '../../categories/shared/category.model';
@Component({
  selector: 'app-entry-form',
  templateUrl: './entry-form.component.html',
  styleUrls: ['./entry-form.component.css']
})
export class EntryFormComponent extends BaseResourceFormComponent<Entry> implements OnInit { 
  categories: Array<Category>

  imaskConfig = {
    mask: Number,
    scale: 2,
    thousandsSeparator: '',
    padFractionalZeros: true,
    normalizeZeros: true,
    radix: ','
  }

  constructor(
    protected entryService: EntryService,
    protected categoryService: CategoryService,
    protected injector: Injector
  ) {
    super(injector, new Entry(), entryService, Entry.fromJson)
   }

  ngOnInit() {
    this.loadCategories()
    super.ngOnInit()
  }

  get typeOptions(): Array<any>{
    return Object.entries(Entry.types).map(
      ([value, text]) => {
        return {
          text: text,
          value: value
        }
      }
    )
  }

  protected buildResourceForm(){
    this.resourceForm = this.formBuilder.group({
      id: [null],
      name: [null, [Validators.required, Validators.minLength(2)]],
      description: [null],
      type: ['expense', [Validators.required]],
      amount: [null, [Validators.required]],
      date: [null, [Validators.required]],
      paid: [true, [Validators.required]],
      categoryId: [null, [Validators.required]],
    })
  }

  private loadCategories(){
    this.categoryService.getAll().subscribe(
      categories => this.categories = categories
    )
  }

  protected creationPageTitle(): string {
    return "Cadastro de Novo Lançamento"
  }

  protected editionPageTitle(): string{
    return "Editando Lançamento: " + this.resource.name || ""
  }
}

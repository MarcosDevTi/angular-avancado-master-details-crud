import {InMemoryDbService} from "angular-in-memory-web-api"
import {Category} from "./pages/categories/shared/category.model"
import { Entry } from './pages/entries/shared/entry.model';

export class InMemoryDatabase implements InMemoryDbService {
    createDb() {
        const categories: Category[] = [
            {id: 1, name: 'Moradia', description: 'Pagamentos de Contas de Casa'},
            {id: 2, name: 'Saude', description: 'Plano de Saude e Remédios'},
            {id: 3, name: 'Lazer', description: 'Cinemas, parques, praia, etc'},
            {id: 4, name: 'Salario', description: 'Recebimento de Salario'},
            {id: 5, name: 'Freelas', description: 'Trabalho como freelancer'},
        ]
        const entries: Entry[] = [
            {id: 1, name: 'Gas de cozinha', categoryId:categories[1].id, category: categories[1], paid:true, date:'14/10/2018', amount:'170,80', type:'expense', description:'Qualquer descrição para essa despesa'  } as Entry,
            {id: 2, name: 'Suplementos', categoryId:categories[1].id, category: categories[1], paid:true, date:'20/10/2018', amount:'270,80', type:'expense', description:'Qualquer descrição para essa despesa'  } as Entry,
            {id: 3, name: 'Salario na empresa X', categoryId:categories[3].id, category: categories[3], paid:false, date:'16/10/2018', amount:'170,80', type:'revenue', description:'Qualquer descrição para essa despesa'  } as Entry,
            {id: 4, name: 'Aluguel de filme', categoryId:categories[2].id, category: categories[2], paid:true, date:'14/10/2018', amount:'470,80', type:'expense', description:'Qualquer descrição para essa despesa'  } as Entry,
            {id: 5, name: 'Video game da Filha', categoryId:categories[1].id, category: categories[1], paid:false, date:'15/10/2018', amount:'270,80', type:'expense', description:'Qualquer descrição para essa despesa'  } as Entry,
            {id: 6, name: 'Uber', categoryId:categories[3].id, category: categories[3], paid:true, date:'10/10/2018', amount:'750,80', type:'revenue', description:'Qualquer descrição para essa despesa'  } as Entry,
            {id: 7, name: 'Cinema', categoryId:categories[2].id, category: categories[2], paid:true, date:'12/10/2018', amount:'750,80', type:'expense', description:'Qualquer descrição para essa despesa'  } as Entry,
        ]
        return {categories, entries}
    }
}
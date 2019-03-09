import {InMemoryDbService} from "angular-in-memory-web-api"
import {Category} from "./pages/categories/shared/category.model"

export class InMemoryDatabase implements InMemoryDbService {
    createDb() {
        const categories: Category[] = [
            {id: 1, name: 'Moradia', description: 'Pagamentos de Contas de Casa'},
            {id: 2, name: 'Saude', description: 'Plano de Saude e Remédios'},
            {id: 3, name: 'Lazer', description: 'Cinemas, parques, praia, etc'},
            {id: 4, name: 'Salario', description: 'Recebimento de Salario'},
            {id: 5, name: 'Freelas', description: 'Trabalho como freelancer'},
        ];
        return {categories}
    }
}
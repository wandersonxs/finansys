import {Injectable, Injector} from '@angular/core';
import {BaseResourceService} from '../../../shared/services/base-resource.service';
import {Pessoa} from './pessoa.model';

@Injectable({
  providedIn: 'root'
})
export class PessoaService extends BaseResourceService<Pessoa> {

  constructor(protected injector: Injector) {
    super('cadastropf/v1/pessoas', injector, Pessoa.fromJson);
  }
}

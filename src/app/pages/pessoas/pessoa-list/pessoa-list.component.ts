import { Component, OnInit } from '@angular/core';
import {BaseResourceListComponent} from '../../../shared/components/base-resource-list/base-resource-list.component';
import {Pessoa} from '../shared/pessoa.model';
import {PessoaService} from '../shared/pessoa.service';

@Component({
  selector: 'app-pessoa-list',
  templateUrl: './pessoa-list.component.html',
  styleUrls: ['./pessoa-list.component.css']
})
export class PessoaListComponent extends BaseResourceListComponent<Pessoa> {
  constructor(private pessoaService: PessoaService) {
    super(pessoaService);
  }
}

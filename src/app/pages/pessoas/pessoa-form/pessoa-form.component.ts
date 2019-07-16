import {Component, Injector, OnInit} from '@angular/core';
import {BaseResourceFormComponent} from '../../../shared/components/base-resource-form/base-resource-form.component';
import {Validators} from '@angular/forms';
import {Pessoa} from '../shared/pessoa.model';
import {PessoaService} from '../shared/pessoa.service';

@Component({
  selector: 'app-pessoa-form',
  templateUrl: './pessoa-form.component.html',
  styleUrls: ['./pessoa-form.component.css']
})
export class PessoaFormComponent extends BaseResourceFormComponent<Pessoa> implements  OnInit {

  iMaskConfig = {
    mask: Number,
    scale: 2,
    thousandSeparator: '',
    padFractionalZeros: true,
    normalizeZeros: true,
    radix: ','
  };

  ptBR = {
    firstDayOfWeek: 0,
    dayNames: ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'],
    dayNamesShort: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab'],
    dayNamesMin: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab'],
    monthNames: [
      'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho',
      'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
    ],
    monthNamesShort: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
    today: 'Hoje',
    clear: 'Limpar'
  };

  constructor(
    protected pessoaService: PessoaService,
    protected injector: Injector
  ) {
    super(injector, new Pessoa(), pessoaService, Pessoa.fromJson);
  }

  ngOnInit() {
    //this.loadCategories();
    super.ngOnInit();
  }

  get typeOptions(): Array<any> {
    return Object.entries(Pessoa.types).map(
      ([value, text]) => {
        return {
          text: text,
          value: value
        };
      }
    );
  }


  protected creationPageTitle(): string {
    return 'Cadastro de Nova Pessoa';
  }

  protected editionPageTitle(): string {
    const resourceName = this.resource.nome || '';
    return 'Editando Pessoa: ' + resourceName;
    return 'Edição de ';
  }

  protected buildResourceForm() {
    this.resourceForm = this.formBuilder.group({
      id: [null],
      nome: [null, [Validators.required, Validators.minLength(2)]],
      email: [null, [Validators.required, Validators.minLength(2)]],
      sexo: [null],
      //sexo: ['expense', [Validators.required]],
      dataNascimento: [null, [Validators.required]],
      naturalidade: [null, [Validators.required, Validators.minLength(2)]],
      nacionalidade: [null, [Validators.required, Validators.minLength(2)]],
      cpf: [null, [Validators.required, Validators.minLength(2)]]
    });
  }
}

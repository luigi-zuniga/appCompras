import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-addpres',
  templateUrl: './addpres.component.html',
  styleUrls: ['./addpres.component.css']
})

export class AddpresComponent implements OnInit {
  presupuestoForm: FormGroup;
  presupuesto: any;
  base: any;
  tipo: any;
  iva: any = 0;
  total: any = 0;

  constructor(private pf: FormBuilder) { }

  ngOnInit() {
    this.presupuestoForm = this.pf.group({
      proveedor: ['', Validators.required ],
      fecha: ['', Validators.required ],
      cif: ['', Validators.required ],
      concepto: ['', [ Validators.required, Validators.minLength(10)]],
      base: ['', Validators.required ],
      tipo: ['', Validators.required ],
      iva: this.iva,
      total: this.total
    });

    this.onChanges();
  }

  onSubmit() {
    this.presupuesto = this.savePresupuesto();
  }

  onChanges(): void {
    this.presupuestoForm.valueChanges.subscribe( valor => {
      this.base = valor.base;
      this.tipo = valor.tipo;
      this.presupuestoForm.value.iva = this.base * this.tipo;
      this.presupuestoForm.value.total = this.base + (this.base * this.tipo);
    });
  };

  savePresupuesto() {
    const savePresupuesto = {
      concepto:   this.presupuestoForm.get('concepto').value,
      base:   this.presupuestoForm.get('base').value,
      fecha:  this.presupuestoForm.get('fecha').value,
      iva:    this.presupuestoForm.get('iva').value,
      tipo:   this.presupuestoForm.get('tipo').value,
      total:  this.presupuestoForm.get('total').value,
      proveedor:  this.presupuestoForm.get('proveedor').value
    };

    return savePresupuesto;
  }
}

/*import { Component, inject } from '@angular/core';
import { HeroeService } from '../../services/heroe-service.service';
import { Heroe } from '../../data/heroe-entity';
import { Heroes } from '../../data/heroes-entity';

@Component({
  selector: 'app-heroe-list',
  standalone: true,
  imports: [],
  templateUrl: './heroe-list.component.html',
  styleUrls: ['./heroe-list.component.css']


})
export class HeroeListComponent {
  listadoHeroes: any[] = [];
  heroeService = inject(HeroeService);

  constructor() {
    this.heroeService.getAllHeroes().subscribe((data) => {
      this.listadoHeroes = data.heroes
      console.info(data.heroes,
        // data.data,
        // data.links,
        // data.msg
      )

    })
  }

  CargarHeroes() {
    this.heroeService.getAllHeroes().subscribe((data) => {
      this.listadoHeroes = data.heroes
    })
  }

  EliminarHeroe(id: number) {
    this.heroeService.deleteHeroe(id).subscribe((data) => {
      if (data.estado == 1) {
        this.CargarHeroes()
      } else {
        alert(data.msg)
      }

    })
  }

  CrearHeroe(heroe: any) {
    this.heroeService.postHeroe(heroe).subscribe((data) => {
      alert("heroe creado")
    })
  }
  
  trackById(index: number, heroe: any): number {
    return heroe.id;
  }
  
}
 */


import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common'; // Importar el CommonModule
import { HeroeService } from '../../services/heroe-service.service';
import { Heroe } from '../../data/heroe-entity';
import { Heroes } from '../../data/heroes-entity';

@Component({
  selector: 'app-heroe-list',
  standalone: true,
  imports: [CommonModule], // Asegúrate de incluir CommonModule aquí
  templateUrl: './heroe-list.component.html',
  styleUrls: ['./heroe-list.component.css']
})
export class HeroeListComponent {
  listadoHeroes: any[] = [];
  heroeService = inject(HeroeService);

  constructor() {
    this.heroeService.getAllHeroes().subscribe((data) => {
      this.listadoHeroes = data.heroes;
      console.info(data.heroes);
    });
  }

  CargarHeroes() {
    this.heroeService.getAllHeroes().subscribe((data) => {
      this.listadoHeroes = data.heroes;
    });
  }

  EliminarHeroe(id: number) {
    this.heroeService.deleteHeroe(id).subscribe((data) => {
      if (data.estado === 1) {
        this.CargarHeroes();
      } else {
        alert(data.msg);
      }
    });
  }

  CrearHeroe(heroe: any) {
    this.heroeService.postHeroe(heroe).subscribe(() => {
      alert('Héroe creado');
    });
  }

  trackById(index: number, heroe: any): number {
    return heroe.id;
  }
}

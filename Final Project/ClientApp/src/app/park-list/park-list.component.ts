import { Component, Input, OnInit } from '@angular/core';
import { Convert, Park } from '../Park';
import { ParkService } from '../Park.service';

@Component({
  selector: 'app-park-list',
  templateUrl: './park-list.component.html',
  styleUrls: ['./park-list.component.css'],
  providers: [ParkService]
})
export class ParkListComponent implements OnInit {
@Input() parkCode: string;

park?: Park;
parks?: Park[] = [];

  constructor(private parkService: ParkService) {
     this.parkService.GetParks().subscribe(
       (response:any)=> {console.log(response);
         let json = Convert.parkToJson(response);
         this.park = Convert.toPark(json);
         console.log(this.park);
       }
     );

    //this.parkService.GetParks().subscribe(
    //  (response: any) => {
    //    console.log(response);
    //    let json = Convert.parkArrayToJson(response);
    //    this.parks = Convert.toParkArray(json);
    //    console.log(this.parks);
    //  }
    //    );
      
   }

  ngOnInit() {

  }

}

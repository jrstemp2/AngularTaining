import { Component } from '@angular/core';
import { EventService } from './shared/event.service';
import { ToastrService } from '../common/toastr.service'; 
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';



@Component({
    
    template: `
    <div>
        <h1>Upcoming Angular Event</h1>
        <hr/>
        <div class="row">
            <div *ngFor="let event of events" class="col-md-5">
                <event-thumbnail (click)="handleThumbnailClick(event.name)" [event]="event"></event-thumbnail>
            </div>
        </div>
        
        
    </div>
    `
})


export class EventsListComponent {

    constructor(private eventService: EventService, private toastr: ToastrService, private route:ActivatedRoute){}
    events:any;

    ngOnInit(){
        this.events = this.route.snapshot.data['events']
    }

    
    handleThumbnailClick(eventName){
        this.toastr.success(eventName)
    }
    
    
}
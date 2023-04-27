import { Seat } from "../airport/aroplane/Seat";
import { DateTime } from "../airport/flight/DateTime";
import { Flight } from "../airport/flight/Flight";
import { Passenger } from "../passenger/Passenger";

export class Booking {
    passengers:Passenger[]=[];
    seat: Seat;
    dateTime:DateTime;
    flights:Flight;

    constructor(dateTime:DateTime,seat:Seat) {
        this.dateTime = dateTime;
        this.seat = seat;
    }

    
    addPassenger(passenger:Passenger){
        this.passengers.push(passenger);
    }
    setSeat(seat:Seat) {
        this.seat = seat;
    }
}
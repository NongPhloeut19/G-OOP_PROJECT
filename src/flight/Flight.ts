
import { Booking } from "../booking/Booking";
import { Airoplan } from "./airoplan/Airoplan";

export class Flight {
    private flightNumber: number;
    private departureAirport: string;
    private arrivalAirport: string;
    private duration: string;
    airoplan:Airoplan;
    bookings:Booking[]=[];
    constructor(flightNumber: number, departureAirport: string, arrivalAirport: string,duration: string,airoplan:Airoplan) {
        this.flightNumber = flightNumber;
        this.departureAirport = departureAirport;
        this.arrivalAirport = arrivalAirport;
        this.duration = duration;
        this.airoplan = airoplan;
    }

    addBooking(booking: Booking){
        this.bookings.push(booking);
    }
}
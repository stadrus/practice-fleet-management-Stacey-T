/*Scenario 
You’ve been hired to help a logistics company build a system to manage its fleet of 
vehicles. The system should be able to: 
1. Create individual vehicles with properties like type, make, model, year, and 
mileage. 
2. Add a method to update the mileage of a vehicle when it is used. 
3. Add a method to display the details of the vehicle in a user-friendly format. 
4. Instantiate multiple vehicles from the class and test your methods. 
Tasks 
1. Define the Vehicle Class: 
○ The constructor should include properties: type, make, model, year, 
and mileage. 
○ Use default values for mileage (e.g., 0). 
2. Add Methods: 
○ drive(distance): Increases the vehicle’s mileage by the given 
distance (in kilometers or miles). 
○ getDetails(): Returns a formatted string describing the vehicle’s 
details. 
3. Create and Use Vehicle Objects: 
○ Instantiate at least three vehicle objects with different properties (e.g., 
a car, a truck, and a motorcycle). 
○ Use the drive method to simulate trips and update mileage. 
○ Use the getDetails method to print each vehicle’s updated 
information. 
*/


class Vehicle {
    constructor( type, make, model, year, mileage){
        this.type = type;
        this.make = make;
        this.model = model;
        this.year = year;
        this.mileage = mileage;
    }
    drive(distance){
        return this.mileage += distance;
    }
    getDetails( ){
        return `
        Vehicle 
        Type: ${this.type}
        Make: ${this.make} 
        Model: ${this.model} 
        Year: ${this.year}
        Mileage: ${this.mileage};`
    }
}

let car1 = new Vehicle('Hatchback', 'VW', 'Golf', 1998,0);
let turck = new Vehicle('truck', 'Ford', 'F150', 2015,15000,);
let motorcycle = new Vehicle('Motorcycle', 'Honda', 'Rebel', 1980,3000);

    console.log(car1);
    car1.drive(15000);
    console.log(car1.getDetails());
    
    console.log(turck);
    turck.drive(10);
    console.log(turck.getDetails());

    console.log(motorcycle);
    motorcycle.drive(600);
    console.log(motorcycle.getDetails());
    // remember to console.log() in the order of the methods. 


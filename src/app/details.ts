import { Eddetails } from './eddetails';
export class Details {


    id: number;
    name: string;
    dob: string;
    homeaddress: string;
    phone: number;
    degree: string;
    marks: number;
    stream: string;
    college: string;




    constructor(id: number, name: string, dob: string, homeaddress: string, phone: number, degree: string, marks: number, stream: string, college: string) {
        this.id = id;
        this.name = name;
        this.dob = dob;
        this.homeaddress = homeaddress;
        this.phone = phone;
        this.degree = degree;
        this.marks = marks;
        this.stream = stream;
        this.college = college;


    }

}


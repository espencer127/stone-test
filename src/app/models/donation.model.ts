class Donation {
    _id:string;
    title: string;
    description: string;
    email: string;
    phone:string;
    date: Date;
    status: string;

    constructor(
        ){
            this.title = ""
            this.description = ""
            this.email = ""
            this.phone = ""
            this.date = new Date()
            this.status = ""
        }
}

export default Donation;
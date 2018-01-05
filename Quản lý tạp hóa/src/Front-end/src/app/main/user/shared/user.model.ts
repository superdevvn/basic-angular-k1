export class User {
    Id: number;
    RoleName: string;
    RoleId: number;   
    Username: string;
    Password: string;
    Firstname: string;
    Lastname: string;
    Description: string;
    IsActived: boolean;
    IsDaleted: boolean;
    CreatedDate: Date;
    CreatedBy: number;

    constructor(){
       this.CreatedDate = new Date();
    }
}
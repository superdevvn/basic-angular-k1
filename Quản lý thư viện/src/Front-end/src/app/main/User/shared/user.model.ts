export class User {
    Id: number = 0;
    RoleId: number = 0;
    RoleName: string;
    Username: string;
    FirstName: string;
    LastName: string;
    Description: string;
    IsActived: string;
    CreateDate: Date;
    CreateBy: string;
    constructor() {
        this.CreateDate = new Date();
    }
}

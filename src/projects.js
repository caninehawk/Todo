export class Project{
    constructor(title){
        this.id = Date.now();
        this.title = title;
        this.todo = [];
    }
    getID= ()=>{return this.id;}

}
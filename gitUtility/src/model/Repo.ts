export class Repo {

    private name: string;
    private description: string; // TODO make a get
    private url: string;
    public size: number;

    constructor(repo: any) { 
        this.name = repo.name;
        this.description = repo.description;
        this.url = repo.html_url;
        this.size = repo.size;
    }
}
import { Repo } from "./Repo";

export class User {

    private login: string;
    private fullName: string; 
    private followerCount: number;
    public repos: Repo[];

    constructor(response: any) { 
        this.login = response.login;
        this.fullName = response.name;
        this.followerCount = response.followers;
        this.repos = [];        
    }
}
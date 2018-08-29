import * as request from 'request';
import { User } from './model/User';
import { Repo } from './model/Repo';

const OPTIONS: any = { //github api expects this header
    headers: {
        'User-Agent': 'request'
    },
    json: true
};

export class GitHubAPIService {
    
    getUserInfo(username: string, cb: (user: User) => any) {
        request.get(`https://api.github.com/users/${username}`, OPTIONS,
            (error: any, response: any, body: any) => {
                let user = new User(body);
                cb(user);
            });
    }

    getRepos(username: string, cb: (repoArray: Repo[]) => any) {
        request.get(`https://api.github.com/users/${username}/repos`, OPTIONS,
            (error: any, response: any, body: any) => {                
                let repoArray = body.map((repo: any) => new Repo(repo));                
                cb(repoArray);
            });
    }
}
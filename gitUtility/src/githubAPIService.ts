import * as request from 'request';
import { User } from './model/User';

export class GitHubAPIService {
    getUserInfo(username: string) {
        let options: any = { //github api expects this header
            headers: {
                'User-Agent': 'request'
            },
            json: true
        };

        request.get(`https://api.github.com/users/${username}`, options,
            (error: any, response: any, body: any) => {
                let user = new User(body);
                console.log(user);
            });
    }

    getRepos() {

    }
}
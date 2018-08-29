import { GitHubAPIService } from "./githubAPIService";
import * as _ from 'lodash';
import { User } from "./model/User";
import { Repo } from "./model/Repo";

let service = new GitHubAPIService();

service.getUserInfo('higorcoliveira', (user: User) => { //callback hell, better use promises
    service.getRepos('higorcoliveira', (repos: Repo[]) => {
        let sortedRepos = _.sortBy(repos, [(repo: Repo) => repo.size * -1]);
        user.repos = sortedRepos;
        console.log(user);
    });
});
# github-ranking
An endpoint that returns the GitHub top-rated repositories.

The endpoint has 3 input parameters:
- Date: the date of the ranking. Ex: 2019-02-22
- Language: the programming language that you will filter by
- Limit: The max amount of values your endpoint will return
The URL to get this data is the following:
`https://raw.githubusercontent.com/EvanLi/Github-Ranking/master/Data/github-ranking-[date].csv`
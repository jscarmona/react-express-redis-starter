import express from 'express';
import responseTime from 'response-time';
import axios from 'axios';
import redis from 'redis';

const app = express();
const client = redis.createClient();

client.on('error', (err) => console.log(err));

app.set('port', process.env.PORT || 5000);
app.use(responseTime());

const getUserRepositories = (user) =>
  axios.get(`https://api.github.com/users/${user}/repos?per_page=100`);

const computeTotalStars = (repositories) =>
  repositories.data.reduce((prev, curr) => prev + curr.stargazers_count, 0);

app.get('/api/:username', (req, res) => {
  const username = req.params.username;

  client.get(username, (err, result) => {
    if (result) {
      res.send({ totalStars: result, source: 'Redis' });
      return;
    }

    getUserRepositories(username)
      .then(computeTotalStars)
      .then((totalStars) => {
        client.setex(username, 60, totalStars);
        res.send({ totalStars, source: 'Github' });
      })
      .catch((response) => {
        if (response.status === 404) {
          res.send('The GitHub username could not be found. Try "coligo-io" as an example!');
        } else {
          res.send(response);
        }
      });
  });
});

app.listen(app.get('port'), () => {
  console.log(`Server listening on port ${app.get('port')}`);
});

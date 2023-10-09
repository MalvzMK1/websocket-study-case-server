import Express from 'express';

const app = Express();

app.listen(8080, () => {
  console.log('🚀Server listening at http://192.168.0.10:8080');
})
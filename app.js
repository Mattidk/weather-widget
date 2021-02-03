import express from 'express';
import path from 'path';
import template from './src/template';
import ssr from './src/server';

const app = express();

app.use('/assets', express.static(path.resolve(__dirname, 'assets')));

app.disable('x-powered-by');

app.listen(process.env.PORT || 3000);

app.get('/', (req, res) => {
  const content = ssr();
  const response = template('Weather Widget', content);
  res.setHeader('Cache-Control', 'assets, max-age=604800');
  res.send(response);
});

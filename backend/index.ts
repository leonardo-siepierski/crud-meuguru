import express from 'express';
import router from './routes';
// import cors from 'cors';

const app = express();
// let corsOptions = {
//   origin: "http://localhost:3002"
// };
// app.use(cors(corsOptions));
// app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/users', router);

app.listen(3000, () => {
  console.log('Running');
});
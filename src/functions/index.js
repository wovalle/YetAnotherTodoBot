import * as functions from 'firebase-functions';
import admin from 'firebase-admin';
import initializeRoutes from './routes';

admin.initializeApp(functions.config().firebase);

const db = admin.database();

const message = 'world!';

// eslint-disable-next-line import/prefer-default-export
export const routes = initializeRoutes({ db, message });


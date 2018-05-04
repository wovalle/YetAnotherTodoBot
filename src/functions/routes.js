import * as functions from 'firebase-functions';

export default deps => ({
  helloWorld: functions.https.onRequest(async (req, res) => {
    res.status(200).send(`Hello ${deps.message}`);
  }),
});

import { https } from 'firebase-functions';

const message = () => 'ello';

// eslint-disable-next-line import/prefer-default-export
export const helloWorld = https.onRequest(async (req, res) => {
  const world = await message();
  res.status(200).send(`Hello ${world}`);
});

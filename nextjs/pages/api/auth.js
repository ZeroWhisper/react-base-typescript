// import { NextApiRequest, NextApiResponse } from 'next';
import { GoogleSpreadsheet } from 'google-spreadsheet';
import config from '../../credentials/google-app.json';

export default async function (req, res) {
  const file_key = '1EnJhEYtOe5oE2qGRmM_to5Z6AGskojM81qW6DKbyNxg';
  const doc = new GoogleSpreadsheet(file_key);

  await doc.useServiceAccountAuth({
    client_email: config.client_email,
    private_key: config.private_key,
  });

  await doc.loadInfo(); // loads document properties and worksheets
  console.log(doc.title);

  const tab = await doc.sheetsByIndex[1];
  const rows = await tab.getRows();
  // console.log(rows);

  res.send({
    data: {
      file_name: doc.title,
      rows: rows.map(({ teste, teste1, teste2 }) => ({
        teste,
        teste1,
        teste2,
      })),
    },
  });
}

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { parse } from 'node-html-parser';

import axios from 'axios';
import Document from 'next/document';
// prettier-ignore
export default async function handler(req, res) {
  await axios
    .get('https://t.me/ITZY_jyp_gallery/27003')
    .then((response) => response.data)
    .then((html) => {
      const doc = parse(html);
      const element = doc.getElementsByTagName('tgme_widget_message_photo_wrap')[0];
      console.log(element);
    })
    .catch((error) => console.error(error));
}

import clientPromise from "../../lib/mongodb";

export const config = {
    api: {
      responseLimit: false,
    },
  }

export default async (req, res) => {
   try {
       const client = await clientPromise;
       const db = client.db("hons_load_test");

       const films = await db
           .collection("filmsNext")
           .find({})
           .toArray();

       res.json(films);
   } catch (e) {
       console.error(e);
   }
};
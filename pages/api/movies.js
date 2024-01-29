import clientPromise from "../../lib/mongodb";

export default async (req, res) => {
   try {
       const client = await clientPromise;
       const db = client.db("hons_load_test");

       const movies = await db
           .collection("film")
           .find({})
           .toArray();

       res.json(movies);
   } catch (e) {
       console.error(e);
   }
};
import clientPromise from "../../lib/mongodb";
import { ObjectId } from "mongodb";

export default async (req, res) => {
  if (req.method === 'POST') {
    try {
      const { quantity } = req.body;

      if (!quantity || typeof quantity !== 'number') {
        return res.status(400).json({ error: 'Invalid quantity provided' });
      }

      // Connect to the database
      const client = await clientPromise;
      const db = client.db("hons_load_test");

      // Insert specified record quantity using a for loop
      for (let i = 0; i < quantity; i++) {
        // Generate a new ObjectId for each document
        const newObjectId = new ObjectId();

        // Data to be inserted with a new _id
        const dataToInsert = {
          _id: newObjectId,
          title: 'Jaws',
          synopsis: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          year: 1975,
          genre: 'Horror'
        };

        // Perform the insertion
        await db.collection('film').insertOne(dataToInsert);
      }

      // Respond with a success message
      res.status(200).json({ message: 'Records inserted successfully' });
    } catch (error) {
      console.error('Error inserting records:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
};

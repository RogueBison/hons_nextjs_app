import clientPromise from "../../lib/mongodb";

export default async (req, res) => {
  if (req.method === 'DELETE') {
    try {
      // Connect to the database
      const client = await clientPromise;
      const db = client.db("hons_load_test");

      // Delete all records in the collection
      await db.collection('filmsNext').deleteMany({});

      // Respond with a success message
      res.status(200).json({ message: 'All records deleted successfully' });
    } catch (error) {
      console.error('Error deleting records:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}

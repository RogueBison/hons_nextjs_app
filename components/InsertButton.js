import { useState } from 'react';

const InsertButton = () => {
  const [loading, setLoading] = useState(false);

  const handleInsertData = async () => {
    try {
      setLoading(true);
      const response = await fetch('../api/InsertRecord', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(),
      });

      if (!response.ok) {
        throw new Error('Failed to insert records');
      }

      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error('Error inserting data:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <button
      style={{
        border: `solid 2px green`,
        borderRadius: '5px',
        padding: '5px',
        color: 'green', 
        margin: '0 0 10px 30px',
      }}
      onClick={() => handleInsertData()}
      disabled={loading}
    >
      {loading ? 'Inserting...' : `Insert Records`}
    </button>
    </div>
  );
};

export default InsertButton;

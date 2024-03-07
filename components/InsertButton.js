import { useState } from 'react';

const InsertButton = () => {
  const [loading, setLoading] = useState(false);

  const handleInsertData = async (quantity) => {
    try {
      setLoading(true);
      const response = await fetch('../api/InsertRecords', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ quantity }),
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

  const renderButton = (quantity, label, borderColor) => (
    <button
      style={{
        border: `solid 2px ${borderColor}`,
        borderRadius: '5px',
        padding: '5px',
        color: '#333', 
        margin: '0 0 10px 30px',
      }}
      onClick={() => handleInsertData(quantity)}
      disabled={loading}
    >
      {loading ? 'Inserting...' : `Insert ${label} Records`}
    </button>
  );

  return (
    <div>
      <h3>Test 1</h3>
      {renderButton(1, '1', '#333')}

      <h3>Test 2</h3>
      {renderButton(10, '10', '#25b340')}
      {renderButton(100, '100', '#1e9635')}
      {renderButton(500, '500', '#1b852f')}
      {renderButton(1000, '1000', '#175723')}
      {renderButton(2500, '2500', '#175723')}
      {renderButton(5000, '5000', '#175723')}
      {renderButton(10000, '10,000', '#08210d')}
    </div>
  );
};

export default InsertButton;

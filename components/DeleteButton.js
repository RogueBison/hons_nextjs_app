import { useState } from 'react';

const DeleteButton = () => {
  const [loading, setLoading] = useState(false);

  const handleDeleteData = async () => {
    try {
      setLoading(true);
      const response = await fetch('../api/DeleteRecords', { method: 'DELETE' });
      const data = await response.json();
      console.log(data); 
    } catch (error) {
      console.error('Error deleting data:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <button 
      style={{
        border:'solid 2px red',
        borderRadius:'5px',
        padding:'5px',
        color:'#333',
        marginLeft:'30px'
      }} 
      onClick={handleDeleteData} 
      disabled={loading}>
        {loading ? 'Deleting...' : 'Delete All Records'}
    </button>
  );
};

export default DeleteButton;

import { useState } from 'react';
import { Card, Text, Button } from '@fluentui/react-northstar';
import ReactModal from 'react-modal';

//
interface DailyCardProps {
  date: Date;
}

export function DailyCard({ date }: DailyCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCardClick = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Card
        onClick={handleCardClick}
        styles={{
          root: {
            width: '200px',
            margin: '10px',
            padding: '10px',
            cursor: 'pointer',
            borderRadius: '8px',
            background: 'linear-gradient(to bottom, #3e8ed0, #2177b4)',
            color: 'white',
          },
        }}
      >
        <Text content={date.toDateString()} weight="bold" />
      </Card>
      <ReactModal
        isOpen={isModalOpen}
        onRequestClose={handleModalClose}
        style={{
          overlay: {
            background: 'rgba(0, 0, 0, 0.5)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          },
          content: {
            width: '400px',
            padding: '20px',
            borderRadius: '8px',
            background: 'white',
            boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
          },
        }}
      >
        <Card>
          <Text content={`Add notes for ${date.toDateString()}`} weight="bold" />
          <div style={{ margin: '20px 0' }}>
            <textarea
              style={{
                width: '100%',
                padding: '8px',
                border: '1px solid #ccc',
                borderRadius: '4px',
              }}
              rows={5}
              placeholder="Enter your colorful notes here..."
            />
          </div>
          <Button onClick={handleModalClose} content="Close" primary />
        </Card>
      </ReactModal>
    </>
  );
}

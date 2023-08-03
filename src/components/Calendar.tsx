import { DailyCard } from './DailyCard';
import { startOfMonth, addDays } from 'date-fns';
import { Stack, IStackTokens, IStackItemStyles } from '@fluentui/react';

const stackStyles: IStackItemStyles = {
  root: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
};

const itemStyles: IStackItemStyles = {
  root: {
    width: 'calc(33.33% - 8px)', // Adjust the width as needed
    marginBottom: '16px',
  },
};

const Calendar: React.FC = () => {
  const currentDate = new Date();
  const currentMonthStart = startOfMonth(currentDate);
  const days = [];

  for (let i = 0; i < 31; i++) {
    const day = addDays(currentMonthStart, i);
    days.push(day);
  }

  const stackTokens: IStackTokens = {
    childrenGap: 8,
  };

  return (
    <Stack tokens={stackTokens} styles={stackStyles}>
      {days.map((day) => (
        <Stack.Item key={day.toISOString()} styles={itemStyles}>
          <DailyCard date={day} />
        </Stack.Item>
      ))}
    </Stack>
  );
};

export default Calendar;

import { Profile } from './Profile';
import { FriendList } from './FriendList';
import { Statistics } from './Statistics';
import { TransactionHistory } from './TransactionHistory';

import user from '../user.json';
import friends from '../friends.json';
import data from '../data.json';
import transactions from '../transactions.json';

export const App = () => {
  return (
    <>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />;
    </>
  );
};

import { Profile } from 'components/Profile/Profile';
import { Container } from 'components/App.styled';
import user from 'components/Profile/user.json';
import data from 'components/Statistics/data.json';
import { StatisticCard } from './Statistics/Statistics';
import { FriendList } from 'components/FriendList/FriendList';
import friends from 'components/FriendList/friends.json';
import { TransactionDesk } from 'components/TransactionHistory/TransactionHistory';
import transactions from 'components/TransactionHistory/transactions.json';

export const App = () => {
  return (
    <Container>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <StatisticCard title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionDesk items={transactions} />
    </Container>
  );
};

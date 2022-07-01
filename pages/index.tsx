import { List } from 'antd';
import Link from 'next/link';
import styles from '../styles/Home.module.css';
import { client } from '../src/apollo';
import { User } from '../types/generated';
import { getAllUsers } from '../src/gql-query/query.graphql';

interface Props {
  data: User[];
}

const Home = (props: Props) => {
  const { data } = props;

  return (
    <div className={styles.container}>
      <h1 id="header">Users</h1>
      <List
        dataSource={data}
        renderItem={(item) => (
          <List.Item>
            <Link href={`/${item.username}`}>{item.username}</Link>
          </List.Item>
        )}
      />
    </div>
  );
};

export default Home;

// export const getStaticProps = async () => {
//   const { data } = await client.query({
//     query: getAllUsers,
//   });

//   return {
//     props: {
//       data: data?.getAllUsers,
//     },
//     revalidate: 10,
//   };
// };

export const getServerSideProps = async () => {
  const { data } = await client.query({
    query: getAllUsers,
  });
  return {
    props: {
      data: data?.users,
    },
  };
};

import { gql } from '@apollo/client';
import { List } from 'antd';
import styles from '../styles/Home.module.css';
import { client } from '../src/apollo';

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
}

interface Props {
  data: User[];
}

const Home = (props: Props) => {
  const { data } = props;
  return (
    <div className={styles.container}>
      <h1>Users</h1>
      <List
        dataSource={data}
        renderItem={(item) => <List.Item>{item.username}</List.Item>}
      />
    </div>
  );
};

export default Home;

const getAllUsers = gql`
  {
    getAllUsers {
      id
      name
      username
      email
    }
  }
`;

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
      data: data?.getAllUsers,
    },
  };
};

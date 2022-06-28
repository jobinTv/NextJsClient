import { gql } from '@apollo/client';
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
      <ul>
        {data?.map((item: User) => {
          return <li key={item.id}>{item.name}</li>;
        })}
      </ul>
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

export async function getServerSideProps() {
  const { data } = await client.query({
    query: getAllUsers,
  });

  return {
    props: {
      data: data?.getAllUsers,
    },
  };
}

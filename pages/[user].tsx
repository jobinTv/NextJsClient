import { client } from '../src/apollo';
import { getAllUsers } from '../src/gql-query/query.graphql';
import { User } from '../types/generated';

interface Params {
  params: {
    user: User;
  };
}
const UserView = (props: { username: string }) => {
  return <h3> Hello {props.username} </h3>;
};

export const getStaticProps = ({ params }: Params) => {
  return {
    props: { username: params.user },
  };
};

export default UserView;

export const getStaticPaths = async () => {
  const { data } = await client.query({
    query: getAllUsers,
  });

  const paths = data.users?.map((item: User) => {
    return {
      params: { user: item.username },
    };
  });
  return {
    paths,
    fallback: false,
  };
};

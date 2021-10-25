import { GetServerSideProps } from "next";
import Head from "next/head";

type Props = {
  name?: string;
};

export const getServerSideProps: GetServerSideProps<Props> = async (
  context
) => {
  const name = context.query.name as string ?? null;

  return {
    props: {
      name,
    },
  };
};

const HomePage = ({name = ''}: Props) => {
  return (
    <>
      <Head>
        <title>Appointment Form</title>
      </Head>
      <div>
        Hello World {name}
      </div>
    </>
  );
};

export default HomePage;

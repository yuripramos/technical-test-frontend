import { GetServerSideProps } from 'next';
import { useState } from 'react';
import Head from 'next/head';
import services from '../data/services.json';
import appointments from '../data/form.json';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import BasicSelect from '../components/Select';
import { SelectChangeEvent } from '@mui/material/Select';
import useFieldsToForm from './useFieldsToForm';
import Button from '@mui/material/Button';
import Input from '../components/Input';
import { isEmail } from '../utils';

type Props = {
  name?: string;
};

export const getServerSideProps: GetServerSideProps<Props> = async (
  context
) => {
  const name = (context.query.name as string) ?? null;

  return {
    props: {
      name,
    },
  };
};

const HomePage = ({ name = '' }: Props) => {
  const [serviceSelected, setServiceSelected] = useState<string>('');

  const handleChange = (event: SelectChangeEvent) => {
    setServiceSelected(event.target.value as string);
  };

  const { fields } = useFieldsToForm({ serviceSelected });

  const [inputList, setInputList] = useState({});

  const onChange = (event) => {
    const { name, value } = event.target;
    setInputList((prevState) => ({ ...prevState, [name]: value }));
  };

  const clearForm = () => {
    setInputList({});
    setServiceSelected('');
  };


  return (
    <>
      <Head>
        <title>Appointment Form</title>
      </Head>
      <Container maxWidth="md">
        <Grid container>
          <Box height="100vh" width="100vw" alignItems="center">
            <form>
              <div>Please select one service</div>
              <BasicSelect
                items={services}
                value={serviceSelected}
                handleChange={handleChange}
              />
              {fields?.map((field, index) => (
                <Input
                  index={index}
                  name={field.name}
                  label={field.label}
                  type={field.type}
                  handleInputChange={onChange}
                  validateEmail={isEmail}
                />
              ))}
              <Button
                variant="contained"
                size="large"
                onClick={() => {
                  console.log({ inputList, serviceSelected });
                  //need a fix, it's not clearing the wildcard input values
                  clearForm();
                }}
              >
                Submit Data
              </Button>
            </form>
          </Box>
        </Grid>
      </Container>
    </>
  );
};

export default HomePage;

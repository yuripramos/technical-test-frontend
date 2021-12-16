import appointments from '../data/form.json';

const getFieldsBySelectedService = (service) => {
  return appointments.find(
    (appointment) =>
      appointment.services.includes(service) ||
      appointment.services.includes('*')
  );
};

type serviceSelectedType = {
  serviceSelected: string;
};

const useFieldsToForm = ({ serviceSelected }: serviceSelectedType) => {
  const fields = getFieldsBySelectedService(serviceSelected)?.fields;

  return {
    fields,
  };
};

export default useFieldsToForm;

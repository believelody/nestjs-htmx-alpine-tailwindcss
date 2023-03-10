import { FetchError } from 'src/common/fetch/fetch.interface';

const code500 = 'Error: something went wrong.';

const handleFetchError = <T>(data: FetchError & T): FetchError & T => {
  if (data.message) {
    console.log('Error message : ', data.message);
    throw data.message;
  }
  if (data.name) {
    console.log('Error code : ', data.code);
    throw data.name;
  }
  return data;
};

export default { code500, handleFetchError };

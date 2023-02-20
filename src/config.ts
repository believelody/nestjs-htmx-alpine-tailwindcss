import { config as dotEnvConfig } from 'dotenv';

dotEnvConfig();

export const config = {
  dummyDataURL: process.env.DUMMY_DATA_URL,
  port: process.env.PORT || 8000,
};

const baseApi = process.env.BASE_API;

const URI = {
  SAMPLE: {
    FOO: ({ sample }) =>
      `${baseApi}/path/to/endpoint?sample=${sample}`,
  },
};
export default URI;

const googleMapApiKey = process.env.GOOGLE_MAP_API_KEY;

const MAP_INFO = {
  key: googleMapApiKey,
  api: 'https://maps.googleapis.com/maps/api',
  zoom: 14,
  defaultLocation: {
    lat: 35.6967329,
    lng: 51.2097323,
  },
};

export default MAP_INFO;

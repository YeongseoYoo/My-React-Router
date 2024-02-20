import instance from './base';

export const fetchCampaignList = async () => {
  try {
    const response = await instance.get('/campaign');
    console.log(response.data);
    return response.data
  } catch (err) {
    console.error('Error fetching board list:', err);
    return [];
  }
};

export default fetchCampaignList;
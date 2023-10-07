export const getMapDataset = async (dataset_id) => {
  const dataset_url = `https://api.mapbox.com/datasets/v1/hayaofwar/${dataset_id}/features?access_token=pk.eyJ1IjoiaGF5YW9md2FyIiwiYSI6ImNsY3owYnk5cTA2OG4zcXFvZTV4MDV2NTAifQ.D7XPou710-slNxaYEK1XfQ`;
  const res = await fetch(dataset_url);
  const data = await res.json()

  console.log(data);
  return data
};

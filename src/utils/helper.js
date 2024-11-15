export const fetchData = async (params, url) => {
  const res = await fetch(url + `/${params ? params.id : ""}`);
  const data = res.json();

  return data;
};

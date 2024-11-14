export const RandomUser = async () => {
  try {
    const res = await fetch(`https://randomuser.me/api/?results=15`, { next: { revalidate: 0 } });
    const data = await res.json();
    return data.results;
  } catch (error) {
    console.log(error);
  }
};

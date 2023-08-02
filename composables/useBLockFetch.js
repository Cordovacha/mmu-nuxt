export async function useBLockFetch(blockId) {
  let url = `/.netlify/functions/getBlockNotionAPI?blockid=${blockId}`;

  if (isDevelop) {
    url = "/data-source/EN.json"; // para el menu
  }

  const { data, error } = await useFetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (error.value) throw new Error("something went wrong");

  return data.value;
}

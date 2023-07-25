import getData from "./get-data.js";

(async () => {
  const data = await getData(1);

  data && console.log(data);
})();

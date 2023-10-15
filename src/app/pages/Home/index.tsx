import sheetPublicToJson from "google-sheet-public-to-json";

function Home() {
  const SPREADSHEET_URL =
    "https://docs.google.com/spreadsheets/d/1vd2XOjo_dk069cEOUvGDAEKgnjdqcUMnbA_JaVbWboE/edit#gid=0";

  async function name() {
    const data = await sheetPublicToJson(SPREADSHEET_URL);
    console.log(data);
  }

  return (
    <h1 onClick={name} className="text-red-800">
      hello
    </h1>
  );
}
export default Home;

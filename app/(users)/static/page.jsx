import { db } from "@/config/db";

const StaticPage = async () => {
  const doctors = await db.execute("select * from doctors");
  console.log(doctors);
  return (
    <div>
      Hi I am Static Page in console you can see the data of the Doctors fetched
      from DB.
    </div>
  );
};

export default StaticPage;

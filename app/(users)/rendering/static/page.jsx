import { db } from "@/config/db";
import { cache } from "react";
// export const revalidate = 10; //! ISR Incremental Static Generation

const StaticPage = async () => {
  const doctors = await getAllDoctors();
  return (
    <div className="w-full mx-12 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 mt-12 gap-3">
      <DoctorsData doctors={doctors} />
    </div>
  );
};

const DoctorsData = async ({ doctors }) => {
  const docs = await getAllDoctors();
  return (
    <>
      {doctors.map((doctor) => {
        const { first_name, last_name, email } = doctor;
        return (
          <li key={email}>
            <span>
              {first_name} {last_name}
            </span>
            <p>{email}</p>
          </li>
        );
      })}
    </>
  );
};

const getAllDoctors = cache(async () => {
  const [doctors] = await db.execute("select * from doctors");
  console.log("fetching doctors data");
  return doctors;
});
export default StaticPage;

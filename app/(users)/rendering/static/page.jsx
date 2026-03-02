import { db } from "@/config/db";
import { cache } from "react";

const StaticPage = async () => {
  const doctors = await getAllDoctors();
  // export const revalidate = 10; //! ISR Incremental Static Generation

  return (
    <div className="px-6 mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {doctors.map((doctor) => (
        <DoctorCard key={doctor.email} doctor={doctor} />
      ))}
    </div>
  );
};

const DoctorCard = ({ doctor }) => {
  const {
    first_name,
    last_name,
    specialization,
    email,
    phone,
    gender,
    city,
    state,
    postal_code,
  } = doctor;

  return (
    <div className="rounded-xl bg-white shadow-md hover:shadow-xl transition-shadow border border-gray-100 p-5">
      
      <div className="mb-3">
        <h2 className="text-lg font-semibold text-gray-900">
          {first_name} {last_name}
        </h2>
        <p className="text-sm text-blue-600 font-medium">
          {specialization}
        </p>
      </div>

      <div className="space-y-1 text-sm text-gray-600">
        <p>
          <span className="font-medium text-gray-800">Email:</span> {email}
        </p>
        <p>
          <span className="font-medium text-gray-800">Phone:</span> {phone}
        </p>
      </div>

      <div className="mt-3 flex flex-wrap gap-2 text-xs">
        <span className="px-2 py-1 rounded-full bg-gray-100 text-gray-700">
          {gender}
        </span>
        <span className="px-2 py-1 rounded-full bg-gray-100 text-gray-700">
          {city}, {state}
        </span>
        <span className="px-2 py-1 rounded-full bg-gray-100 text-gray-700">
          {postal_code}
        </span>
      </div>
    </div>
  );
};

const getAllDoctors = cache(async () => {
  const [doctors] = await db.execute("select * from doctors");
  console.log("fetching doctors data");
  return doctors;
});

export default StaticPage;
import { db } from "@/config/db";

const StaticPage = async () => {
  const [doctors] = await db.execute("select * from doctors");
  console.log("Static Page")
  return (
    <div className="w-full mx-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 ">
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
    </div>
  );
};

export default StaticPage;

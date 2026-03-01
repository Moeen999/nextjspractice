import Image from "next/image";
import thapa from "@/public/thapa.jpg";
const people = [
  {
    name: "Mike Johnson",
    role: "Backend Developer",
    skills: "Node.js & Python",
    imgSRC: "/coding.jpeg",
  },
  {
    name: "Sarah Lee",
    role: "Frontend Developer",
    skills: "React & Next.js",
    imgSRC: "/thapa.jpg",
  },
  {
    name: "Mike Johnson",
    role: "Backend Developer",
    skills: "Node.js & Python",
    imgSRC: "/coding.jpeg",
  },
  {
    name: "Sarah Lee",
    role: "Frontend Developer",
    skills: "React & Next.js",
    imgSRC: "/thapa.jpg",
  },
  {
    name: "Mike Johnson",
    role: "Backend Developer",
    skills: "Node.js & Python",
    imgSRC: "/coding.jpeg",
  },
  {
    name: "Sarah Lee",
    role: "Frontend Developer",
    skills: "React & Next.js",
    imgSRC: "/thapa.jpg",
  },
  {
    name: "Mike Johnson",
    role: "Backend Developer",
    skills: "Node.js & Python",
    imgSRC: "/coding.jpeg",
  },
  {
    name: "Sarah Lee",
    role: "Frontend Developer",
    skills: "React & Next.js",
    imgSRC: "/thapa.jpg",
  },
  {
    name: "David Kim",
    role: "Full Stack Developer",
    skills: "MERN Stack",
    imgSRC: "/coding.jpeg",
  },
  {
    name: "Emma Watson",
    role: "UI/UX Designer",
    skills: "Figma & Tailwind",
    imgSRC: "/thapa.jpg",
  },
  {
    name: "John Smith",
    role: "Mobile Developer",
    skills: "React Native",
    imgSRC: "/coding.jpeg",
  },
  {
    name: "Sophia Brown",
    role: "DevOps Engineer",
    skills: "AWS & Docker",
    imgSRC: "/thapa.jpg",
  },
  ,
  {
    name: "John Smith",
    role: "Mobile Developer",
    skills: "React Native",
    imgSRC: "/coding.jpeg",
  },
  {
    name: "Sophia Brown",
    role: "DevOps Engineer",
    skills: "AWS & Docker",
    imgSRC: "/thapa.jpg",
  },,
  {
    name: "John Smith",
    role: "Mobile Developer",
    skills: "React Native",
    imgSRC: "/coding.jpeg",
  },
  {
    name: "Sophia Brown",
    role: "DevOps Engineer",
    skills: "AWS & Docker",
    imgSRC: "/thapa.jpg",
  },,
  {
    name: "John Smith",
    role: "Mobile Developer",
    skills: "React Native",
    imgSRC: "/coding.jpeg",
  },
  {
    name: "Sophia Brown",
    role: "DevOps Engineer",
    skills: "AWS & Docker",
    imgSRC: "/thapa.jpg",
  },,
  {
    name: "John Smith",
    role: "Mobile Developer",
    skills: "React Native",
    imgSRC: "/coding.jpeg",
  },
  {
    name: "Sophia Brown",
    role: "DevOps Engineer",
    skills: "AWS & Docker",
    imgSRC: "/thapa.jpg",
  },,
  {
    name: "John Smith",
    role: "Mobile Developer",
    skills: "React Native",
    imgSRC: "/coding.jpeg",
  },
  {
    name: "Sophia Brown",
    role: "DevOps Engineer",
    skills: "AWS & Docker",
    imgSRC: "/thapa.jpg",
  },,
  {
    name: "John Smith",
    role: "Mobile Developer",
    skills: "React Native",
    imgSRC: "/coding.jpeg",
  },
  {
    name: "Sophia Brown",
    role: "DevOps Engineer",
    skills: "AWS & Docker",
    imgSRC: "/thapa.jpg",
  },,
  {
    name: "John Smith",
    role: "Mobile Developer",
    skills: "React Native",
    imgSRC: "/coding.jpeg",
  },
  {
    name: "Sophia Brown",
    role: "DevOps Engineer",
    skills: "AWS & Docker",
    imgSRC: "/thapa.jpg",
  },,
  {
    name: "John Smith",
    role: "Mobile Developer",
    skills: "React Native",
    imgSRC: "/coding.jpeg",
  },
  {
    name: "Sophia Brown",
    role: "DevOps Engineer",
    skills: "AWS & Docker",
    imgSRC: "/thapa.jpg",
  },,
  {
    name: "John Smith",
    role: "Mobile Developer",
    skills: "React Native",
    imgSRC: "/coding.jpeg",
  },
  {
    name: "Sophia Brown",
    role: "DevOps Engineer",
    skills: "AWS & Docker",
    imgSRC: "/thapa.jpg",
  },,
  {
    name: "John Smith",
    role: "Mobile Developer",
    skills: "React Native",
    imgSRC: "/coding.jpeg",
  },
  {
    name: "Sophia Brown",
    role: "DevOps Engineer",
    skills: "AWS & Docker",
    imgSRC: "/thapa.jpg",
  },
  ,
  {
    name: "Sophia Brown",
    role: "DevOps Engineer",
    skills: "AWS & Docker",
    imgSRC: "/thapa.jpg",
  },
  
];

export const metadata = {
  title: "Service Page ",
  description: "this is my service page",
  authors: [
    { name: "vinod thapa" },
    { name: "thapa technical", url: "thapatechical.com" },
  ],
  keywords: ["nextjs", "reactjs", "fullstack"],
  icons: {
    icon: "/next.svg"
  }
};

const Service = () => {
  return (
    <div className="w-full font-worksans grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-6">
      {people.map((person, index) => (
        <div
          key={index}
          className="bg-white rounded-lg shadow-md hover:shadow-lg hover:-translate-y-2 transition-all duration-300 p-4"
        >
          <div className="w-40 h-40 relative bg-purple-200 rounded-full mx-auto mb-4 overflow-hidden">
            <Image
              src={person.imgSRC}
              alt={person.name}
              // width={500}
              // height={500}
              fill
              className="object-cover"
            // placeholder="blur"
            blurDataURL=""
            />
          </div>

          <div>
            <h3 className="text-lg font-semibold text-center text-gray-800">
              {person.name}
            </h3>
            <p className="text-sm text-gray-600 text-center mt-2">
              {person.role}
            </p>
            <p className="text-xs text-gray-500 text-center mt-1">
              {person.skills}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Service;

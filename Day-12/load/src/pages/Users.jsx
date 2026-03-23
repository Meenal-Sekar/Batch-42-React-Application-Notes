import { useLoaderData } from "react-router-dom";

// 🔹 Loader Function
export const userLoader = async ({ params }) => {
  const { id } = params;

  // Fake data (no API for beginners)
  const users = [
    { id: "1", name: "Meena", role: "Trainer" },
    { id: "2", name: "Arun", role: "Developer" },
    { id: "3", name: "Divya", role: "Designer" },
    { id: "4", name: "ramya", role: "Tailor" },
    { id: "5", name: "siva", role: "Designer" },
    { id: "6", name: "vignesh", role: "Tester" },
    
  ];

  const user = users.find((u) => u.id === id);

  return user || { name: "User Not Found" };
};

// 🔹 Component
function Users() {
  const user = useLoaderData();

  return (
    <div className="p-5">
      <h1 className="text-xl text-blue-800 font-bold">User Details</h1>

      <div className="mt-4 border p-3">
        <p><strong>Name:</strong> {user.name}</p>
        <p><strong>Role:</strong> {user.role || "N/A"}</p>
      </div>
    </div>
  );
}

export default Users;
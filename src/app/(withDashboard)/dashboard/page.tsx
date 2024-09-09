import { authOptions } from "@/utils/authOptions";
import { getServerSession } from "next-auth";

const DashboardPage = async () => {
  const section = await getServerSession(authOptions);
  // console.log(section);
  return (
    <div>
      {section?.user && (
        <h1 className="text-4xl text-center mt-10">
          Welcome {section?.user?.name}
        </h1>
      )}
    </div>
  );
};

export default DashboardPage;

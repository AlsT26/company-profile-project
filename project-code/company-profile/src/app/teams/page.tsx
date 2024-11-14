import { RandomUser } from "@/lib/randUser";
import { Users } from "@/types";
import Image from "next/image";

export default async function TeamsPage() {
  const data: Users[] = await RandomUser();
  console.log(data);
  return (
    <div>
      {data.map((user, idx) => {
        return (
          <div key={idx}>
            <Image src={user.picture.thumbnail} alt={`${user.name.first}'s picture`} width={50} height={50} />
          </div>
        );
      })}
    </div>
  );
}

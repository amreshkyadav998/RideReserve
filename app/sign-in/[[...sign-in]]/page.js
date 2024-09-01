import { SignIn } from "@clerk/nextjs";
import Image from "next/image";

export default function Page() {
  return (
    <>
      <div>
        <Image
          src="/banner1.jpg"
          width={900}
          height={1000}
          className="object-contain h-full w-full"
        />
        <div className="absolute top-3 right-0 pr-5">
          <SignIn />
        </div>
      </div>
    </>
  );
}

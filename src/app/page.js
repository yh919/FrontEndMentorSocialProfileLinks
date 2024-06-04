import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-neutral-900">
      <div className="flex flex-col gap-8 items-center justify-center bg-neutral-800 h-full w-[350px] sm:w-[425px] py-6 rounded-lg">
        <div className="flex flex-col items-center gap-4">
          <Image
            src="/avatar-jessica.jpeg"
            alt="Avatar of Jessica"
            className="rounded-full"
            width={100}
            height={100}
            layout="fixed"
          />
          <div className="flex flex-col items-center">
            <h1 className="font-semibold text-2xl text-neutral-50">
              Jessica Randali
            </h1>
            <p className="text-[#c5f82a] text-sm">London , United Kingdom</p>
          </div>
          <p className="text-gray-400 text-sm">
            &quot;Frontend Developer and avid reader&quot;
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <Button title={"Github"} />
          <Button title={"Frontend Mentor"} />
          <Button title={"LinkedIn"} />
          <Button title={"Twitter"} />
          <Button title={"Instagram"} />
        </div>
      </div>
      <div className="attribution">
        Challenge by
        <span className="mx-1">
          <a
            href="https://www.frontendmentor.io/challenges/social-links-profile-UG32l9m6dQ/"
            target="_blank"
          >
            Frontend Mentor
          </a>
        </span>
        . Coded by{" "}
        <a href="https://www.frontendmentor.io/profile/yh919">
          Youssef Hussein
        </a>
        .
      </div>
    </main>
  );
}

const Button = ({ title }) => {
  return (
    <button className="bg-neutral-700 text-white px-20 sm:px-24  py-3 rounded-lg hover:bg-[#c5f82a] hover:text-neutral-900 transition duration-500 ease-in-out">
      <a href="#" rel="noopener noreferrer" className="font-medium">
        {title}
      </a>
    </button>
  );
};

import { useEffect, useState } from "react";
import Head from "next/head";

const Page = () => {
  const [color, setColor] = useState<string>();

  useEffect(() => {
    setColor(sample(["#1ccbef", "#ffcd22", "#82cf75", "#f77669"]));
  }, []);

  const iconColor = color || "#1ccbef";
  const favicon: string = `/assets/icons/${iconColor.substring(1)}/favicon.ico`;
  const icon: string = `/assets/icons/${iconColor.substring(1)}/512.png`;

  return (
    <>
      <Head>
        <title>howden.dev</title>
        <meta name="description" content="howden's personal website" />
        <link rel="icon" href={favicon} />
        <link rel="icon" type="image/png" sizes="512x512" href={icon} />
        <link rel="preload" as="image" href="assets/me.png"></link>
        <link
          href="https://fonts.googleapis.com/css2?family=Aladin&family=Cabin&family=Ubuntu+Mono:wght@700&display=swap"
          rel="stylesheet"
        />
      </Head>

      <main>
        <Header color={color} />
        <Content />
      </main>
    </>
  );
};

type HeaderProps = {
  color?: string;
};

const Header = ({ color }: HeaderProps) => {
  return (
    <header style={{ color }}>
      <div className="picture">
        <div>
          <img src="assets/me.png" alt="Picture of the author" />
        </div>
      </div>
      <div className="greeting">
        <p>Hey,</p>
        <p>I&apos;m Charlie.</p>
      </div>
    </header>
  );
};

const Content = () => {
  // <p>
  //   I&apos;m a software engineer who likes solving interesting problems,
  //   playing with new technologies, and working on open source projects.
  // </p>
  return (
    <article>
      <p>That&apos;s me above, hi!</p>
      <p>
        You can reach me by email at{" "}
        <a href="mailto:hello@howden.dev">hello@howden.dev</a> or find me on
        GitHub, <a href="https://github.com/howden">@howden</a>.
      </p>
    </article>
  );
};

/**
 * Samples randomly from the given array.
 * @param array the array
 * @returns the selected element
 */
const sample = <T,>(array: T[]): T => {
  return array[Math.floor(Math.random() * array.length)];
};

export default Page;

import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const runtime = "experimental-edge";

export default function Home() {
  return (
    <section>
      <div className={`header ${inter.className}`}>
        <Image src="azion.svg" alt="Azion Logo" width={100} height={24} />
      </div>
      <div className="content space-y-6">
        <Image src="next.svg" alt="Next Logo" width={300} height={200} />
        <h1>Next.js Edge App</h1>
        <div className="mb-32 grid text-center lg:mb-0 lg:grid-cols-4 lg:text-left">
          <a
            href="/ssr"
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            rel="noopener noreferrer"
          >
            <h2 className={`mb-3 text-2xl font-semibold`}>
              SSR{" "}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
              Edge SSR page example.
            </p>
          </a>

          <a
            href="/api/hello"
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            rel="noopener noreferrer"
          >
            <h2 className={`mb-3 text-2xl font-semibold`}>
              Edge API Route{" "}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
              Edge API Route example.
            </p>
          </a>

          <a
            href="/about"
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            rel="noopener noreferrer"
          >
            <h2 className={`mb-3 text-2xl font-semibold`}>
              Middleware{" "}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
              Middleware with redirect example.
            </p>
          </a>

          <a
            href="/xptz/x"
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            rel="noopener noreferrer"
          >
            <h2 className={`mb-3 text-2xl font-semibold`}>
              Dynamic Route{" "}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
              Dynamic route /[prodSlug]/x.
            </p>
          </a>

          <a
            href="/abc"
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            rel="noopener noreferrer"
          >
            <h2 className={`mb-3 text-2xl font-semibold`}>
              Dynamic Route{" "}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
              Dynamic route /[...catSlug].
            </p>
          </a>
        </div>
      </div>
      <div className="footer">
        <a
          href="https://www.azion.com/en/documentation/"
          rel="noreferrer"
          target="_blank"
        >
          <h1>Docs</h1>
          <p>
            Besides providing structure, it allows interactions to occur with
            the surface of the element, thus enabling it to have states.
          </p>
        </a>
        <a href="https://medium.com/aziontech" target="_blank" rel="noreferrer">
          <div>
            <h1>Medium</h1>
            <p>
              Dive deep into our platform&apos;s use cases on Medium and join a
              community where developers connect, collaborate, and innovate.
            </p>
          </div>
        </a>
        <a
          href="https://twitter.com/aziontech"
          target="_blank"
          rel="noreferrer"
        >
          <div>
            <h1>X (formerly Twitter)</h1>
            <p>
              Explore our features in-depth and find out what&apos;s new on our
              platform.
            </p>
          </div>
        </a>
        <a
          href="https://discord.gg/Yp9N7RMVZy"
          target="_blank"
          rel="noreferrer"
        >
          <div>
            <h1>Discord</h1>
            <p>
              A space for developers to connect, get involved and collaborate.
            </p>
          </div>
        </a>
      </div>
    </section>
  );
}

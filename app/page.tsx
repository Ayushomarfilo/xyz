import Head from 'next/head';
import Link from 'next/link';
import styles from './page.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Next.js Home Page</title>
        <meta name="description" content="Home page for my Next.js app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to My Next.js Home Page
        </h1>

        <p className={styles.description}>
          Get started by file based components 
        </p>

        <div className={styles.grid}>
          <Link href="https://nextjs.org/docs" className={styles.card}>
            <h3>Docs &rarr;</h3>
            <p>Find in-depth information about Next.js features and API.</p>
          </Link>

          <Link href="https://nextjs.org/learn" className={styles.card}>
            <h3>Learn &rarr;</h3>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </Link>

          <Link
            href="https://github.com/vercel/next.js/tree/canary/examples"
            className={styles.card}
          >
            <h3>Examples &rarr;</h3>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </Link>

          <Link href="https://vercel.com/new" className={styles.card}>
            <h3>Deploy &rarr;</h3>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </Link>
        </div>
      </main>
      <Link href={'/about'}>
      <h1 className={styles.size}>About Infromation </h1>
      </Link>

      <footer className={styles.footer}>
        <p>Learn NextJs</p>
      </footer>
    </div>
  );
}

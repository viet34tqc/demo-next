import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Home.module.css';
export default function Home() {
	return (
		<>
			<Head>
				<title>Ninja | Home</title>
				<meta name="keywords" content="ninjas" />
			</Head>
			<h1 className={ styles.title }>Homepage</h1>
			<p className={ styles.text }>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio nesciunt, repellat reprehenderit dolorum ullam dolore eveniet, qui nemo earum repellendus vel culpa libero error molestias quaerat ratione animi quod voluptatibus?</p>
			<Link href="/ninjas">
				<a className={ styles.btn } href="">See Ninja Listings</a>
			</Link>
		</>
	);
}

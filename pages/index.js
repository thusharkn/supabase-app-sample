// pages/index.js
import Head from 'next/head';
import UserForm from '../components/UserForm';

export default function Home() {
    return (
        <div>
            <Head>
                <title>User Data Form</title>
                <meta name="description" content="Enter user data into Supabase" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                <h1>Welcome to Supabase Data Entry</h1>
                <UserForm />
            </main>
        </div>
    );
}

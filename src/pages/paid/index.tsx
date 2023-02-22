import Layout from 'src/components/Layout'


export default function Home() {
    return (
        <Layout title="Paid">
            <div
                className="mb-4 rounded-lg bg-success-100 py-5 px-6 text-base text-success-700"
                role="alert">
                <h4 className="mb-2 text-2xl font-medium leading-tight">Payment Done!</h4>
                <p className="mb-4">
                    Please Wait While Your Payment is Verified
                </p>
                <hr className="border-success-600 opacity-30" />

            </div>
        </Layout>
    );
}
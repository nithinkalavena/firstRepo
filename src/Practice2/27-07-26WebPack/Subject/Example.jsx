function Header() {
    return <h1>My Website</h1>;
}

function Footer() {
    return <footer>Copyright 2026</footer>;
}

export default function Example() {
    return (
        <div>
            <Header />
            <Footer />
            Webpack is a module bundler.
            Its job is to gather everything your application needs and create browser-ready output.
            It starts from one file (called the entry point) and follows every import
        </div>
    );
}
export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="py-8 bg-black border-t border-white/5 text-center relative z-10">
            <div className="container mx-auto px-6">
                <p className="text-gray-500 text-sm">
                    &copy; {currentYear} Adam Mohammed. All rights reserved. Built with <span className="text-[var(--color-primary)]">Next.js</span> & <span className="text-white">Three.js</span>.
                </p>
            </div>
        </footer>
    );
}

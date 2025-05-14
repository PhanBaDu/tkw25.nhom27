interface HomeLayoutProps {
    children: React.ReactNode;
}

export default function HomeLayout({ children }: Readonly<HomeLayoutProps>) {
    return <div className="min-h-screen">{children}</div>;
}

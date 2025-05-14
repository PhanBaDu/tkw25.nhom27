interface FiftyYearLayoutProps {
    children: React.ReactNode;
}

export default function FiftyYearLayout({ children }: Readonly<FiftyYearLayoutProps>) {
    return (
        <div>
            <header>Header FiftyYearLayout</header>
            {children}
        </div>
    );
}

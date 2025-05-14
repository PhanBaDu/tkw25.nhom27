interface FiftyYearLayoutProps {
    children: React.ReactNode;
}

export default function BacHoChiMinhLayout({ children }: Readonly<FiftyYearLayoutProps>) {
    return (
        <div>
            <header>Header BacHoChiMinhLayoutPage</header>
            {children}
        </div>
    );
}

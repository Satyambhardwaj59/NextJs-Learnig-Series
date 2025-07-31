export default function ProductLayout({ children} : {children: React.ReactNode}) {
    return (
        <>
            {children}
            <h1 style={{ backgroundColor: 'orange', padding: '1rem', textAlign: 'center' }}>Product Layout</h1>
        </>
    )
}
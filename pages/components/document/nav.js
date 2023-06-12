import Link from "next/link"

export function NavBar() {
    return(
        <div>
            <Link href={'/'} className="btn navlink">Home</Link>
            <Link href={'/pages/searchbycomposer'} className="btn navlink">Search by Composer</Link>
            <Link href={'/pages/level'} className="btn navlink">Search by Level</Link>
        </div>
    )
}
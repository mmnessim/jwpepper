import Link from "next/link"

export function NavBar() {
    return(
        <div>
            <Link href={'/pages/searchbycomposer'}>Search by Composer</Link>
            <Link href={'/pages/level'}>Search by Level</Link>
        </div>
    )
}
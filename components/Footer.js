import Link from "next/link";

export default function Footer() {
    return (
        <footer>
          <div className="container">
            <ul>
              <li><Link href="mailto:vividavila98@gmail.com">Email</Link></li>
              <li><Link href="/">Resume</Link></li>
              <li><Link href="https://github.com/vividavila98">Github</Link></li>
              <li><Link href="https://www.linkedin.com/in/viviana-davila/">LinkedIn</Link></li>
            </ul>
          </div>
        </footer>
    )
}

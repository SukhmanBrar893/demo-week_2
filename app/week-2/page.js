import Link from "next/link";

export default function Page(){
   return (
       <div>
           <h1>Welcome to week 2</h1>
           <p><Link href="/week-3">go to week 2</Link></p>
       </div>
   );
}
import Link from "next/link";

export default function Page(){
   return (
       <div>
           <h1>Welcome to week 3</h1>
           <p><Link href="/week-2">go to week 2</Link></p>
       </div>
   );
}
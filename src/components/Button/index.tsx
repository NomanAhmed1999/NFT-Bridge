


export default function Button(prop: any){


return(
    <button className={prop.isEnabled ? 'p-3 mt-5 text-xl bg-blue-500 hover:bg-blue-700 text-white font-medium rounded-full' :  'p-3 mt-5 text-xl border-2 border-blue-600 text-blue-600/100  rounded-full'}>
    {prop.text}</button>
)

}


export default function TextField({ label, id, name, register=()=>{}, ...props }) {
    return(
        <div className="flex flex-col gap-1 m-2">
            <label htmlFor={id} className="text-slate-100">{label}</label>
            <input {...register(name)} type="text" id={id} {...props} className="bg-stone-800 rounded px-3 py-1 outline-none focus:ring-1 focus:ring-yellow-600" />
        </div>
    )
}
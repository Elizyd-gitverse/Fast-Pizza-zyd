import { Link } from "react-router-dom"

export default function Button({children, type, disabled, onClick, to}) {
    const base = ' rounded-full text-stone-900 cursor-pointer focus:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2 duration-500'

    const style = {
        primary: base + ' px-4 py-2 text-l font-bold bg-yellow-400 hover:bg-yellow-300',
        small: base + ' px-3 py-1.5 text-xs font-[500] bg-yellow-400 hover:bg-yellow-300 font-[Rubik]',
        soldout: base + ' px-3 py-1.5 text-xs font-[500] bg-stone-400 hover:bg-stone-400 disabled:cursor-not-allowed',
        remove: base +  ' px-3 py-1.5 text-xs font-[500] bg-red-400 hover:bg-red-300 font-[Rubik]',
        clear:'rounded-full px-4 py-2 text-l font-bold bg-stone-200 border border-stone-300 hover:bg-red-300 hover:text-stone-900 text-stone-500 duration-500'
    }

    if(to) return <Link className={style[type]} to={to}>{children}</Link>

    return <button className={style[type]} disabled={disabled} onClick={onClick}>{children}</button>
}
import { useState } from "react"



export const Buttons = (numberIni: number) => {
    const [contador, setContador] = useState<number>(0)
    const [num1, setNum1] = useState<number>(0)
    const [num2, setNum2] = useState<number>(0)

    return(
        <div>

            <button>{numberIni}</button>
            <button onClick={()=> setContador(contador+1)}>{numberIni}</button>

        </div>
    )
}
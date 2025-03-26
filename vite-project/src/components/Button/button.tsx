import "./button.css"

/*
    Utilizamos interface Porps para declarar los parametros
    que recibira el componente Button y especificamos
    los tipos de datos que recibira
*/

interface Props {
    label: string,
    parentMethod: () => void
}

/*
    Cuando exportamos el componente Button especificamos
    como renderizara los parametros en el componente,
    ya sea un string o un metodo
*/
export const Button = ({ label, parentMethod}: Props) => {
    return(
        <button className="custom-button" onClick={parentMethod}>
            {label}
        </button>
    )
}
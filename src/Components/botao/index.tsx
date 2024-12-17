import style from './botao.module.scss';

interface ButtonProps {
    type?: "button" | "submit" | "reset" | undefined,
    onClick?: () => void,
    textoBotao: String
}

function Botao({onClick, type, textoBotao}: ButtonProps) {
    return(
        <button className={style.botao} onClick={onClick}>
            { textoBotao }
        </button>
    )
}
export default Botao
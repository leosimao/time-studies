import style from '../lista.module.scss'

interface ItemProps {
    tarefa: String,
    tempo: String
}

export default function item({ tarefa, tempo }: ItemProps) {
    return (
        <li className={style.item}>
            <h3>{ tarefa }</h3>
            <span>{ tempo }</span>
        </li>
    )
}
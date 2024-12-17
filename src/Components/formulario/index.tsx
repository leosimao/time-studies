import React from "react";
import Botao from "../botao";
import style from './formulario.module.scss';

function Formulario() {
    return(
        <form className={style.novaTarefa}>
            <div className={style.inputContainer}>
                <label htmlFor=""></label>
                <input 
                    type="text"
                    name="tarefa"
                    id="tarefa"
                    placeholder="O que deseja estudar?"
                    required
                />
            </div>
            <div className={style.inputContainer}>
                <label htmlFor="tempo"></label>
                <input 
                    type="time"
                    step="1"
                    id="tempo"
                    name="tempo"
                    min="00:00:00"
                    max="01:30:00"
                    required
                />
            </div>
            <Botao
                textoBotao="Adicionar"
            />
        </form>
    )
}

export default Formulario
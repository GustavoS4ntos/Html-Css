import styles from './PropsTest.module.css'

function PropsTest ({nome,ano,marca,foto}){


    return(

<div className={styles.menu}>

<img src={foto} alt={nome}/>
<p>{nome}</p>
<p>{ano}</p>
<p>{marca}</p>


</div>

    )


}

export default PropsTest
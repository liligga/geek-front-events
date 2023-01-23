import styles from './clicker.module.css'


function Clicker() {
    const buttonHandler = (event) => {
        console.log(event.target);
    } 

    const clickHandler = function(event) {
        event.preventDefault();
        console.log(event.target);
    }

    return (
        <>
            <button onClick={buttonHandler}>Нажми на меня</button><br/>
            <a href="https://google.com" onClick={clickHandler}>Гугл</a>
            <div className={`${styles.box} ${styles.border}`} onClick={(e) => alert(e.target)}>
                BOX
            </div>
        </>
    )
}

export default Clicker
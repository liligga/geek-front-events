function Form() {

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(e.target);
    }

    const handleName = (e) => {
        console.log(e.target.value);
    }

    return (
        <form onSubmit={handleSubmit}>
            <span>Заполните форму</span>
            <div>
                <input type="text" onChange={handleName} name="name"/>
                <button>Отправить</button>
                <input type="submit" value="Да!" />
            </div>
        </form>
    )
}

export default Form
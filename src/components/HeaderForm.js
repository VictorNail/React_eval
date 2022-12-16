
const HeaderForm = (props) =>{   

    return(
        <form onSubmit={(e) => props.formCallback(e)}>
            <input name="search" type="text"/>
            <button type="submit">Rechercher</button>
        </form>
    )
}

export default HeaderForm;
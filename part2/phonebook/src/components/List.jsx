import Person from './Person'

const List = ({items, handleDelete }) => {
 return (
    <>
        <h2>Numbers</h2>
        <ul className='persons-list'>
            {items  && items.map((item) => <Person key={item.id} person={item} handleDelete={handleDelete} /> )}
        </ul>
    </>
 )
}

export default List
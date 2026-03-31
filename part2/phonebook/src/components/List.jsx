import Person from './Person'

const List = ({items, handleDelete }) => {
 return (
    <>
        <h2>Numbers</h2>
        <div>
            {items  && items.map((item) => <Person key={item.id} person={item} handleDelete={handleDelete} /> )}
        </div>
    </>
 )
}

export default List
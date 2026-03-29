import Person from './Person'

const List = ({items}) => {
 return (
    <>
        <h2>Numbers</h2>
        <div>
            {items  && items.map((item) => <Person key={item.name} person={item} /> )}
        </div>
    </>
 )
}

export default List
import Person from './Person'

const List = ({items}) => {
 return (
    <div>
        {items  && items.map((item) => <Person key={item.name} person={item} /> )}
    </div>
    
 )
}

export default List
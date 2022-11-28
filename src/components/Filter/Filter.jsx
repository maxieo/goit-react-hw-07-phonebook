import { filterContact } from '../../redux/contactSlice'
import { useDispatch } from 'react-redux'

const Filter = () => {
  const dispatch = useDispatch()
  const onChange = e => dispatch (filterContact(e.currentTarget.value))

  return (
    <label>
      Find contacts by name
      <input type="text" onChange={onChange} />
    </label>
  )
}



export default Filter
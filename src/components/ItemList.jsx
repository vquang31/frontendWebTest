import { useEffect, useState } from 'react'
import { getAll, remove } from '../services/itemService'

function ItemList({ onEdit }) {
  const [items, setItems] = useState([])

  useEffect(() => {
    getAll().then(res => setItems(res.data))
  }, [])

  const handleDelete = (id) => {
    remove(id).then(() => setItems(items.filter(i => i._id !== id)))
  }

  return (
    <div>
      <h2>Danh sách</h2>
      <ul>
        {items.map(item => (
          <li key={item._id}>
            {item.name} - {item.description}
            <button onClick={() => onEdit(item)}>Sửa</button>
            <button onClick={() => handleDelete(item._id)}>Xóa</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ItemList
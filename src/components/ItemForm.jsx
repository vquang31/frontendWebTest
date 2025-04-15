import { useState, useEffect } from 'react'
import { create, update } from '../services/itemService'




function ItemForm({ selected, onSuccess }) {
  const [form, setForm] = useState({ name: '', description: '' })

  useEffect(() => {
    if (selected) setForm(selected)
  }, [selected])

  const handleSubmit = (e) => {
    e.preventDefault()
    const action = selected ? update(selected._id, form) : create(form)
    action.then(() => {
      setForm({ name: '', description: '' })
      onSuccess()
    })
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Tên"
        value={form.name}
        onChange={(e) => setForm({ ...form, name: e.target.value })}
      />
      <input
        placeholder="Mô tả"
        value={form.description}
        onChange={(e) => setForm({ ...form, description: e.target.value })}
      />
      <button>Lưu</button>
    </form>
  )
}

export default ItemForm
import axios from 'axios'
import {useState} from 'react'
import {useForm} from 'react-hook-form'
import './playlist.css'

export function Playlist() {
    const {register, handleSubmit} = useForm()
    const [data, setData] = useState('')

    const onSubmit = async (data: any) => {
        const url = '/add'
        try {
            await axios.post(url, data)
        } catch (error) {
            console.log('Error')
        }
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input {...register('name')} placeholder="name" />
            <input type="number" {...register('duration')} placeholder="duration" />
            <input {...register('url')} placeholder="url" />
            <select {...register('type')}>
                <option value="">source type</option>
                <option value="image">image</option>
                <option value="video">video</option>
            </select>
            <input type="submit" />
        </form>
    )
}

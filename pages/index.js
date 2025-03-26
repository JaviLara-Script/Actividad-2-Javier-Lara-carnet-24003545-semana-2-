import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchHabits } from '../store/habitSlice';
import HabitList from '../components/HabitList';

export default function Home() {
    const dispatch = useDispatch();
    const { habits, status } = useSelector((state) => state.habits);

    useEffect(() => { dispatch(fetchHabits()); }, [dispatch]);

    return (
        <div>
            <h1>Gestión de Hábitos</h1>
            {status === 'loading' ? <p>Cargando...</p> : <HabitList habits={habits} />}
        </div>
    );
}

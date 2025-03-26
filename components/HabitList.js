export default function HabitList({ habits }) {
    return (
        <ul>
            {habits.map((habit) => (
                <li key={habit._id}>{habit.name} - Racha: {habit.streak}</li>
            ))}
        </ul>
    );
}

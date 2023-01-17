interface HabitProps {
    commpleted: number
}

export function Habit(props: HabitProps) {
    return (
        <p>{props.commpleted}</p>
    )
}
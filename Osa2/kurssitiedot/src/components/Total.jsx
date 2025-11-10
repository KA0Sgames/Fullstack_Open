const Total = ({ parts }) => {
    return (
        <>
            total of {parts.reduce((sum, part) => sum + part.exercises, 0)} exercises
        </>
    )
}

export default Total
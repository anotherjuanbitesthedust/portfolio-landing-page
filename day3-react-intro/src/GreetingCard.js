function GreetingCard(props) {
    return(
        <div className="greeting-card">
        <h2>Hello, {props.name}! 👋 </h2>
        <p>Welcome to React. You're learning <strong>{props.skill}</strong>!</p>
        <p>Experience level: {props.experience}</p>
        <p className="date">Today is {props.date}</p>
        </div>
    );
}

export default GreetingCard;
